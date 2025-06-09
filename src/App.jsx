// src/App.jsx
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as THREE from 'three';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Clients from './pages/Clients';

const App = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.fog.min").then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x00ffcc, // aqua
          midtoneColor: 0x4caf50,    // medium green
          lowlightColor: 0x2e7d32,   // darker green
          blurFactor: 0.55,
          speed: 2.0,
          zoom: 1.2,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ minHeight: '100vh', width: '100%', overflow: 'hidden' }}>
      <Router>
        <Navbar />
        <main style={{ padding: '1rem', zIndex: 1, position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
