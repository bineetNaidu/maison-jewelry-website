// components/ui/NoiseOverlay.tsx
"use client";

export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-9999 h-full w-full opacity-[0.04] mix-blend-screen">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}