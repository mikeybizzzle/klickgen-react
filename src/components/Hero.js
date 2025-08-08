import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">Retention Revenue. <span>Unlocked.</span></h1>
        <p className="hero__subtitle">Email & SMS that compound lifetime value and keep profits flowing—post‑iOS 14.5.</p>
        <a href="#contact" className="btn">Get My Free Audit</a>
      </div>
    </section>
  );
}