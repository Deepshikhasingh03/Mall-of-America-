import React from "react";
import { entertainmentData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { StatCard } from "../components/StatCard";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";

export const EntertainmentSection: React.FC = () => {
  return (
    <section
      id="entertainment"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark"
    >
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={entertainmentData.headline}
            subheadline={entertainmentData.subheadline}
            description={entertainmentData.description}
          />
        </AnimatedSection>

        {/* Attraction Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {entertainmentData.attractions.map((attraction, index) => (
            <AnimatedSection key={attraction.name} delay={0.1 * index}>
              <GlassCard className="h-full group relative overflow-hidden">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-2xl group-hover:bg-gold/20 transition-colors duration-300">
                    {attraction.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-body font-semibold">
                    {attraction.metric}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {attraction.name}
                </h3>
                <p className="font-body text-light-muted text-sm leading-relaxed">
                  {attraction.description}
                </p>

                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/0 group-hover:bg-gold/5 rounded-bl-[40px] transition-all duration-500" />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {entertainmentData.stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  index={index}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
