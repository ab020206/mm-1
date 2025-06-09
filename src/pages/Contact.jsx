import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setStatus({ type: 'success', message: 'Message submitted successfully!' });
      setForm({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      aria-labelledby="contact-heading"
      style={containerStyle}
    >
      <h2 id="contact-heading" tabIndex={-1} style={headingStyle}>
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} style={formStyle} noValidate>
        <label htmlFor="name" style={labelStyle}>
          Your Name <span style={{ color: '#d32f2f' }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          aria-required="true"
          autoComplete="name"
          style={inputStyle}
        />

        <label htmlFor="email" style={labelStyle}>
          Email <span style={{ color: '#d32f2f' }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          aria-required="true"
          autoComplete="email"
          style={inputStyle}
        />

        <label htmlFor="phone" style={labelStyle}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9+\- ]{7,15}"
          title="Please enter a valid phone number"
          autoComplete="tel"
          style={inputStyle}
        />

        <label htmlFor="message" style={labelStyle}>
          Message <span style={{ color: '#d32f2f' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Your message here..."
          value={form.message}
          onChange={handleChange}
          required
          aria-required="true"
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
        />

        <button
          type="submit"
          style={isSubmitting ? buttonDisabledStyle : buttonStyle}
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status && (
        <p
          role="alert"
          aria-live="polite"
          style={{
            marginTop: '1.5rem',
            color: status.type === 'error' ? '#d32f2f' : '#388e3c',
            fontWeight: '600',
            fontSize: '1rem',
            textAlign: 'center',
          }}
        >
          {status.message}
        </p>
      )}

      <address style={addressStyle}>
        <p>📍 MM Enviro HQ, Indore, MP, India</p>
        <p>
          📞{' '}
          <a href="tel:+919876543210" style={linkStyle}>
            +91 98765 43210
          </a>
        </p>
        <p>
          ✉️{' '}
          <a href="mailto:contact@mmenviro.com" style={linkStyle}>
            contact@mmenviro.com
          </a>
        </p>
      </address>
    </section>
  );
};

// Styles
const containerStyle = {
  maxWidth: '600px',
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
  marginBottom: '1.75rem',
  fontWeight: '700',
  textAlign: 'center',
  color: '#2E7D32',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

const labelStyle = {
  fontWeight: '600',
  fontSize: '1rem',
  marginBottom: '0.25rem',
  color: '#444',
};

const inputStyle = {
  padding: '0.65rem 1rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: '1.8px solid #ccc',
  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  outline: 'none',
  fontFamily: 'inherit',
};

const buttonStyle = {
  marginTop: '1.5rem',
  padding: '0.85rem',
  fontSize: '1.1rem',
  fontWeight: '700',
  color: '#fff',
  backgroundColor: '#2E7D32',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 4px 12px rgba(46, 125, 50, 0.4)',
};

const buttonDisabledStyle = {
  ...buttonStyle,
  backgroundColor: '#a5d6a7',
  cursor: 'not-allowed',
  boxShadow: 'none',
};

const addressStyle = {
  marginTop: '3rem',
  fontStyle: 'normal',
  fontSize: '1rem',
  lineHeight: '1.6',
  textAlign: 'center',
  color: '#555',
};

const linkStyle = {
  color: '#2E7D32',
  textDecoration: 'none',
  fontWeight: '600',
};

export default Contact;
