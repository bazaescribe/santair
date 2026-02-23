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
  const [category, setCategory] = useState<string>("ac");
  const [specificService, setSpecificService] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const categories = [
    { id: "ac", label: t.services.ac.title, options: t.services.ac.options },
    { id: "electric", label: t.services.lightServices.electric.title, options: t.services.lightServices.electric.options },
    { id: "plumbing", label: t.services.lightServices.plumbing.title, options: t.services.lightServices.plumbing.options },
    { id: "maintenance", label: t.services.lightServices.maintenance.title, options: t.services.lightServices.maintenance.options }
  ];

  const currentOptions = categories.find(c => c.id === category)?.options || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = t.contact.phone.replace(/\D/g, "");
    const message = lang === "en"
      ? `Hi, I need help with ${specificService} in ${location}.`
      : `Hola, necesito ayuda con ${specificService} en ${location}.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const featuredTestimonial = t.testimonials[0];

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
                  <img src="https://ui-avatars.com/api/?name=Sarah+Miller&background=FF6B00&color=fff" alt="User" style={styles.avatarImg} />
                </div>
                <div>
                  <div style={styles.stars}>
                    {[...Array(featuredTestimonial.stars)].map((_, i) => <Star key={i} size={14} fill="var(--primary-orange)" color="var(--primary-orange)" />)}
                  </div>
                  <p style={styles.author}>{featuredTestimonial.name}</p>
                  <p style={styles.authorRole}>{featuredTestimonial.city} • {featuredTestimonial.service}</p>
                </div>
              </div>
              <p style={styles.quote}>"{featuredTestimonial.quote}"</p>
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

            <form
              onSubmit={handleSubmit}
              style={styles.form}
            >

              {/* Category Dropdown */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>{t.form.serviceType}*</label>
                <div style={styles.selectWrapper}>
                  <select
                    required
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      setSpecificService("");
                    }}
                    style={styles.select}
                  >
                    {categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                  </select>
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
                    {currentOptions.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              {/* Location Dropdown */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>{t.form.location}*</label>
                <div style={styles.selectWrapper}>
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
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{ ...styles.submitBtn, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                {lang === "en" ? "Book via WhatsApp" : "Agendar por WhatsApp"}
              </motion.button>
              <p style={styles.formFooter}>{lang === "en" ? "Fast response directly to your phone." : "Respuesta rápida directamente a su teléfono."}</p>
            </form>
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
