
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const useCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (end === 0) return;
    let start = 0;
    const incrementTime = Math.max(Math.floor(duration / end), 10);
    const timer = setInterval(() => {
      start += 1;
      if (start > end) {
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
};

const StatCard = ({ icon, label, value }) => {
  const count = useCounter(value);
  return (
    <div
      aria-label={`${label} is ${value}+`}
      tabIndex={0}
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: "1.5rem 2rem",
        boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
        minWidth: 140,
        flex: "1 1 180px",
        margin: 8,
        textAlign: "center",
        userSelect: "none",
        cursor: "default",
        transition: "transform 0.2s ease",
      }}
      onFocus={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onBlur={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ fontSize: 40, marginBottom: 8 }}>{icon}</div>
      <div
        style={{
          fontWeight: "700",
          fontSize: 28,
          color: "#2e7d32",
          letterSpacing: "0.05em",
        }}
      >
        {count}+
      </div>
      <div
        style={{
          marginTop: 6,
          fontWeight: "600",
          fontSize: 16,
          color: "#555",
          userSelect: "text",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default function Homepage() {
  const vantaRef1 = useRef(null);
  const vantaRef2 = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.net.min").then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef1.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1de9b6, // bright teal
          backgroundColor: 0x003300, // very dark green background for contrast
          points: 14.0,
          maxDistance: 20.0,
          spacing: 20.0,
        });
        setVantaEffect(effect);
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.fog.min").then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef2.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x00ffcc, // aqua
          midtoneColor: 0x4caf50,    // medium green
          lowlightColor: 0x2e7d32,   // darker green
          blurFactor: 0.55,
          speed: 2.0,
          zoom: 1.2,
        });
        setVantaEffect(effect);
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div id="vanta-bg" ref={vantaRef2}></div>
      <style>{`
        /* Global resets & fonts */
        body, html, #root {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f7faf7;
          color: #2e7d32;
          position: relative;
          z-index: 0;
        }

        #vanta-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1; /* Push behind content */
        }
        a:focus, button:focus, div[tabindex="0"]:focus, img[tabindex="0"]:focus {
          outline: 3px solid #81c784;
          outline-offset: 3px;
        }
        .container {
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 0.8rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        .flex-center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Hero styles with Vanta */
        .hero {
          position: relative;
          min-height: 57vh;
          /* Remove background image because Vanta is background now */
          border-radius: 16px;
          overflow: hidden;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 1rem;
          user-select: none;
          background: transparent;
        }
        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(0, 77, 64, 0.8), rgba(56, 142, 60, 0.8));
          z-index: 1;
          pointer-events: none;
          border-radius: 16px;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: auto;
        }
        .hero h1 {
          font-size: 2.8rem;
          font-weight: 900;
          font-style: italic;
          line-height: 1.3;
          margin-bottom: 1rem;
          user-select: none;
        }
        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          font-weight: 600;
          text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
        }
        .btn-primary, .btn-secondary {
          padding: 0.75rem 2rem;
          border-radius: 40px;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
          user-select: none;
          cursor: pointer;
          min-width: 140px;
          text-align: center;
        }
        .btn-primary {
          background-color: #81c784;
          color: white;
          border: none;
          margin-right: 1rem;
        }
        .btn-primary:hover,
        .btn-primary:focus {
          background-color: #66bb6a;
          outline: none;
        }
        .btn-secondary {
          background-color: transparent;
          border: 2px solid white;
          color: white;
        }
        .btn-secondary:hover,
        .btn-secondary:focus {
          background-color: white;
          color: #2e7d32;
          outline: none;
        }
        /* Stats Section */
        .stats-section {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
          margin-top: 1.5rem;
          padding: 0 1rem;
        }
        /* Clients Section */
      .clients-section {
        text-align: center;
        margin-bottom: 3rem;
        padding: 0 1rem;
      }

      .clients-section h2 {
        font-weight: 700;
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: #1e4d2b;
      }

      .clients-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 2rem;
        align-items: stretch;
        justify-items: center;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      @media (max-width: 640px) {
        .clients-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
      }

      .client-card {
        background: white;
        border-radius: 12px;
        padding: 1rem;
        box-shadow: 0 8px 18px rgba(46, 125, 50, 0.15);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: #1e4d2b;
        user-select: none;
        width: 100%;
        max-width: 160px;
      }

      .client-card:hover,
      .client-card:focus-visible {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(46, 125, 50, 0.3);
        outline: none;
      }

      .client-logo {
        width: 100px;
        height: auto;
        filter: grayscale(60%);
        transition: filter 0.3s ease;
        border-radius: 8px;
        margin-bottom: 0.5rem;
        user-select: none;
      }

      .client-card:hover .client-logo,
      .client-card:focus-visible .client-logo {
        filter: grayscale(0%);
      }

      .client-name {
        font-weight: 600;
        font-size: 1rem;
        margin-top: 0.25rem;
        user-select: text;
      }

        /* Intro Section */
        .intro-section {
          background-color: #e8f5e9;
          padding: 2rem 1rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1100px;
          margin: auto;
          margin-bottom: 4rem;
        }
        .intro-text {
          flex: 1 1 400px;
          font-size: 1.15rem;
          line-height: 1.6;
          font-weight: 600;
          color: #1e4d2b;
        }
        .intro-image {
          flex: 1 1 300px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(46,125,50,0.2);
          max-width: 100%;
          user-select: none;
        }
        /* Responsive */
        @media (max-width: 1024px) {
          .stats-section {
            gap: 0.75rem;
          }
          .intro-section {
            max-width: 95%;
          }
        }
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 0rem;
          }
          .hero p {
            font-size: 1.1rem;
          }
          .intro-section {
            flex-direction: column;
            text-align: center;
          }
          .intro-text {
            flex-basis: 100%;
          }
          .intro-image {
            flex-basis: 100%;
          }
          .stats-section {
            padding: 0;
          }
        }
        @media (max-width: 480px) {
          .btn-primary, .btn-secondary {
            min-width: 100%;
            margin: 0 0 1rem 0;
          }
        }
      `}</style>
      
      <main className="container" aria-label="MM Enviro Projects homepage">
        {/* Hero Section with Vanta effect */}
        <section
          ref={vantaRef1}
          className="hero"
          aria-labelledby="hero-title"
          role="banner"
        >
          <div className="hero-content">
            <h1 id="hero-title">
              “We forget that the water cycle and the life cycle are one.”<br />
              — Jacques Yves Cousteau
            </h1>
            <p>
              MM Enviro Projects Pvt. Ltd. — Innovating wastewater treatment &
              biogas solutions for a greener future.
            </p>
            <div>
              <a
                href="#about"
                className="btn-primary"
                role="button"
                aria-label="Learn more about MM Enviro Projects"
              >
                Learn More
              </a>
              <a
                href="tel:+919876543210"
                className="btn-secondary"
                role="button"
                aria-label="Call MM Enviro Projects"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          aria-label="Company statistics"
          className="stats-section"
          role="region"
        >
          <StatCard icon="🗓️" label="Years of Experience" value={25} />
          <StatCard icon="🏭" label="Wastewater Plants Installed" value={550} />
          <StatCard icon="🔋" label="Biogas Plants Installed" value={120} />
          <StatCard icon="🤝" label="Happy Clients" value={200} />
        </section>

        {/* Clients Section */}
        <section
          aria-label="Clients served by MM Enviro Projects"
          className="clients-section"
          role="region"
        >
          <h2>Trusted by Leading Clients</h2>
          <div
            className="clients-grid"
            aria-live="polite"
            aria-relevant="additions"
          >
            {[
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Indian_Railways_Logo.svg/256px-Indian_Railways_Logo.svg.png",
                alt: "Indian Railways",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Adani_Logo.svg/256px-Adani_Logo.svg.png",
                alt: "Adani Group",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Larsen_%26_Toubro_Logo.svg/256px-Larsen_%26_Toubro_Logo.svg.png",
                alt: "Larsen & Toubro",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/TATA_logo.svg/256px-TATA_logo.svg.png",
                alt: "Tata Group",
              },
            ].map(({ src, alt }) => (
              <a
                key={alt}
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
                aria-label={`Visit ${alt} website`}
              >
                <img src={src} alt={alt} loading="lazy" className="client-logo" />
                <span className="client-name">{alt}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Intro Section */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="intro-section"
          role="region"
        >
          <div className="intro-text">
            <h2 id="about-title" style={{ marginBottom: "1rem" }}>
              Our Mission & Expertise
            </h2>
            <p>
              Since 1998, MM Enviro Projects Pvt. Ltd. has been at the forefront
              of environmental engineering, specializing in wastewater treatment
              and biogas plant solutions. Our commitment to sustainable
              innovation has helped hundreds of clients reduce their
              environmental footprint while enhancing operational efficiency.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Wastewater treatment facility"
            className="intro-image"
            loading="lazy"
            width="400"
            height="250"
            decoding="async"
          />
        </section>
      </main>
    </>
  );
}
