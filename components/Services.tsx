"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { Snowflake, Wrench, Droplets, Zap, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang];

  return (
    <section id="services" style={styles.section}>
      <div className="container">
        {/* Section Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>{lang === "en" ? "How We Help You" : "Cómo le Ayudamos"}</h2>
          <p style={styles.subtitle}>
            {lang === "en"
              ? "Expert care for your home's most vital systems, with a focus on keeping you cool."
              : "Cuidado experto para los sistemas más vitales de su hogar, con enfoque en su comodidad."}
          </p>
        </div>

        {/* Featured Service: AC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.featuredCard}
        >
          <div style={styles.featuredContent}>
            <div style={styles.featuredIconWrapper}>
              <Snowflake size={40} color="var(--primary-blue)" />
            </div>
            <h3 style={styles.featuredTitle}>{t.services.ac.title}</h3>
            <p style={styles.featuredDesc}>{t.services.ac.desc}</p>
            <div style={styles.featuredGrid}>
              {t.services.ac.options.map((opt: string) => (
                <div key={opt} style={styles.featuredItem}>
                  <CheckCircle2 size={18} color="var(--primary-blue)" />
                  <span style={styles.featuredItemText}>{opt}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.featuredImageWrapper}>
            <div style={styles.imagePlaceholder}>
              {/* This would be an image of an AC unit or a technician */}
              <Image src="/mascot.jpeg" alt="AC" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </motion.div>

        {/* Other Services Section */}
        <div style={styles.subHeader}>
          <h3 style={styles.subTitle}>{t.services.others.title}</h3>
          <p style={styles.subDesc}>{t.services.others.desc}</p>
        </div>

        <div style={styles.otherGrid}>
          {/* Repairs */}
          <motion.div
            style={styles.smallCard}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{ ...styles.smallIconWrapper, backgroundColor: 'rgba(249,115,22,0.1)' }}>
              <Wrench size={24} color="var(--primary-warm)" />
            </div>
            <h4 style={styles.smallCardTitle}>{t.services.others.repairs.title}</h4>
            <div style={styles.smallList}>
              {t.services.others.repairs.options.map((opt: string) => (
                <span key={opt} style={styles.smallListItem}>• {opt}</span>
              ))}
            </div>
          </motion.div>

          {/* Plumbing */}
          <motion.div
            style={styles.smallCard}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{ ...styles.smallIconWrapper, backgroundColor: 'rgba(0,112,243,0.1)' }}>
              <Droplets size={24} color="var(--primary-blue)" />
            </div>
            <h4 style={styles.smallCardTitle}>{t.services.others.plumbing.title}</h4>
            <div style={styles.smallList}>
              {t.services.others.plumbing.options.map((opt: string) => (
                <span key={opt} style={styles.smallListItem}>• {opt}</span>
              ))}
            </div>
          </motion.div>

          {/* Electrical */}
          <motion.div
            style={styles.smallCard}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{ ...styles.smallIconWrapper, backgroundColor: 'rgba(255,107,0,0.1)' }}>
              <Zap size={24} color="var(--primary-orange)" />
            </div>
            <h4 style={styles.smallCardTitle}>{t.services.others.electrical.title}</h4>
            <div style={styles.smallList}>
              {t.services.others.electrical.options.map((opt: string) => (
                <span key={opt} style={styles.smallListItem}>• {opt}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <div style={styles.ctaBanner}>
          <div style={styles.bannerContent}>
            <Sparkles color="var(--primary-orange)" />
            <span>{lang === "en" ? "First-time customer? Ask for your 10% welcome discount!" : "¿Cliente nuevo? ¡Pida su 10% de descuento de bienvenida!"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "120px 0",
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    marginBottom: "80px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    marginBottom: "16px",
    fontFamily: "var(--font-lora), serif",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "var(--text-muted)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  featuredCard: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    backgroundColor: "var(--bg-offwhite)",
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    border: "1px solid rgba(0,0,0,0.02)",
    marginBottom: "100px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.03)",
  },
  featuredContent: {
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  featuredIconWrapper: {
    width: "72px",
    height: "72px",
    borderRadius: "20px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
  },
  featuredTitle: {
    fontSize: "2.4rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    fontFamily: "var(--font-lora), serif",
  },
  featuredDesc: {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    color: "var(--text-muted)",
    maxWidth: "500px",
  },
  featuredGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
    marginTop: "12px",
  },
  featuredItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  featuredItemText: {
    fontSize: "0.95rem",
    fontWeight: "600",
    color: "var(--primary-navy)",
  },
  featuredImageWrapper: {
    backgroundColor: "rgba(0,112,243,0.02)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderLeft: "1px solid rgba(0,0,0,0.05)",
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  subHeader: {
    textAlign: "center",
    marginBottom: "48px",
  },
  subTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    marginBottom: "12px",
    fontFamily: "var(--font-lora), serif",
  },
  subDesc: {
    fontSize: "1rem",
    color: "var(--text-muted)",
  },
  otherGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
  },
  smallCard: {
    padding: "40px",
    borderRadius: "var(--radius-md)",
    backgroundColor: "white",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  smallIconWrapper: {
    width: "56px",
    height: "56px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  smallCardTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    fontFamily: "var(--font-lora), serif",
  },
  smallList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  smallListItem: {
    fontSize: "0.95rem",
    color: "var(--text-muted)",
    fontWeight: "500",
  },
  ctaBanner: {
    marginTop: "80px",
    padding: "32px",
    borderRadius: "var(--radius-md)",
    backgroundColor: "var(--primary-navy)",
    color: "white",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(10, 25, 49, 0.15)",
  },
  bannerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    fontSize: "1.2rem",
    fontWeight: "600",
  }
};
