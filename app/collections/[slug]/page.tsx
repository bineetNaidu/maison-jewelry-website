// app/collections/[slug]/page.tsx
"use client";

import { Easing, motion } from "framer-motion";
import { useParams } from "next/navigation";
import { getCollectionBySlug } from "@/data/collections";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function CollectionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collection = getCollectionBySlug(slug);

  const ease: Easing = [0.76, 0, 0.24, 1];

  if (!collection) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black text-white">
        <h1 className="font-mono text-sm uppercase tracking-widest text-white/50">
          Archive Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* 
        Desktop Layout: Split Screen
        Left: Sticky Typography | Right: Scrolling Image Gallery
      */}
      <div className="flex flex-col md:flex-row">
        
        {/* Left Sticky Column */}
        <div className="relative w-full md:w-1/2">
          <div className="md:sticky md:top-0 flex min-h-screen flex-col justify-center px-6 py-32 md:px-12 md:py-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-8"
            >
              Archive / {collection.releaseYear}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="font-serif text-5xl leading-[0.9] tracking-tighter md:text-7xl lg:text-[7vw] mb-12"
            >
              {collection.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="flex flex-col gap-8 border-t border-white/10 pt-8"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Materials</span>
                <span className="font-mono text-xs uppercase tracking-widest">{collection.materials}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Pricing</span>
                <span className="font-mono text-xs uppercase tracking-widest">{collection.startingPrice}</span>
              </div>

              <p className="font-mono text-sm leading-relaxed text-white/60 max-w-md mt-4">
                {collection.description}
              </p>

              <button className="group mt-8 flex w-fit items-center gap-4 border-b border-white pb-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-white/60 hover:border-white/60">
                <span>Inquire About Commission</span>
                <span className="transition-transform duration-500 ease-luxury-slow group-hover:translate-x-2">→</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Scrolling Column (The Gallery) */}
        <div className="flex w-full flex-col gap-4 px-6 pb-32 md:w-1/2 md:px-12 md:py-32">
          {collection.gallery.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease }}
              className="w-full aspect-3/4"
            >
              <OptimizedImage 
                src={src} 
                alt={`${collection.title} Detail ${index + 1}`}
                className="h-full w-full"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}