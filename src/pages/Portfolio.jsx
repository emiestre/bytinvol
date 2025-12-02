import React from 'react';
import '../css/style.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured e-commerce platform with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/3962571/pexels-photo-3962571.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure banking application with real-time transaction tracking and analytics.',
      image: 'https://images.pexels.com/photos/3945687/pexels-photo-3945687.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Solutions',
      description: 'Enterprise cloud migration with zero downtime and optimized infrastructure.',
      image: 'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Advanced analytics platform for real-time business insights and reporting.',
      image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Security Audit System',
      category: 'Cybersecurity',
      description: 'Comprehensive security audit and monitoring system for enterprise networks.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'CRM Implementation',
      category: 'IT Consulting',
      description: 'Enterprise CRM system implementation with custom workflows and integrations.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero_area" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="hero_bg_box">
          <div className="img-box">
            <img src="/front.jpeg" alt="Portfolio" />
          </div>
        </div>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Our <span style={{ color: '#f1db25' }}>Portfolio</span>
            </h1>
            <p style={{ color: 'white', fontSize: '1.1rem', marginTop: '15px' }}>
              Showcasing our best work and client success stories
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="layout_padding">
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="heading_container heading_center">
              <h2>Recent Projects</h2>
            </div>
            <div className="row" style={{ marginTop: '45px' }}>
              {projects.map((project, index) => (
                <div className="col-md-4" key={index} style={{ marginBottom: '30px' }}>
                  <div style={{
                    overflow: 'hidden',
                    borderRadius: '8px',
                    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    _hover: { transform: 'translateY(-10px)' }
                  }}>
                    <div style={{ position: 'relative', overflow: 'hidden', height: '250px' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: '0',
                        transition: 'opacity 0.3s ease'
                      }}>
                        <button style={{
                          padding: '10px 30px',
                          backgroundColor: '#f1db25',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}>
                          View Project
                        </button>
                      </div>
                    </div>
                    <div style={{ padding: '25px', backgroundColor: 'white' }}>
                      <p style={{ color: '#f1db25', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>
                        {project.category}
                      </p>
                      <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>{project.title}</h4>
                      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ backgroundColor: '#f9f9f9', paddingTop: '90px', paddingBottom: '90px' }}>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="heading_container heading_center">
              <h2>Featured Case Study</h2>
            </div>
            <div className="row" style={{ marginTop: '45px', alignItems: 'center' }}>
              <div className="col-md-6">
                <img src="/byte.png" alt="Case Study" style={{ width: '100%', borderRadius: '8px' }} />
              </div>
              <div className="col-md-6">
                <h3 style={{ color: '#1c1c1c', marginBottom: '20px' }}>E-Commerce Platform Success</h3>
                <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                  <strong>Challenge:</strong> Our client needed a modern e-commerce platform to scale their online business with payment integration and inventory management.
                </p>
                <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                  <strong>Solution:</strong> We developed a fully responsive, feature-rich e-commerce platform with real-time inventory, multiple payment gateways, and analytics.
                </p>
                <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
                  <strong>Result:</strong> 300% increase in online sales within 6 months, improved customer satisfaction, and reduced operational costs.
                </p>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div>
                    <p style={{ color: '#f1db25', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>6M</p>
                    <p style={{ color: '#666' }}>Project Duration</p>
                  </div>
                  <div>
                    <p style={{ color: '#f1db25', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>8</p>
                    <p style={{ color: '#666' }}>Team Members</p>
                  </div>
                  <div>
                    <p style={{ color: '#f1db25', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '5px' }}>300%</p>
                    <p style={{ color: '#666' }}>ROI Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
