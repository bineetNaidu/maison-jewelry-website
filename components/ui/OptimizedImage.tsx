// components/ui/OptimizedImage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(src !== "placeholder");

  return (
    <div className={`relative overflow-hidden bg-[#0A0A0A] ${className}`}>
      {/* Skeleton / Placeholder state */}
      <motion.div
        animate={{ 
          opacity: src === "placeholder" ? 0 : isLoading ? 1 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-10 flex h-full w-full items-center justify-center border border-white/5 bg-[#111111]"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
          Loading Asset...
        </span>
      </motion.div>

      {/* 
        NOTE: In production, uncomment the next/image component below.
        For now, we render a brutalist placeholder box if src is "placeholder".
      */}
      {src === "placeholder" ? (
         <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center text-center p-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
              Insert AI Image
            </span>
         </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover
            transition-transform duration-[2s] ease-luxury-slow hover:scale-105
            ${isLoading
            ? "scale-110 blur-sm"
            : "scale-100 blur-0"}
            `}
          onLoad={() => setIsLoading(false)}
          sizes="(max-width:768px) 100vw, 80vw"
        />
      )}
    </div>
  );
}