import React, { useState } from 'react';
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";
import '../css/style.css';
import '../css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Headers: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero_area">
      {/* header section starts */}
      <div className="hero_bg_box">
        <div className="img-box">
          <img src="images/hero-bg.jpg" alt="background" />
        </div>
      </div>

      <header className="header_section">
        
        
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a href="/" className="navbar-brand">
                <span>
                  Guarder
                </span>
              </a>
              <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/service">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/guard">Guards</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* end header section */}
    </div>
  );
};

export default Headers;
