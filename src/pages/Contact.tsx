import { useRef, useState } from "react";
import { CONTACT_INFO } from "@/lib/config";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const isRecaptchaConfigured = Boolean(recaptchaSiteKey);
  const { toast } = useToast();

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service) {
      toast({
        title: "Select a service",
        description: "Please choose the service you're interested in before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!isRecaptchaConfigured) {
      toast({
        title: "Verification unavailable",
        description: "Human verification is not configured. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    if (!captchaToken) {
      toast({
        title: "Verify you're human",
        description: "Please complete the reCAPTCHA before submitting your message.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          captchaToken,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      toast({
        title: "Message sent successfully",
        description: "Your message has been delivered. We'll get back to you soon!",
      });

      resetForm();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Something went wrong while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're here to help. Reach out to us for appointments, questions, or to learn more about our services.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Telehealth Card */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <div className="p-2 rounded-full bg-primary/10">
                    <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Telehealth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Anywhere in NYS
                </p>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {CONTACT_INFO.address.line1}<br />
                  {CONTACT_INFO.address.line2}<br />
                  {CONTACT_INFO.address.cityStateZip}
                </p>
              </CardContent>
            </Card>

            {/* Contact Details Card */}
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <ObfuscatedEmail
                    email={CONTACT_INFO.email}
                    className="text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{CONTACT_INFO.phone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Insurance Information Card */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl font-medium">
                  <div className="p-2 rounded-full bg-primary/20">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  Insurance Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Dr. Consiglio does not currently accept insurance. Please check if your insurance offers out-of-network benefits for possible reimbursement.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-medium text-center">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="First Name *"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="bg-background/50 border-input/50 focus:border-primary placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Last Name *"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="bg-background/50 border-input/50 focus:border-primary placeholder:text-muted-foreground/70"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-background/50 border-input/50 focus:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="bg-background/50 border-input/50 focus:border-primary placeholder:text-muted-foreground/70"
                    />
                  </div>

                  {/* Services Dropdown */}
                  <div className="space-y-2">
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-background/50 border-input/50 focus:border-primary text-muted-foreground/70">
                        <SelectValue placeholder="Service of Interest *" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Adult Psychiatry">General Adult Psychiatry</SelectItem>
                        <SelectItem value="Women's Health">Women's Health</SelectItem>
                        <SelectItem value="Sports/Performance Psychiatry">Sports/Performance Psychiatry</SelectItem>

                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      placeholder="Message (Optional) - Tell us more about what you're looking for..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="bg-background/50 border-input/50 focus:border-primary resize-none placeholder:text-muted-foreground/70"
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    {isRecaptchaConfigured ? (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaSiteKey}
                        onChange={(token) => setCaptchaToken(token)}
                        onExpired={() => setCaptchaToken(null)}
                      />
                    ) : (
                      <p className="text-sm text-destructive text-center">
                        Human verification is not configured. Please contact the site administrator.
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-200"
                    size="lg"
                    disabled={isSubmitting || !isRecaptchaConfigured}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
