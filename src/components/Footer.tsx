import React, { useState } from 'react';
import { Facebook, Instagram, ArrowUp } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import PrivacyContent from './PrivacyContent';
import TermsContent from './TermsContent';
import Modal from './Modal';
import '../css/style.css';
import '../css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Font } from './../../node_modules/lightningcss/node/ast.d';
import style from './../../node_modules/dom-helpers/esm/css';

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61575892603035', label: 'Facebook' },
    { icon: FaWhatsapp, href: 'https://wa.me/17787934640', label: 'WhatsApp' },
    { icon: FaXTwitter, href: 'https://x.com/Bytewave2025', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/bytewaveinnovationslimited/', label: 'Instagram' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@bytewave2025', label: 'TikTok' },
  ];

  const serviceLinks = [
    { label: 'Custom Software Development', href: '/services' },
    { label: 'Cloud Solutions & Infrastructure', href: '/services' },
    { label: 'Cybersecurity Services', href: '/services' },
    { label: 'Data Analytics & AI', href: '/services' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-dark text-white relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Main Footer Content */}
      <section className="info_section relative py-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="info_logo">
                <a className="navbar-brand d-block mb-3" href="/" style={{ textDecoration: 'none' }}>
                  <div className="d-flex align-items-center">
                    <img 
                      src="./byte.png" 
                      alt="ByteWave Innovations" 
                      className="h-16 w-auto rounded-full bg-white p-2 me-3"
                    />
                    <div>
                      <span className="h4 mb-0 d-block" style={{ color: 'white', fontWeight: '600' }}>
                        ByteWave
                      </span>
                      <small className="text-primary" style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                        Innovations Ltd
                      </small>
                    </div>
                  </div>
                </a>
                <p className="text-light mb-4" style={{ lineHeight: '1.6', fontSize: '1.6rem' }}>
                  Delivering cutting-edge technology solutions to propel your business into the future. 
                  Innovation, transformation, and success - that's our promise.
                </p>
                
                {/* Social Links */}
                <div className="social-box">
                  <h3 className="text-white mb-3" style={{ fontWeight: '400' }}>Follow Us</h3>
                  <div className="d-flex gap-2">
                     {socialLinks.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 rounded transition-all duration-300 bg-white/10 border border-white/20 hover:bg-blue-500 hover:-translate-y-1"
                              style={{
                                color: 'white',
                                textDecoration: 'none',
                              }}
                            >
                              <Icon size={20} />
                            </a>
                          );
                        })}

                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Links */}
            <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
              <div className="info_links">
                <h5 className="text-white mb-4" style={{ fontWeight: '600', fontSize: '1.9rem' }}>Services</h5>

                
                {/* <ul className="list-unstyled">
                  {serviceLinks.map((link, index) => (
                    <li key={index} className="mb-3">
                      <a 
                        href={link.href}
                        className="text-light text-decoration-none d-block py-1"
                        style={{
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.color = '#0d6efd';
                          e.target.style.paddingLeft = '8px';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = '#dee2e6';
                          e.target.style.paddingLeft = '0';
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul> */}
                <ul className="list-unstyled">
                      {serviceLinks.map((link, index) => (
                        <li key={index} className="mb-3">
                          <a
                            href={link.href}
                            className="text-gray-300 block py-1 text-[1.5rem] hover:text-blue-600 hover:pl-2 transition-all duration-300"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>

              </div>
            </div>
            
            {/* Company Links */}
            <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
              <div className="info_links">
                <h5 className="text-white mb-4" style={{ fontWeight: '600', fontSize: '1.9rem' }}>Company</h5>
                {/* <ul className="list-unstyled">
                  {companyLinks.map((link, index) => (
                    <li key={index} className="mb-3">
                      <a 
                        href={link.href}
                        className="text-light text-decoration-none d-block py-1"
                        style={{
                          transition: 'all 0.3s ease',
                          fontSize: '0.9rem'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.color = '#0d6efd';
                          e.target.style.paddingLeft = '8px';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = '#dee2e6';
                          e.target.style.paddingLeft = '0';
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul> */}
    
             <ul className="list-unstyled">
                {companyLinks.map((link, index) => (
                  <li key={index} className="mb-3">
                    <a
                      href={link.href}
                      className="text-gray-300 block py-1 text-[1.5rem] hover:text-blue-600 hover:pl-2 transition-all duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              </div>
            </div>
            
            {/* Contact & Newsletter */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="info_form">
                <h5 className="text-white mb-4" style={{ fontWeight: '600', fontSize: '1.9rem' }}>Stay Updated</h5>
                
                {/* Newsletter Form */}
                <form onSubmit={handleSubmit} className="mb-4">
                  <div className="mb-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-control form-control-lg"
                      style={{ 
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: 'white',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100"
                    disabled={isSubscribed}
                    style={{ fontWeight: '500' }}
                  >
                    {isSubscribed ? 'Thank You!' : 'Subscribe to Newsletter'}
                  </button>
                </form>
                
                {/* Contact Info */}
                <div className="contact-info">
                  <h6 className="text-white mb-3" style={{ fontWeight: '600', fontSize: '1.9rem' }}>Contact Info</h6>
                  <div className="d-flex flex-column gap-2">
                    <a href="tel:+17787934640" className="text-light text-decoration-none d-flex align-items-center">
                      <i className="fa fa-phone me-2" style={{ width: '20px' }}></i>
                      <span style={{ fontSize: '1.5rem' }}>+1 (778) 793-4640</span>
                    </a>
                    <a href="mailto:info@bytewaveinnovations.ca" className="text-light text-decoration-none d-flex align-items-center">
                      <i className="fa fa-envelope me-2" style={{ width: '20px' }}></i>
                      <span style={{ fontSize: '1.5rem' }}>info@bytewaveinnovations.ca</span>
                    </a>
                    <div className="text-light d-flex align-items-center">
                      <i className="fa fa-map-marker me-2" style={{ width: '20px' }}></i>
                      <span style={{ fontSize: '1.5rem' }}>6119 186 St, Surrey, BC V3S7P5</span>
                    </div>
                  </div>
                </div>

                {/* Legal Links & Scroll to Top */}
                <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top border-secondary">
                  <div className="legal-links d-flex gap-3">
                    <button
                      onClick={() => setIsPrivacyOpen(true)}
                      className="btn btn-link text-light text-decoration-none p-0"
                      style={{ 
                        background: 'transparent', 
                        border: 'none',
                        fontSize: '1.9rem',
                        fontWeight: '800'
                      }}
                    >
                      Privacy Policy
                    </button>
                    <button
                      onClick={() => setIsTermsOpen(true)}
                      className="btn btn-link text-light text-decoration-none p-0"
                      style={{ 
                        background: 'transparent', 
                        border: 'none',
                        fontSize: '1.9rem',
                        fontWeight: '800'
                      }}
                    >
                      Terms of Use
                    </button>
                  </div>
                  <button
                    onClick={scrollToTop}
                    className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '45px',
                      height: '45px'
                    }}
                    title="Scroll to top"
                  >
                    <ArrowUp size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="border-top border-secondary mt-4 pt-4">
            <div className="row">
              <div className="col-12 text-center">
                <div className="text-light" style={{ fontSize: '0.9rem' }}>
                  <p className="mb-0">
                    &copy; {currentYear} {' '}
                    <a 
                      href='https://bytewaveinnovationslimited.ca' 
                      className="text-primary text-decoration-none fw-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ByteWave Innovations Limited
                    </a>
                    . All Rights Reserved. {' | '} 
                    Powered by {' '}
                    <a 
                      className="text-primary text-decoration-none fw-bold" 
                      href="mailto:kemiestre@gmail.com"
                    >
                      Emiestre
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal 
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={<span className="text-black text">Privacy Policy</span>}
        
      >
        <PrivacyContent />
      </Modal>

      <Modal
              isOpen={isTermsOpen}
              onClose={() => setIsTermsOpen(false)}
              title={<span className="text-black">Terms of Use</span>}
            >
              <TermsContent />
            </Modal>
``
    </footer>
  );
};

export default Footer;