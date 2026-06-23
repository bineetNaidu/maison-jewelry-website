// components/layout/MobileMenu.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const links = [
  { name: "Collections", href: "/collections" },
  { name: "High Jewelry", href: "/high-jewelry" },
  { name: "Bespoke", href: "/bespoke" },
  { name: "Maison", href: "/maison" },
];

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black px-6"
        >
          <nav className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
               <motion.div
                 key={link.name}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
               >
                 <Link
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   className="text-4xl font-light uppercase tracking-widest text-white transition-colors hover:text-white/60"
                 >
                   {link.name}
                 </Link>
               </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}