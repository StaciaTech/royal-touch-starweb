import { Users, Award, ShieldCheck } from "lucide-react";
import AboutImage from "../assets/Aboutus2.webp";

const stats = [
  { icon: Users, value: "1500+", label: "Customers Monthly" },
  { icon: Award, value: "100%", label: "Certified Barbers" },
  { icon: ShieldCheck, value: "L'Oréal", label: "Premium Products" },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-wood/5 to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
              About Royal Touch
            </span>
            <h2 className="editorial-heading mb-6">
              Where Grooming <br />
              <span className="italic text-gradient-primary">Becomes Art</span>
            </h2>
            <div className="divider-accent mb-8" />
            <p className="body-large text-muted-foreground mb-6">
              At Royal Touch, grooming is a craft — not a routine. We believe
              every man deserves to look and feel his absolute best.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-8">
              Our team of certified, trained barbers combines traditional
              techniques with modern styling expertise. We exclusively use
              premium L'Oréal and salon-grade products to ensure exceptional
              results every time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-card rounded-sm border border-border/50 overflow-hidden">
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">
                    Excellence in Every Detail
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    From the moment you walk in to the final touch, every detail
                    is crafted to perfection.
                  </p>
                </div>
              </div> */}
              <img
                src={AboutImage}
                alt="About Us"
                className="w-full h-full object-cover object-left"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-primary/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
