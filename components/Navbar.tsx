"use client";

import { Language, translations } from "@/lib/dictionary";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wind, Globe, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      backgroundColor: scrolled ? "var(--bg-offwhite)" : "transparent",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.03)" : "none",
      height: scrolled ? "72px" : "90px",
      borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
    }}>
      <div className="container" style={styles.container}>
        <Link href="/" style={styles.logo}>
          {/* <div style={styles.iconCircle}>
            <Wind size={22} color="white" />
          </div>
          <span style={{
            ...styles.logoText,
            color: "var(--primary-navy)"
          }}>Santair</span> */}
          <Image src="/logo.png" alt="Logo" width={102} height={28} />
        </Link>

        <div style={styles.links}>
          <a href="#services" className="nav-section-link" style={styles.link}>{t.services}</a>
          <a href="#why-us" className="nav-section-link" style={styles.link}>{t.whyUs}</a>
          <a href="#about" className="nav-section-link" style={styles.link}>{t.about}</a>
          <a href="#contact" className="nav-section-link" style={styles.link}>{t.contact}</a>

          <div className="nav-section-link" style={styles.divider}></div>

          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            style={styles.langBtn}
            aria-label="Toggle Language"
          >
            <Globe size={18} />
            <span>{lang === "en" ? "ES" : "EN"}</span>
          </button>

          <div className="nav-contact-btns" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <a href={`tel:${translations[lang].contact.phone}`} style={styles.navCallBtn} aria-label="Call Now">
              <Phone size={14} fill="currentColor" />
              <span>{lang === "en" ? "Call" : "Llamar"}</span>
            </a>
            <a href={`https://wa.me/1${translations[lang].contact.phone.replace(/\\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={styles.navWaBtn} aria-label="WhatsApp">
              <MessageCircle size={14} fill="currentColor" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .nav-contact-btns, .nav-section-link {
            display: none !important;
          }
        }
      `}} />
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    transition: "var(--transition)",
    backdropFilter: "blur(12px)",
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
    gap: "14px",
    textDecoration: "none",
  },
  iconCircle: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    backgroundColor: "var(--primary-navy)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontSize: "1.6rem",
    fontWeight: "700",
    letterSpacing: "-0.5px",
    fontFamily: "var(--font-lora), serif",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "2.5rem",
  },
  link: {
    fontWeight: "600",
    color: "var(--primary-navy)",
    fontSize: "0.95rem",
    transition: "var(--transition)",
    opacity: 0.85,
  },
  divider: {
    width: "1px",
    height: "24px",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  langBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    borderRadius: "100px",
    backgroundColor: "white",
    color: "var(--primary-navy)",
    fontSize: "0.85rem",
    fontWeight: "700",
    transition: "var(--transition)",
    border: "1px solid rgba(0,0,0,0.1)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
  },
  navCallBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 16px",
    borderRadius: "100px",
    backgroundColor: "var(--primary-blue, #0070f3)",
    color: "white",
    fontSize: "0.85rem",
    fontWeight: "700",
    textDecoration: "none",
    transition: "var(--transition)",
    boxShadow: "0 2px 10px rgba(0,112,243,0.2)",
  },
  navWaBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 16px",
    borderRadius: "100px",
    backgroundColor: "#25D366",
    color: "white",
    fontSize: "0.85rem",
    fontWeight: "700",
    textDecoration: "none",
    transition: "var(--transition)",
    boxShadow: "0 2px 10px rgba(37,211,102,0.2)",
  }
};
