// app/bespoke/page.tsx
"use client";

import { useState } from "react";
import { Easing, motion } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";

// ==========================================
// ACT I: THE INVITATION
// ==========================================
const BespokeHero = () => {
  const ease: Easing = [0.76, 0, 0.24, 1];

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black px-6 text-center text-white pt-32">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50"
      >
        Private Commissions
      </motion.span>
      
      <div className="overflow-hidden">
        <motion.h1 
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="font-serif text-[12vw] leading-[0.85] tracking-tighter md:text-[8vw]"
        >
          THE ATELIER
        </motion.h1>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease }}
        className="mt-12 max-w-xl font-mono text-sm leading-relaxed text-white/60 md:text-base"
      >
        We do not accept all commissions. Our bespoke process is a months-long collaboration reserved for artifacts of profound personal significance. 
      </motion.p>
    </div>
  );
};

// ==========================================
// ACT II: THE JOURNEY (STICKY SCROLL)
// ==========================================
const BespokeProcess = () => {
    const ease: Easing = [0.76, 0, 0.24, 1];
    
    const steps = [
      { num: "01", title: "Consultation", desc: "An intimate dialogue to understand the architecture of your vision, your materials, and the legacy the piece will hold." },
      { num: "02", title: "Sourcing", desc: "We scour the globe for stones that speak. We do not look for perfection on paper; we look for character, fire, and violence in the cut." },
      { num: "03", title: "The Forge", desc: "Months of uncompromising labor in our Parisian atelier. Gold is scarred. Platinum is hammered. The artifact takes its final form." },
      { num: "04", title: "Delivery", desc: "The piece is presented in a custom-machined obsidian vault, accompanied by its original charcoal blueprints." }
    ];
  
    return (
      <div className="relative w-full bg-black py-24 text-white md:py-48">
        <div className="flex flex-col md:flex-row">
          
          {/* Desktop Only: Sticky Image Crossfade */}
          <div className="relative hidden w-full md:block md:w-1/2">
            <div className="sticky top-0 flex h-screen items-center justify-center p-12">
               <div className="relative aspect-3/4 w-full max-w-md overflow-hidden bg-[#050505]">
                  <OptimizedImage src="placeholder" alt="The Process" className="h-full w-full" />
                  <div className="absolute inset-0 flex items-center justify-center border border-white/10 pointer-events-none">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">Atelier Archives</span>
                  </div>
               </div>
            </div>
          </div>
  
          {/* Both: Scrolling Steps (With interleaved images for mobile) */}
          <div className="flex w-full flex-col px-6 md:w-1/2 md:px-24 md:py-[50vh]">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-10% 0px -10% 0px", once: true }}
                transition={{ duration: 0.8, ease }}
                className="mb-24 flex flex-col gap-6 last:mb-0 md:mb-64"
              >
                {/* MOBILE ONLY: Editorial Image interleaved before the text */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#050505] md:hidden mb-4">
                   <OptimizedImage src="placeholder" alt={step.title} className="h-full w-full" />
                </div>
  
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-4 w-fit">
                  Phase // {step.num}
                </span>
                <h2 className="font-serif text-4xl md:text-6xl tracking-wide">{step.title}</h2>
                <p className="font-mono text-sm leading-relaxed text-white/60 max-w-md">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
  
        </div>
      </div>
    );
  };

// ==========================================
// ACT III: THE BRUTALIST APPLICATION
// ==========================================
const BespokeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-[#050505] px-6 py-32 text-white md:px-24 md:py-48">
      <div className="w-full max-w-4xl">
        
        <div className="mb-24 flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            Initiate Commission
          </span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tighter">
            THE DOSSIER
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-16">
          
          {/* Brutalist Input Group */}
          <div className="group relative flex flex-col gap-4">
            <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors group-focus-within:text-white">
              Identity
            </label>
            <input 
              type="text" 
              id="name"
              required
              placeholder="Your full name"
              className="w-full border-b border-white/20 bg-transparent pb-4 font-serif text-3xl tracking-wide text-white transition-colors placeholder:text-white/10 focus:border-white focus:outline-none md:text-5xl cursor-text"
            />
          </div>

          <div className="group relative flex flex-col gap-4">
            <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors group-focus-within:text-white">
              Correspondence
            </label>
            <input 
              type="email" 
              id="email"
              required
              placeholder="Email address"
              className="w-full border-b border-white/20 bg-transparent pb-4 font-serif text-3xl tracking-wide text-white transition-colors placeholder:text-white/10 focus:border-white focus:outline-none md:text-5xl cursor-text"
            />
          </div>

          <div className="group relative flex flex-col gap-4">
            <label htmlFor="budget" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors group-focus-within:text-white">
              Allocation
            </label>
            <select 
              id="budget"
              required
              className="w-full border-b border-white/20 bg-transparent pb-4 font-serif text-2xl tracking-wide text-white transition-colors focus:border-white focus:outline-none md:text-4xl appearance-none cursor-pointer"
            >
              <option value="" className="bg-black text-white/50">Select intended budget</option>
              <option value="10k-25k" className="bg-black text-white">$10,000 - $25,000</option>
              <option value="25k-50k" className="bg-black text-white">$25,000 - $50,000</option>
              <option value="50k+" className="bg-black text-white">$50,000+</option>
            </select>
          </div>

          <div className="group relative flex flex-col gap-4">
            <label htmlFor="vision" className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition-colors group-focus-within:text-white">
              The Vision
            </label>
            <textarea 
              id="vision"
              required
              rows={4}
              placeholder="Describe the artifact, the occasion, and the desired materials..."
              className="w-full border-b border-white/20 bg-transparent pb-4 font-serif text-2xl tracking-wide text-white transition-colors placeholder:text-white/10 focus:border-white focus:outline-none md:text-4xl resize-none cursor-text"
            />
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="group relative mt-12 w-full overflow-hidden border border-white p-8 font-mono text-xs uppercase tracking-[0.3em] text-white transition-colors hover:text-black disabled:border-white/20 disabled:text-white/20"
          >
             <span className="relative z-10">
               {isSubmitting ? "Transmitting..." : "Submit Dossier"}
             </span>
             {!isSubmitting && (
               <div className="absolute inset-0 z-0 h-full w-full origin-bottom translate-y-full bg-white transition-transform duration-500 ease-luxury-slow group-hover:translate-y-0" />
             )}
          </button>

        </form>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE EXPORT
// ==========================================
export default function BespokePage() {
  return (
    <main className="w-full bg-black cursor-none">
      <BespokeHero />
      <BespokeProcess />
      <BespokeForm />
    </main>
  );
}