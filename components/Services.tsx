"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { Snowflake, Wrench, Droplets, Zap, Shield, Sparkles } from "lucide-react";

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang];

  const services = [
    {
      key: "ac",
      icon: <Snowflake size={32} color="var(--primary-blue)" />,
      data: t.services.ac
    },
    {
      key: "repairs",
      icon: <Wrench size={32} color="var(--primary-orange)" />,
      data: t.services.repairs
    },
    {
      key: "plumbing",
      icon: <Droplets size={32} color="var(--primary-blue)" />,
      data: t.services.plumbing
    },
    {
      key: "electrical",
      icon: <Zap size={32} color="var(--primary-orange)" />,
      data: t.services.electrical
    }
  ];

  return (
    <section id="services" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>{lang === "en" ? "Our Core Services" : "Nuestros Servicios"}</h2>
          <p style={styles.subtitle}>
            {lang === "en"
              ? "Everything you need to keep your property running smoothly."
              : "Todo lo que necesita para mantener su propiedad en perfecto estado."}
          </p>
        </div>

        <div style={styles.grid}>
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              style={styles.card}
            >
              <div style={styles.iconWrapper}>{s.icon}</div>
              <h3 style={styles.cardTitle}>{s.data.title}</h3>
              <p style={styles.cardDesc}>{s.data.desc}</p>
              <ul style={styles.list}>
                {s.data.options.slice(0, 3).map(opt => (
                  <li key={opt} style={styles.listItem}>
                    <Shield size={14} color="var(--primary-blue)" /> {opt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div style={styles.ctaBanner}>
          <div style={styles.bannerContent}>
            <Sparkles color="var(--primary-orange)" />
            <span>{lang === "en" ? "Special offer: 10% off for first-time customers!" : "Oferta especial: ¡10% de descuento para nuevos clientes!"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "100px 0",
    backgroundColor: "white",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "900",
    color: "var(--primary-navy)",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "var(--text-muted)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    padding: "40px",
    borderRadius: "var(--radius-lg)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
    border: "1px solid rgba(0,0,0,0.05)",
    transition: "var(--transition)",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "var(--bg-offwhite)",
  },
  iconWrapper: {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 16px rgba(0,0,0,0.05)",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "var(--primary-navy)",
  },
  cardDesc: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "var(--text-muted)",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "var(--primary-navy)",
  },
  ctaBanner: {
    marginTop: "60px",
    padding: "24px",
    borderRadius: "var(--radius-md)",
    backgroundColor: "var(--primary-navy)",
    color: "white",
    textAlign: "center",
  },
  bannerContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    fontSize: "1.1rem",
    fontWeight: "700",
  }
};
