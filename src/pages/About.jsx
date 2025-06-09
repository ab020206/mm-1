// src/pages/About.jsx
import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const About = () => {
  return (

    
    <section
      aria-labelledby="about-heading"
      style={{
        maxWidth: '960px',
        margin: '4rem auto',
        padding: '2rem 2.5rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#2e7d32',
        background: '#e8f5e9',
        borderRadius: '16px',
        boxShadow: '0 12px 30px rgba(0, 80, 0, 0.12)',
      }}
    >
      <h2
        id="about-heading"
        tabIndex={-1}
        style={{
          fontSize: '3rem',
          fontWeight: '900',
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #2e7d32, #a5d6a7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textAlign: 'center',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          userSelect: 'none',
        }}
      >
        About MM Enviro
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3rem',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.7',
              fontWeight: '600',
              marginBottom: '1.25rem',
              color: '#2e7d32',
            }}
          >
            MM Enviro Projects Private Limited, headquartered in Nagpur, Central India, has been providing environmental engineering solutions since 2000. The company serves clients across India, Africa, and Southeast Asia. With expert manpower holding over 25 years of field experience, MM Enviro offers turnkey and consultancy services using commercially proven technologies, processes, and engineering designs. Their solutions cater to industries, homes, and communities.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#388e3c',
              marginBottom: '2.5rem',
              fontWeight: '500',
              fontStyle: 'italic',
            }}
          >
            MM Enviro actively working for Research and Developmental projects by institutes like IIT, Kharagpur, NEERI, Nagpur in the field of Environmental Engineering
          </p>
        </div>

        <div
          style={{
            flex: '1 1 300px',
            minWidth: '280px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 10px 24px rgba(0, 80, 0, 0.3)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Environmental engineering"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: '2.5rem',
          marginBottom: '3rem',
          width: '80px',
          height: '7px',
          background: 'linear-gradient(90deg, #a5d6a7, #2e7d32)',
          borderRadius: '3px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 3px 8px rgba(0, 80, 0, 0.4)',
        }}
      />

      <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem',
    color: '#2e7d32',
    justifyItems: 'center',
    alignItems: 'stretch',
    width: '100%',
    marginTop: '2rem',
  }}
>
  <Card
    title="Vision"
    description="To create a greener world through innovative and sustainable engineering."
    icon={<YellowIcon />}
  />
  <Card
    title="Mission"
    description="Deliver world-class treatment systems that protect ecosystems and promote circular water use."
    icon={<YellowIcon />}
  />
  <Card
    title="Global Presence"
    description="Serving clients across 15+ countries with 400+ installations."
    icon={<YellowIcon />}
  />
  <Card
    title="Sustainability Goals"
    description="Aligning with SDGs to minimize carbon footprint and maximize water reuse through smart solutions."
    icon={<YellowIcon />}
  />
</div>

    </section>
    
  );
};

const Card = ({ title, description, icon }) => (
  <article
    tabIndex={0}
    style={{
      background: '#ffffff',
      borderRadius: '14px',
      padding: '2rem 1.5rem',
      boxShadow: '0 6px 18px rgba(0, 80, 0, 0.12)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'default',
      userSelect: 'none',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.5)',
      height: '100%',
      maxWidth: '320px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 80, 0, 0.25)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 80, 0, 0.12)';
    }}
    onFocus={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 14px 40px rgba(0, 80, 0, 0.25)';
    }}
  >
    <div style={{ marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>{description}</p>
  </article>
);

const YellowIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="#ffeb3b"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export default About;
