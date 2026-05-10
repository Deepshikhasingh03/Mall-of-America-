import React from "react";
import { eventsData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { StatCard } from "../components/StatCard";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";

export const EventsSection: React.FC = () => {
  return (
    <section
      id="events"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark-navy"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={eventsData.headline}
            subheadline={eventsData.subheadline}
            description={eventsData.description}
          />
        </AnimatedSection>

        {/* Stats Bar */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {eventsData.stats.map((stat, index) => (
              <GlassCard key={stat.label} className="text-center" glow={index === 0}>
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  index={index}
                />
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Event Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.eventTypes.map((event, index) => (
            <AnimatedSection key={event.name} delay={0.1 * index}>
              <GlassCard className="h-full group">
                <div className="text-3xl mb-4">{event.icon}</div>
                <h3 className="font-display text-2xl text-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {event.name}
                </h3>
                <p className="font-body text-light-muted text-sm leading-relaxed">
                  {event.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
