import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Work />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
