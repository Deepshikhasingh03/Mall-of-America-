import React from "react";
import { motion } from "framer-motion";
import { luxuryData } from "../data/siteData";
import { SectionHeading } from "../components/SectionHeading";
import { GlassCard } from "../components/GlassCard";
import { AnimatedSection } from "../components/AnimatedSection";

export const LuxurySection: React.FC = () => {
  return (
    <section
      id="luxury"
      className="relative min-h-screen py-24 md:py-32 section-padding bg-dark overflow-hidden"
    >
      {/* Luxury accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <SectionHeading
            headline={luxuryData.headline}
            subheadline={luxuryData.subheadline}
            description={luxuryData.description}
          />
        </AnimatedSection>

        {/* Brand Grid */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
            {luxuryData.brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-6 text-center group cursor-pointer hover:border-gold/30 transition-all duration-500"
              >
                <h3 className="font-display text-xl md:text-2xl text-light group-hover:text-gold transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="font-body text-light-muted text-xs mt-2 tracking-wider uppercase">
                  {brand.category}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {luxuryData.features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={0.15 * index}>
              <GlassCard glow className="h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-gradient" />
                <h3 className="font-display text-2xl md:text-3xl text-gold mb-4 mt-2">
                  {feature.title}
                </h3>
                <p className="font-body text-light-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
