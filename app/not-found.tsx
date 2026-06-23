// app/not-found.tsx
import Link from "next/link";
import { headers } from "next/headers";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black px-6 text-center text-white">
      <span className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
        Error 404
      </span>
      <h1 className="mb-8 font-serif text-6xl tracking-tighter md:text-8xl">
        VOID
      </h1>
      <p className="mb-12 font-mono text-sm uppercase tracking-widest text-white/60">
        The requested archive does not exist.
      </p>
      <Link 
        href="/" 
        className="group flex items-center gap-4 border-b border-white pb-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-white/60 hover:text-white/60"
      >
        <span>Return to Home</span>
        <span className="transition-transform duration-500 ease-luxury-slow group-hover:translate-x-2">→</span>
      </Link>
    </div>
  );
}