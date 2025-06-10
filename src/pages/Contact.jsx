import React from 'react';

const Contact = () => {
  return (
    <section
      aria-labelledby="contact-heading"
      style={containerStyle}
    >
      <h2 id="contact-heading" tabIndex={-1} style={headingStyle}>
        Contact Us
      </h2>

      <div style={infoStyle}>
        <h3 style={subheadingStyle}>MM Enviro Projects Private Limited</h3>
        
        <div style={blockStyle}>
          <strong>Corporate Office:</strong>
          <p>Plot No. 20, Amar-Sanjay Society,<br />Manish Nagar, NAGPUR - 440 015 (India)</p>
        </div>

        <div style={blockStyle}>
          <strong>Registered Office:</strong>
          <p>Aakanksha Arcade, KDK College Road,<br />Nandanvan, NAGPUR – 440 009 (India)</p>
        </div>

        <div style={blockStyle}>
          <p><strong>Email:</strong> <a href="mailto:info@mmenviro.in" style={linkStyle}>info@mmenviro.in</a></p>
          <p><strong>Website:</strong> <a href="http://www.mmenviro.in" style={linkStyle} target="_blank" rel="noopener noreferrer">www.mmenviro.in</a></p>
          <p><strong>Phone:</strong> <a href="tel:+917122954440" style={linkStyle}>+91-712-2954440</a>, <a href="tel:+917122709898" style={linkStyle}>+91-712-2709898</a></p>
          <p><strong>GST No.:</strong> 27AADCM8278L1ZS</p>
        </div>
      </div>
    </section>
  );
};

// Styles
const containerStyle = {
  maxWidth: '700px',
  margin: '3rem auto',
  padding: '2rem 2.5rem',
  backgroundColor: '#fff',
  boxShadow: '0 4px 18px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: '#333',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '2rem',
  fontWeight: '900',
  textAlign: 'center',
  color: '#2E7D32',
};

const infoStyle = {
  lineHeight: '1.75',
  fontSize: '1rem',
  color: '#444',
};

const subheadingStyle = {
  fontSize: '1.25rem',
  fontWeight: '700',
  marginBottom: '1rem',
  textAlign: 'center',
  color: '#2E7D32',
};

const blockStyle = {
  marginBottom: '1.5rem',
};

const linkStyle = {
  color: '#2E7D32',
  textDecoration: 'none',
  fontWeight: '600',
};

export default Contact;
