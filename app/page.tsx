"use client";

import { useState } from "react";
import { Language } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import RecentWorkMarquee from "@/components/RecentWorkMarquee";
import Footer from "@/components/Footer";
import StickyMobileContact from "@/components/StickyMobileContact";

export default function Home() {
  const [lang, setLang] = useState<Language>("es"); // Default to Spanish as requested "spanishj to english"

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <WhyChooseUs lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Testimonials lang={lang} />
      <RecentWorkMarquee lang={lang} />
      <Footer lang={lang} />
      <StickyMobileContact lang={lang} />
    </main>
  );
}
