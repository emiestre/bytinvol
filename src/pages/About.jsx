import React from 'react';
import '../css/style.css';

const About = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years of tech industry experience.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and system design.'
    },
    {
      name: 'Mike Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer specializing in web technologies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description: 'Creative designer focused on user experience and interfaces.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero_area" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="hero_bg_box">
          <div className="img-box">
            <img src="/front.jpeg" alt="About Us" />
          </div>
        </div>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              About <span style={{ color: '#f1db25' }}>ByteWave</span>
            </h1>
            <p style={{ color: 'white', fontSize: '1.1rem', marginTop: '15px' }}>
              Leading the digital transformation journey
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="layout_padding">
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ alignItems: 'center', marginBottom: '60px' }}>
              <div className="col-md-6">
                <img src="/group.png" alt="About Us" style={{ width: '100%' }} />
              </div>
              <div className="col-md-6">
                <h2 style={{ color: '#1c1c1c', marginBottom: '20px' }}>Our Story</h2>
                <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                  ByteWave Innovations Limited was founded with a clear mission: to bridge the gap between innovative technology and practical business implementation. What started as a small team of passionate technologists has grown into a leading digital solutions provider.
                </p>
                <p style={{ marginBottom: '15px', lineHeight: '1.8' }}>
                  Over the years, we've worked with startups, SMEs, and enterprises across various sectors including finance, healthcare, e-commerce, and manufacturing. Each project has reinforced our commitment to delivering excellence and driving real business impact.
                </p>
                <p style={{ lineHeight: '1.8' }}>
                  Today, we're proud to be a trusted partner for digital transformation, with a portfolio of successful projects and a team of dedicated professionals who are passionate about technology.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="row" style={{ marginBottom: '60px' }}>
              <div className="col-md-6">
                <div style={{
                  backgroundColor: '#1c1c1c',
                  color: 'white',
                  padding: '40px',
                  marginBottom: '20px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ color: '#f1db25', marginBottom: '15px' }}>Our Mission</h3>
                  <p style={{ lineHeight: '1.8' }}>
                    To empower businesses through innovative technology solutions that drive growth, efficiency, and success in the digital age.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{
                  backgroundColor: '#1c1c1c',
                  color: 'white',
                  padding: '40px',
                  borderRadius: '8px'
                }}>
                  <h3 style={{ color: '#f1db25', marginBottom: '15px' }}>Our Vision</h3>
                  <p style={{ lineHeight: '1.8' }}>
                    To be the leading technology partner that businesses trust for transforming their digital aspirations into reality.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ color: '#1c1c1c', marginBottom: '30px', textAlign: 'center' }}>Our Core Values</h2>
              <div className="row">
                <div className="col-md-3">
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <i className="fa fa-lightbulb" style={{ fontSize: '3rem', color: '#f1db25', marginBottom: '15px' }}></i>
                    <h4 style={{ color: '#1c1c1c' }}>Innovation</h4>
                    <p>We continuously innovate and embrace new technologies to stay ahead of the curve.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <i className="fa fa-handshake" style={{ fontSize: '3rem', color: '#f1db25', marginBottom: '15px' }}></i>
                    <h4 style={{ color: '#1c1c1c' }}>Integrity</h4>
                    <p>We operate with honesty and transparency in all our dealings and relationships.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <i className="fa fa-star" style={{ fontSize: '3rem', color: '#f1db25', marginBottom: '15px' }}></i>
                    <h4 style={{ color: '#1c1c1c' }}>Excellence</h4>
                    <p>We strive for excellence in every project and interaction with our clients.</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <i className="fa fa-users" style={{ fontSize: '3rem', color: '#f1db25', marginBottom: '15px' }}></i>
                    <h4 style={{ color: '#1c1c1c' }}>Collaboration</h4>
                    <p>We believe in the power of teamwork and collaborative problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h2 style={{ color: '#1c1c1c', marginBottom: '30px', textAlign: 'center' }}>Our Team</h2>
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div className="col-md-6" key={index} style={{ marginBottom: '30px' }}>
                    <div style={{
                      backgroundColor: '#f9f9f9',
                      padding: '30px',
                      borderRadius: '8px',
                      borderLeft: '4px solid #f1db25'
                    }}>
                      <h4 style={{ color: '#1c1c1c', marginBottom: '5px' }}>{member.name}</h4>
                      <p style={{ color: '#f1db25', fontWeight: 'bold', marginBottom: '10px' }}>{member.role}</p>
                      <p style={{ color: '#666' }}>{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
