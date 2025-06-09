import React from 'react';

const socialLinks = [
  {
    href: 'https://facebook.com/MMEnviro',
    label: 'Facebook',
    icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">...</svg>,
  },
  {
    href: 'https://twitter.com/MMEnviro',
    label: 'Twitter',
    icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">...</svg>,
  },
  {
    href: 'https://linkedin.com/company/MMEnviro',
    label: 'LinkedIn',
    icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">...</svg>,
  },
];

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.title}>MM Enviro Projects</h4>
          <p style={styles.desc}>Innovative solutions in wastewater and biogas engineering.</p>
          <h4 style={styles.subTitle}>Offices</h4>
          <p style={styles.text}>Corporate: Manish Nagar, Nagpur - 440015</p>
          <p style={styles.text}>Registered: KDK College Rd, Nagpur - 440009</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.subTitle}>Contact</h4>
          <p style={styles.text}>
            <a href="mailto:info@mmenviro.in" style={styles.link}>info@mmenviro.in</a><br />
            <a href="tel:+917122709797" style={styles.link}>+91-712-2709797</a><br />
            <a href="tel:+917122709898" style={styles.link}>+91-712-2709898</a>
          </p>
          <a href="/MMEnviro_Brochure.pdf" download style={styles.brochure}>Download Brochure</a>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.bottomText}>© {new Date().getFullYear()} MM Enviro Projects Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: '#f4f4f4',
    color: '#1e2a32',
    padding: '2rem 1.5rem 1rem',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.95rem',
    borderTop: '1px solid #ccc',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0.7rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  title: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#2f855a',
    marginBottom: '0.3rem',
  },
  subTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#276749',
    marginBottom: '0.2rem',
  },
  text: {
    color: '#333',
    margin: 0,
    lineHeight: '1.5',
  },
  desc: {
    color: '#444',
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  link: {
    color: '#2f855a',
    textDecoration: 'none',
    fontWeight: 500,
  },
  brochure: {
    marginTop: '0.1rem',
    display: 'inline-block',
    fontWeight: 600,
    color: '#276749',
    textDecoration: 'underline',
  },
  socialIcon: {
    color: '#555',
    transition: 'color 0.3s ease',
  },
  bottom: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  bottomText: {
    fontSize: '0.8rem',
    color: '#666',
  },

  // Responsive adjustments (only used if applying conditionally in JSX)
  responsiveFooter: {
    padding: '1rem 1rem 0.5rem',
  },
};

export default Footer;
