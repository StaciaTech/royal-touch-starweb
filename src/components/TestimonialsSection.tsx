import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aravind R V",
    rating: 5,
    text: "Best place in the locality at moderate price.",
  },
  {
    name: "Dhamayanth Raj.",
    rating: 5,
    text: "Good ambience and customer friendly staffs.",
  },
  {
    name: "Lalith.",
    rating: 5,
    text: "Regular for the past five years.Best part is the hygiene maintained and friendly staff.Might need long waiting time during weekends as like other saloons.Highly recommended!",
  },
  {
    name: "Reegan R.",
    rating: 5,
    text: "Customer friendly and very much affordable service. Baskar is so talented and he knows what hairstyle suits us best. Go for it if you want a better salon experience.",
  },
  {
    name: "Arun Kumar.",
    rating: 5,
    text: "The owner is friendly and he himself manages this place and they are doing a very great job as well.. Very affordable and the wait time is less when compared to other shops and they know what they are doing so it was one of the best places in this locality and the ambiance was good as well..They will accept card and UPI payments as well.",
  },
  {
    name: "Maruthakumar Thirugnanam.",
    rating: 5,
    text: "Their facials and hair spa are insanely relaxing. This is my go-to spot for monthly self-care.",
  },
  {
    name: "Balaji Babu.",
    rating: 5,
    text: "Best barber, I've been a regular here for almost 12 years now. Baskaran the manager takes care of the shop really well.",
  },
  {
    name: "Mani estcost.",
    rating: 5,
    text: "Neat. Clean. The place and people. Use and throw items like masks, hand gloves and towels. The price is very reasonable. Worth having services here. Request the public to avoid demanding air-conditioning.",
  },
  {
    name: "Issac Sam Paul.",
    rating: 5,
    text: "I have been here since it opened, a nice place. Good customer response. Haircut is not as costly as other premium barbers. But the place looks very premium.",
  },
  {
    name: "Deepak Raj.",
    rating: 5,
    text: "Very nice and will cut hair according to your wish slowly and nicely.. overall good service:heart❤️.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="section-padding bg-card border-y border-border/50"
    >
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
