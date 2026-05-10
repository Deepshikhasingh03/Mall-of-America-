import React from "react";
import { whyMoaData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { StatCard } from "../components/StatCard";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";

export const WhyMoaSection: React.FC = () => {
  return (
    <section
      id="why-moa"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={whyMoaData.headline}
            subheadline={whyMoaData.subheadline}
            description={whyMoaData.description}
          />
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {whyMoaData.stats.map((stat, index) => (
              <GlassCard key={stat.label} className="text-center">
                <StatCard
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                  description={stat.description}
                  index={index}
                />
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {whyMoaData.highlights.map((item, index) => (
            <AnimatedSection
              key={item.title}
              delay={0.1 * index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <GlassCard className="flex gap-6 items-start h-full">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl text-light mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-light-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
