// src/pages/Services.jsx
import React, { useState, useEffect } from "react";

const applications = [
  {
  "title": "Anaerobic Processes (CSTR, UASB)",
  "description": "Advanced anaerobic technologies like CSTR and UASB for efficient biogas and sludge treatment.",
  "features": {
    "CSTR Digester": [
      "Mild Steel (MS) tank with corrosion-resistant coating",
      "Umbrella-shaped roof for structural efficiency",
      "Enhanced mixing through side and top entry mixers",
      "Capable of treating COD up to 200,000 mg/l (Distillery Raw Spent Wash)",
      "Advanced overflow and foam removal system",
      "Includes vacuum and pressure breaker tank, degasser, and gas holder"
    ],
    "UASB Digester": [
      "Low energy consumption",
      "Higher efficiency than conventional aerobic systems with smaller footprint",
      "Extensive design and operational data for various wastewater types",
      "Modular design to accommodate wide flow and COD range",
      "Generates methane (~0.35 m³/kg COD removed) as a valuable by-product",
      "Corrosion-free GLSS due to epoxy coating at air-liquid interface"
    ]
  }
}
,
  {
  "title": "Biogas From Press Mud",
  "description": "Utilizing sugar industry waste (press mud) to generate clean, renewable biogas energy.",
  "features": {
    "Overview": [
      "Press mud, a byproduct from juice clarification in sugar mills, is rich in organics and sugar content.",
      "It decomposes anaerobically to produce methane-rich biogas.",
      "Post-digestion solids are high in fiber and humus, ideal for organic manure."
    ],
    "Process": [
      "Based on a completely mixed anaerobic system.",
      "Includes pretreatment: mixing, slurry preparation, grit & fiber separation.",
      "Generates biogas usable in boilers, engines, or upgradeable to CNG through scrubbing and compression."
    ],
    "Treatment Units": [
      "Receiving Hopper",
      "Slurry Preparation cum Mixing Tank",
      "Grit Chamber",
      "Screen Chamber",
      "Buffer Tank",
      "Digester",
      "Degasser Tower",
      "Screw Press",
      "Gas Holder",
      "Flare Stack"
    ]
  }
}
,
  {
  "title": "Aerobic Processes (MBBR, SAF, SBR)",
  "description": "State-of-the-art aerobic treatment technologies for industrial and municipal wastewater.",
  "features": {
    "MBBR / SAF Process": [
      "Lower capital cost",
      "High BOD/COD removal efficiency up to 90%",
      "Resistant to shock loading",
      "Consistent and reliable performance",
      "Low space and power requirements",
      "Quick and easy installation",
      "Low operational cost",
      "Simple and user-friendly operation"
    ],
    "SBR Process": [
      "High BOD/COD removal efficiency up to 90%",
      "Low energy consumption",
      "More efficient and compact than conventional aerobic systems",
      "Ideal for sewage treatment plants",
      "Fully automated and easy to operate"
    ]
  }
}
,
  {
  "title": "Clarification & Filtration Processes",
  "description": "Efficient clarification and filtration solutions for water treatment and wastewater recycling applications.",
  "features": {
    "Clarification Process": [
      "Custom-designed to meet client-specific requirements",
      "Low flow rates ensure higher clarification efficiency",
      "Uses Lamella or Tube Dek systems to save space",
      "Can be constructed using RCC or Mild Steel",
      "Simple and user-friendly operation"
    ],
    "DMF, PSF & ACF Process": [
      "Configured based on end-use application",
      "High-quality media such as gravel, sand, and activated carbon used based on inlet TSS",
      "Automation options available",
      "Ideal for water treatment and wastewater recycling plants",
      "Easy and reliable to operate"
    ]
  }
},
  {
  "title": "Disinfection Processes (Ozonation & UV)",
  "description": "Advanced disinfection technologies using ozone and ultraviolet light for safe, chemical-free water treatment.",
  "features": {
    "Ozonation Process": [
      "Ozone is more effective than chlorine in destroying viruses and bacteria.",
      "Utilizes short contact time (approximately 10 to 30 minutes).",
      "No harmful residuals and no microbial regrowth.",
      "Ozone is generated onsite, reducing safety risks of transport and storage.",
      "Elevates dissolved oxygen (DO) levels, reducing the need for reaeration.",
      "Reduces COD levels through oxidation, helping meet new discharge norms."
    ],
    "UV Process": [
      "Environmentally friendly – no chemicals required.",
      "Highly effective on a broad range of pathogens.",
      "Leaves no residuals in treated water.",
      "Simple operation with minimal maintenance.",
      "Lowest operating cost among disinfection methods.",
      "Reduced capital costs."
    ]
  }
}
,
  {
  "title": "Ultra-Filtration & Reverse Osmosis (RO) Process",
  "description": "Advanced membrane-based treatment technologies for high-quality water purification, recovery, and reuse.",
  "features": {
    "Ultra-Filtration Process": [
      "Module-type system allows for quick installation.",
      "Effective separation of contaminants.",
      "Energy-efficient plant design.",
      "Delivers high-quality treated water.",
      "Low fouling membranes with long operational life.",
      "PLC-based control panel for automated operations.",
      "Optimized membrane cleaning intervals.",
      "Advanced control and monitoring system integration."
    ],
    "Reverse Osmosis (RO) Process": [
      "Uses pressure-driven RO process pump to produce permeate water.",
      "Effectively removes dissolved salts, organics, and fine particles.",
      "Functions as a method for concentration and recovery.",
      "Compact equipment footprint.",
      "Simple operation, easy control, and low-maintenance system."
    ]
  }
}
,
  {
  "title": "Demineralization (DM) Process",
  "description": "Ion-exchange based technology to produce high-purity water by removing dissolved salts and ions.",
  "features": {
    "DM Process": [
      "Based on Ion Exchange technology for water purification.",
      "Includes at least two vessels with cation and anion exchange resins.",
      "Removes up to 99% of ions, significantly reducing TDS and EC.",
      "Available in various sizes to meet different flow and quality needs.",
      "Mixed Bed Plant uses both resins in one vessel as a polishing unit to produce ultra-pure, IP-grade water."
    ]
  }
}
,
];

