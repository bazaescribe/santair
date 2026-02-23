"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyMobileContactProps {
  lang: Language;
}

export default function StickyMobileContact({ lang }: StickyMobileContactProps) {
  const t = translations[lang];
  const [isVisible, setIsVisible] = useState(true);

  // We keep it always visible on mobile as requested by "instead of being on the navbar make them floating at the bottom"
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="sticky-mobile-contact"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={styles.container}
        >
          <div style={styles.wrapper}>
            <a href={`tel:${t.contact.phone}`} style={styles.btnCall}>
              <Phone size={20} fill="white" />
              <span>{lang === "en" ? "Call Now" : "Llamar"}</span>
            </a>
            <a
              href={`https://wa.me/${t.contact.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.btnWhatsapp}
            >
              <MessageCircle size={20} fill="white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    right: "20px",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    pointerEvents: "auto",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0 15px 50px rgba(0,0,0,0.2)",
    border: "1px solid rgba(255,255,255,0.4)",
  },
  btnCall: {
    backgroundColor: "var(--primary-blue)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "14px",
    borderRadius: "14px",
    fontSize: "1rem",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,112,243,0.2)",
  },
  btnWhatsapp: {
    backgroundColor: "#25D366",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "14px",
    borderRadius: "14px",
    fontSize: "1rem",
    fontWeight: "700",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(37,211,102,0.2)",
  },
};

// Add media query via style tag in the component
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 769px) {
      #sticky-mobile-contact {
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}

