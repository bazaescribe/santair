"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { Heart, Star, ShieldCheck } from "lucide-react";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = translations[lang];

  return (
    <section id="about" style={styles.section}>
      <div className="container">
        <div style={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={styles.content}
          >
            <h2 style={styles.title}>{t.about.title}</h2>
            <p style={styles.story}>{t.about.story}</p>

            <div style={{ marginTop: '32px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '16px', fontFamily: 'var(--font-lora), serif' }}>{t.about.missionTitle}</h3>
              <p style={{ ...styles.story, marginBottom: 0 }}>{t.about.mission}</p>
            </div>

            <div style={styles.values}>
              {t.about.values.map((value, index) => (
                <div key={index} style={styles.valueItem}>
                  <div style={styles.bullet}>
                    <Star size={14} fill="var(--primary-orange)" color="var(--primary-orange)" />
                  </div>
                  <span style={styles.valueText}>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={styles.imageWrapper}
          >
            <div style={styles.imageOverlay}>
              <div style={styles.storyCard}>
                <div style={styles.iconCircle}>
                  <Heart size={24} color="white" fill="white" />
                </div>
                <h3 style={styles.storyCardTitle}>
                  {lang === "en" ? "Rooted in Orlando" : "Arraigados en Orlando"}
                </h3>
                <p style={styles.storyCardText}>
                  {lang === "en"
                    ? "Providing honest AC service since day one."
                    : "Servicio de AC honesto desde el primer día."}
                </p>
              </div>
            </div>
            {/* Visual placeholder for a real photo of the owners/team */}
            <div style={styles.photoPlaceholder}>
              <img
                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&q=80&w=800"
                alt="About SantAir"
                style={styles.img}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "120px 0",
    backgroundColor: "white",
    overflow: "hidden",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "80px",
    alignItems: "center",
  },
  content: {
    maxWidth: "560px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    marginBottom: "32px",
    fontFamily: "var(--font-lora), serif",
  },
  story: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    color: "var(--text-muted)",
    marginBottom: "40px",
  },
  values: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  valueItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  bullet: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "rgba(255,107,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "var(--primary-navy)",
  },
  imageWrapper: {
    position: "relative",
  },
  photoPlaceholder: {
    borderRadius: "40px",
    overflow: "hidden",
    boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
    height: "500px",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  imageOverlay: {
    position: "absolute",
    bottom: "-30px",
    left: "-30px",
    zIndex: 2,
  },
  storyCard: {
    backgroundColor: "var(--primary-navy)",
    padding: "32px",
    borderRadius: "28px",
    color: "white",
    maxWidth: "240px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  iconCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "16px",
    backgroundColor: "var(--primary-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  storyCardTitle: {
    fontSize: "1.4rem",
    fontWeight: "700",
    marginBottom: "8px",
    fontFamily: "var(--font-lora), serif",
  },
  storyCardText: {
    fontSize: "0.9rem",
    opacity: 0.8,
    lineHeight: "1.5",
  },
};
