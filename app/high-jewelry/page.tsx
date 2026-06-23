// app/high-jewelry/page.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";
import BackgroundVideo from "@/components/hero/BackgroundVideo";

// ==========================================
// ACT I: THE MASKED HERO
// ==========================================
const MaskedHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Mobile needs a slightly less extreme scale to prevent Safari crashing, 
  // but enough to clear the viewport.
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 120]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <BackgroundVideo />
        </div>

        <motion.div
          style={{ scale, opacity }}
          className="pointer-events-none absolute inset-0 z-10 flex origin-center items-center justify-center bg-black text-white mix-blend-multiply will-change-transform"
        >
          {/* Mobile uses 35vw to ensure the letters are wide enough to fall through */}
          <h1 className="font-serif text-[35vw] md:text-[22vw] leading-none tracking-tighter text-white">
            HAUTE
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

// ==========================================
// ACT II: ZERO GRAVITY PARALLAX (MOBILE TUNED)
// ==========================================
const ZeroGravityParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full overflow-hidden bg-black py-32">
      <div className="sticky top-1/2 z-10 flex -translate-y-1/2 flex-col items-center justify-center text-center mix-blend-difference pointer-events-none px-4">
        <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50">
          The Vault
        </span>
        <h2 className="font-serif text-5xl md:text-8xl text-white tracking-tighter">
          BEYOND<br />COMMERCE
        </h2>
      </div>

      {/* 
        Mobile Spatial Adjustments: 
        Notice how left/right and widths are explicitly changed for mobile vs md.
        This prevents overlapping on 390px screens.
      */}
     <motion.div style={{ y: y1 }} className="absolute left-4 top-[5%] w-[45vw] md:left-[10%] md:top-[20%] md:w-[20vw] aspect-3/4 will-change-transform">
        <OptimizedImage src="/assets/floating-image-1.jpg" alt="Zero Gravity 1" className="h-full w-full" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute right-4 top-[25%] w-[50vw] md:right-[10%] md:top-[10%] md:w-[25vw] aspect-square will-change-transform">
        <OptimizedImage src="/assets/floating-image-2.jpg" alt="Zero Gravity 2" className="h-full w-full" />
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute left-8 top-[55%] w-[60vw] md:left-[20%] md:top-[60%] md:w-[30vw] aspect-video will-change-transform">
        <OptimizedImage src="/assets/floating-image-3.jpg" alt="Zero Gravity 3" className="h-full w-full" />
      </motion.div>

      <motion.div style={{ y: y4 }} className="absolute right-8 top-[75%] w-[40vw] md:right-[20%] md:top-[70%] md:w-[15vw] aspect-4/5 will-change-transform">
        <OptimizedImage src="/assets/floating-image-4.jpg" alt="Zero Gravity 4" className="h-full w-full" />
      </motion.div>
    </div>
  );
};

// ==========================================
// ACT III: ARCHITECTURAL MARQUEE
// ==========================================
const ScrollMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);

  return (
    <div ref={containerRef} className="flex h-[50vh] md:h-[70vh] w-full items-center overflow-hidden bg-black text-white">
      <motion.div style={{ x }} className="whitespace-nowrap font-serif text-[25vw] md:text-[15vw] leading-none tracking-tighter will-change-transform">
        NO COMPROMISE. NO REPETITION. NO COMPROMISE. NO REPETITION.
      </motion.div>
    </div>
  );
};

// ==========================================
// ACT IV: THE CENTERPIECE
// ==========================================
const Centerpiece = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[400vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full">
        <div className="absolute inset-0 z-0 opacity-40">
           <OptimizedImage src="/assets/the-masterpiece.jpg" alt="The Masterpiece" className="h-full w-full object-cover" />
           <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center p-6 md:p-24">
          
          <motion.div style={{ opacity: opacity1 }} className="absolute flex flex-col items-center text-center">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4">Object 001</span>
            <h3 className="font-serif text-4xl md:text-7xl text-white tracking-wide">L'ÉTERNITÉ</h3>
          </motion.div>

          <motion.div style={{ opacity: opacity2 }} className="absolute flex flex-col items-center text-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Carat Weight</span>
              <span className="font-serif text-3xl md:text-4xl text-white">142.5 ctw</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Labor</span>
              <span className="font-serif text-3xl md:text-4xl text-white">1,840 Hours</span>
            </div>
          </motion.div>

          <motion.div style={{ opacity: opacity3 }} className="absolute flex flex-col items-center text-center mt-32 md:mt-48 w-full max-w-[300px] md:max-w-none">
             <button className="group relative w-full md:w-auto overflow-hidden border border-white px-8 py-5 md:px-12 md:py-6 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white transition-colors hover:text-black">
                <span className="relative z-10">Private Viewing</span>
                <div className="absolute inset-0 z-0 h-full w-full origin-bottom translate-y-full bg-white transition-transform duration-500 ease-luxury-slow group-hover:translate-y-0" />
             </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default function HighJewelryPage() {
  return (
    <main className="w-full bg-black cursor-none">
      <MaskedHero />
      <ZeroGravityParallax />
      <ScrollMarquee />
      <Centerpiece />
    </main>
  );
}