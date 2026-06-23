// app/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* 
        The "Curtain" effect. 
        A black screen that slides up when a new route loads, faking a seamless transition.
      */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none fixed left-0 top-0 z-100 w-full bg-black"
      />
      
      {/* 
        The content itself subtly scales and fades in,
        giving a sense of physical weight to the page load.
      */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}