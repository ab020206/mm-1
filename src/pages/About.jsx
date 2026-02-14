// src/pages/About.jsx
import React from "react";
import { FaEye, FaBullseye, FaGlobeAmericas, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <section className="section scroll-animate">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="text-primary">About MM Enviro</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--color-secondary)', margin: '1rem auto' }}></div>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
          <div>
            <p className="text-lg" style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              MM Enviro Projects Private Limited, headquartered in Nagpur, Central India, has been providing environmental engineering solutions since 2000.
              The company serves clients across India, Africa, and Southeast Asia.
            </p>
            <p className="text-lg" style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
              With expert manpower holding over 25 years of field experience, MM Enviro offers turnkey and consultancy services using commercially proven technologies,
              processes, and engineering designs. Their solutions cater to industries, homes, and communities.
            </p>
            <div className="card bg-light" style={{ borderLeft: '4px solid var(--color-primary)' }}>
              <p style={{ fontStyle: 'italic', fontWeight: '500', margin: 0 }}>
                "MM Enviro is actively involved in Research and Developmental projects with institutes like IIT Kharagpur and NEERI Nagpur."
              </p>
            </div>
          </div>

          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b7a?auto=format&fit=crop&w=800&q=80"
              alt="Environmental Engineering"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="grid gap-8" style={{ marginTop: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div className="card text-center">
            <div className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}><FaEye /></div>
            <h3>Vision</h3>
            <p>To create a greener world through innovative and sustainable engineering.</p>
          </div>
          <div className="card text-center">
            <div className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}><FaBullseye /></div>
            <h3>Mission</h3>
            <p>Deliver world-class treatment systems that protect ecosystems and promote circular water use.</p>
          </div>
          <div className="card text-center">
            <div className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}><FaGlobeAmericas /></div>
            <h3>Global Presence</h3>
            <p>Serving clients across 15+ countries with 400+ installations.</p>
          </div>
          <div className="card text-center">
            <div className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}><FaLeaf /></div>
            <h3>Sustainability</h3>
            <p>Aligning with SDGs to minimize carbon footprint and maximize water reuse.</p>
          </div>
        </div>
      </div>

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

export default About;
