import {
  Scissors,
  MapPin,
  Phone,
  MessageCircle,
  Heart,
  Instagram,
  Clock,
} from "lucide-react";
import BuiltIcon from "../assets/BuiltIcon.svg";

const services = [
  "Hair Grooming",
  "Beard Grooming",
  "Facials & Skin Care",
  "Hair Spa & Treatments",
  "Colouring",
  "Packages",
];

const quickLinks = [
  { label: "Walk-In", href: "#walkin" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="font-serif text-xl font-medium">
                Royal Touch
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premium Men's Grooming in Porur, Chennai. Where craftsmanship
              meets style.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>7:00 AM – 9:00 PM · 7 Days · 365 Days</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  326/1, Ramakrishna Nagar, Main Road, Porur, Chennai – 600116
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/royale_touch_2011?igsh=MXY5NzZncmxuYTh5eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                  @royaltouch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      
      <div className="pt-6 pb-6 border-t border-border text-center">
        <p className="text-sm text-foreground/60 flex flex-wrap items-center justify-center gap-2 leading-relaxed">

          <span>
            © {new Date().getFullYear()} Royal Touch. Premium Men's Grooming.
          </span>

          {/* Built Icon + Text */}
          <a
            href="http://builtbystacia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition-colors duration-200"
          >
            <img
              src={BuiltIcon}
              alt="Built by Stacia"
              className="w-5 h-5 object-contain"
            />
            <span>Built</span>
          </a>

          <span>by</span>

          {/* Stacia Link */}
          <a
            href="https://www.staciacorp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 hover:underline transition-all duration-200"
          >
            Stacia
          </a>

          <span>with</span>

          {/* Heart Icon */}
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />

          <span>for Professional Services</span>

        </p>
      </div>
    </footer>
  );
};