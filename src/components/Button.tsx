import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-gold text-dark hover:bg-gold-light active:bg-gold-dark shadow-lg shadow-gold/20 hover:shadow-gold/40",
  secondary:
    "bg-dark-card text-light border border-dark-border hover:border-gold/40 hover:text-gold",
  outline:
    "bg-transparent text-gold border border-gold/40 hover:bg-gold/10 hover:border-gold",
  ghost:
    "bg-transparent text-light-muted hover:text-gold hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        "font-body font-semibold rounded-lg transition-all duration-300 ease-out",
        "transform hover:scale-[1.02] active:scale-[0.98]",
        "focus:outline-none focus:ring-2 focus:ring-gold/50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
