import React from 'react';
import '../css/style.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero_area">
        <div className="hero_bg_box">
          <div className="img-box">
            <img src="/front.jpeg" alt="Hero Background" />
          </div>
        </div>

        <div className="slider_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>
                    Transform Your <span>Digital</span> Future
                  </h1>
                  <p>
                    ByteWave Innovations is your trusted partner in digital transformation. We deliver cutting-edge technology solutions that drive business growth and innovation.
                  </p>
                  <div className="btn-box">
                    <a href="#services" className="btn-1">Learn More</a>
                    <a href="#contact" className="btn-2">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="img_container">
                <div className="img-box">
                  <img src="/group.png" alt="About Us" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2>About ByteWave Innovations</h2>
                <p>
                  Founded with a vision to bridge the gap between innovation and implementation, ByteWave Innovations Limited is a leading technology company specializing in digital solutions. Our team of experienced professionals is dedicated to delivering excellence in every project.
                </p>
                <p>
                  We believe in the power of technology to transform businesses. With years of experience in the industry, we've helped countless organizations achieve their digital goals through strategic planning, innovative solutions, and dedicated support.
                </p>
                <a href="#contact">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="service_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <i className="fa fa-code" style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                </div>
                <div className="detail-box">
                  <h6>Web Development</h6>
                  <p>Custom web solutions built with modern technologies to meet your unique business needs.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <i className="fa fa-mobile" style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                </div>
                <div className="detail-box">
                  <h6>Mobile Apps</h6>
                  <p>Powerful mobile applications designed for iOS and Android platforms to expand your reach.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <i className="fa fa-cloud" style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                </div>
                <div className="detail-box">
                  <h6>Cloud Solutions</h6>
                  <p>Scalable cloud infrastructure and services to optimize your business operations.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: '30px' }}>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <i className="fa fa-shield" style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                </div>
                <div className="detail-box">
                  <h6>Cybersecurity</h6>
                  <p>Comprehensive security solutions to protect your data and systems from threats.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <i className="fa fa-database" style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                </div>
                <div className="detail-box">
                  <h6>Data Analytics</h6>
                  <p>Transform raw data into actionable insights to drive informed business decisions.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <i className="fa fa-cogs" style={{ fontSize: '75px', color: '#1c1c1c' }}></i>
                </div>
                <div className="detail-box">
                  <h6>IT Consulting</h6>
                  <p>Expert guidance on technology strategy, implementation, and digital transformation.</p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients/Testimonials Section */}
      <section className="client_section layout_padding">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>Our Clients</h2>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="/amazon.png" alt="Amazon" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="/apple.png" alt="Apple" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="/google.png" alt="Google" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="/microsoft.png" alt="Microsoft" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="service_section layout_padding">
        <div className="container-fluid">
          <div className="row" style={{ textAlign: 'center', color: 'white' }}>
            <div className="col-md-3">
              <h1 style={{ fontSize: '3rem', color: '#f1db25' }}>500+</h1>
              <p>Projects Completed</p>
            </div>
            <div className="col-md-3">
              <h1 style={{ fontSize: '3rem', color: '#f1db25' }}>50+</h1>
              <p>Team Members</p>
            </div>
            <div className="col-md-3">
              <h1 style={{ fontSize: '3rem', color: '#f1db25' }}>100+</h1>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3">
              <h1 style={{ fontSize: '3rem', color: '#f1db25' }}>10+</h1>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
