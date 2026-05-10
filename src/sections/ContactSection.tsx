import React, { useState } from "react";
import { contactData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    "w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 font-body text-light text-sm placeholder:text-light-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all duration-300";

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark overflow-hidden"
    >
      {/* Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.05)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border border-gold/5 rounded-full pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={contactData.headline}
            subheadline={contactData.subheadline}
            description={contactData.description}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="space-y-6">
              {contactData.contactOptions.map((option, index) => (
                <GlassCard key={option.label} className="group" glow={index === 0}>
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-2xl group-hover:bg-gold/20 transition-colors duration-300 shrink-0">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-light group-hover:text-gold transition-colors duration-300">
                        {option.label}
                      </h3>
                      <p className="font-body text-light-muted text-sm">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}

              {/* Brand Badge */}
              <div className="glass-card p-8 text-center mt-8">
                <div className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
                  MALL OF AMERICA
                </div>
                <p className="font-body text-light-muted text-sm">
                  America's Premier Retail & Entertainment Destination
                </p>
                <div className="w-20 h-[2px] bg-gold-gradient mx-auto mt-4" />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.3} direction="right">
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-display text-3xl text-gold mb-8">
                GET IN TOUCH
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Area of Interest</option>
                  <option value="leasing">Retail Leasing</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="events">Events & Venues</option>
                  <option value="popup">Pop-Up Retail</option>
                  <option value="advertising">Advertising</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={inputClasses + " resize-none"}
                />
                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-20 pt-12 border-t border-dark-border">
            <p className="font-body text-light-muted text-sm">
              © {new Date().getFullYear()} Mall of America. All rights reserved.
            </p>
            <p className="font-body text-light-muted/50 text-xs mt-2">
              60 East Broadway, Bloomington, MN 55425
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
