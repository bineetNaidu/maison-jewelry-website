// components/layout/Loader.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusLogs = [
    "INITIALIZING COGNITIVE INTERFACE...",
    "CALIBRATING ATELIER ARCHITECTURE...",
    "SOURCING DIAMOND REFRACTIONS...",
    "SCULPTING OBSIDIAN CORES...",
    "ENGRAVING METALLICブルー...",
    "SYNCHRONIZING AUDIO MATRICES...",
    "MAISON LUXURY ONLINE // LOCKING INDICES..."
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 1000); // Held for 1 full second at 100% for a dramatic beat
          return 100;
        }
        
        // HEAVY CINEMATIC ENGINE: Calibrate step increments based on progress zones
        let increment = 0;
        
        if (prev > 35 && prev < 42) {
          // Speed bump 1: Intentionally lag while calibrating architecture
          increment = Math.random() > 0.7 ? 1 : 0;
        } else if (prev > 72 && prev < 79) {
          // Speed bump 2: Heavy asset unpacking phase
          increment = Math.random() > 0.6 ? 1 : 0;
        } else {
          // Standard deliberate, steady crawl
          increment = Math.floor(Math.random() * 3) + 1;
        }

        return prev + increment;
      });
    }, 60); // Faster pulse rate, but much smaller step sizes for fluid continuity

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Sync status text changes to progress checkpoints
  useEffect(() => {
    const nextIndex = Math.min(
      Math.floor((progress / 100) * statusLogs.length),
      statusLogs.length - 1
    );
    if (nextIndex !== statusIndex) {
      setStatusIndex(nextIndex);
    }
  }, [progress, statusIndex]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
          }}
          className="fixed inset-0 z-9999 flex flex-col justify-between bg-black p-8 text-white md:p-16"
        >
          {/* Top Metadata */}
          <div className="flex w-full justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
            <span>[ SYSTEM MODE: HIGH-FIDELITY ]</span>
            <span>EST. 2026</span>
          </div>

          {/* Center Counter & Structural Logs */}
          <div className="flex flex-col gap-4 self-start">
            <div className="overflow-hidden">
              <motion.div 
                animate={{ y: 0 }} 
                initial={{ y: 50 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="flex items-baseline font-serif text-[22vw] font-light leading-none tracking-tighter md:text-[14vw]"
              >
                {Math.min(progress, 100).toString().padStart(3, "0")}
              </motion.div>
            </div>
            
            {/* Dynamic Logs Container with Fixed Height to prevent layout jitter */}
           <div className="relative mt-4 h-6 w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={statusIndex}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.5 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className="absolute left-0 top-0 block w-full font-mono text-[9px] uppercase tracking-[0.2em] md:text-[10px] whitespace-normal pr-4 leading-normal"
                >
                  {statusLogs[statusIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Micro Progress Line Tracker */}
          <div className="relative w-full pb-2">
            <div className="absolute bottom-0 left-0 h-px bg-white/10 w-full" />
            <motion.div 
              className={`absolute bottom-0 left-0 h-px w-full origin-left transition-colors duration-500 ${progress >= 100 ? 'bg-gold' : 'bg-white'}`}
              style={{ scaleX: progress / 100 }}
              transition={{ ease: "easeInOut" }}
            />
            <div className="flex w-full justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 pt-2">
              <span>MAISON JEWELRY ATELIER</span>
              <span>INDEXING ASSETS</span>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}