import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AboveImage from "../assets/Aboveorbelowmapimage.jpg";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactLinks = [
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:+919876543210",
      text: "+91 98765 43210",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919876543210",
      text: "Chat with us",
    },
    {
      icon: Instagram,
      label: "Instagram",

      href: "https://www.instagram.com/royale_touch_2011?igsh=MXY5NzZncmxuYTh5eQ==",
      text: "@royaltouch",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-section">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-sans font-semibold uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="editorial-heading mb-6">
            Contact <span className="italic">Royal Touch</span>
          </h2>
          <div className="divider-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    326/1, Ramakrishna Nagar,
                    <br />
                    Main Road, Porur,
                    <br />
                    Chennai – 600116
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border/50 rounded-sm hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground">
                      {link.label}
                    </span>
                    <span className="font-sans font-medium text-foreground">
                      {link.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* Map Embed */}
          <div className=" bg-muted rounded-[0.5rem] h-full overflow-hidden border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0!2d80.1!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA4MMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Touch Location"
            />
          </div>

          {/* Contact Form */}
          {/* <div className="card-service">
            <h3 className="font-serif text-2xl font-medium mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-muted-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-sans text-muted-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-sans text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div> */}
        </div>
        {/* <div className="aspect-[16/6] mt-8">
          <img
            src={AboveImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div> */}
      </div>
    </section>
  );
};
