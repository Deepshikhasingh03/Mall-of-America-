import React from "react";
import { cn } from "../lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hover = true,
  glow = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "glass-card p-6 md:p-8",
        hover && "transition-all duration-500 hover:border-gold/30 hover:bg-white/[0.06] cursor-pointer",
        hover && "hover:translate-y-[-4px] hover:shadow-lg hover:shadow-gold/5",
        glow && "gold-glow",
        className
      )}
    >
      {children}
    </div>
  );
};
