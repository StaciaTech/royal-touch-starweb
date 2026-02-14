import { Button } from "@/components/ui/button";
import { GraduationCap, Users, TrendingUp, Heart } from "lucide-react";
import careersImage from "@/assets/Gemini_Generated_Image_3wr3k73wr3k73wr3.png";

const benefits = [
  { icon: GraduationCap, text: "Certification programs" },
  { icon: Users, text: "Hands-on training" },
  { icon: TrendingUp, text: "Growth opportunities" },
  { icon: Heart, text: "Strong professional community" },
];

export const CareersSection = () => {
  return (
    <section id="careers" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
              Join Our Team
            </span>
            <h2 className="editorial-heading mb-6">
              Build Your <span className="italic">Career</span>
            </h2>
            <div className="divider-accent mb-8" />
            <p className="body-large text-muted-foreground mb-8">
              Join one of Chennai's fastest-growing grooming teams. We invest in
              our people because they're the heart of Royal Touch.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-sans text-foreground/80">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Apply Now</a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-card rounded-sm border border-border/50 rounded-[0.5rem] flex items-center justify-center">
              <img
                src={careersImage}
                alt="Royal Touch Careers"
                className="w-full h-full object-cover rounded-[0.5rem] object-center"
              />
              {/* <div className="text-center p-8">
                <div className="font-serif text-6xl md:text-7xl text-primary/20 mb-4">
                  RT
                </div>
                <p className="font-serif text-xl text-foreground/60 italic">
                  Where careers flourish
                </p>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
