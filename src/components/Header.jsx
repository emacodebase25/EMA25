import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row align_center">
          <div className="col-lg-3 col-sm-4 col-9">
            <div className="d-flex align-items-center">
              <div className="logo_area">
                <div className="site-logo">
                  <span className="custom-logo-link">
                    <img
                      width="863"
                      height="287"
                      src="/images/logo.png"
                      className="custom-logo"
                      alt="Logo"
                      decoding="async"
                      srcSet="/images/logo.png 863w, /images/logo-300x100.png 300w, /images/logo-768x255.png 768w"
                      sizes="(max-width: 863px) 100vw, 863px"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-sm-8 no_pos col-3">
            <nav id="site-navigation" className="primary-navigation" aria-label="Primary menu">
              <div className="mobile_nav"><span></span></div>

              <div className="menu-main-menu-container">
                <ul id="menu-main-menu" className="nav-menu">
                  <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
                  <li><a href="/about-us" target="_blank" rel="noopener noreferrer">About</a></li>

                  {/* Services Menu with Submenu */}
                  <li className={`menu-item-has-children ${isSubMenuOpen ? 'open' : ''}`}>
                    <div className="services-menu">
                      <a href="#" target="_blank" rel="noopener noreferrer">Services</a>
                      <button
                        className="sub-menu-toggle"
                        aria-expanded={isSubMenuOpen}
                        onClick={toggleSubMenu}
                      >
                        {isSubMenuOpen ? (
                          <span className="icon-minus">-</span>
                        ) : (
                          <span className="icon-plus">+</span>
                        )}
                      </button>
                    </div>

                    {/* Submenu */}
                    {isSubMenuOpen && (
                      <ul className="sub-menu">
                        <li><Link to="/independent-escort-seo" target="_blank" rel="noopener noreferrer">Independent Escort SEO</Link></li>
                        <li><Link to="/escort-directory-seo" target="_blank" rel="noopener noreferrer">Escort Directory SEO</Link></li>
                        <li><Link to="/escort-seo" target="_blank" rel="noopener noreferrer">Escort SEO</Link></li>
                        <li><Link to="/enterprise-seo-services" target="_blank" rel="noopener noreferrer">Enterprise SEO Services</Link></li>
                        <li><Link to="/adult-seo" target="_blank" rel="noopener noreferrer">Adult SEO</Link></li>
                        <li><Link to="/adult-link-building" target="_blank" rel="noopener noreferrer">Adult Link Building</Link></li>
                        <li><Link to="/ecommerceSEO" target="_blank" rel="noopener noreferrer">Adult E-Commerce SEO</Link></li>
                        <li><Link to="/porn-tube-seo" target="_blank" rel="noopener noreferrer">Porn Tube SEO</Link></li>
                        <li><Link to="/webcams-seo" target="_blank" rel="noopener noreferrer">Adult Webcams SEO</Link></li>
                        <li><Link to="/adult-social-media-marketing" target="_blank" rel="noopener noreferrer">Escort Social Media Marketing</Link></li>
                        <li><Link to="/adult-android-app-development-agency" target="_blank" rel="noopener noreferrer">Adult Android App Development Agency</Link></li>
                        <li><Link to="/adult-dating-websites-seo" target="_blank" rel="noopener noreferrer">Adult Dating SEO</Link></li>
                        <li><Link to="/adult-content-writing-services" target="_blank" rel="noopener noreferrer">Adult Content Writing Services</Link></li>
                        <li><Link to="/pornstar-seo" target="_blank" rel="noopener noreferrer">Porn Star SEO</Link></li>
                        <li><Link to="/erotic-massage-seo" target="_blank" rel="noopener noreferrer">Erotic Massage SEO</Link></li>
                        <li><Link to="/strippers-seo" target="_blank" rel="noopener noreferrer">Strippers SEO</Link></li>
                        <li><Link to="/brothel-seo" target="_blank" rel="noopener noreferrer">Brothel SEO</Link></li>
                      </ul>
                    )}
                  </li>

                  <li><a href="/faqs" target="_blank" rel="noopener noreferrer">FAQ</a></li>
                  <li><a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
                  <li><Link to="/pricing" target="_blank" rel="noopener noreferrer">Pricing</Link></li>
                  <li><Link to="/contact-us" target="_blank" rel="noopener noreferrer">Contact</Link></li>
                  <li><a href="/contact-us" target="_blank" rel="noopener noreferrer">Get a Quote</a></li>
                </ul>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;