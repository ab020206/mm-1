// src/pages/Projects.jsx
import React from 'react';
import { FaProjectDiagram, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const allProjects = [
    { title: 'Textile Effluent Treatment', description: 'Zero Liquid Discharge solution for 5MLD textile unit.', location: 'Gujarat, India', category: 'Industrial' },
    { title: 'Municipal Sewage Plant', description: '50 MLD STP for Smart City infrastructure.', location: 'Coimbatore, India', category: 'Urban' },
    { title: 'River Rejuvenation Project', description: 'Ecological restoration of 12km urban river stretch.', location: 'Nagpur, India', category: 'Ecological' },
    { title: 'Dairy Waste Management', description: 'Biogas generation from dairy effluent.', location: 'Pune, India', category: 'Industrial' },
    { title: 'Sugar Industry ETP', description: 'Effluent treatment with energy recovery.', location: 'Kenya', category: 'International' },
    { title: 'Palm Oil Mill Effluent', description: 'High-rate anaerobic reactor system.', location: 'Indonesia', category: 'International' }
  ];

  return (
    <section className="section scroll-animate">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="text-primary">Featured Projects</h2>
          <p>Delivering excellence across sectors and borders.</p>
        </div>

        {/* Filter (Visual only for now) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary">All</button>
          <button className="btn btn-secondary">Industrial</button>
          <button className="btn btn-secondary">Urban</button>
          <button className="btn btn-secondary">International</button>
        </div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {allProjects.map((project, idx) => (
            <div key={idx} className="card">
              <div style={{ height: '200px', background: 'var(--color-secondary)', opacity: 0.2, marginBottom: '1.5rem', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaProjectDiagram size={40} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-primary)', textTransform: 'uppercase' }}>{project.category}</span>
                <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.25rem', opacity: 0.7 }}><FaMapMarkerAlt /> {project.location}</span>
              </div>
              <h3 style={{ marginBottom: '1rem' }}>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
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

export default Projects;
