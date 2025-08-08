import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Work from './components/Work';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles init={particlesInit} options={{
        fpsLimit: 60,
        particles: {
          number: { value: 45 },
          color: { value: '#00ff94' },
          shape: { type: 'circle' },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 0.6, outModes: 'out' },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' } },
          modes: { repulse: { distance: 75 } },
        },
        fullScreen: { enable: false },
      }} />
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

export default App;