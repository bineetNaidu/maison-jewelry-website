// components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-8 md:px-12 mix-blend-difference">
        <Link href="/" className="z-50 text-xl font-medium tracking-[0.2em] text-white uppercase">
          Maison
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-12 md:flex">
          <Link href="/collections" className="text-sm font-mono tracking-widest text-white hover:text-white/60 transition-colors">
            Collections
          </Link>
          <Link href="/high-jewelry" className="text-sm font-mono tracking-widest text-white hover:text-white/60 transition-colors">
            High Jewelry
          </Link>
          <Link href="/bespoke" className="text-sm font-mono tracking-widest text-white hover:text-white/60 transition-colors">
            Bespoke
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="z-50 flex flex-col items-end justify-center gap-[6px] p-2 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`h-px bg-white transition-all duration-500 ${isMobileMenuOpen ? "w-6 translate-y-[7px] rotate-45" : "w-8"}`} />
          <span className={`h-px bg-white transition-all duration-500 ${isMobileMenuOpen ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`h-px bg-white transition-all duration-500 ${isMobileMenuOpen ? "w-6 translate-y-[-7px] -rotate-45" : "w-4"}`} />
        </button>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
    </>
  );
}