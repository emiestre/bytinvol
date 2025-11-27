import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";
import '../css/style.css';
import '../css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'HOME' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT' },
    { href: '/portfolio', label: 'PORTFOLIO' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Top Contact Bar - Exactly like image */}
      <div className="header_top" style={{ 
        backgroundColor: '#1a1a1a', 
        padding: '8px 0',
        borderBottom: '1px solid #333'
      }}>
        <div className="container-fluid">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px',
            flexWrap: 'wrap'
          }}>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '14px',
              gap: '8px'
            }}>
              <i className="fa fa-map-marker  text-yellow-400" aria-hidden="true"></i>

              <span>6119 186 St, Surrey, BC V3S7P5</span>
            </a>
            <a href="tel:++1 (778) 793-4640" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '14px',
              gap: '8px'
            }}>
              <i className="fa fa-phone text-yellow-400" aria-hidden="true"></i>
              <span>Call: +1 (778) 793-4640
</span>
            </a>
            <a href="info@bytewaveinnovations.ca" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              color: 'white', 
              textDecoration: 'none',
              fontSize: '14px',
              gap: '8px'
            }}>
              <i className="fa fa-envelope text-yellow-400" aria-hidden="true"></i>
              <span>info@bytewaveinnovations.ca</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Exactly like image */}
      <nav style={{ 
        position: 'fixed',
        top: '45px', // Height of top bar
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled ? 'white' : 'white',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        padding: '15px 0'
      }}>
        <div className="container-fluid">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px'
          }}>
            {/* Logo - Guarder */}
            <Link to="/" style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#000',
              textDecoration: 'none',
              letterSpacing: '1px'
            }}>
             ByteWave
            </Link>
            
            {/* Desktop Navigation */}
                       
            <div className="flex items-center gap-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="
                              text-[14px]
                              font-bold
                              tracking-[0.5px]
                              text-black
                              no-underline
                              py-[15px]
                              px-[20px]
                              rounded-none
                              transition-all
                              duration-300
                              ease-in-out
                              hover:text-white
                              hover:bg-[#36454F]
                              hover:shadow-[inset_0_5px_0_0_#1a1a1a]
                            "
               >
                  {item.label}

                </Link>
              ))}
            </div>


            {/* Mobile Menu Button - Hidden on desktop */}
            <div style={{ display: 'none' }}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ background: 'none', border: 'none', color: '#000' }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div style={{ height: '70px' }}></div>

      {/* Add Font Awesome for icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
   
    </>
  );
};

export default Header;




  


