"use client";

import { Language, translations } from "@/lib/dictionary";
import { motion } from "framer-motion";

interface RecentWorkMarqueeProps {
  lang: Language;
}

const PHOTOS = [
  "/photos/service-1.jpeg",
  "/photos/service-2.jpeg",
  "/photos/service-3.jpeg",
  "/photos/service-4.jpeg",
  "/photos/service-5.jpeg",
  "/photos/service-6.jpeg",
  "/photos/service-7.jpeg",
  "/photos/service-8.jpeg",
  "/photos/service-9.jpeg",
];

export default function RecentWorkMarquee({ lang }: RecentWorkMarqueeProps) {
  const t = translations[lang];

  return (
    <section style={styles.section}>
      <div className="container">
        <div style={styles.header}>
          <h2 style={styles.title}>{t.recentWork.title}</h2>
          <p style={styles.subtitle}>{t.recentWork.subtitle}</p>
        </div>
      </div>

      <div style={styles.marqueeContainer}>
        <motion.div
          style={styles.marqueeTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {/* First set of photos */}
          {PHOTOS.map((src, index) => (
            <div key={`first-${index}`} className="photo-wrapper" style={styles.photoWrapper}>
              <img src={src} alt="SantAir Recent Work" className="photo-feed-img" style={styles.photo} />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {PHOTOS.map((src, index) => (
            <div key={`second-${index}`} className="photo-wrapper" style={styles.photoWrapper}>
              <img src={src} alt="SantAir Recent Work" className="photo-feed-img" style={styles.photo} />
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .photo-wrapper {
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          background: #f4f4f5;
        }
        .photo-feed-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(25%) contrast(1.1);
          transform: scale(1.01);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }
        .photo-wrapper:hover .photo-feed-img {
          filter: grayscale(0%) contrast(1);
          transform: scale(1.08);
        }
      `}</style>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: "80px 0 120px 0",
    backgroundColor: "white",
    overflow: "hidden",
  },
  header: {
    textAlign: "center",
    marginBottom: "50px",
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
  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    padding: "20px 0",
  },
  marqueeTrack: {
    display: "flex",
    gap: "32px",
    width: "max-content",
    paddingLeft: "32px", // Initial gap so the first item has space from edge if needed, or consistent spacing
  },
  photoWrapper: {
    width: "320px",
    height: "240px",
    flexShrink: 0,
    position: "relative",
    cursor: "pointer",
    border: "4px solid white", // Creates a nice framing effect
  },
  photo: {
    // handled by CSS class for hover transitions
  }
};
