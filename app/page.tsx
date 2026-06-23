// app/page.tsx
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      <Hero />
      
      {/* 
        This empty div ensures the page is scrollable so you can test 
        the scroll-linked parallax effect in the Hero section.
        We will replace this with Phase 4 content next.
      */}
      <div className="h-screen w-full" />
    </div>
  );
}