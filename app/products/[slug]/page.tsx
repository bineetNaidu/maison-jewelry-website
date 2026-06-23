// app/products/[slug]/page.tsx
"use client";

import { Easing, motion } from "framer-motion";
import { useParams } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const ease: Easing = [0.76, 0, 0.24, 1];

  if (!product) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black text-white">
        <h1 className="font-mono text-sm uppercase tracking-widest text-white/50">
          Artifact Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <div className="flex flex-col md:flex-row-reverse">
        
        {/* Right Sticky Column: Purchase Actions & Specs */}
        <div className="relative w-full md:w-[40%] bg-[#050505]">
          <div className="md:sticky md:top-0 flex min-h-screen flex-col justify-center px-6 py-32 md:px-16 md:py-0 border-l border-white/5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-8"
            >
              {product.sku}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
              className="font-serif text-5xl leading-[0.9] tracking-tighter md:text-6xl mb-12"
            >
              {product.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 }}
              className="flex flex-col gap-8 border-t border-white/10 pt-8"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Material / Setting</span>
                <span className="font-mono text-xs uppercase tracking-widest">{product.material}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Valuation</span>
                <span className="font-mono text-xs uppercase tracking-widest">{product.price}</span>
              </div>

              {/* Conversion CTA */}
              <button className="group mt-12 flex w-full items-center justify-between border border-white p-6 font-mono text-xs uppercase tracking-[0.2em] transition-all hover:bg-white hover:text-black">
                <span>Inquire / Purchase</span>
                <span className="transition-transform duration-500 ease-luxury-slow group-hover:translate-x-2">→</span>
              </button>

              <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 text-center mt-2">
                Allow 6-8 weeks for bespoke sizing and atelier production.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Left Scrolling Column: Macro Photography Gallery */}
        <div className="flex w-full flex-col gap-1 px-1 pb-1 md:w-[60%] pt-[100px] md:pt-1 md:px-1">
          {product.gallery.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease }}
              className="w-full aspect-3/4"
            >
              <OptimizedImage 
                src={src} 
                alt={`${product.title} Gallery Shot ${index + 1}`}
                className="h-full w-full"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}