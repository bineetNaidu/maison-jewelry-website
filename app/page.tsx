// app/page.tsx
import Editorial from "@/components/editorial/Editorial";
import Hero from "@/components/hero/Hero";
import ProductShowcase from "@/components/showcase/ProductShowcase";

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      <Hero />
      <ProductShowcase />
      <Editorial />
    </div>
  );
}