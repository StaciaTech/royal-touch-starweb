import { useState } from "react";

const galleryItems = [
  { id: 1, category: "Hair", label: "Precision Fade" },
  { id: 2, category: "Beard", label: "Beard Styling" },
  { id: 3, category: "Interior", label: "Studio Ambience" },
  { id: 4, category: "Facial", label: "Luxury Facial" },
  { id: 5, category: "Hair", label: "Creative Color" },
  { id: 6, category: "Tools", label: "Premium Tools" },
  { id: 7, category: "Team", label: "Expert Team" },
  { id: 8, category: "Interior", label: "Classic Setup" },
];

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Hair", "Beard", "Interior", "Facial"];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-card border-y border-border/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
            Our Work
          </span>
          <h2 className="editorial-heading mb-6">
            The <span className="italic">Gallery</span>
          </h2>
          <div className="divider-accent mx-auto mb-8" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-sans transition-all duration-300 rounded-sm ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-gradient-card rounded-sm overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <span className="block text-4xl text-primary/20 font-serif mb-2">
                    {item.id}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-foreground font-serif text-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
