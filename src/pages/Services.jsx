import React, { useState, useEffect } from "react";
import {
  FaLeaf,
  FaIndustry,
  FaWater,
  FaHandsHelping,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle
} from 'react-icons/fa';
import { MdEngineering, MdBiotech, MdOutlineCleanHands, MdScience } from 'react-icons/md';
import './Services.css';

const Services = () => {
  const [activeApp, setActiveApp] = useState(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleApp = (index) => {
    setActiveApp(activeApp === index ? null : index);
  };

  // Original Data Preserved
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
    },
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
    },
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
    },
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
    },
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
    },
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

  // Helper to get icon based on index or title (simple mapping for visual variety)
  const getIcon = (idx) => {
    const icons = [<MdBiotech />, <FaLeaf />, <FaWater />, <MdOutlineCleanHands />, <MdScience />, <MdEngineering />, <FaIndustry />];
    return icons[idx % icons.length];
  };

  return (
    <div className="services-container">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background" style={{ opacity: 0.5, zIndex: -1 }}>
          <div className="hero-particle particle-3"></div>
        </div>
        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <h1>Applications & Services</h1>
          <p>Comprehensive environmental engineering solutions tailored to your industry needs.</p>
        </div>
      </section>

      {/* Applications Accordion Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="text-primary">Our Technology Portfolio</h2>
            <p className="text-secondary">Advanced processes for water, wastewater, and renewable energy.</p>
          </div>

          <div className="tech-accordion">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className={`tech-item ${activeApp === idx ? 'active' : ''}`}
                style={{ marginBottom: '1rem' }}
              >
                <div
                  className="tech-header"
                  onClick={() => toggleApp(idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="category-icon-wrapper" style={{ width: '50px', height: '50px', fontSize: '1.5rem', marginBottom: 0 }}>
                      {getIcon(idx)}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.2rem' }}>{app.title}</h3>
                      <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7, fontWeight: 'normal' }}>
                        {app.description}
                      </p>
                    </div>
                  </div>
                  <div className="tech-icon">
                    {activeApp === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                <div className="tech-content">
                  <div className="tech-inner">
                    <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop: '1rem' }}>
                      {Object.entries(app.features).map(([featureTitle, points]) => (
                        <div key={featureTitle} className="feature-block">
                          <h4>{featureTitle}</h4>
                          <ul className="feature-list">
                            {points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services Grid */}
      <section className="section bg-light scroll-animate">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="text-primary">Lifecycle Support Services</h2>
            <p>End-to-end expertise ensures your systems perform optimally for years.</p>
          </div>

          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {support.map((item, idx) => (
              <div key={idx} className="card service-category-card" style={{ height: 'auto' }}>
                <div className="text-primary" style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                  <FaHandsHelping />
                </div>
                <h3>{item.title}</h3>
                <p style={{ lineHeight: '1.6', opacity: 0.85 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-center" style={{ color: 'white' }}>
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
    </div>
  );
};

export default Services;
