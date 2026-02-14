import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest('.burger-button')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleLinkClick = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/products", label: "Products" }, // Changed Equipment to Products/General
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`navbar-header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="MM Enviro Logo" className="logo-img" />
          <span className="logo-text">MM Enviro</span>
        </Link>

        {isMobile && (
          <div className="mobile-controls">
            <button
              onClick={toggleTheme}
              className="theme-toggle-mobile"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              className="burger-button"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        )}

        <nav ref={navRef} className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-nav-list">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`navbar-link ${location.pathname === to ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          {!isMobile && (
            <button
              onClick={toggleTheme}
              className="theme-toggle-desktop"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