const support = [
  {
    title: "Consultation & Design",
    description: "We provide expert consultation to understand your specific requirements and offer customized engineering designs. Our team ensures optimal process selection, layout planning, and detailed system architecture tailored to your application and compliance needs."
  },
  {
    title: "Installation & Commissioning",
    description: "Our skilled team ensures hassle-free on-site installation of treatment systems, followed by thorough commissioning and trial operations. We ensure every unit is tested under real-time conditions for reliability, safety, and optimal performance before handover."
  },
  {
    title: "Maintenance & Upgrades",
    description: "We offer routine preventive maintenance and condition-based servicing to ensure uninterrupted operation. Our upgrade services cover component replacement, automation improvements, and retrofitting of old systems to meet new regulatory or performance standards."
  },
  {
    title: "Performance Optimization",
    description: "We conduct technical audits and performance reviews to identify inefficiencies. Based on data analytics and process insights, we suggest modifications that improve energy usage, enhance output quality, and reduce operational costs."
  },
  {
    title: "Training & Handholding",
    description: "We provide comprehensive training programs for operators, engineers, and management teams. Our hands-on approach ensures your staff gains practical knowledge of system operations, troubleshooting, and safety protocols, supported by periodic check-ins and remote assistance."
  }
];


const CheckIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="12"
      fill={active ? "#4caf50" : "#c8e6c9"}
      style={{ transition: "all 0.3s ease" }}
    />
    <path
      d="M9.5 15.5L5.5 11.5L6.91 10.09L9.5 12.67L16.09 6.09L17.5 7.5L9.5 15.5Z"
      fill={active ? "#fff" : "#2e7d32"}
    />
  </svg>
);

