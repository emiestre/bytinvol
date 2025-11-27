import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './css/style.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
