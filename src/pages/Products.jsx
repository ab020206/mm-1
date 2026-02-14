import React, { useState, useEffect } from "react";
import { FaCogs, FaFilter, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import './Services.css'; // Reusing service styles for consistency

const products = [
    {
        "name": "Bar Screens / Grit Removers",
        "description": "Top-tier bar screens and grit removers designed for sustainable and effective treatment systems.",
        "features": [
            "Removes larger objects that may damage pumps and downstream equipment.",
            "Available in manual and automatic cleaning types.",
            "Optimally designed hydraulics ensure effective grit separation.",
            "Robust design guarantees reliable operation in tough conditions.",
            "Grit withdrawal section minimizes water spillage during disposal."
        ]
    },
    {
        "name": "Oil Skimmers",
        "description": "Efficient removal of floating oils and scum, designed as per API standards.",
        "features": [
            "Removes separable oils, vegetable oils, and dairy scum.",
            "Recovered oil can be reused, reducing waste.",
            "Tank designed according to API standards.",
            "Motorized trolley with antifriction-bearing wheels for precise operation.",
            "Options for top oil skimming and bottom sludge scraping."
        ]
    },
    {
        "name": "Clarifier / Clari-flocculators",
        "description": "Robust mechanism for efficient solid-liquid separation in RCC tanks.",
        "features": [
            "Mild Steel (MS) mechanism suitable for RCC tank installation.",
            "Includes walkway, handrail, and toe guard for safety.",
            "Vertical shaft and rake arms with scraper blades for sludge removal.",
            "Steel feed well for controlled influent distribution.",
            "Drive arrangement with gearbox and motor for reliable operation."
        ]
    },
    {
        "name": "Side & Top Entry Mixers",
        "description": "Energy-saving mixers designed for anaerobic digesters.",
        "features": [
            "Provides uniform mixing for optimal process performance.",
            "Positive tank shut-off device prevents leakage.",
            "High-efficiency impeller design minimizes energy use.",
            "Durable epoxy paint finish for corrosion resistance.",
            "Impeller blades bolted for easy maintenance."
        ]
    },
    {
        "name": "Surface Aerators",
        "description": "High oxygen transfer efficiency aerators for biological sludge aeration.",
        "features": [
            "Wide power range from 1.5 kW to 112 kW.",
            "High oxygenation capacity (2.0 - 2.2 kg O₂/kWh).",
            "Cone-type aerator with curved vanes for smooth water gliding.",
            "Low rotational speeds preserve microbial health.",
            "Pumping action creates fine water globules for effective aeration."
        ]
    },
    {
        "name": "Air Diffuser Membranes",
        "description": "Polymer-based membranes for energy-efficient oxygen transfer.",
        "features": [
            "Made from durable polymer materials.",
            "Superior oxygen transfer efficiency reduces energy consumption.",
            "Enhances biological oxidation of ammoniacal nitrogen.",
            "Cost-effective solution for aeration tanks."
        ]
    },
    {
        "name": "Sludge Centrifuges",
        "description": "High-performance centrifuges for superior solids capture and dewatering.",
        "features": [
            "Large diameter-to-length ratio for enhanced separation.",
            "High centrifugal acceleration (3000 - 5200 g).",
            "Minimal operator attendance required.",
            "Achieves highest cake dryness, lowering disposal costs.",
            "Advanced control units with frequency converters."
        ]
    },
    {
        "name": "Fixed Film Media / PVC Media",
        "description": "High-efficiency media for trickling filters and bio-filters.",
        "features": [
            "Supports biological growth for organic waste oxidation.",
            "Requires significantly less land area than activated sludge basins.",
            "Lightweight, self-supporting plastic modules.",
            "Cost-effective and easy to install."
        ]
    },
    {
        "name": "Tube Settlers",
        "description": "PVC-based settlers to minimize clarifier surface area requirements.",
        "features": [
            "Increases effective settling area significantly.",
            "Reduces particle settling distance for better efficiency.",
            "V-shaped tubes and counter-current flow aid settling.",
            "Hexagonal-chevron configuration for superior performance."
        ]
    },
    {
        "name": "Lamella Clarifiers",
        "description": "Modular settling units using inclined plates for efficient sedimentation.",
        "features": [
            "Compact footprint due to inclined plate design.",
            "Laminar flow regime enhances separation.",
            "Modular design allows for easy scale-up.",
            "High efficiency separation of suspended solids."
        ]
    },
    {
        "name": "Kitchen Waste Biogas Plant",
        "description": "Eco-friendly plants generating renewable energy from organic kitchen waste.",
        "features": [
            "Converts organic waste into methane-rich biogas.",
            "Compact and suitable for institutional or residential use.",
            "Reduces landfill waste and provides clean energy."
        ]
    },
    {
        "name": "Package Treatment Plant",
        "description": "Compact, pre-fabricated plants for quick deployment.",
        "features": [
            "Ideal for decentralized wastewater treatment.",
            "Quick installation and commissioning.",
            "Automated operation with minimal manual intervention."
        ]
    }
];

const Products = () => {
    const [activeProduct, setActiveProduct] = useState(null);

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

    const toggleProduct = (index) => {
        setActiveProduct(activeProduct === index ? null : index);
    };

    return (
        <div className="services-container">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="container animate-fade-in" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center'
                }}>
                    <h1 style={{ maxWidth: '900px', margin: '0 0 1.5rem 0' }}>Equipment & Products</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.25rem', opacity: 0.9 }}>
                        High-performance engineering equipment designed for efficiency, durability, and sustainability.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section scroll-animate">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className="text-primary">Our Product Range</h2>
                        <p className="text-secondary">Explore our cutting-edge manufacturing solutions.</p>
                    </div>

                    <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {products.map((product, idx) => (
                            <div
                                key={idx}
                                className={`card product-card ${activeProduct === idx ? 'active' : ''}`}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    border: activeProduct === idx ? '2px solid var(--color-primary)' : '1px solid transparent'
                                }}
                                onClick={() => toggleProduct(idx)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <div className="text-primary" style={{ fontSize: '2rem' }}>
                                        <MdOutlinePrecisionManufacturing />
                                    </div>
                                    <div style={{ color: 'var(--color-secondary)' }}>
                                        {activeProduct === idx ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                                <p style={{ marginBottom: '1rem', opacity: 0.8 }}>{product.description}</p>

                                {activeProduct === idx && (
                                    <div className="product-details animate-fade-in" style={{
                                        marginTop: '1.5rem',
                                        paddingTop: '1.5rem',
                                        borderTop: '1px solid rgba(0,0,0,0.1)'
                                    }}>
                                        <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Key Features:</h4>
                                        <ul className="feature-list">
                                            {product.features.map((feature, i) => (
                                                <li key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                                                    <FaCheckCircle style={{ color: 'var(--color-secondary)', marginTop: '3px', flexShrink: 0 }} />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
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

export default Products;
