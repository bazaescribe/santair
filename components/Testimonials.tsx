"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang];

  return (
    <section id="testimonials" style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>{lang === "en" ? "What Our Neighbors Say" : "Lo que Dicen Nuestros Vecinos"}</h2>
          <p style={styles.subtitle}>{lang === "en" ? "Real stories from local Orlando residents." : "Historias reales de residentes locales en Orlando."}</p>
        </div>

        <div style={styles.grid}>
          {t.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={styles.card}
            >
              <div style={styles.quoteIcon}>
                <Quote size={24} color="rgba(0,112,243,0.1)" fill="rgba(0,112,243,0.1)" />
              </div>
              <div style={styles.stars}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary-orange)" color="var(--primary-orange)" />
                ))}
              </div>
              <p style={styles.quote}>"{testimonial.quote}"</p>
              <div style={styles.footer}>
                <div style={styles.avatar}>
                  <img
                    src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=0070f3&color=fff`}
                    alt={testimonial.name}
                    style={styles.avatarImg}
                  />
                </div>
                <div>
                  <h4 style={styles.name}>{testimonial.name}</h4>
                  <p style={styles.meta}>{testimonial.city} • {testimonial.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
    fontFamily: "var(--font-lora), serif",
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "var(--text-muted)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
  },
  card: {
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "32px",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.02)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    position: "relative",
  },
  quoteIcon: {
    position: "absolute",
    top: "30px",
    right: "30px",
  },
  stars: {
    display: "flex",
    gap: "4px",
  },
  quote: {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    color: "var(--primary-navy)",
    fontStyle: "italic",
    opacity: 0.9,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginTop: "auto",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
  },
  meta: {
    fontSize: "0.85rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "600",
  },
};
