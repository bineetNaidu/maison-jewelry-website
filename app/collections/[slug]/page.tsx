// app/collections/[slug]/page.tsx
"use client";

import { Easing, motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getCollectionBySlug } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import OptimizedImage from "@/components/ui/OptimizedImage";

export default function CollectionDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const collection = getCollectionBySlug(slug);
  const products = collection ? getProductsByCollection(collection.id) : [];

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
      <div className="flex flex-col md:flex-row">
        
        {/* Left Sticky Column: Collection Narrative */}
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
              <p className="font-mono text-sm leading-relaxed text-white/60 max-w-md">
                {collection.description}
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Starting Price</span>
                <span className="font-mono text-xs uppercase tracking-widest">{collection.startingPrice}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Scrolling Column: Product Feed */}
        <div className="flex w-full flex-col gap-24 px-6 pb-32 md:w-1/2 md:px-12 md:py-32">
          {products.length === 0 ? (
            <div className="font-mono text-xs uppercase tracking-widest text-white/30 pt-32">
              No artifacts currently available.
            </div>
          ) : (
            products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease }}
                className="group flex flex-col gap-6"
              >
                <Link href={`/products/${product.slug}`} className="flex flex-col gap-6 cursor-none">
                  {/* Aspect ratio tailored for the split screen */}
                  <div className="w-full aspect-square md:aspect-4/5">
                    <OptimizedImage 
                      src={product.gallery[0] || "placeholder"} 
                      alt={product.title}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{product.sku}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">{product.price}</span>
                    </div>
                    <h3 className="font-serif text-3xl mt-2 group-hover:text-white/60 transition-colors">
                      {product.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}