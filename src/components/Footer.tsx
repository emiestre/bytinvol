import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('/api/send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Newsletter Subscriber',
            email: email,
            subject: 'Newsletter Subscription',
            message: 'User subscribed to our newsletter',
            component: 'Footer Newsletter'
          })
        });

        const data = await response.json();

        if (data.success) {
          setIsSubscribed(true);
          setEmail('');
          setTimeout(() => setIsSubscribed(false), 3000);
        } else {
          console.error('Failed to send subscription email');
        }
      } catch (error) {
        console.error('Error:', error);
      }
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
      <section className="info_section relative" style={{ padding: 'clamp(1.5rem, 5vw, 3rem) 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(1.5rem, 4vw, 2.5rem)' }}>

            {/* Company Info */}
            <div>
              <div className="info_logo">
                <Link className="navbar-brand d-block mb-3" to="/" style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img
                      src="./byte.png"
                      alt="ByteWave Innovations"
                      style={{
                        height: 'clamp(2.5rem, 8vw, 4rem)',
                        width: 'auto',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        padding: '0.5rem'
                      }}
                    />
                    <div>
                      <span style={{ color: 'white', fontWeight: '600', fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', display: 'block', lineHeight: '1.2' }}>
                        ByteWave
                      </span>
                      <small style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)', fontWeight: '500', color: '#0d6efd' }}>
                        Innovations Ltd
                      </small>
                    </div>
                  </div>
                </Link>
                <p style={{ color: '#e0e0e0', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                  Delivering cutting-edge technology solutions to propel your business into the future. Innovation, transformation, and success - that's our promise.
                </p>

                {/* Social Links */}
                <div>
                  <h3 style={{ color: 'white', marginBottom: '1rem', fontWeight: '400', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}>Follow Us</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 'clamp(2.2rem, 5vw, 2.8rem)',
                            height: 'clamp(2.2rem, 5vw, 2.8rem)',
                            borderRadius: '0.375rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#0d6efd';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h5 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '600', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Services</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {serviceLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      to={link.href}
                      style={{
                        color: '#b0b0b0',
                        textDecoration: 'none',
                        display: 'block',
                        padding: '0.25rem 0',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0d6efd';
                        e.currentTarget.style.paddingLeft = '0.5rem';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#b0b0b0';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h5 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '600', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Company</h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {companyLinks.map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.75rem' }}>
                    <Link
                      to={link.href}
                      style={{
                        color: '#b0b0b0',
                        textDecoration: 'none',
                        display: 'block',
                        padding: '0.25rem 0',
                        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0d6efd';
                        e.currentTarget.style.paddingLeft = '0.5rem';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#b0b0b0';
                        e.currentTarget.style.paddingLeft = '0';
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h5 style={{ color: 'white', marginBottom: '1.5rem', fontWeight: '600', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Stay Updated</h5>

              <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      color: 'white',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      padding: 'clamp(0.5rem, 2vw, 0.75rem)',
                      borderRadius: '0.375rem',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  style={{
                    backgroundColor: '#0d6efd',
                    color: 'white',
                    border: 'none',
                    padding: 'clamp(0.5rem, 2vw, 0.75rem)',
                    borderRadius: '0.375rem',
                    width: '100%',
                    fontWeight: '500',
                    fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    opacity: isSubscribed ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => !isSubscribed && (e.currentTarget.style.backgroundColor = '#0a58ca')}
                  onMouseLeave={(e) => !isSubscribed && (e.currentTarget.style.backgroundColor = '#0d6efd')}
                >
                  {isSubscribed ? 'Thank You!' : 'Subscribe'}
                </button>
              </form>

              {/* Contact Info */}
              <div>
                <h6 style={{ color: 'white', marginBottom: '0.75rem', fontWeight: '600', fontSize: 'clamp(1rem, 3vw, 1.2rem)' }}>Contact Info</h6>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="tel:+17787934640" style={{ color: '#e0e0e0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e0e0e0'}
                  >
                    <i className="fa fa-phone" style={{ width: '20px' }}></i>
                    <span>+1 (778) 793-4640</span>
                  </a>
                  <a href="mailto:info@bytewaveinnovations.ca" style={{ color: '#e0e0e0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#e0e0e0'}
                  >
                    <i className="fa fa-envelope" style={{ width: '20px' }}></i>
                    <span>info@bytewaveinnovations.ca</span>
                  </a>
                  <div style={{ color: '#e0e0e0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                    <i className="fa fa-map-marker" style={{ width: '20px' }}></i>
                    <span>6119 186 St, Surrey, BC V3S7P5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links & Scroll to Top */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'clamp(1.5rem, 4vw, 2rem)', paddingTop: 'clamp(1.5rem, 4vw, 2rem)', borderTop: '1px solid rgba(255,255,255,0.2)', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: 'clamp(0.75rem, 3vw, 1.5rem)', flexWrap: 'wrap' }}>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: '600',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  fontWeight: '600',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0d6efd'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Terms of Use
              </button>
            </div>
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: '#0d6efd',
                color: 'white',
                border: 'none',
                width: 'clamp(2rem, 5vw, 3rem)',
                height: 'clamp(2rem, 5vw, 3rem)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0a58ca';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0d6efd';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              title="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Copyright Section */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: 'clamp(1.5rem, 4vw, 2rem)', paddingTop: 'clamp(1.5rem, 4vw, 2rem)', padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ color: '#e0e0e0', fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)' }}>
            <p style={{ margin: 0 }}>
              &copy; {currentYear} {' '}
              <a
                href='https://bytewaveinnovationslimited.ca'
                style={{ color: '#0d6efd', textDecoration: 'none', fontWeight: 'bold' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                ByteWave Innovations Limited
              </a>
              . All Rights Reserved. {' | '}
              Powered by {' '}
              <a
                style={{ color: '#0d6efd', textDecoration: 'none', fontWeight: 'bold' }}
                href="mailto:kemiestre@gmail.com"
              >
                Emiestre
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={<span className="text-black">Privacy Policy</span>}
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
    </footer>
  );
};

export default Footer;