const Services = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [selected, setSelected] = useState(null); // Store expanded index

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleClick = (category, index) => {
    const key = `${category}-${index}`;
    setSelected(prev => (prev === key ? null : key));
  };

  const renderList = (items, category) =>
    items.map((item, idx) => {
      const key = `${category}-${idx}`;
      const isActive = selected === key;
      
      return (
        
        <li
          key={key}
          style={{
            ...itemStyle,
            borderColor: isActive ? "#4caf50" : "#e0f2f1",
            background: isActive ? "rgba(255, 255, 255, 0.6)" : "rgba(255, 255, 255, 0.3)",
            transform: isActive ? "scale(1.02)" : "scale(1)",
            boxShadow: isActive
              ? "0 8px 20px rgba(76, 175, 80, 0.15)"
              : "0 4px 10px rgba(0,0,0,0.05)",
            cursor: "pointer",
          }}
          onClick={() => handleClick(category, idx)}
        >
          <div style={{ marginRight: 14 }}>
            <CheckIcon active={isActive} />
          </div>
          <div>
            <div style={{ fontWeight: isActive ? "700" : "600", fontSize: "1.1rem" }}>
              {item.title}
            </div>
            {isActive && (
  <div style={{
    maxWidth: '480px',
    margin: '1rem auto',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
    backgroundColor: '#ffffff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isActive ? 'scale(1.02)' : 'scale(1)',
  }}>
    <img
      src="https://via.placeholder.com/400x250.png?text=MM+Enviro+Project"
      alt="Service visual"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        objectFit: 'cover',
        marginBottom: '1rem',
        boxShadow: '0 4px 12px rgba(46, 125, 50, 0.3)',
      }}
    />
    <h3 style={{
      fontWeight: '700',
      marginBottom: '12px',
      fontSize: '1.5rem',
      color: '#2e7d32',
      letterSpacing: '0.03em',
    }}>{item.title}</h3>
    <p style={{
      fontSize: '1rem',
      lineHeight: 1.5,
      marginBottom: '1.5rem',
      color: '#555',
    }}>{item.description}</p>

    {item.features && Object.entries(item.features).map(([sectionTitle, points]) => (
      <div key={sectionTitle} style={{ marginBottom: '1.8rem' }}>
        <h4 style={{
          fontWeight: '600',
          fontSize: '1.1rem',
          color: '#1b5e20',
          marginBottom: '0.6rem',
          borderBottom: '2px solid #a5d6a7',
          paddingBottom: '4px',
        }}>
          {`Salient Features of ${sectionTitle}:`}
        </h4>
        <ul style={{
          paddingLeft: '20px',
          listStyleType: 'disc',
          color: '#444',
          fontSize: '0.95rem',
        }}>
          {points.map((point, index) => (
            <li key={index} style={{ marginBottom: '6px' }}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)}


          </div>
        </li>
      );
    });

  
  // Main component rendering the services section


  return (
    
    
    <section
      style={{
        padding: "4rem 2rem",
        opacity: fadeIn ? 1 : 0,
        transform: fadeIn ? "none" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <h2 style={headingStyle}>Applications & Services</h2>

      <div style={gridContainer}>
        <div>
          <h3 style={subHeadingStyle}>Applications</h3>
          <ul style={listStyle}>{renderList(applications, "app")}</ul>
        </div>

        <div>
          <h3 style={{ ...subHeadingStyle, marginTop: "2rem" }}>Support</h3>
          <ul style={listStyle}>{renderList(support, "sup")}</ul>
        </div>
      </div>
    </section>
  );
};

// Styles
const headingStyle = {
  textAlign: "center",
  fontSize: "2.5rem",
  color: "#1e4d2b", // deeper green, professional & calm
  marginBottom: "3.5rem",
  fontWeight: 900,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  textShadow: "1px 1px 3px rgba(46, 125, 50, 0.3)",
};

const subHeadingStyle = {
  fontSize: "1.9rem",
  color: "#1e4d2b", // dark olive green for subtlety
  marginBottom: "1.8rem",
  fontWeight: 700,
  backgroundColor: "rgba(120, 190, 32, 0.12)", // soft lime tint, professional
  padding: "0.75rem 1.5rem",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(102, 187, 106, 0.25)",
  backdropFilter: "blur(6px)",
  border: "1.3px solid rgba(102, 187, 106, 0.4)",
  display: "inline-block",
  userSelect: "none",
  letterSpacing: "0.05em",
  position: "relative",
  cursor: "default",
  transition: "color 0.25s ease, box-shadow 0.25s ease",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};



const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const itemStyle = {
  display: "flex",
  padding: "1rem 1.2rem",
  borderRadius: "12px",
  border: "2px solid",
  background: "rgba(255,255,255,0.3)",
  backdropFilter: "blur(6px)",
  transition: "all 0.3s ease",
};

const descriptionBox = {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
};

const imageStyle = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const textStyle = {
  fontSize: "1rem",
  color: "#444",
  lineHeight: "1.5",
};

export default Services;
