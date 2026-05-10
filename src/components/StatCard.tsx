import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { cn } from "../lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  index?: number;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  index = 0,
  className,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={cn(
        "text-center p-6 rounded-xl",
        "border border-transparent hover:border-gold/20 transition-all duration-500",
        className
      )}
    >
      <div className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-2">
        {prefix}
        {inView ? (
          <CountUp end={value} duration={2.5} decimals={value % 1 !== 0 ? 1 : 0} />
        ) : (
          "0"
        )}
        {suffix}
      </div>
      <div className="font-body text-light text-sm md:text-base font-medium mb-1">
        {label}
      </div>
      {description && (
        <div className="font-body text-light-muted text-xs md:text-sm mt-2 max-w-[200px] mx-auto">
          {description}
        </div>
      )}
    </motion.div>
  );
};
