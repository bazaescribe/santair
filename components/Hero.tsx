"use client";

import { Language, translations } from "@/lib/dictionary";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

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
            <div style={styles.taglineWrapper}>
              <span style={styles.tagline}>{t.tagline.ac}</span>
              <span style={{ ...styles.tagline, backgroundColor: 'rgba(249,115,22,0.1)', color: 'var(--primary-warm)' }}>{t.tagline.family}</span>
            </div>

            <h1 className="hero-title" style={styles.title}>
              {t.hero.title}
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-form-card"
            style={styles.formCard}
          >
            <div style={styles.formHeader}>
              <h2 style={styles.formTitle}>{t.form.title}</h2>
              <p style={styles.formSubtitle}>{lang === "en" ? "We usually reply within 5 minutes" : "Respondemos en menos de 5 minutos"}</p>
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
                    <label style={styles.label}>{t.form.serviceType}</label>
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

                  {/* Location & Phone */}
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
                  <p style={styles.formFooter}>{lang === "en" ? "Safe and secure. No hidden fees." : "Seguro y confiable. Sin cargos ocultos."}</p>
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
                  <h3 style={{ fontFamily: 'var(--font-lora)', fontSize: '1.8rem' }}>{lang === "en" ? "Talk to you soon!" : "¡Hablamos pronto!"}</h3>
                  <p style={{ marginTop: '10px' }}>{t.form.success}</p>
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
    padding: "120px 0 100px",
    minHeight: "95vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    color: "var(--primary-navy)",
    backgroundColor: "var(--bg-offwhite)",
    overflow: "hidden",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 0.9fr",
    gap: "80px",
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
  taglineWrapper: {
    display: "flex",
    gap: "12px",
    marginBottom: "24px",
  },
  tagline: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "100px",
    backgroundColor: "rgba(0,112,243,0.1)",
    color: "var(--primary-blue)",
    fontSize: "0.85rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "24px",
    letterSpacing: "-1.5px",
    color: "var(--primary-navy)",
    fontFamily: "var(--font-lora), serif",
  },
  subtitle: {
    fontSize: "1.25rem",
    lineHeight: "1.6",
    marginBottom: "48px",
    color: "var(--text-muted)",
    maxWidth: "520px",
  },
  testimonial: {
    backgroundColor: "white",
    padding: "32px",
    borderRadius: "28px",
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    maxWidth: "480px",
  },
  testimonialProfile: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
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
  stars: {
    display: "flex",
    gap: "4px",
    marginBottom: "4px",
  },
  author: {
    fontSize: "0.95rem",
    fontWeight: "700",
  },
  authorRole: {
    fontSize: "0.75rem",
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  quote: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    fontStyle: "italic",
    color: "var(--primary-navy)",
    opacity: 0.8,
  },
  formColumn: {
    display: "flex",
    justifyContent: "flex-end",
  },
  formCard: {
    backgroundColor: "white",
    padding: "48px",
    borderRadius: "var(--radius-lg)",
    width: "100%",
    maxWidth: "520px",
    color: "var(--primary-navy)",
    boxShadow: "0 40px 120px rgba(0,0,0,0.08)",
    border: "1px solid rgba(0,0,0,0.02)",
  },
  formHeader: {
    marginBottom: "36px",
    textAlign: "center",
  },
  formTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    marginBottom: "10px",
    fontFamily: "var(--font-lora), serif",
  },
  formSubtitle: {
    fontSize: "0.95rem",
    color: "var(--text-muted)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "700",
    color: "var(--primary-navy)",
    opacity: 0.8,
  },
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  pill: {
    padding: "10px 18px",
    borderRadius: "100px",
    backgroundColor: "#F1F5F9",
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "var(--text-muted)",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
  },
  activePill: {
    backgroundColor: "white",
    color: "var(--primary-blue)",
    borderColor: "var(--primary-blue)",
    boxShadow: "0 4px 12px rgba(0,112,243,0.1)",
  },
  selectWrapper: {
    position: "relative",
  },
  select: {
    width: "100%",
    padding: "18px 24px",
    borderRadius: "18px",
    border: "1px solid #E2E8F0",
    backgroundColor: "#F8FAFC",
    fontSize: "1rem",
    fontWeight: "600",
    color: "var(--primary-navy)",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 24px center",
    backgroundSize: "16px",
    transition: "var(--transition)",
    outline: "none",
  },
  formRow: {
    display: "flex",
    gap: "20px",
  },
  formCol: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  },
  input: {
    width: "100%",
    padding: "18px 24px",
    borderRadius: "18px",
    border: "1px solid #E2E8F0",
    backgroundColor: "#F8FAFC",
    fontSize: "1rem",
    fontWeight: "600",
    color: "var(--primary-navy)",
    outline: "none",
    transition: "var(--transition)",
  },
  submitBtn: {
    backgroundColor: "var(--primary-blue)",
    color: "white",
    padding: "22px",
    borderRadius: "20px",
    fontSize: "1.1rem",
    fontWeight: "700",
    marginTop: "8px",
    boxShadow: "0 10px 25px rgba(0, 112, 243, 0.2)",
    cursor: "pointer",
  },
  formFooter: {
    textAlign: "center",
    fontSize: "0.8rem",
    color: "var(--text-muted)",
    marginTop: "-4px",
  },
  successMsg: {
    textAlign: "center",
    padding: "40px 0",
  },
  successIcon: {
    width: "72px",
    height: "72px",
    backgroundColor: "#10B981",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
  }
};
