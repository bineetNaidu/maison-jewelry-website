// app/layout.tsx
import type { Metadata } from "next";
import { Tenor_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/cursor/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Loader from "@/components/layout/Loader";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

// Premium High-Fashion Primary Sans-Serif
const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-luxury",
  display: "swap",
});

// Sleek, Geometric Brutalist Monospace
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison | High Jewelry",
  description: "Brutalist luxury. Editorial craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={
          `min-h-screen bg-background font-serif text-foreground antialiased selection:bg-white selection:text-black ${tenorSans.variable}
            ${dmMono.variable}`}
      >
        <SmoothScroll>
          <NoiseOverlay />
          <Loader />
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}