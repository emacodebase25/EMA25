import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "./assets/css/style_1.css";
// import "./assets/css/responsive.css";
// import "./assets/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
// import EscortSEOPage from './pages/EscortSeo';
import EscortSEOLayOutPage from './pages/SEOLayOut';
import EscortNotFoundpage from './components/NotFoundPage';
import Independentescort from './pages/Independentescort';
import Escortseo from './pages/EscortSeo';
import Escortdirectoryseo from './pages/escortdirectoryseo';
import Adultlinkbuilding from './pages/Adultlinkbuilding';
import Adultseo from './pages/adultseo';
import Enterpriseseoservices from './pages/Enterpriseseoservices';
import EcommerceSEO from './pages/Ecommerceseo';
import PorntubeSEO from './pages/porntubeseo';
import Adultwebcam from './pages/Adultwebcam';
import Androidappdev from './pages/Androidappdev';
import Socialmediamarketing from './pages/Socialmediamarketing';
import Adultdating from './pages/Adultdating';
import Contentwriting from './pages/Contentwriting';
import Pornstar from './pages/Pornstar';
import Strippers from './pages/Strippers';
import EroticMessage from './pages/Eroticmessage';
import Adultweb from './pages/Adultweb';
import Brothel from './pages/Brothel';


function App() {
  return (
    <Router>
      <div className='App'>
        <TopHeader />
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/pricing' element={<EscortPricingPage />} />
          <Route path='/faqs' element={<EscortFAQPage />} />
          <Route path='/blog' element={<EscortBlogPage />} />
          <Route path='/careers' element={<EscortCareersPage />} />
          <Route path='/portfolio' element={<EscortPortFolioPage />} />
          <Route path='/referral' element={<EscortReferralPage />} />
          <Route
            path='/important-update-regarding-scammers'
            element={<EscortScammerUpdatePage />}
          />
          <Route
            path='/ema-guest-blogging-guidelines'
            element={<EscortGuestBloggingGuidlinePage />}
          />
          <Route path='/privacy-policy' element={<EscortPrivacyPolicyPage />} />
          <Route
            path='/request-free-seo-analysis'
            element={<EscortRequestForSEOPage />}
          />
          <Route path='/social-feed' element={<EscortSocialFeedPage />} />
          <Route path='/sitemap' element={<EscortSiteMapPage />} />
          {/* <Route path='/escort-seo' element={<EscortSEOPage />} /> */}
          <Route path='/seo/:seo_page' element={<EscortSEOLayOutPage />} />

          <Route
            path='/independent-escort-seo'
            element={<Independentescort />}
          />

          <Route path='/escort-seo' element={<Escortseo />} />

          <Route path='/escort-directory-seo' element={<Escortdirectoryseo />} />

          <Route path='/adult-link-building' element={<Adultlinkbuilding />} />

          <Route path='/adult-seo' element={<Adultseo />} />

          <Route
            path='/enterprise-seo-services'
            element={<Enterpriseseoservices />}
          />

          <Route path='/ecommerceSEO' element={<EcommerceSEO />} />

          <Route path='/porn-tube-seo' element={<PorntubeSEO />} />
          <Route path='/webcams-seo' element={<Adultwebcam />} />
          <Route path='/adult-android-app-development-agency' element={<Androidappdev />} />
          <Route path='/adult-social-media-marketing' element={<Socialmediamarketing />} />
          <Route path='/adult-dating-websites-seo' element={<Adultdating />} />
          <Route path='/adult-content-writing-services' element={<Contentwriting />} />
          <Route path='/pornstar-seo' element={<Pornstar />} />
          <Route path='/strippers-seo' element={<Strippers />} />
          <Route path='/erotic-massage-seo' element={<EroticMessage />} />
          <Route path="/adult-website-design" element={<Adultweb />} />
          <Route path="/brothel-seo" element={<Brothel />} />
          
          <Route path='*' element={<EscortNotFoundpage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
