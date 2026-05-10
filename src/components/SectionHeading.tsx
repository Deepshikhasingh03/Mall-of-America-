import React from "react";
import { cn } from "../lib/utils";

interface SectionHeadingProps {
  headline: string;
  subheadline?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  headline,
  subheadline,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 lg:mb-20",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {subheadline && (
        <p className="font-body text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
          {subheadline}
        </p>
      )}
      <h2 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-light leading-[0.9] mb-6">
        {headline}
      </h2>
      {description && (
        <p
          className={cn(
            "font-body text-light-muted text-base md:text-lg leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "w-20 h-[2px] bg-gold-gradient mt-6",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
};
