import React, { useEffect, useRef, useState } from "react";
import '../Components/Css/AboutCounterr.css'

/* ------------------------------------------------------------------ */
/*  DATA — apni numbers yahan daal dijiye                              */
/* ------------------------------------------------------------------ */

const STATS = [
  { end: 1240, suffix: "+", label: "Job Done" },
  { end: 1055, suffix: "+", label: "Current Clients" },
  { end: 100, suffix: "+", label: "Workers" },
  { end: 24, suffix: "/7", label: "Service" },
];

const DURATION = 1600; // ms — poori animation kitni der chalegi

/* ------------------------------------------------------------------ */
/*  SINGLE COUNTER                                                     */
/* ------------------------------------------------------------------ */

function Counter({ end, suffix, label, start }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / DURATION, 1);
      // ease-out — shuru me tez, aakhir me slow
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, end]);

  return (
    <div className="stat">
      <p className="stat__number">
        {value.toLocaleString("en-IN")}
        {suffix}
      </p>
      <div className="stat__label-wrap">
        <p className="stat__label">{label}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION — IntersectionObserver se detect karta hai ki screen par   */
/*  aaya ya nahi, tabhi counting shuru hoti hai                        */
/* ------------------------------------------------------------------ */

export default function StatsCounter() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // sirf ek baar chale
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-section__grid">
        {STATS.map((s) => (
          <Counter key={s.label} end={s.end} suffix={s.suffix} label={s.label} start={visible} />
        ))}
      </div>
    </section>
  );
}