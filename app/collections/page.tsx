// app/collections/page.tsx
"use client";

import { Easing, motion } from "framer-motion";
import Link from "next/link";
import { collections } from "@/data/collections";

export default function CollectionsPage() {
  const ease: Easing = [0.76, 0, 0.24, 1];

  return (
    <div className="relative min-h-screen w-full bg-black pt-48 pb-32 md:pt-64 text-white">
      {/* Page Header */}
      <div className="px-6 md:px-12 mb-32 md:mb-48">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-white/50"
        >
          Index / 01
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
          className="font-serif text-[12vw] leading-[0.8] tracking-tighter md:text-[8vw] mt-6"
        >
          ARCHIVES
        </motion.h1>
      </div>

      {/* Collections Feed */}
      <div className="flex flex-col gap-32 md:gap-64">
        {collections.map((collection, index) => {
          // Alternate alignment for editorial rhythm
          const isEven = index % 2 === 0;

          return (
            <div 
              key={collection.id} 
              className={`flex flex-col px-6 md:px-12 gap-8 md:gap-16 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Block */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease }}
                className={`relative w-full overflow-hidden bg-[#0A0A0A] md:w-[60%] ${collection.imageAspectRatio}`}
              >
                {/* PLACEHOLDER FOR NEXT/IMAGE */}
                <div className="flex h-full w-full flex-col items-center justify-center border border-white/5 bg-[#111111] transition-transform duration-[1.5s] ease-luxury-slow hover:scale-105 cursor-none">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                    Insert Collection Image
                  </span>
                </div>
              </motion.div>

              {/* Typography Block */}
              <div className={`flex w-full flex-col justify-center md:w-[40%] ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                     <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                      {collection.releaseYear}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl leading-tight tracking-wide md:text-5xl mb-8">
                    {collection.title}
                  </h2>
                  <p className="font-mono text-sm leading-relaxed text-white/60 mb-12">
                    {collection.description}
                  </p>
                  
                  <Link href={collection.slug} className="group flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-white/60">
                    <span className="border-b border-transparent group-hover:border-white/60 transition-colors">Explore Collection</span>
                    <span className="transition-transform duration-500 ease-luxury-slow group-hover:translate-x-2">→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}