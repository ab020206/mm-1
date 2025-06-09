import React, { useState, useEffect } from 'react';
import { FaIndustry } from 'react-icons/fa';

const sectors = [
  {
    name: "Distillery",
    description: "Description for Distillery sector. Placeholder text describing industry details.",
    image: "https://via.placeholder.com/400x250?text=Distillery+Image",
  },
  {
    name: "Brewery, Food & Beverages",
    description: "Description for Brewery, Food & Beverages sector.",
    image: "https://via.placeholder.com/400x250?text=Brewery+Image",
  },
  {
    name: "Sugar",
    description: "Description for Sugar sector.",
    image: "https://via.placeholder.com/400x250?text=Sugar+Image",
  },
  {
    name: "Pulp & Paper",
    description: "Description for Pulp & Paper sector.",
    image: "https://via.placeholder.com/400x250?text=Pulp+%26+Paper+Image",
  },
  {
    name: "Dairy",
    description: "Description for Dairy sector.",
    image: "https://via.placeholder.com/400x250?text=Dairy+Image",
  },
  {
    name: "Pharma",
    description: "Description for Pharma sector.",
    image: "https://via.placeholder.com/400x250?text=Pharma+Image",
  },
  {
    name: "Sewage",
    description: "Description for Sewage sector.",
    image: "https://via.placeholder.com/400x250?text=Sewage+Image",
  },
  {
    name: "Water Treatment",
    description: "Description for Water Treatment sector.",
    image: "https://via.placeholder.com/400x250?text=Water+Treatment+Image",
  },
];

const Industries = () => {
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); // For clicked sector
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getTileStyle = (index) => ({
    ...tileStyle,
    background:
      index === focusedIndex || index === hoveredIndex
        ? "linear-gradient(135deg, #a5d6a7, #81c784)"
        : tileStyle.backgroundColor,
    boxShadow:
      index === focusedIndex || index === hoveredIndex
        ? "0 8px 16px rgba(46, 125, 50, 0.4)"
        : tileStyle.boxShadow,
    outline: index === focusedIndex ? "3px solid #2e7d32" : "none",
    transform: index === hoveredIndex ? "scale(1.05)" : "scale(1)",
    cursor: "pointer",
    animation: index === hoveredIndex ? "bounce 0.6s infinite alternate" : "none",
  });

  return (
    <section
      aria-labelledby="sectors-heading"
      style={{
        ...sectionStyle,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <h2 id="sectors-heading" tabIndex={-1} style={headingStyle}>
        Sectors We Serve
        <hr style={dividerStyle} />
      </h2>
      <div style={containerStyle} role="list">
        {sectors.map((sector, idx) => (
          <div
            key={idx}
            style={getTileStyle(idx)}
            tabIndex={0}
            aria-label={`Sector: ${sector.name}`}
            role="listitem"
            onFocus={() => setFocusedIndex(idx)}
            onBlur={() => setFocusedIndex(null)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedIndex(idx)}
          >
            <div style={iconBackgroundStyle}>
              <FaIndustry style={iconStyle} aria-hidden="true" />
            </div>
            <span>{sector.name}</span>
          </div>
        ))}
      </div>

      {/* Description & Image panel */}
      {selectedIndex !== null && (
        <div style={descriptionContainerStyle} aria-live="polite">
          <h3 style={descriptionHeadingStyle}>{sectors[selectedIndex].name}</h3>
          <p style={descriptionTextStyle}>{sectors[selectedIndex].description}</p>
          <img
            src={sectors[selectedIndex].image}
            alt={`${sectors[selectedIndex].name} sector`}
            style={imageStyle}
          />
        </div>
      )}

      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px); }
        }

        @media (max-width: 600px) {
          div[role="listitem"] {
            min-width: 100px !important;
            font-size: 1rem !important;
          }
          img {
            width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

const descriptionContainerStyle = {
  marginTop: "2rem",
  padding: "1.5rem",
  backgroundColor: "#c8e6c9",
  borderRadius: "12px",
  maxWidth: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  color: "#2e7d32",
  boxShadow: "0 4px 12px rgba(46, 125, 50, 0.2)",
  textAlign: "center",
};

const descriptionHeadingStyle = {
  fontSize: "1.8rem",
  fontWeight: "700",
  marginBottom: "1rem",
};

const descriptionTextStyle = {
  fontSize: "1.1rem",
  marginBottom: "1rem",
};

const imageStyle = {
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  borderRadius: "8px",
  boxShadow: "0 3px 8px rgba(0, 80, 0, 0.3)",
  marginTop: "0.5rem",
};

const sectionStyle = {
  padding: "2.5rem 1rem",
  maxWidth: "900px",
  margin: "auto",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "#2e7d32",
  backgroundColor: "#e8f5e9",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(46, 125, 50, 0.1)",
};

const headingStyle = {
  fontSize: "2.2rem",
  textAlign: "center",
  marginBottom: "1.5rem",
  color: "#1e4d2b",
  position: "relative",
  fontWeight: "700",
};

const dividerStyle = {
  width: "60px",
  height: "4px",
  backgroundColor: "#81c784",
  border: "none",
  borderRadius: "2px",
  margin: "0.5rem auto 0",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.2rem",
  listStyle: "none",
};

const tileStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  padding: "1rem 2rem",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 3px 8px rgba(0, 80, 0, 0.12)",
  fontSize: "1.2rem",
  fontWeight: "600",
  color: "#2e7d32",
  outline: "none",
  minWidth: "130px",
  justifyContent: "center",
  transition: "all 0.3s ease",
  userSelect: "none",
};

const iconBackgroundStyle = {
  backgroundColor: "#a5d6a7",
  borderRadius: "50%",
  padding: "8px",
  boxShadow: "0 2px 6px rgba(0, 80, 0, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyle = {
  fontSize: "1.6rem",
  color: "#ffffff",
};

export default Industries;
