import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "./assets/css/style_1.css";
// import "./assets/css/responsive.css";
// import "./assets/css/font-awesome.min.css";
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EscortPricingPage from './pages/Pricing';
import EscortFAQPage from './pages/FAQ';
import EscortBlogPage from './pages/Blog';
import EscortCareersPage from './pages/careers';
import EscortPortFolioPage from './pages/PortFolio';
import EscortReferralPage from './pages/Referral';
import EscortScammerUpdatePage from './pages/ScammerUpdate';
import EscortGuestBloggingGuidlinePage from './pages/GuestBloggingGuidline';
import EscortPrivacyPolicyPage from './pages/PrivacyPolicy';
import EscortRequestForSEOPage from './pages/RequestForSEO';
import EscortSocialFeedPage from './pages/SocialFeed';
import EscortSiteMapPage from './pages/SiteMap';
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
          <Route path="/pricing" element={<EscortPricingPage />} />
          <Route path="/faqs" element={<EscortFAQPage />} />
          <Route path="/blog" element={<EscortBlogPage />} />
          <Route path='/careers' element={<EscortCareersPage />} />
          <Route path='/portfolio' element={<EscortPortFolioPage />} />
          <Route path='/referral' element={<EscortReferralPage />} />
          <Route path='/important-update-regarding-scammers' element={<EscortScammerUpdatePage />} />
          <Route path='/ema-guest-blogging-guidelines' element={<EscortGuestBloggingGuidlinePage />} />
          <Route path='/privacy-policy' element={<EscortPrivacyPolicyPage />} />
          <Route path='/request-free-seo-analysis' element={<EscortRequestForSEOPage />} />
          <Route path='/social-feed' element={<EscortSocialFeedPage />} />
          <Route path='/sitemap' element={<EscortSiteMapPage />} />
          {/* <Route path="/services" element={<EscortServicesPage />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
