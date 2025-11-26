import { Button } from "@/components/ui/button";
import { Check, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.png";

const trustBadges = [
  "Trusted by 1500+ customers every month",
  "Zero-compromise hygiene & quality",
  "Walk-in anytime — no appointment needed",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Royal Touch Premium Barbershop Interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow text-center pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Brand Name */}
          <h1 className="editorial-heading mb-2 opacity-0 animate-fade-up">
            <span className="text-gradient-primary italic">Royal Touch</span>
          </h1>
          
          {/* Tagline */}
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground font-normal tracking-tight mb-6 opacity-0 animate-fade-up stagger-1">
            Premium Men's Grooming in Porur
          </p>

          {/* Divider */}
          <div className="divider-accent mx-auto mb-8 opacity-0 animate-fade-up stagger-2" />

          {/* Description */}
          <p className="body-large text-foreground/80 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-up stagger-2">
            Where craftsmanship meets style. Experience precision haircuts, luxury grooming, 
            and skin care performed by certified professionals — powered by premium L'Oréal products.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-10 opacity-0 animate-fade-up stagger-3">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-foreground/70">
                <Check className="w-4 h-4 text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#walkin" className="gap-2">
                <MapPin className="w-5 h-5" />
                Walk In
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up stagger-5">
        <span className="text-xs uppercase tracking-widest text-foreground/50">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
};
