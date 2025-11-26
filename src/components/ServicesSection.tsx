import { Scissors, Sparkles, Palette, Wind, Heart, Crown, Droplets, Sun, Layers, Package } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Cut & Styling",
    items: ["Regular Haircut", "Layer Cut", "U/V Cut", "Taper Fade", "Medium & High Fade", "Buzz Cut", "Beard Trim Combo", "Kids Cut"],
    description: "Our stylists follow advanced training and understand growth patterns, texture, and finishing techniques.",
  },
  {
    icon: Crown,
    title: "Beard & Grooming",
    items: ["Beard Shaping", "Beard Trim", "Beard Colouring", "Beard Spa", "Premium Shave", "Luxury Shave"],
    description: "Look sharp. Feel confident.",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    items: ["Neutral Black", "Natural Black", "Fashion Black", "Jet Black", "Blue Black", "Silky Straight", "Creative Coloring", "Streaks", "Block Colour", "Bleach", "Pre-Lightening"],
    description: "Premium L'Oréal Products Only.",
  },
  {
    icon: Wind,
    title: "Hair Treatment & Spa",
    items: ["Repair", "Anti-Dandruff", "Root Mask", "Hair Fall Treatment", "Rebalance Spa", "Hydrating Spa", "Intensive Hair Growth"],
    description: "Root-to-tip rejuvenation.",
  },
  {
    icon: Heart,
    title: "Facials & Skin Care",
    items: ["Cleanup", "Fruit", "Gold", "Charcoal", "Green Tea", "Aroma", "Hydro Mask", "Pearl", "Lotus Gold", "Mushroom Peel-Off", "Lotus Whitening", "Bridal Rose Gold", "Shahnaz Husain 24K Gold", "Skin Lightening"],
    description: "Perfect for weddings, events, self-care.",
  },
  {
    icon: Sparkles,
    title: "Bridegroom Makeover",
    items: ["Kryolan HD Makeup", "Party Makeup", "Outdoor Makeup"],
    description: "Photo-ready perfection.",
  },
  {
    icon: Droplets,
    title: "Head Massage & Oil Therapy",
    items: ["Olive", "Coconut", "Almond", "Herbal", "Nourishment Coating Oil"],
    description: "Warm oils + professional massage.",
  },
  {
    icon: Sun,
    title: "Bleaching",
    items: ["Face", "Face & Neck", "De-Tan + Massage"],
    description: "Gentle brightening treatments.",
  },
  {
    icon: Layers,
    title: "Structure Treatments",
    items: ["Keratin", "Smoothening", "Perming"],
    description: "Safe. Expertly executed.",
  },
  {
    icon: Package,
    title: "Combo Packages",
    items: ["HC + Wash + Shave + Oil Massage", "HC + Shave + Bleach", "HC + Facial", "HC + Spa + Hydro Mask", "Bridegroom: HC + Shave + Spa + Fruit Facial", "Spa + Gold Facial + Back Massage", "HC + Spa + Whitening Facial + HD Makeup"],
    description: "Value packages for every occasion.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-gradient-section">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
            Browse Our Services
          </span>
          <h2 className="editorial-heading mb-6">
            Tailored Grooming
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Designed for the modern gentleman. Every service crafted with precision and care.
          </p>
          <div className="divider-accent mx-auto mt-8" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium mb-4 text-foreground">
                {service.title}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.items.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="text-xs font-sans text-muted-foreground bg-muted/50 px-2 py-1 rounded-sm"
                  >
                    {item}
                  </span>
                ))}
                {service.items.length > 6 && (
                  <span className="text-xs font-sans text-primary px-2 py-1">
                    +{service.items.length - 6} more
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-sans italic">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
