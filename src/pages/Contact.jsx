// src/pages/Contact.jsx
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe, FaCertificate } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="section scroll-animate">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="text-center text-primary" style={{ marginBottom: '3rem' }}>Contact Us</h2>

        <div className="card">
          <h3 className="text-center" style={{ marginBottom: '2rem' }}>MM Enviro Projects Private Limited</h3>

          <div style={{ display: 'grid', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="text-primary" style={{ fontSize: '1.5rem', flexShrink: 0 }}><FaMapMarkerAlt /></div>
              <div>
                <strong>Corporate Office:</strong>
                <p>Plot No. 20, Amar-Sanjay Society, Manish Nagar, NAGPUR - 440 015 (India)</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="text-primary" style={{ fontSize: '1.5rem', flexShrink: 0 }}><FaMapMarkerAlt /></div>
              <div>
                <strong>Registered Office:</strong>
                <p>Aakanksha Arcade, KDK College Road, Nandanvan, NAGPUR – 440 009 (India)</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="text-primary" style={{ fontSize: '1.5rem', flexShrink: 0 }}><FaEnvelope /></div>
              <div>
                <strong>Email:</strong>
                <p><a href="mailto:info@mmenviro.in" className="text-secondary">info@mmenviro.in</a></p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="text-primary" style={{ fontSize: '1.5rem', flexShrink: 0 }}><FaGlobe /></div>
              <div>
                <strong>Website:</strong>
                <p><a href="http://www.mmenviro.in" className="text-secondary" target="_blank" rel="noopener noreferrer">www.mmenviro.in</a></p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="text-primary" style={{ fontSize: '1.5rem', flexShrink: 0 }}><FaPhone /></div>
              <div>
                <strong>Phone:</strong>
                <p>
                  <a href="tel:+917122954440" className="text-secondary">+91-712-2954440</a>,{' '}
                  <a href="tel:+917122709898" className="text-secondary">+91-712-2709898</a>
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="text-primary" style={{ fontSize: '1.5rem', flexShrink: 0 }}><FaCertificate /></div>
              <div>
                <strong>GST No.:</strong>
                <p>27AADCM8278L1ZS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
