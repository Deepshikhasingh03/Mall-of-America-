import React from "react";
import { venuesData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";

export const VenuesSection: React.FC = () => {
  return (
    <section
      id="venues"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={venuesData.headline}
            subheadline={venuesData.subheadline}
            description={venuesData.description}
          />
        </AnimatedSection>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {venuesData.venues.map((venue, index) => (
            <AnimatedSection key={venue.name} delay={0.1 * index} direction="scale">
              <GlassCard className="h-full group relative overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-body">
                    {venue.type}
                  </span>
                  <span className="font-body text-light-muted text-xs">
                    {venue.sqft} sq ft
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-light mb-2 group-hover:text-gold transition-colors duration-300">
                  {venue.name}
                </h3>

                <div className="flex items-center gap-2 mb-6">
                  <span className="font-display text-3xl text-gold">
                    {venue.capacity}
                  </span>
                  <span className="font-body text-light-muted text-sm">
                    capacity
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {venue.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-dark text-light-muted text-xs border border-dark-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Button variant="primary" size="lg">
              Book a Venue Tour
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
