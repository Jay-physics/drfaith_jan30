import nodemailer from "nodemailer";
import { z } from "zod";

// Validation Schema
const contactFormSchema = z.object({
    firstName: z.string().min(1, "First name is required").trim(),
    lastName: z.string().min(1, "Last name is required").trim(),
    email: z.string().email("Invalid email address").trim(),
    phone: z.string().min(5, "Phone number is too short").trim(),
    service: z.string().min(1, "Service selection is required").trim(),
    message: z.string().optional().default(""),
});

const escapeHtml = (text) => {
    if (!text) return "";
    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

export default async function handler(req, res) {
    // CORS Headers
    const allowedOrigins = process.env.ALLOWED_ORIGINS
        ?.split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);

    const origin = req.headers.origin;

    if (allowedOrigins?.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else if (!allowedOrigins || allowedOrigins.length === 0) {
        // Default permissive if no env var set (for testing)
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

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

        // Nodemailer Transport
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

        return res.status(200).json({ success: true });

    } catch (error) {
        console.error("Failed to send contact email:", error);
        return res.status(500).json({ error: "An internal error occurred. Please try again later." });
    }
}
