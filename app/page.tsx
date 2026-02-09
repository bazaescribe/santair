"use client";

import { useState } from "react";
import { Language } from "@/lib/dictionary";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Language>("es"); // Default to Spanish as requested "spanishj to english"

  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
