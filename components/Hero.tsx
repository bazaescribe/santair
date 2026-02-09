"use client";

import { Language, translations } from "@/lib/dictionary";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Wrench, CheckCircle2, ChevronRight, Phone, Star } from "lucide-react";

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];
  const [serviceType, setServiceType] = useState<string>("ac");
  const [specificService, setSpecificService] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const serviceCategories = [
    { id: "ac", label: t.services.ac.title, options: t.services.ac.options },
    { id: "repairs", label: t.services.repairs.title, options: t.services.repairs.options },
    { id: "plumbing", label: t.services.plumbing.title, options: t.services.plumbing.options },
    { id: "electrical", label: t.services.electrical.title, options: t.services.electrical.options },
  ];

  const currentOptions = serviceCategories.find(c => c.id === serviceType)?.options || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section style={styles.hero}>
      <div className="container hero-grid" style={styles.grid}>
        {/* Left Side: Content & Testimonial */}
        <div className="hero-content" style={styles.contentColumn}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.content}
          >
            <h1 className="hero-title" style={styles.title}>
              {t.hero.title.toUpperCase()}
            </h1>

            <p style={styles.subtitle}>{t.hero.subtitle}</p>

            {/* Testimonial */}
            <div style={styles.testimonial}>
              <div style={styles.testimonialProfile}>
                <div style={styles.avatar}>
                  <img src="https://ui-avatars.com/api/?name=Marc+Johnson&background=FF6B00&color=fff" alt="User" style={styles.avatarImg} />
                </div>
                <div>
                  <div style={styles.stars}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--primary-orange)" color="var(--primary-orange)" />)}
                  </div>
                  <p style={styles.author}>{t.testimonial.username}</p>
                  <p style={styles.authorRole}>{t.testimonial.role}</p>
                </div>
              </div>
              <p style={styles.quote}>"{t.testimonial.quote}"</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Form Card */}
        <div className="hero-form-column" style={styles.formColumn}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-form-card"
            style={styles.formCard}
          >
            <div style={styles.formHeader}>
              <h2 style={styles.formTitle}>{t.form.title}</h2>
              <p style={styles.formSubtitle}>{lang === "en" ? "Please fill out the details" : "Por favor, complete los detalles"}</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  style={styles.form}
                >
                  {/* Service Type Pills */}
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>{t.form.serviceType}*</label>
                    <div style={styles.pills}>
                      {serviceCategories.map(cat => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => {
                            setServiceType(cat.id);
                            setSpecificService("");
                          }}
                          style={{
                            ...styles.pill,
                            ...(serviceType === cat.id ? styles.activePill : {})
                          }}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specific Service Dropdown */}
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>{t.form.specificService}*</label>
                    <div style={styles.selectWrapper}>
                      <select
                        required
                        value={specificService}
                        onChange={(e) => setSpecificService(e.target.value)}
                        style={styles.select}
                      >
                        <option value="">{t.form.selectService}</option>
                        {currentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Location & Phone - Stacks on small screens via CSS */}
                  <div className="form-row" style={styles.formRow}>
                    <div className="form-col" style={styles.formCol}>
                      <label style={styles.label}>{t.form.location}*</label>
                      <select
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={styles.select}
                      >
                        <option value="">{t.form.selectLocation}</option>
                        {t.locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                      </select>
                    </div>

                    <div className="form-col" style={styles.formCol}>
                      <label style={styles.label}>{t.form.phone}*</label>
                      <input
                        type="tel"
                        required
                        placeholder="+34 ..."
                        style={styles.input}
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={styles.submitBtn}
                  >
                    {t.form.submit}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={styles.successMsg}
                >
                  <div style={styles.successIcon}>
                    <CheckCircle2 size={40} color="white" />
                  </div>
                  <h3>{lang === "en" ? "Thank You!" : "¡Gracias!"}</h3>
                  <p>{t.form.success}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    padding: "100px 0",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    color: "white",
    backgroundImage: "linear-gradient(90deg, rgba(10, 25, 49, 0.95) 0%, rgba(10, 25, 49, 0.8) 50%, rgba(10, 25, 49, 0.4) 100%), url('/hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "var(--primary-navy)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: "60px",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
  },
  contentColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  content: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "4.5rem",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "24px",
    letterSpacing: "-2px",
  },
  subtitle: {
    fontSize: "1.25rem",
    lineHeight: "1.5",
    marginBottom: "48px",
    opacity: 0.9,
    maxWidth: "500px",
  },
  testimonial: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    padding: "30px",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "500px",
  },
  testimonialProfile: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "2px solid var(--primary-orange)",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  stars: {
    display: "flex",
    gap: "4px",
    marginBottom: "4px",
  },
  author: {
    fontSize: "1rem",
    fontWeight: "800",
  },
  authorRole: {
    fontSize: "0.8rem",
    opacity: 0.7,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  quote: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    fontStyle: "italic",
    opacity: 0.9,
  },
  formColumn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  formCard: {
    backgroundColor: "white",
    padding: "48px",
    borderRadius: "40px",
    width: "100%",
    maxWidth: "540px",
    color: "var(--primary-navy)",
    boxShadow: "0 40px 100px rgba(0,0,0,0.3)",
  },
  formHeader: {
    marginBottom: "32px",
  },
  formTitle: {
    fontSize: "2.2rem",
    fontWeight: "900",
    color: "var(--primary-blue)",
    marginBottom: "8px",
    letterSpacing: "-1px",
  },
  formSubtitle: {
    fontSize: "1rem",
    color: "var(--text-muted)",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "800",
    opacity: 0.8,
    marginBottom: "4px",
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  pill: {
    padding: "10px 16px",
    borderRadius: "100px",
    backgroundColor: "#f0f4f8",
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "var(--text-muted)",
    transition: "all 0.3s ease",
  },
  activePill: {
    backgroundColor: "var(--primary-blue)",
    color: "white",
  },
  selectWrapper: {
    position: "relative",
  },
  select: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "16px",
    border: "2px solid #f0f4f8",
    backgroundColor: "#f9fbff",
    fontSize: "1rem",
    fontWeight: "600",
    color: "var(--primary-navy)",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230A1931'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 20px center",
    backgroundSize: "14px",
  },
  formRow: {
    display: "flex",
    gap: "16px",
  },
  formCol: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    flex: 1,
  },
  input: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "16px",
    border: "2px solid #f0f4f8",
    backgroundColor: "#f9fbff",
    fontSize: "1rem",
    fontWeight: "600",
  },
  submitBtn: {
    backgroundColor: "var(--primary-blue)",
    color: "white",
    padding: "20px",
    borderRadius: "18px",
    fontSize: "1.1rem",
    fontWeight: "900",
    marginTop: "12px",
    boxShadow: "0 15px 30px rgba(0, 210, 255, 0.3)",
    cursor: "pointer",
  },
  successMsg: {
    textAlign: "center",
    padding: "40px 0",
  },
  successIcon: {
    width: "80px",
    height: "80px",
    backgroundColor: "var(--primary-blue)",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
  }
};
