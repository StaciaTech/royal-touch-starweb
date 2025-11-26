import { Button } from "@/components/ui/button";
import { MapPin, Clock, Navigation } from "lucide-react";

export const WalkInSection = () => {
  return (
    <section id="walkin" className="section-padding bg-gradient-section relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(354_98%_39%/0.08)_0%,_transparent_70%)]" />
      
      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
            No Appointment Needed
          </span>
          <h2 className="editorial-heading mb-6">
            Walk In <span className="italic">Anytime</span>
          </h2>
          <div className="divider-accent mx-auto mb-8" />
          <p className="body-large text-muted-foreground mb-12">
            No appointment. No waiting list drama.<br />
            Just walk in — we'll take care of the rest.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Address Card */}
            <div className="card-service flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Our Location</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                326/1, Ramakrishna Nagar,<br />
                Main Road, Porur,<br />
                Chennai – 600116
              </p>
            </div>

            {/* Hours Card */}
            <div className="card-service flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Opening Hours</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                7:00 AM – 9:00 PM<br />
                7 Days a Week<br />
                365 Days Open
              </p>
            </div>
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://maps.google.com/?q=326/1+Ramakrishna+Nagar+Main+Road+Porur+Chennai+600116"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
