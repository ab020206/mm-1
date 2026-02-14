// src/pages/Technologies.jsx
import React, { useState } from 'react';

const anaerobicTech = [
  "UASB Process",
  "Fixed Film Reactor",
  "Thermophilic CSTR",
];

const aerobicTech = [
  "SBR (Sequential Batch Reactor)",
  "MBBR (Moving Bed Biofilm Reactor)",
  "MBR (Membrane Bio Reactor)",
  "SAF (Submerged Aerated Filter)",
  "ASP (Activated Sludge Process)",
  "Bio Filters",
];

const Technologies = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [focusedCategory, setFocusedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const isActive = (category, index) =>
    (focusedCategory === category && focusedIndex === index) ||
    (hoveredCategory === category && hoveredIndex === index);

  const getItemStyle = (category, index) => {
    const active = isActive(category, index);
    return {
      ...itemStyle,
      background: active
        ? 'linear-gradient(135deg, #a5d6a7, #66bb6a)'
        : 'transparent',
      color: active ? '#fff' : '#2c3e50',
      boxShadow: active
        ? '0 8px 15px rgba(102, 187, 106, 0.4)'
        : '0 2px 5px rgba(0,0,0,0.08)',
      borderRadius: active ? 12 : 8,
      transform: active ? 'scale(1.05)' : 'scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      outline: active ? '2px solid #388e3c' : 'none',
      cursor: 'pointer',
      fontWeight: active ? '600' : '500',
    };
  };

  return (
    <section aria-labelledby="technologies-heading" style={sectionStyle}>
      <h2 id="technologies-heading" tabIndex={-1} style={headingStyle}>
        Technologies We Use
      </h2>

      <div style={techBlockStyle}>
        <h3 style={subheadingStyle}>Anaerobic Technologies</h3>
        <ul style={listStyle}>
          {anaerobicTech.map((tech, i) => (
            <li
              key={i}
              style={getItemStyle('anaerobic', i)}
              tabIndex={0}
              aria-label={`Anaerobic technology: ${tech}`}
              onFocus={() => {
                setFocusedIndex(i);
                setFocusedCategory('anaerobic');
              }}
              onBlur={() => {
                setFocusedIndex(null);
                setFocusedCategory(null);
              }}
              onMouseEnter={() => {
                setHoveredIndex(i);
                setHoveredCategory('anaerobic');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setHoveredCategory(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill={isActive('anaerobic', i) ? '#fff' : '#388e3c'}
                viewBox="0 0 24 24"
                style={{ marginRight: 8, flexShrink: 0 }}
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div style={techBlockStyle}>
        <h3 style={subheadingStyle}>Aerobic Technologies</h3>
        <ul style={listStyle}>
          {aerobicTech.map((tech, i) => (
            <li
              key={i}
              style={getItemStyle('aerobic', i)}
              tabIndex={0}
              aria-label={`Aerobic technology: ${tech}`}
              onFocus={() => {
                setFocusedIndex(i);
                setFocusedCategory('aerobic');
              }}
              onBlur={() => {
                setFocusedIndex(null);
                setFocusedCategory(null);
              }}
              onMouseEnter={() => {
                setHoveredIndex(i);
                setHoveredCategory('aerobic');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setHoveredCategory(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill={isActive('aerobic', i) ? '#fff' : '#388e3c'}
                viewBox="0 0 24 24"
                style={{ marginRight: 8, flexShrink: 0 }}
              >
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14H8v-4h2v4zm3 0h-2v-6h2v6zm3 0h-2v-2h2v2z" />
              </svg>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <p style={footerTextStyle}>
        Technology collaborations with <strong>IIT Kharagpur</strong> and <strong>NEERI</strong>.
      </p>

      {/* CTA Section */}
      <section className="section bg-primary text-center" style={{ color: 'white', marginTop: '4rem', borderRadius: '18px' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Need a customized solution?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', opacity: 0.9 }}>
            Our engineers are ready to design the perfect system for your requirements.
            Download our detailed catalog or request a quote today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>Request Consultation</a>
            <button className="btn" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Download Catalog</button>
          </div>
        </div>
      </section>
    </section>
  );
};

const sectionStyle = {
  maxWidth: '720px',
  margin: '2rem auto',
  padding: '2rem 2rem 3rem',
  background:
    'linear-gradient(135deg, #e8f5e9 30%, #a5d6a7 90%)',
  borderRadius: '18px',
  boxShadow: '0 15px 40px rgba(56, 142, 60, 0.25)',
  fontFamily: "'Poppins', sans-serif",
  color: '#1b5e20',
  userSelect: 'none',
};

const headingStyle = {
  fontSize: '2.5rem',
  marginBottom: '2rem',
  textAlign: 'center',
  color: '#2e7d32',
  fontWeight: '800',
  letterSpacing: '0.04em',
  textShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

const subheadingStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#388e3c',
  fontWeight: '700',
  textShadow: '0 1px 2px rgba(0,0,0,0.1)',
};

const techBlockStyle = {
  marginBottom: '2rem',
};

const listStyle = {
  listStyle: 'none',
  paddingLeft: 0,
  fontSize: '1.15rem',
  lineHeight: 1.8,
};

const itemStyle = {
  padding: '0.6rem 1rem',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 8,
  transition: 'all 0.3s ease',
};

const footerTextStyle = {
  fontStyle: 'italic',
  textAlign: 'center',
  color: '#2e7d32',
  marginTop: '2rem',
  fontWeight: '600',
};

export default Technologies;
