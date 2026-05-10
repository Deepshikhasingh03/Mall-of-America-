import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { heroData } from "../data/siteData";
import { StatCard } from "../components/StatCard";
import { Button } from "../components/Button";
import { ScrollIndicator } from "../components/ScrollIndicator";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%23080B0D' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src={heroData.videoUrl} type="video/mp4" />
        </video>
        <div className="video-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8"
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="font-body text-gold text-sm tracking-wider">
              AMERICA'S PREMIER DESTINATION
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-light leading-[0.85] mb-6"
          >
            MALL OF
            <br />
            <span className="text-gradient-gold">AMERICA</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-body text-light-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <Button variant="primary" size="lg">
              Explore Opportunities
            </Button>
            <Button variant="outline" size="lg">
              Watch Showreel
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {heroData.stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
                className="text-left"
              />
            ))}
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
};
