// components/showcase/ProductCard.tsx
"use client";

import { Product } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductCardProps extends Product {
  index: number;
}

export default function ProductCard({ gallery, title, sku, material, price, slug }: ProductCardProps) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="group relative flex w-full flex-col gap-6 md:w-[40vw] lg:w-[30vw] shrink-0"
    >
      <Link 
        href={`/products/${slug}`} 
        data-cursor="view" 
        className="flex flex-col gap-6 w-full cursor-none"
        prefetch={false} // DISABLING DEFAULT PREFETCH
        onMouseEnter={() => router.prefetch(`/products/${slug}`)} // INTENT-BASED PREFETCH
       >
        {/* Image Container */}
        <div className="relative aspect-3/4 w-full overflow-hidden bg-[#0A0A0A]">
          {/* <div className="absolute inset-0 h-full w-full bg-[#111111] transition-transform duration-[1.5s] ease-luxury-slow group-hover:scale-105">
            <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center border border-white/5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
                Insert AI Image
              </span>
              <span className="mt-2 font-serif text-sm italic text-white/20">
                Aspect Ratio 3:4
              </span>
            </div>
          </div> */}
          <Image
            src={gallery[0]}
            alt={`${title}'s products image`}
            fill
            className="object-cover"
            priority={false}
          />
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
          <div className="flex items-baseline justify-between mt-2">
            <h3 className="font-serif text-3xl font-light tracking-wide text-white md:text-4xl transition-colors group-hover:text-white/70">
              {title}
            </h3>
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">
              {price}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}