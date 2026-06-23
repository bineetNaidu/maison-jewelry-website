// app/manifesto/page.tsx
"use client";

import { motion } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";

// ==========================================
// ACT I: THE DECLARATION
// ==========================================
const ManifestoHero = () => {
  const statement = "We do not craft jewelry. We forge armor for the modern soul. Artifacts designed to outlast the flesh.".split(" ");

  return (
    <div className="relative flex min-h-dvh w-full flex-col justify-center bg-black px-6 md:px-24 pt-24">
      <div className="max-w-5xl">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 block font-mono text-[10px] uppercase tracking-[0.4em] text-white/50"
        >
          Ideology // 01
        </motion.span>
        
        <h1 className="flex flex-wrap gap-x-4 gap-y-2 md:gap-y-6">
          {statement.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.3 + i * 0.05, // Staggered word-by-word reveal
                }}
                className="inline-block font-serif text-5xl tracking-tighter text-white md:text-[7vw] leading-[0.9]"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-6 md:left-24 flex items-center gap-4"
      >
        <div className="h-px w-12 bg-white/30" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Descend</span>
      </motion.div>
    </div>
  );
};

// ==========================================
// ACT II: THE STACKING TENETS
// ==========================================
const Tenets = () => {
  const tenets = [
    {
      id: "01",
      title: "REJECT PERFECTION",
      text: "Machine precision is sterile. True luxury exists in the scar, the hammer mark, the asymmetry of nature. We leave the fingerprints of the forge on every piece.",
      bg: "bg-[#050505]",
      img: "placeholder"
    },
    {
      id: "02",
      title: "GRAVITY & WEIGHT",
      text: "A piece of significance should be felt. We use maximum material density. Titanium, platinum, and pure gold in brutal, heavy proportions.",
      bg: "bg-[#0A0A0A]",
      img: "placeholder"
    },
    {
      id: "03",
      title: "ETERNAL ENDURANCE",
      text: "Trends die. Flesh ages. The artifact remains. We design for the year 3000, creating relics that will be dug out of the earth by future generations.",
      bg: "bg-[#111111]",
      img: "placeholder"
    }
  ];

  return (
    <div className="relative w-full">
      {tenets.map((tenet, index) => (
        <div 
          key={tenet.id} 
          // `sticky top-0` makes each card lock to the top of the screen.
          // `h-[100dvh]` ensures it fills exactly the mobile screen height.
          className={`sticky top-0 flex h-dvh w-full flex-col justify-between ${tenet.bg} overflow-hidden border-t border-white/5`}
        >
          {/* Subtle Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen">
             <OptimizedImage src={tenet.img} alt={`Tenet ${tenet.id}`} className="h-full w-full object-cover" />
          </div>

          <div className="relative z-10 flex h-full w-full flex-col justify-between px-6 py-12 md:px-24 md:py-24">
            
            {/* Top Row: Number */}
            <div className="flex w-full justify-between items-start">
              <span className="font-mono text-sm md:text-xl text-white/30 tracking-widest">
                {tenet.id}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 hidden md:block">
                Core Principle
              </span>
            </div>

            {/* Bottom Row: Text Block */}
            <div className="flex flex-col gap-6 md:w-[60%] md:gap-12">
              <h2 className="font-serif text-5xl md:text-[8vw] leading-[0.8] tracking-tighter text-white">
                {tenet.title}
              </h2>
              <p className="font-mono text-sm leading-relaxed text-white/60 md:text-lg max-w-xl">
                {tenet.text}
              </p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

// ==========================================
// ACT III: THE OATH (FOOTER LEAD-IN)
// ==========================================
const TheOath = () => {
  return (
    <div className="relative flex h-[70vh] w-full flex-col items-center justify-center bg-black px-6 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="flex flex-col items-center gap-12"
      >
        <p className="font-serif text-3xl md:text-5xl tracking-wide italic text-white/80">
          "For those who require weight."
        </p>
        <Link 
          href="/collections" 
          className="group relative overflow-hidden border border-white px-8 py-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white transition-colors hover:text-black"
        >
          <span className="relative z-10">Enter the Archives</span>
          <div className="absolute inset-0 z-0 h-full w-full origin-bottom translate-y-full bg-white transition-transform duration-500 ease-luxury-slow group-hover:translate-y-0" />
        </Link>
      </motion.div>
    </div>
  );
};

// ==========================================
// MAIN PAGE EXPORT
// ==========================================
export default function ManifestoPage() {
  return (
    <main className="w-full bg-black cursor-none">
      <ManifestoHero />
      <Tenets />
      <TheOath />
    </main>
  );
}