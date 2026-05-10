import React from "react";
import { motion } from "framer-motion";

export const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center"
    >
      <span className="mt-4 font-body text-light-muted text-xs tracking-[0.3em] uppercase">
        Scroll to Explore
      </span>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-2 w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center pt-2"
      >
        <motion.div
          animate={{ opacity: [1, 0], y: [0, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-gold rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};