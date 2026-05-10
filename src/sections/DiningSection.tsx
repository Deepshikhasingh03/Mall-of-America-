import React from "react";
import { diningData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { StatCard } from "../components/StatCard";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";

export const DiningSection: React.FC = () => {
  return (
    <section
      id="dining"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark-navy"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={diningData.headline}
            subheadline={diningData.subheadline}
            description={diningData.description}
          />
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {diningData.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* Restaurant Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningData.restaurants.map((restaurant, index) => (
            <AnimatedSection key={restaurant.name} delay={0.1 * index}>
              <GlassCard className="h-full group relative overflow-hidden">
                {/* Type Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
                  <span className="font-body text-gold text-xs tracking-wider">
                    {restaurant.type}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {restaurant.name}
                </h3>
                <p className="font-body text-light-muted text-sm leading-relaxed">
                  {restaurant.description}
                </p>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
