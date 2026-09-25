import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingActions from "@/components/site/FloatingActions";
import CookieBanner from "@/components/site/CookieBanner";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-cream">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">Zum Inhalt springen</a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <CookieBanner />
    </div>
  );
}