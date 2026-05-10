import React from "react";
import { cn } from "../lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  color?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showValue = true,
  className,
  color,
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={cn("w-full", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="font-body text-light text-sm">{label}</span>
          )}
          {showValue && (
            <span className="font-body text-gold text-sm font-semibold">
              {value}%
            </span>
          )}
        </div>
      )}
      <div className="w-full h-2 bg-dark-card rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${percentage}%`,
            background: color || "linear-gradient(90deg, #B8960C, #D4AF37, #E8D48B)",
          }}
        />
      </div>
    </div>
  );
};
