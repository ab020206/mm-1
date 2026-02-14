import React, { useState, useEffect } from 'react';
import { FaIndustry } from 'react-icons/fa';

const sectors = [
  {
    name: "Distillery",
    description:
      "Wastewater from the Distillery is generally well suited for anaerobic treatment due to the abundant presence of organic compounds. MM Enviro has broad experience with a wide spectrum of distillery waste streams, including evaporator condensate, thin stillage (grain, fruit), and raw spent wash/vinasse (sugarcane). Our Anaerobic Digesters ensure the highest removal of organic COD. Generating biogas from effluent streams maximizes energy recovery and reduces fossil fuel consumption. With over 75+ successful references in the Distillery sector, we bring extensive expertise to help the industry generate maximum biogas from effluent streams. High-strength distillery raw spent wash is treated in MM Enviro’s CSTR Digester, whereas evaporator condensate is treated through our advanced CPU process.",
    image: "https://via.placeholder.com/400x250?text=Distillery+Image",
  }
  ,
  {
    name: "Brewery & Beverages",
    description:
      "Wastewater from the Brewery & Beverages sector is generally well suited for anaerobic treatment as it contains a moderate quantity of biodegradable organic compounds. MM Enviro has broad experience with a wide spectrum of waste streams in this sector, including evaporator condensate and thin stillage. Our Anaerobic Digesters ensure the highest removal of organic COD, enabling biogas generation from effluent streams to maximize energy recovery and reduce fossil fuel consumption. The anaerobically treated wastewater is further processed through a Second Stage Aerobic treatment, and tertiary treatment is provided when recycling is envisaged.",
    image: "https://via.placeholder.com/400x250?text=Brewery+%26+Beverages+Image",
  }
  ,
  {
    name: "Sugar Industry",
    description:
      "Wastewater from the Sugar Industry varies in organic content but is generally suitable for both anaerobic and aerobic treatment processes. MM Enviro has broad experience with a wide spectrum of sugar industry waste streams, including evaporator condensate. Our Anaerobic Digesters ensure the highest removal of organic COD. The anaerobically treated wastewater is further processed using a Second Stage Aerobic treatment, and tertiary treatment is provided when recycling is envisaged. In addition, we offer biogas plants for press-mud/filter cake, based on a commercially proven CSTR process.",
    image: "https://via.placeholder.com/400x250?text=Sugar+Industry+Image",
  }
  ,
  {
    name: "Pulp & Paper",
    description:
      "Wastewater from the Pulp & Paper Industry varies in organic content depending on the production process, but is generally suitable for both anaerobic and aerobic treatment processes. MM Enviro has broad experience with a spectrum of Pulp & Paper waste streams. Anaerobic Digesters such as UASB ensure the highest removal of organic COD. The anaerobically treated wastewater is further processed through a Second Stage Aerobic treatment, and tertiary treatment is provided when recycling is envisaged.",
    image: "https://via.placeholder.com/400x250?text=Pulp+%26+Paper+Image",
  }
  ,
  {
    name: "Dairy",
    description:
      "Wastewater from the Dairy Industry varies in organic content depending on the production process, but is generally suitable for both anaerobic and aerobic treatment processes. MM Enviro has broad experience with a spectrum of Dairy waste streams. Anaerobic Digesters ensure the highest removal of organic COD. The anaerobically treated wastewater is further processed through a Second Stage Aerobic treatment, and tertiary treatment is provided when recycling is envisaged.",
    image: "https://via.placeholder.com/400x250?text=Dairy+Industry+Image",
  }
  ,
  {
    name: "Pharma",
    description:
      "Wastewater from the Pharma Industry varies in organic content depending on the production process. The treatment scheme involves a combination of physico-chemical and biological processes based on specific requirements. MM Enviro has broad experience with a spectrum of Pharma waste streams. The wastewater is further treated through Second Stage or Tertiary treatment depending on the intended end use of the treated water.",
    image: "https://via.placeholder.com/400x250?text=Pharma+Industry+Image",
  }
  ,
  {
    name: "Sewage (Residential / Hotels / Public Toilets)",
    description:
      "Sewage from Residential areas, Hotels, and other Public Toilets is easily treatable using various biological treatment processes such as MBBR, SAF, and SBR type reactors. The treatment scheme typically involves primary and biological processes tailored to the specific requirements. MM Enviro has broad experience with a wide range of flow volumes, including both low and high flow streams. For very small flows, packaged-type treatment plants are offered. The sewage is further treated through Second Stage or Tertiary treatment based on the envisaged water end use.",
    image: "https://via.placeholder.com/400x250?text=Sewage+Treatment+Image",
  }
  ,
  {
    name: "Water Treatment Plant",
    description:
      "Water Treatment Plant processes offered by MM Enviro are customized based on the client's end-use requirements. We provide a range of processes including Coagulation, Filtration, Disinfection, Reverse Osmosis, Ultra-Filtration, and Demineralisation, as needed. With broad experience handling both low and high flow streams, we also offer packaged-type treatment plants for very small flows.",
    image: "https://via.placeholder.com/400x250?text=Water+Treatment+Plant+Image",
  }
  ,
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

      {/* CTA Section */}
      <section className="section bg-primary text-center" style={{ color: 'white', marginTop: '4rem' }}>
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
  fontWeight: "900",
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
