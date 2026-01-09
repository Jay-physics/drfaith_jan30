import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/insurance", label: "Insurance" },
  { to: "/about", label: "About Us" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact Us" },
] as const;

const PotentillaIcon = () => (
  <svg
    width="24"
    height="20"
    viewBox="0 0 24 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo - Mobile First */}
        <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
          <PotentillaIcon />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-primary group-hover:text-primary/80 transition-colors">
              Discover
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground -mt-1">
              your best self
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden lg:flex items-center space-x-2">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors font-medium px-4 py-2 hover:text-[hsl(var(--nav-hover))] ${isActive(to) ? "text-[hsl(var(--nav-hover))]" : "text-[hsl(var(--nav-primary))]"
                }`}
              aria-current={isActive(to) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Actions + Hamburger Menu */}
        <div className="flex items-center space-x-2">
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              New Patients
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-center space-x-2">
                    <PotentillaIcon />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-primary">
                        Discover
                      </span>
                      <span className="text-xs text-muted-foreground -mt-1">
                        your best self
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <div className="space-y-1">
                    {NAV_LINKS.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        className={`flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors ${isActive(to)
                            ? "text-[hsl(var(--nav-hover))]"
                            : "text-[hsl(var(--nav-primary))] hover:bg-accent hover:text-[hsl(var(--nav-hover))]"
                          }`}
                        aria-current={isActive(to) ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Mobile Action Buttons */}
                <div className="space-y-3 pt-6 border-t">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    New Patients
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
