import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-column">
          <h4>MM Enviro Projects</h4>
          <p>
            Leading environmental engineering solutions since 2000.
            Sustainable, turnkey projects for industries and communities globally.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Explore</h4>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <Link to="/services">Turnkey Projects</Link>
          <Link to="/services">Consultancy</Link>
          <Link to="/industries">Industrial Solutions</Link>
          <Link to="/services">Maintenance</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p><strong>Corporate Office:</strong><br />Manish Nagar, Nagpur - 440015</p>
          <p><strong>Registered Office:</strong><br />KDK College Rd, Nagpur - 440009</p>
          <p>
            <a href="mailto:info@mmenviro.in">info@mmenviro.in</a><br />
            <a href="tel:+917122709797">+91-712-2709797</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MM Enviro Projects Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
