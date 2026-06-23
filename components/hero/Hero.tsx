// components/hero/Hero.tsx
"use client";

import { Easing, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundVideo from "./BackgroundVideo";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect on the text as the user scrolls down
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Luxury easing curve
  const ease: Easing | Easing[] = [0.76, 0, 0.24, 1];

  return (
    <section 
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <BackgroundVideo />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
      >
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="font-serif text-[12vw] leading-[0.8] tracking-tighter text-white md:text-[10vw]"
          >
            MAISON
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mt-6">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease, delay: 0.4 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-white/70 md:text-sm"
          >
            High Jewelry & Bespoke Commissions
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
          Scroll
        </span>
        <div className="h-16 w-px bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="h-full w-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}