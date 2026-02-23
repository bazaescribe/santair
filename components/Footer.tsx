"use client";

import { Language, translations } from "@/lib/dictionary";
import { Wind, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.ctaBanner}>
        <div className="container" style={styles.ctaContainer}>
          <h2 style={styles.ctaTitle}>{t.bottomCta.title}</h2>
          <p style={styles.ctaDesc}>{t.bottomCta.desc}</p>
          <a href="#hero" style={styles.ctaButton}>
            {t.bottomCta.button}
          </a>
        </div>
      </div>

      <div className="container" style={styles.grid}>
        <div style={styles.brand}>
          <div style={styles.logo}>
            <Image src="/logo-white.png" alt="Logo" width={102} height={28} />
          </div>
          <p style={styles.about}>
            {lang === "en"
              ? "Your neighborhood partners for expert cooling and home care. Family-owned, community-focused, and always here to help."
              : "Sus socios del barrio para climatización experta y cuidado del hogar. Negocio familiar enfocado en la comunidad."}
          </p>
          <div style={styles.socials}>
            <div style={styles.socialIcon}><Instagram size={18} /></div>
            <div style={styles.socialIcon}><Facebook size={18} /></div>
          </div>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>{lang === "en" ? "Contact Us" : "Contacto"}</h4>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}><Phone size={16} /></div>
            <span>{t.contact.phone}</span>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}><Mail size={16} /></div>
            <span>{t.contact.email}</span>
          </div>
          <div style={styles.contactItem}>
            <div style={styles.contactIcon}><MapPin size={16} /></div>
            <span>{t.contact.address}</span>
          </div>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>{lang === "en" ? "Availability" : "Disponibilidad"}</h4>
          <p style={styles.text}>{t.contact.hours}</p>
          <div style={styles.emergencyTag}>
            <span style={styles.emergencyPulse}></span>
            <strong>{t.contact.emergency}</strong>
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <div className="container" style={styles.bottomContainer}>
          <p style={styles.copy}>© {new Date().getFullYear()} Santair. {lang === "en" ? "Orlando's AC Specialists." : "Especialistas en AC en Orlando."}</p>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: "var(--primary-navy)",
    color: "rgba(255,255,255,0.7)",
    padding: "0",
  },
  ctaBanner: {
    backgroundColor: "var(--primary-blue)",
    padding: "80px 0",
    marginBottom: "100px",
    display: "flex",
    justifyContent: "center",
  },
  ctaContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "24px",
  },
  ctaTitle: {
    color: "white",
    fontSize: "2.8rem",
    fontWeight: "700",
    fontFamily: "var(--font-lora), serif",
  },
  ctaDesc: {
    color: "rgba(255,255,255,0.9)",
    fontSize: "1.1rem",
    maxWidth: "600px",
    lineHeight: "1.6",
  },
  ctaButton: {
    backgroundColor: "white",
    color: "var(--primary-blue)",
    padding: "18px 36px",
    borderRadius: "100px",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "1.1rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    marginTop: "16px",
    display: "inline-block",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "80px",
    paddingBottom: "100px",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "white",
  },
  iconCircle: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    backgroundColor: "var(--primary-blue)",
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
  about: {
    lineHeight: "1.7",
    fontSize: "1rem",
    maxWidth: "320px",
  },
  socials: {
    display: "flex",
    gap: "12px",
  },
  socialIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    cursor: "pointer",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  colTitle: {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "700",
    fontFamily: "var(--font-lora), serif",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    fontSize: "1rem",
  },
  contactIcon: {
    color: "var(--primary-blue)",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "-12px",
  },
  emergencyTag: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "12px",
    color: "white",
  },
  emergencyPulse: {
    width: "10px",
    height: "10px",
    backgroundColor: "#10B981",
    borderRadius: "50%",
    boxShadow: "0 0 0 rgba(16, 185, 129, 0.4)",
    animation: "pulse 2s infinite",
  },
  bottom: {
    padding: "40px 0",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  bottomContainer: {
    textAlign: "center",
  },
  copy: {
    fontSize: "0.9rem",
    opacity: 0.5,
  }
};
