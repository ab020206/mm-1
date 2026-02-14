// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Projects from './pages/Projects';
import Technologies from './pages/Technologies';

const App = () => {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, position: 'relative' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/technologies" element={<Technologies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
