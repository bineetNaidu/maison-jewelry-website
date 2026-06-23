// components/layout/SmoothScroll.tsx
"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05, // Lower = heavier/smoother. 0.05 is standard luxury inertia.
        duration: 1.5,
        smoothWheel: true,
        orientation: "vertical",
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}