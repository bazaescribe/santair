"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { Search, ShieldCheck, DollarSign, Sparkles, Zap, MessageCircle } from "lucide-react";

interface WhyChooseUsProps {
  lang: Language;
}

const icons = [Search, ShieldCheck, DollarSign, Sparkles, Zap, MessageCircle];

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = translations[lang];

  return (
    <section id="why-us" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>{t.whyChooseUs.title}</h2>
        </div>

        <div style={styles.grid}>
          {t.whyChooseUs.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={styles.card}
              >
                <div style={styles.iconWrapper}>
                  <Icon size={32} color="var(--primary-blue)" />
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "100px 0",
    backgroundColor: "var(--bg-offwhite)",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    fontFamily: "var(--font-lora), serif",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "32px",
  },
  card: {
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    border: "1px solid rgba(0,0,0,0.02)",
  },
  iconWrapper: {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
    backgroundColor: "rgba(0,112,243,0.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  },
  cardTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    fontFamily: "var(--font-lora), serif",
  },
  cardDesc: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "var(--text-muted)",
  },
};
