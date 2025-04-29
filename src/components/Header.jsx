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
                      src="images/logo.png"
                      className="custom-logo"
                      alt="Logo"
                      decoding="async"
                      srcSet="images/logo.png 863w, images/logo-300x100.png 300w, images/logo-768x255.png 768w"
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
                  <li><a href="/">Home</a></li>
                  <li><a href="/about-us">About</a></li>

                  {/* Services Menu with Submenu */}
                  <li className={`menu-item-has-children ${isSubMenuOpen ? 'open' : ''}`}>
                    <div className="services-menu">
                      <a href="#">Services</a>
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
                        <li><a href="https://escortmarketing.agency/enterprise-seo-services/">Enterprise SEO Services</a></li>
                        <li><a href="https://escortmarketing.agency/adult-seo/">Adult SEO</a></li>
                        <li><a href="https://escortmarketing.agency/adult-e-commerce-seo/">Adult E-Commerce SEO</a></li>
                        <li><a href="https://escortmarketing.agency/escort-seo/">Escort SEO</a></li>
                        <li><a href="https://escortmarketing.agency/adult-link-building/">Adult Link Building</a></li>
                        <li><a href="https://escortmarketing.agency/porn-tube-seo/">Porn Tube SEO</a></li>
                        <li><a href="https://escortmarketing.agency/adult-website-design/">Adult Website Design</a></li>
                        <li><a href="https://escortmarketing.agency/webcams-seo/">Adult Webcams SEO</a></li>
                        <li><a href="https://escortmarketing.agency/adult-social-media-marketing/">Escort Social Media Marketing</a></li>
                        <li><a href="https://escortmarketing.agency/adult-android-app-development-agency/">Adult Android App Development Agency</a></li>
                        <li><a href="https://escortmarketing.agency/adult-dating-websites-seo/">Adult Dating SEO</a></li>
                        <li><a href="https://escortmarketing.agency/adult-content-writing-services/">Adult Content Writing Services</a></li>
                        <li><a href="https://escortmarketing.agency/pornstar-seo/">Porn Star SEO</a></li>
                        <li><a href="https://escortmarketing.agency/erotic-massage-seo/">Erotic Massage SEO</a></li>
                        <li><a href="https://escortmarketing.agency/strippers-seo/">Strippers SEO</a></li>
                        <li><a href="https://escortmarketing.agency/brothel-seo/">Brothel SEO</a></li>
                      </ul>
                    )}
                  </li>

                  <li><a href="/faqs">FAQ</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/contact-us">Contact</Link></li>
                  <li><a href="/contact-us">Get a Quote</a></li>
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