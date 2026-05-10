import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { retailData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { StatCard } from "../components/StatCard";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";
import { cn } from "../lib/utils";

export const RetailSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section
      id="retail"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark-navy"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={retailData.headline}
            subheadline={retailData.subheadline}
            description={retailData.description}
          />
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {retailData.stats.map((stat, index) => (
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

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retailData.categories.map((category, index) => (
            <AnimatedSection key={category.name} delay={0.1 * index}>
              <GlassCard
                className={cn(
                  "relative overflow-hidden group",
                  activeCategory === index && "border-gold/40"
                )}
                onClick={() =>
                  setActiveCategory(activeCategory === index ? null : index)
                }
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-2xl group-hover:bg-gold/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-light">
                      {category.name}
                    </h3>
                    <p className="font-body text-gold text-sm">
                      {category.count}+ Stores
                    </p>
                  </div>
                </div>

                {/* Expanded Brands */}
                <AnimatePresence>
                  {activeCategory === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-dark-border pt-4 mt-2">
                        <p className="font-body text-light-muted text-xs mb-3 uppercase tracking-wider">
                          Featured Brands
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.brands.map((brand) => (
                            <span
                              key={brand}
                              className="px-3 py-1 rounded-full bg-dark-card text-light text-xs border border-dark-border"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/[0.02] group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
