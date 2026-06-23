// components/editorial/Editorial.tsx
"use client";

import { Easing, motion } from "framer-motion";

export default function Editorial() {
  const ease: Easing | Easing[] = [0.76, 0, 0.24, 1];

  return (
    <section className="relative w-full bg-black px-6 py-32 text-white md:px-12 md:py-64">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-24 md:gap-48">
        
        {/* Top Text Block */}
        <div className="flex w-full flex-col items-start gap-8 md:w-1/2">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-white/50"
          >
            Our Philosophy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="font-serif text-4xl leading-tight tracking-wide md:text-6xl"
          >
            We do not create for the present. We forge artifacts out of earth, fire, and pressure to outlast the flesh that wears them.
          </motion.h2>
        </div>

        {/* Large Editorial Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease }}
          className="relative aspect-video w-full overflow-hidden bg-[#0A0A0A] md:w-[80%] md:self-end"
        >
          {/* REPLACE WITH NEXT/IMAGE LATER */}
          <div className="flex h-full w-full flex-col items-center justify-center border border-white/5 bg-[#111111]">
             <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Insert AI Image
            </span>
            <span className="mt-2 font-serif text-sm italic text-white/20">
              Aspect Ratio 16:9
            </span>
          </div>
        </motion.div>

        {/* Bottom Text Block */}
        <div className="flex w-full flex-col gap-12 md:flex-row md:justify-between md:pl-[20%]">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, ease }}
             className="md:w-[40%]"
          >
            <p className="font-mono text-sm leading-relaxed text-white/60">
              Every piece is hand-wrought in our Parisian atelier. We reject the sterile perfection of modern machining in favor of the brutal, raw textures of nature. Gold is melted, hammered, and scarred. Diamonds are set deep within the metal, protected like secrets.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <button className="group flex items-center gap-4 border-b border-white pb-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-white/60 hover:border-white/60">
              <span>Read the Manifesto</span>
              <span className="transition-transform duration-500 ease-luxury-slow group-hover:translate-x-2">→</span>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}