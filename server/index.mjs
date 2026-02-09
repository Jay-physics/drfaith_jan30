import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";
import { z } from "zod";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number.parseInt(process.env.PORT ?? "3001", 10);

// Bulletproof security headers
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable CSP for now if it conflicts with scripts/styles
    crossOriginEmbedderPolicy: false,
  })
);

// Rate limiting: 10 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: "Too many requests, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to the contact route specifically
app.use("/api/contact", limiter);

// Strict CORS setup
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // If allowedOrigins is defined, check against it
      if (allowedOrigins?.length) {
        if (allowedOrigins.indexOf(origin) !== -1) {
          return callback(null, true);
        } else {
          try {
            // Also allow localhost/127.0.0.1 if not explicitly in allowedOrigins list but passing locally
            const url = new URL(origin);
            if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
              return callback(null, true);
            }
          } catch (e) {
            // ignore
          }
          return callback(new Error("Not allowed by CORS"));
        }
      }

      // Default fallback: allow all
      return callback(null, true);
    },
  }),
);

app.use(express.json());

// Validation Schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z.string().email("Invalid email address").trim(),
  phone: z.string().min(5, "Phone number is too short").trim(),
  service: z.string().min(1, "Service selection is required").trim(),
  message: z.string().optional().default(""),
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT ?? "465", 10),
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE !== "false" : true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const isTransportConfigured = Boolean(process.env.SMTP_USER && process.env.SMTP_PASS);

if (isTransportConfigured) {
  transporter.verify().catch((error) => {
    console.error("Email transport configuration issue:", error);
  });
} else {
  console.warn("SMTP credentials are not set; contact form emails are disabled.");
}

const escapeHtml = (text) => {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

app.post("/api/contact", async (req, res) => {
  try {
    const { formData, captchaToken } = req.body ?? {};

    if (!captchaToken || typeof captchaToken !== "string") {
      return res.status(400).json({ error: "Missing captcha token." });
    }

    // Validate inputs with Zod
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map((e) => e.message).join(", ");
      return res.status(400).json({ error: `Validation error: ${errorMessages}` });
    }

    const validData = validationResult.data;

    // Server-side Checks
    if (!process.env.RECAPTCHA_SECRET_KEY) {
      console.error("RECAPTCHA_SECRET_KEY is missing");
      return res.status(500).json({ error: "Server misconfiguration." });
    }

    if (!isTransportConfigured) {
      console.error("SMTP credentials missing");
      return res.status(500).json({ error: "Service temporarily unavailable." });
    }

    // Verify Recaptcha
    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET_KEY);
    params.append("response", captchaToken);

    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const verification = await verifyResponse.json();

    if (!verification.success || (typeof verification.score === "number" && verification.score < 0.5)) {
      return res.status(400).json({ error: "Captcha verification failed. Please try again." });
    }

    // Send Email
    const recipient = process.env.CONTACT_RECIPIENT;
    if (!recipient) {
      console.error("CONTACT_RECIPIENT env var is not set.");
      return res.status(500).json({ error: "Server configuration error." });
    }
    const mailSubject = `New message from ${validData.firstName} ${validData.lastName}`;
    const messageLines = [
      `Name: ${validData.firstName} ${validData.lastName}`,
      `Email: ${validData.email}`,
      `Phone: ${validData.phone}`,
      `Service of Interest: ${validData.service}`,
      "",
      "Message:",
      validData.message || "No additional message provided.",
    ];

    await transporter.sendMail({
      from: `"${validData.firstName} ${validData.lastName}" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: validData.email,
      subject: mailSubject,
      text: messageLines.join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(validData.firstName)} ${escapeHtml(validData.lastName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(validData.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(validData.phone)}</p>
        <p><strong>Service of Interest:</strong> ${escapeHtml(validData.service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(validData.message || "").replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.json({ success: true });

  } catch (error) {
    console.error("Failed to send contact email:", error);
    // Don't leak error details to client
    return res.status(500).json({ error: "An internal error occurred. Please try again later." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Handle API 404s specifically so they don't return HTML
app.all("/api/*", (req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

// Serve Manifest/Static Files
const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

// SPA Fallback: Serve index.html for any unknown route
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  if (!process.env.ALLOWED_ORIGINS) {
    console.warn("WARNING: ALLOWED_ORIGINS not set. CORS is permissive.");
  }
});
