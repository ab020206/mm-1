import React, { useState, useEffect } from 'react';

const projects = [
  { name: 'Project Alpha', country: 'India' },
  { name: 'Project Beta', country: 'Kenya' },
  { name: 'Project Gamma', country: 'UAE' },
  { name: 'Project Delta', country: 'Nepal' },
];

const Projects = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (index) => index === focusedIndex || index === hoveredIndex;

  const getItemStyle = (index) => ({
    ...itemStyle,
    background: isActive(index)
      ? 'linear-gradient(135deg, #a5d6a7, #81c784)'
      : 'transparent',
    boxShadow: isActive(index)
      ? '0 8px 16px rgba(46, 125, 50, 0.3)'
      : 'none',
    outline: focusedIndex === index ? '3px solid #2e7d32' : 'none',
    transform: hoveredIndex === index ? 'scale(1.04)' : 'scale(1)',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
  });

  return (
    <section
      aria-labelledby="projects-heading"
      style={{
        ...sectionStyle,
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <h2 id="projects-heading" tabIndex={-1} style={headingStyle}>
        Key Projects & Installations
        <hr style={dividerStyle} />
      </h2>
      <ul style={listStyle}>
        {projects.map((proj, idx) => (
          <li
            key={idx}
            style={getItemStyle(idx)}
            tabIndex={0}
            aria-label={`${proj.name} in ${proj.country}`}
            onFocus={() => setFocusedIndex(idx)}
            onBlur={() => setFocusedIndex(null)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span role="img" aria-label="location pin" style={iconStyle}>
              📍
            </span>
            <strong>{proj.name}</strong> - {proj.country}
          </li>
        ))}
      </ul>
      <p style={summaryStyle}>
        Over <strong>400+</strong> successful installations across <strong>15+ countries</strong>.
      </p>
    </section>
  );
};

const sectionStyle = {
  maxWidth: '800px',
  margin: '2.5rem auto',
  padding: '2rem',
  backgroundColor: '#e8f5e9', // light green background
  borderRadius: '15px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#2e7d32', // primary green text
  boxShadow: '0 4px 15px rgba(46, 125, 50, 0.1)',
};

const headingStyle = {
  fontSize: '2.4rem',
  textAlign: 'center',
  marginBottom: '1rem',
  color: '#2e7d32',
  fontWeight: '700',
};

const dividerStyle = {
  width: '80px',
  height: '5px',
  backgroundColor: '#81c784',
  borderRadius: '3px',
  margin: '0.5rem auto 2rem',
  border: 'none',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const itemStyle = {
  fontSize: '1.25rem',
  padding: '1rem 1.5rem',
  borderBottom: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  outline: 'none',
  userSelect: 'none',
};

const iconStyle = {
  fontSize: '1.6rem',
  color: '#4caf50',
  minWidth: '28px',
  flexShrink: 0,
};

const summaryStyle = {
  marginTop: '2rem',
  fontSize: '1.25rem',
  textAlign: 'center',
  color: '#2e7d32',
  fontWeight: '600',
};

export default Projects;
