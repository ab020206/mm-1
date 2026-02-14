import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaLeaf,
  FaWater,
  FaGlobeAsia,
  FaIndustry,
  FaHandsHelping,
  FaArrowRight,
  FaCheckCircle,
  FaProjectDiagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaTimes
} from 'react-icons/fa';
import { MdEngineering, MdOutlineCleanHands } from 'react-icons/md';
import './Home.css';

const Home = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Scroll animation observer
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

  const projects = [
    {
      id: 1,
      title: "Textile Effluent Treatment",
      category: "Industrial ZLD",
      desc: "Zero Liquid Discharge system implementation for a major textile unit in Gujarat. Achieved 98% water recovery.",
      imageColor: "linear-gradient(to right, #43cea2, #185a9d)",
      details: "This project involved the design and commissioning of a 5 MLD Zero Liquid Discharge plant. Key technologies included Ultrafiltration, Reverse Osmosis, and Multi-Effect Evaporators."
    },
    {
      id: 2,
      title: "Municipal Sewage Plant",
      category: "Urban Infrastructure",
      desc: "50 MLD Sewage Treatment Plant for a smart city project in South India.",
      imageColor: "linear-gradient(to right, #11998e, #38ef7d)",
      details: "A state-of-the-art STP using SBR technology to treat domestic sewage. The treated water is reused for gardening and industrial cooling, reducing freshwater dependency."
    },
    {
      id: 3,
      title: "River Rejuvenation",
      category: "Ecological Restoration",
      desc: "Ecological restoration project for an urban river corridor.",
      imageColor: "linear-gradient(to right, #00b09b, #96c93d)",
      details: "Comprehensive cleaning and restoration of a 12km river stretch, including bioremediation, bank stabilization, and creation of public recreation spaces."
    }
  ];

  const openModal = (project) => setActiveProject(project);
  const closeModal = () => setActiveProject(null);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-particle particle-1"></div>
          <div className="hero-particle particle-2"></div>
          <div className="hero-particle particle-3"></div>
        </div>

        <div className="hero-content container animate-fade-in" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100%'
        }}>
          <h1 className="hero-title" style={{ maxWidth: '900px', margin: '0 auto 1.5rem auto' }}>
            Engineering Sustainable<br />Environmental Solutions Since 2000
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '700px', margin: '0 auto 2.5rem auto', fontSize: '1.25rem' }}>
            Pioneering turnkey projects and consultancy.
            Trusted by industries and communities across India, Africa, and Southeast Asia.
          </p>
          <div className="flex gap-4 justify-center" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/services" className="btn btn-primary">
              Explore Solutions <FaArrowRight style={{ marginLeft: '10px' }} />
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ background: 'rgba(255,255,255,0.8)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Brief */}
      <section className="section bg-light scroll-animate">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="text-primary">25+ Years of Excellence</h2>
              <p className="text-lg" style={{ fontSize: '1.2rem', color: 'var(--color-text-dark)', opacity: 0.8 }}>
                MM Enviro Projects Private Limited has been a leader in environmental engineering solutions.
                We combine decades of expertise with cutting-edge technology to deliver sustainable results.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--color-secondary)', marginRight: '1rem' }} />
                  Expert Manpower & Engineering Team
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--color-secondary)', marginRight: '1rem' }} />
                  End-to-End Execution
                </li>
                <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  <FaCheckCircle style={{ color: 'var(--color-secondary)', marginRight: '1rem' }} />
                  Sustainable & Premium Designs
                </li>
              </ul>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: '2rem' }}>
                Our Journey
              </Link>
            </div>

            {/* Timeline Preview */}
            <div className="timeline-preview">
              <div style={{ padding: '2rem', background: 'var(--color-bg-dark)', borderRadius: '1rem', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ paddingBottom: '2rem', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, color: 'var(--color-highlight)' }}>2000</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Founded in Nagpur, India</p>
                </div>
                <div style={{ paddingBottom: '2rem', borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, color: 'var(--color-highlight)' }}>2010</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Expanded to Southeast Asia</p>
                </div>
                <div style={{ paddingLeft: '2rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></div>
                  <h4 style={{ margin: 0, color: 'var(--color-highlight)' }}>Present</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Global Turnkey Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="text-primary">Our Expertise</h2>
            <p>Comprehensive environmental solutions tailored to your needs.</p>
          </div>

          <div className="services-grid">
            <Link to="/services" className="service-card">
              <div className="service-icon"><MdEngineering /></div>
              <h3>Turnkey Projects</h3>
              <p>Complete lifecycle management from concept to commissioning for sewage and effluent treatment plants.</p>
            </Link>

            <Link to="/services" className="service-card">
              <div className="service-icon"><FaLeaf /></div>
              <h3>Environmental Consultancy</h3>
              <p>Expert advisory on compliance, sustainability audits, and impact assessments.</p>
            </Link>

            <Link to="/industries" className="service-card">
              <div className="service-icon"><FaIndustry /></div>
              <h3>Industrial Solutions</h3>
              <p>Customized waste management and pollution control for diverse industrial sectors.</p>
            </Link>

            <Link to="/services" className="service-card">
              <div className="service-icon"><FaHandsHelping /></div>
              <h3>Community Solutions</h3>
              <p>Sustainable water and waste systems for residential townships and urban infrastructure.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section bg-primary text-center scroll-animate" style={{ color: 'white' }}>
        <div className="container">
          <h2>Global Impact</h2>
          <p style={{ opacity: 0.9, marginBottom: '3rem' }}>Serving clients across India, Africa, and Southeast Asia.</p>

          <div className="map-placeholder">
            {/* Abstract World Context */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaGlobeAsia size={300} />
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem', backdropFilter: 'blur(5px)', width: '250px' }}>
                <h3 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--color-highlight)' }}>20+</h3>
                <p style={{ margin: 0 }}>Countries Served</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem', backdropFilter: 'blur(5px)', width: '250px' }}>
                <h3 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--color-highlight)' }}>500+</h3>
                <p style={{ margin: 0 }}>Projects Delivered</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '1rem', backdropFilter: 'blur(5px)', width: '250px' }}>
                <h3 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--color-highlight)' }}>100%</h3>
                <p style={{ margin: 0 }}>Regulatory Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="section scroll-animate">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="text-primary">Featured Case Studies</h2>
            <p>Highlights from our portfolio of successful implementations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {projects.map((project) => (
              <div key={project.id} className="card" style={{ padding: 0 }}>
                <div style={{ height: '200px', background: project.imageColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {project.id === 1 && <FaIndustry size={50} color="white" style={{ opacity: 0.8 }} />}
                  {project.id === 2 && <MdOutlineCleanHands size={50} color="white" style={{ opacity: 0.8 }} />}
                  {project.id === 3 && <FaWater size={50} color="white" style={{ opacity: 0.8 }} />}
                </div>
                <div style={{ padding: '2rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{project.category}</span>
                  <h4 style={{ marginTop: '0.5rem' }}>{project.title}</h4>
                  <p>{project.desc}</p>
                  <button onClick={() => openModal(project)} className="btn-text text-primary" style={{ background: 'none', border: 'none', padding: 0, fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', textDecoration: 'underline' }}>
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div style={{ height: '150px', background: activeProject.imageColor, borderRadius: '0.5rem', marginBottom: '1.5rem' }}></div>
            <h3 className="text-primary">{activeProject.title}</h3>
            <h5 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>{activeProject.category}</h5>
            <p>{activeProject.desc}</p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '0.5rem' }}>
              <strong>Project Details:</strong>
              <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>{activeProject.details}</p>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
              <Link to="/contact" className="btn btn-primary">Inquire About Similar Projects</Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section bg-primary text-center scroll-animate" style={{ color: 'white' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem', marginTop: 0 }}>Need a customized solution?</h2>
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

      {/* Contact Section */}
      <section className="section bg-light scroll-animate" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="text-primary">Get in Touch</h2>
              <p>Ready to transform your environmental strategy? Contact our expert team today.</p>

              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Headquarters</h4>
                    <p style={{ margin: 0, opacity: 0.8 }}>Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email Us</h4>
                    <p style={{ margin: 0, opacity: 0.8 }}>contact@mmenviro.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FaPhone />
                  </div>
                  <div>
                    <h4>Call Us</h4>
                    <p style={{ margin: 0, opacity: 0.8 }}>+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="card" onSubmit={(e) => e.preventDefault()} style={{ padding: '2rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Message/Inquiry</label>
                <textarea className="form-textarea" rows="4" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
