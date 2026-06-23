// components/layout/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative flex flex-col justify-end overflow-hidden bg-black px-6 pb-6 pt-32 text-white md:px-12 md:pb-12 md:pt-64">
      {/* Top Grid Layer */}
      <div className="mb-24 flex flex-col justify-between gap-12 border-t border-white/10 pt-12 md:flex-row md:items-start md:gap-0">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
            Atelier
          </span>
          <p className="font-serif text-lg tracking-wide">
            12 Place Vendôme<br />
            75001 Paris, France
          </p>
        </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Navigation</span>
            <ul className="flex flex-col gap-2 font-mono text-sm uppercase tracking-widest">
              <li><Link href="/collections" className="hover:text-white/50 transition-colors">Collections</Link></li>
              <li><Link href="/bespoke" className="hover:text-white/50 transition-colors">Bespoke</Link></li>
              <li><Link href="/manifesto" className="hover:text-white/50 transition-colors">Manifesto</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">Social</span>
            <ul className="flex flex-col gap-2 font-mono text-sm uppercase tracking-widest">
              <li><a href="#" className="hover:text-white/50 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white/50 transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Brand Typography */}
      <div className="flex w-full items-center justify-center border-b border-white/10 pb-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="w-full text-center font-serif text-[18vw] leading-[0.75] tracking-tighter text-white"
        >
          MAISON
        </motion.h2>
      </div>

      {/* Utility Bottom Bar */}
      <div className="mt-6 flex flex-col items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-white/40 md:flex-row md:gap-0">
        <span>© {currentYear} Maison Jewelry. All Rights Reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}