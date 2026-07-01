"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ImageLoadGate from "@/components/providers/ImageLoadGate";
import SmoothScroll from "@/components/providers/SmoothScroll";
import type { ReactNode } from "react";

type LegalPageProps = {
  children: ReactNode;
};

export default function LegalPage({ children }: LegalPageProps) {
  return (
    <ImageLoadGate>
      <SmoothScroll>
        <main className="flex-1 overflow-x-hidden">
          <div className="hidden w-full md:block">
            <Navbar />
          </div>
          {children}
        </main>
        <Footer />
      </SmoothScroll>
    </ImageLoadGate>
  );
}
