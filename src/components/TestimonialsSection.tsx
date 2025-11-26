import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    rating: 5,
    text: "Best barbershop in Porur! The attention to detail is incredible. Been coming here for 6 months now.",
  },
  {
    name: "Vikram S.",
    rating: 5,
    text: "Premium experience at reasonable prices. The beard spa is a must-try!",
  },
  {
    name: "Rajesh M.",
    rating: 5,
    text: "Finally found a place that understands modern hairstyles. The taper fade was perfect.",
  },
  {
    name: "Karthik R.",
    rating: 5,
    text: "Got my bridegroom makeover done here. Wife loved it! Professional team.",
  },
  {
    name: "Suresh P.",
    rating: 5,
    text: "Clean, hygienic, and skilled barbers. The head massage is so relaxing.",
  },
  {
    name: "Dinesh K.",
    rating: 5,
    text: "My go-to place for haircuts. Consistent quality every single time.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card border-y border-border/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
            Client Stories
          </span>
          <h2 className="editorial-heading mb-6">
            What Our <span className="italic">Clients</span> Say
          </h2>
          <div className="divider-accent mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-background/50 border border-border/50 rounded-sm p-6 relative group hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 font-sans text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-serif font-medium text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
