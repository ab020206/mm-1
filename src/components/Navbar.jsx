import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png"; // Adjust the path relative to Navbar.jsx

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
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
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label="Toggle menu"]')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/equipment", label: "Equipment" },
    { to: "/industries", label: "Industries" },
    { to: "/clients", label: "Clients" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar-header">
      <div
        className="navbar-logo flex items-center gap-2"
        aria-label="MM Enviro Logo"
        tabIndex={0}
        role="heading"
        aria-level={1}
      >
        <img src={logo} alt="MM Enviro Logo" className="logo-img" />

        <span className="logo-text">MM Enviro</span>
      </div>



      {isMobile && (
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle menu"
          className="burger-button"
          type="button"
        >
          <span
            className="burger-line"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              boxShadow: menuOpen ? "0 0 5px rgba(34, 139, 34, 0.7)" : "none",
            }}
          />
          <span
            className="burger-line"
            style={{
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.25s ease",
            }}
          />
          <span
            className="burger-line"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              boxShadow: menuOpen ? "0 0 5px rgba(34, 139, 34, 0.7)" : "none",
            }}
          />
        </button>
      )}

      <nav ref={navRef} aria-label="Primary navigation">
        <ul
          id="primary-navigation"
          className={`navbar-nav-list ${isMobile ? "navbar-nav-list-mobile" : ""} ${
            isMobile && menuOpen ? "open" : ""
          }`}
        >
          {navItems.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={handleLinkClick}
                className={`navbar-link ${
                  location.pathname === to ? "active" : ""
                }`}
                aria-current={location.pathname === to ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
