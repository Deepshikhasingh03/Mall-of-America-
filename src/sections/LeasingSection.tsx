import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { leasingData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/Button";

export const LeasingSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="leasing"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark-navy"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={leasingData.headline}
            subheadline={leasingData.subheadline}
            description={leasingData.description}
          />
        </AnimatedSection>

        {/* Leasing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {leasingData.opportunities.map((opp, index) => (
            <AnimatedSection key={opp.type} delay={0.1 * index}>
              <GlassCard
                className="h-full group relative overflow-hidden"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="text-3xl mb-4">{opp.icon}</div>

                <h3 className="font-display text-2xl text-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {opp.type}
                </h3>

                <p className="font-body text-light-muted text-sm leading-relaxed mb-4">
                  {opp.description}
                </p>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-dark-border pt-4 mt-2">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-body text-light-muted text-xs uppercase tracking-wider">
                            Available Sizes
                          </span>
                          <span className="font-body text-gold text-sm font-semibold">
                            {opp.sizes}
                          </span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Inquire Now
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Size badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                  <span className="font-body text-gold text-xs">{opp.sizes}</span>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Button variant="primary" size="lg">
              View All Available Spaces
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
