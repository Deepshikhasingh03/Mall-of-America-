import React from "react";
import { sponsorshipData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { StatCard } from "../components/StatCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";
import { cn } from "../lib/utils";

export const SponsorshipSection: React.FC = () => {
  return (
    <section
      id="sponsorship"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={sponsorshipData.headline}
            subheadline={sponsorshipData.subheadline}
            description={sponsorshipData.description}
          />
        </AnimatedSection>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {sponsorshipData.tiers.map((tier, index) => (
            <AnimatedSection key={tier.name} delay={0.15 * index} direction="scale">
              <div
                className={cn(
                  "glass-card p-8 h-full relative overflow-hidden group flex flex-col",
                  "transition-all duration-500",
                  tier.highlight
                    ? "border-gold/40 gold-glow"
                    : "hover:border-gold/20"
                )}
              >
                {tier.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold-gradient" />
                )}

                <div className="h-8 mb-4">
                  {tier.highlight && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-body font-semibold">
                      MOST POPULAR
                    </div>
                  )}
                </div>

                <h3 className="font-display text-3xl md:text-4xl text-light mb-2">
                  {tier.name}
                </h3>
                <div className="font-display text-2xl text-gold mb-6">
                  {tier.price}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-body text-light-muted text-sm"
                    >
                      <span className="text-gold mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlight ? "primary" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3}>
          <div className="glass-card p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {sponsorshipData.stats.map((stat, index) => (
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
