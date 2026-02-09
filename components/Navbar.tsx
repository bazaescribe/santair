"use client";

import { Language, translations } from "@/lib/dictionary";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wind, Globe } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      ...styles.nav,
      backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
      boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
      height: scrolled ? "70px" : "80px",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
    }}>
      <div className="container" style={styles.container}>
        <Link href="/" style={styles.logo}>
          <Wind size={32} color="var(--primary-orange)" />
          <span style={{
            ...styles.logoText,
            color: scrolled ? "var(--primary-navy)" : "white"
          }}>SANTAIR</span>
        </Link>

        <div style={styles.links}>
          <a href="#services" style={{
            ...styles.link,
            color: scrolled ? "var(--text-navy)" : "white"
          }}>{t.services}</a>
          <a href="#contact" style={{
            ...styles.link,
            color: scrolled ? "var(--text-navy)" : "white"
          }}>{t.contact}</a>

          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            style={styles.langBtn}
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span>{lang === "en" ? "ES" : "EN"}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--glass)",
    backdropFilter: "blur(32px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "800",
    letterSpacing: "1px",
    color: "var(--primary-navy)",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  link: {
    fontWeight: "500",
    color: "var(--text-navy)",
    fontSize: "0.95rem",
    transition: "var(--transition)",
  },
  langBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    borderRadius: "var(--radius-sm)",
    backgroundColor: "var(--primary-navy)",
    color: "white",
    fontSize: "0.85rem",
    fontWeight: "600",
    transition: "var(--transition)",
  }
};
