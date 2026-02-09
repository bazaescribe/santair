"use client";

import { Language } from "@/lib/dictionary";
import { Wind, Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer id="contact" style={styles.footer}>
      <div className="container" style={styles.grid}>
        <div style={styles.brand}>
          <div style={styles.logo}>
            <Wind size={32} color="var(--primary-orange)" />
            <span style={styles.logoText}>SANTAIR</span>
          </div>
          <p style={styles.about}>
            {lang === "en"
              ? "Expert property maintenance and air conditioning services for your home and business."
              : "Servicios expertos de mantenimiento de propiedades y aire acondicionado para su hogar y negocio."}
          </p>
          <div style={styles.socials}>
            <Instagram size={20} />
            <Facebook size={20} />
          </div>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>{lang === "en" ? "Contact Info" : "Contacto"}</h4>
          <div style={styles.contactItem}><Phone size={18} /> <span>+34 600 000 000</span></div>
          <div style={styles.contactItem}><Mail size={18} /> <span>hello@santair.com</span></div>
          <div style={styles.contactItem}><MapPin size={18} /> <span>Calle Principal, 12, Barcelona</span></div>
        </div>

        <div style={styles.col}>
          <h4 style={styles.colTitle}>{lang === "en" ? "Service Hours" : "Horario"}</h4>
          <p style={styles.text}>{lang === "en" ? "Mon - Fri: 8:00 - 18:00" : "Lun - Vie: 8:00 - 18:00"}</p>
          <p style={styles.text}>{lang === "en" ? "Sat: 9:00 - 14:00" : "Sáb: 9:00 - 14:00"}</p>
          <p style={styles.text}><strong style={{ color: "var(--primary-blue)" }}>{lang === "en" ? "Emergency 24/7 Available" : "Urgencias 24/7 Disponibles"}</strong></p>
        </div>
      </div>
      <div style={styles.bottom}>
        <div className="container">
          <p style={styles.copy}>© {new Date().getFullYear()} Santair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    backgroundColor: "var(--primary-navy)",
    color: "rgba(255,255,255,0.8)",
    padding: "80px 0 0 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "60px",
    paddingBottom: "80px",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "white",
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "800",
    letterSpacing: "1px",
  },
  about: {
    lineHeight: "1.6",
    fontSize: "0.95rem",
  },
  socials: {
    display: "flex",
    gap: "16px",
    color: "white",
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  colTitle: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "700",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "0.95rem",
  },
  text: {
    fontSize: "0.95rem",
  },
  bottom: {
    padding: "30px 0",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
  },
  copy: {
    fontSize: "0.85rem",
    opacity: 0.6,
  }
};
