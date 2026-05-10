import React from "react";
import { useInView } from "react-intersection-observer";
import { demographicsData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { ProgressBar } from "../components/ProgressBar";

export const DemographicsSection: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="demographics"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark-navy"
    >
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <AnimatedSection>
          <SectionHeading
            headline={demographicsData.headline}
            subheadline={demographicsData.subheadline}
            description={demographicsData.description}
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Age Distribution */}
          <AnimatedSection delay={0.2} direction="left">
            <GlassCard className="h-full">
              <h3 className="font-display text-2xl text-gold mb-8">
                AGE DISTRIBUTION
              </h3>
              <div className="space-y-6">
                {demographicsData.audience.map((group, index) => (
                  <div key={group.label}>
                    <ProgressBar
                      value={inView ? group.percentage : 0}
                      label={group.label}
                      color={group.color}
                    />
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Income Distribution */}
          <AnimatedSection delay={0.3} direction="right">
            <GlassCard className="h-full">
              <h3 className="font-display text-2xl text-gold mb-8">
                HOUSEHOLD INCOME
              </h3>
              <div className="space-y-6">
                {demographicsData.income.map((group, index) => (
                  <div key={group.label}>
                    <ProgressBar
                      value={inView ? group.percentage : 0}
                      label={group.label}
                    />
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {demographicsData.insights.map((insight, index) => (
            <AnimatedSection key={insight.label} delay={0.1 * index} direction="scale">
              <GlassCard className="text-center py-8">
                <div className="font-display text-3xl md:text-4xl text-gold mb-2">
                  {insight.metric}
                </div>
                <div className="font-body text-light-muted text-xs">
                  {insight.label}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
