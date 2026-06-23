// components/showcase/ProductCard.tsx
"use client";

import { motion } from "framer-motion";

interface ProductCardProps {
  index: number;
  title: string;
  sku: string;
  material: string;
}

export default function ProductCard({ index, title, sku, material }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="group relative flex w-full flex-col gap-6 md:w-[40vw] lg:w-[30vw] shrink-0"
    >
      {/* Image Container with Hover Scale */}
      <div className="relative aspect-3/4 w-full overflow-hidden bg-[#0A0A0A]">
        <motion.div 
          className="absolute inset-0 h-full w-full bg-[#111111] transition-transform duration-[1.5s] ease-luxury-slow group-hover:scale-105"
        >
          {/* 
            PLACEHOLDER: Replace this div with next/image once you generate the Leonardo AI assets 
            <Image src={`/products/ring-${index}.jpg`} alt={title} fill className="object-cover" />
          */}
          <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center border border-white/5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Insert AI Image
            </span>
            <span className="mt-2 font-serif text-sm italic text-white/20">
              Aspect Ratio 3:4
            </span>
          </div>
        </motion.div>
      </div>

      {/* Metadata & Typography */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            {sku}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            {material}
          </span>
        </div>
        <h3 className="mt-2 font-serif text-3xl font-light tracking-wide text-white md:text-4xl">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}