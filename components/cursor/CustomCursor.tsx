// components/cursor/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Heavy, physical spring physics
  const cursorX = useSpring(-100, { stiffness: 250, damping: 28, mass: 0.5 });
  const cursorY = useSpring(-100, { stiffness: 250, damping: 28, mass: 0.5 });

  useEffect(() => {
    // Mobile Protection: Abort if the device uses a touch screen
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up the DOM tree for our specific sensory attributes
      const cursorElement = target.closest("[data-cursor]");
      const interactiveElement = target.closest("a, button");

      if (cursorElement) {
        setCursorText(cursorElement.getAttribute("data-cursor") || "");
        setIsHovering(true);
      } else if (interactiveElement) {
        setCursorText("");
        setIsHovering(true);
      } else {
        setCursorText("");
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-100 flex h-8 w-8 items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* The Scaling Circle */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: cursorText ? 3 : isHovering ? 2.5 : 1,
          backgroundColor: isHovering || cursorText ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          border: isHovering || cursorText ? "none" : "1px solid rgba(255, 255, 255, 0.5)",
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
      />
      
      {/* The Contextual Text */}
      <AnimatePresence>
        {cursorText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative font-mono text-[14px] font-extrabold! uppercase tracking-widest text-black"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}