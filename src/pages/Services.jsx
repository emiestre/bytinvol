import React from 'react';
import '../css/style.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web solutions built with modern technologies to meet your unique business needs. From responsive design to full-stack applications, we deliver excellence.',
      icon: 'fa-code'
    },
    {
      title: 'Mobile Apps',
      description: 'Powerful mobile applications designed for iOS and Android platforms. We create intuitive, feature-rich apps that engage users and drive business growth.',
      icon: 'fa-mobile'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to optimize your business operations. We provide secure, reliable cloud solutions tailored to your needs.',
      icon: 'fa-cloud'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data and systems from threats. Our experts implement industry-leading security practices.',
      icon: 'fa-shield'
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights to drive informed business decisions. We provide advanced analytics and business intelligence solutions.',
      icon: 'fa-database'
    },
    {
      title: 'IT Consulting',
      description: 'Expert guidance on technology strategy, implementation, and digital transformation. Our consultants help you navigate complex IT challenges.',
      icon: 'fa-cogs'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero_area" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="hero_bg_box">
          <div className="img-box">
            <img src="/front.jpeg" alt="Services" />
          </div>
        </div>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Our <span style={{ color: '#f1db25' }}>Services</span>
            </h1>
            <p style={{ color: 'white', fontSize: '1.1rem', marginTop: '15px' }}>
              Comprehensive solutions tailored to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="service_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>What We Offer</h2>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-4" key={index}>
                <div className="box">
                  <div className="img-box">
                    <i className={`fa ${service.icon}`} style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                  </div>
                  <div className="detail-box">
                    <h6>{service.title}</h6>
                    <p>{service.description}</p>
                    <a href="#contact">Get Started</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="layout_padding" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="heading_container heading_center">
              <h2>Why Choose ByteWave?</h2>
            </div>
            <div className="row" style={{ marginTop: '45px' }}>
              <div className="col-md-6">
                <h4 style={{ color: '#1c1c1c', marginBottom: '15px' }}>Expert Team</h4>
                <p style={{ marginBottom: '20px' }}>
                  Our team consists of highly skilled professionals with years of industry experience across various domains and technologies.
                </p>
                <h4 style={{ color: '#1c1c1c', marginBottom: '15px' }}>Proven Track Record</h4>
                <p style={{ marginBottom: '20px' }}>
                  We have successfully delivered over 500 projects for clients across different industries, consistently exceeding expectations.
                </p>
              </div>
              <div className="col-md-6">
                <h4 style={{ color: '#1c1c1c', marginBottom: '15px' }}>Innovative Solutions</h4>
                <p style={{ marginBottom: '20px' }}>
                  We stay at the forefront of technology, implementing cutting-edge solutions that give your business a competitive edge.
                </p>
                <h4 style={{ color: '#1c1c1c', marginBottom: '15px' }}>24/7 Support</h4>
                <p>
                  Our dedicated support team is always available to help you with any questions or issues you may encounter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
