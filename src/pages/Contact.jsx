import React, { useState } from 'react';
import '../css/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero_area" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="hero_bg_box">
          <div className="img-box">
            <img src="/front.jpeg" alt="Contact Us" />
          </div>
        </div>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              Get In <span style={{ color: '#f1db25' }}>Touch</span>
            </h1>
            <p style={{ color: 'white', fontSize: '1.1rem', marginTop: '15px' }}>
              We'd love to hear from you. Send us a message!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_section" style={{ backgroundColor: '#1c1c1c', paddingTop: '90px', paddingBottom: '90px' }}>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <div className="row" style={{ marginBottom: '60px' }}>
              <div className="col-md-4">
                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <i className="fa fa-map-marker" style={{ fontSize: '2rem', color: '#f1db25', marginBottom: '15px' }}></i>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>Address</h4>
                  <p style={{ color: '#666' }}>6119 186 St, Surrey, BC V3S7P5</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <i className="fa fa-phone" style={{ fontSize: '2rem', color: '#f1db25', marginBottom: '15px' }}></i>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>Phone</h4>
                  <p style={{ color: '#666' }}>+1 (778) 793-4640</p>
                </div>
              </div>
              <div className="col-md-4">
                <div style={{
                  backgroundColor: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <i className="fa fa-envelope" style={{ fontSize: '2rem', color: '#f1db25', marginBottom: '15px' }}></i>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>Email</h4>
                  <p style={{ color: '#666' }}>info@bytewaveinnovations.ca</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="row">
              <div className="col-md-8" style={{ margin: '0 auto' }}>
                <h2 style={{ color: 'white', marginBottom: '30px', textAlign: 'center' }}>Send us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="contact_form-container">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      style={{
                        border: 'none',
                        outline: 'none',
                        color: '#000000',
                        height: '120px',
                        width: '100%',
                        margin: '15px 0',
                        paddingLeft: '15px',
                        paddingTop: '15px',
                        backgroundColor: '#ffffff',
                        fontFamily: 'Poppins, sans-serif'
                      }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <div className="btn-box">
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="layout_padding" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container-fluid">
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
            <h2 style={{ color: '#1c1c1c', marginBottom: '40px', textAlign: 'center' }}>Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-md-6">
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>What is your typical project timeline?</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Project timelines vary depending on scope and complexity. Most projects take 3-6 months, though smaller projects can be completed faster.
                  </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>Do you offer support after project completion?</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Yes, we offer comprehensive support packages including maintenance, updates, and emergency support.
                  </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>What industries do you serve?</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    We work with various industries including finance, healthcare, e-commerce, manufacturing, and education.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>How much does a project cost?</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Pricing depends on project requirements. We offer flexible engagement models including fixed-price and time-and-materials.
                  </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>Can you work with existing systems?</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Absolutely. We specialize in integrating new solutions with existing systems and legacy applications.
                  </p>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: '#1c1c1c', marginBottom: '10px' }}>Do you provide training for the team?</h4>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Yes, we provide comprehensive training and documentation to ensure your team can effectively use and maintain the solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
