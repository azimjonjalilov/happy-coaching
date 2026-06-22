import { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    text: "I gained so much ",
    bold: "confidence",
    rest: " in my ability to connect and deepen my relationships with people.",
    name: "Jane",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    id: 2,
    text: "I gained so much confidence in my ability to connect and deepen my relationships with people.",
    bold: null,
    rest: null,
    name: "Catherine",
    rating: 1,
    avatar: "https://i.pravatar.cc/80?img=44",
  },
  {
    id: 3,
    text: "I gained so much confidence in my ability to connect and deepen my relationships with people.",
    bold: null,
    rest: null,
    name: "Jane",
    rating: 1,
    avatar: "https://i.pravatar.cc/80?img=32",
  },
  {
    id: 4,
    text: "Working with this coach completely changed my perspective on life and relationships.",
    bold: "changed",
    rest: " my perspective on life and relationships.",
    name: "Sarah",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=10",
  },
  {
    id: 5,
    text: "I never thought I could feel this level of peace and clarity in my everyday life.",
    bold: null,
    rest: null,
    name: "Michael",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 6,
    text: "Truly transformative experience. I feel more grounded and connected than ever before.",
    bold: "transformative",
    rest: " experience. I feel more grounded and connected than ever before.",
    name: "Emma",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=20",
  },
];

function StarRating({ rating, max = 5 }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#F5C518" : "#D9D9D9"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>
        &ldquo;
        {t.bold ? (
          <>
            {t.text}
            <strong className={styles.bold}>{t.bold}</strong>
            {t.rest}
          </>
        ) : (
          t.text
        )}
        &rdquo;
      </p>
      <div className={styles.footer}>
        <p className={styles.name}>{t.name}</p>
        <img src={t.avatar} alt={t.name} width={44} height={44} className={styles.avatar} />
        <StarRating rating={t.rating} />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [offset, setOffset] = useState(0);
  const total = testimonials.length;

  const prev = () => setOffset((o) => (o - 1 + total) % total);
  const next = () => setOffset((o) => (o + 1) % total);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [offset]);

  const visible = [0, 1, 2].map((i) => testimonials[(offset + i) % total]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Hear out what my clients say about me.</h2>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous">&#8592;</button>

        <div className={styles.cardsRow}>
          {visible.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>

        <button className={styles.arrow} onClick={next} aria-label="Next">&#8594;</button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === offset ? styles.activeDot : ""}`}
            onClick={() => setOffset(i)}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
