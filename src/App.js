import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <TopHeader />
        <Header />      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* <Route path="/services" element={<EscortServicesPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
