// components/showcase/ProductShowcase.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./ProductCard";

const products = [
  { title: "Obsidian Halo", sku: "COL-01-OH", material: "18K Gold / Obsidian" },
  { title: "Fractured Light", sku: "COL-01-FL", material: "Platinum / Diamond" },
  { title: "The Monolith", sku: "COL-01-TM", material: "Matte Black Titanium" },
  { title: "Eclipse Band", sku: "COL-01-EB", material: "18K White Gold" },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Translate vertical scroll into horizontal movement. 
  // -60% ensures we scroll far enough to see the last item without scrolling off-screen entirely.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section className="bg-black relative text-white">
      {/* 
        Mobile Layout: Standard vertical stack. 
        We do not force horizontal scrolling on mobile to keep the UX premium and native.
      */}
      <div className="flex flex-col gap-24 px-6 py-24 md:hidden">
        <div className="mb-12">
          <h2 className="font-serif text-5xl tracking-tighter">SELECTED<br />WORKS</h2>
        </div>
        {products.map((product, i) => (
          <ProductCard key={product.sku} index={i} {...product} />
        ))}
      </div>

      {/* 
        Desktop Layout: Scroll-linked horizontal pan.
        Height is 300vh to give the user plenty of scroll distance to pan through the items.
      */}
      <div ref={containerRef} className="hidden h-[300vh] w-full md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-24 px-[10vw]">
            
            {/* Introductory Title Block */}
            <div className="flex w-[30vw] shrink-0 flex-col justify-center">
              <span className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                Chapter I
              </span>
              <h2 className="font-serif text-[6vw] leading-[0.9] tracking-tighter">
                SELECTED<br />WORKS
              </h2>
            </div>

            {/* Product Cards */}
            {products.map((product, i) => (
              <ProductCard key={product.sku} index={i} {...product} />
            ))}
            
            {/* Spacer to allow padding at the end of the scroll */}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}