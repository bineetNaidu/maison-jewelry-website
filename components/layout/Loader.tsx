// components/layout/Loader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 600); // Hold at 100% for a dramatic beat
          return 100;
        }
        // Randomly increment to fake asset loading progress
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="flex flex-col items-center gap-6 overflow-hidden">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-sm uppercase tracking-[0.3em] text-white/50"
            >
              Maison Jewelry
            </motion.span>
            
            <div className="flex items-baseline font-serif text-7xl font-light tracking-tighter md:text-9xl">
              {Math.min(progress, 100)}
              <span className="font-mono text-2xl text-white/30 ml-2">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}