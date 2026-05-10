import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationSections, useAppStore } from "../store/useAppStore";
import { cn } from "../lib/utils";

export const Sidebar: React.FC = () => {
  const { activeSection, setActiveSection } = useAppStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (section: typeof navigationSections[0]) => {
    const element = document.getElementById(section.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(section.id);
      window.history.replaceState(null, "", section.path);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="fixed left-6 top-[5%] -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1"
        >
          <div className="glass-card py-5 px-4 flex flex-col items-start gap-1.5">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section)}
                className={cn(
                  "group relative w-full px-4 py-2.5 rounded-lg flex items-center gap-2",
                  "transition-all duration-300",
                  activeSection === section.id
                    ? "bg-gold/20 text-gold"
                    : "text-light-muted hover:text-gold hover:bg-white/5"
                )}
              >
                <span className="font-body text-lg font-medium tracking-wide whitespace-nowrap">
                  {section.label}
                </span>

                {/* Active indicator */}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-[3px] h-6 bg-gold rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
