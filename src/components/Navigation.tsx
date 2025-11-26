import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Walk In", href: "#walkin" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Careers", href: "#careers" },
  { label: "Gallery", href: "#gallery" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Nav Links - Left */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-sans font-medium text-foreground/80 hover:text-foreground transition-colors link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
          >
            <Scissors className="w-6 h-6 text-primary" />
          </a>

          {/* CTA - Right */}
          <div className="hidden md:block ml-auto ">
            <Button
              className="mr-[1rem]"
              variant="heroOutline"
              size="sm"
              asChild
            >
              <a href="#walkin">WALK IN</a>
            </Button>

            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/98 backdrop-blur-md border-b border-border/50 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-narrow py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-sans font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#walkin">WALK IN</a>
          </Button>
          <Button variant="hero" className="mt-4" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
