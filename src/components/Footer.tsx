import { Link } from "react-router-dom";
import { CONTACT_INFO } from "@/lib/config";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { Phone, Mail, MapPin } from "lucide-react";

const PotentillaIcon = () => (
  <svg
    width="32"
    height="26"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-footer-accent"
  >
    {/* Potentilla flower with 5 petals in fluorescent pink */}
    <circle cx="12" cy="10" r="2" fill="hsl(320, 100%, 75%)" opacity="0.9" />
    <ellipse cx="12" cy="6" rx="2.5" ry="3" fill="hsl(330, 100%, 70%)" opacity="0.8" />
    <ellipse cx="16.5" cy="8.5" rx="2.5" ry="3" fill="hsl(325, 100%, 72%)" opacity="0.8" transform="rotate(72 16.5 8.5)" />
    <ellipse cx="15" cy="13.5" rx="2.5" ry="3" fill="hsl(315, 100%, 68%)" opacity="0.8" transform="rotate(144 15 13.5)" />
    <ellipse cx="9" cy="13.5" rx="2.5" ry="3" fill="hsl(335, 100%, 74%)" opacity="0.8" transform="rotate(216 9 13.5)" />
    <ellipse cx="7.5" cy="8.5" rx="2.5" ry="3" fill="hsl(310, 100%, 70%)" opacity="0.8" transform="rotate(288 7.5 8.5)" />
    {/* Stem in natural green */}
    <path d="M12 12 L12 18" stroke="hsl(120, 60%, 50%)" strokeWidth="2" opacity="0.7" />
    {/* Small leaves in green */}
    <path d="M10 14 Q8 15 10 16" stroke="hsl(130, 50%, 45%)" strokeWidth="1.5" fill="none" opacity="0.6" />
    <path d="M14 14 Q16 15 14 16" stroke="hsl(130, 50%, 45%)" strokeWidth="1.5" fill="none" opacity="0.6" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-foreground))] border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Dr. Faith */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-[hsl(var(--footer-foreground))] mb-4">Dr. Faith Consiglio, MD</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-[hsl(var(--footer-foreground))]/70 break-words">Renaissance School of Medicine</li>
              <li className="text-[hsl(var(--footer-foreground))]/70 break-words">Westchester Medical Center Residency</li>
              <li className="text-[hsl(var(--footer-foreground))]/70 break-words">Mindfulness & Sports Psychiatry Focused</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[hsl(var(--footer-foreground))] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[hsl(var(--footer-foreground))]/80 hover:text-[hsl(var(--footer-accent))] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[hsl(var(--footer-foreground))]/80 hover:text-[hsl(var(--footer-accent))] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/insurance"
                  className="text-[hsl(var(--footer-foreground))]/80 hover:text-[hsl(var(--footer-accent))] transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-[hsl(var(--footer-foreground))]/80 hover:text-[hsl(var(--footer-accent))] transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[hsl(var(--footer-foreground))]/80 hover:text-[hsl(var(--footer-accent))] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <PotentillaIcon />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[hsl(var(--footer-foreground))]">
                  Discover
                </span>
                <span className="text-sm text-[hsl(var(--footer-foreground))]/70 -mt-1">
                  your best self
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[hsl(var(--footer-accent))]" />
                <span className="text-[hsl(var(--footer-foreground))]/90">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[hsl(var(--footer-accent))]" />
                <ObfuscatedEmail
                  email={CONTACT_INFO.email}
                  className="text-[hsl(var(--footer-foreground))]/90 hover:text-[hsl(var(--footer-accent))]"
                />
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[hsl(var(--footer-accent))]" />
                <span className="text-[hsl(var(--footer-foreground))]/90">{CONTACT_INFO.address.line1}, {CONTACT_INFO.address.line2}, {CONTACT_INFO.address.cityStateZip}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[hsl(var(--footer-foreground))]/70 text-sm">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
