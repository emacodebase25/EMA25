import React from "react";
import "./TopHeader.css";
import 'font-awesome/css/font-awesome.min.css';

const TopHeader = () => {
  return (
    <section className="top_header">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="a_detials">
                  <figure>
                    <img src="images/uk.png" alt="" />
                    <a href="tel:+19295782749">+19295782749</a>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="gtranslate_wrapper" id="gt-wrapper-62989213"></div>

          <div className="col-lg-6 col-md-6">
            <div className="row">
              <div className="col-lg-12 col-md-12 d-flex justify-content-center">
                <ul className="social-icon">
                  <li>
                    <a
                      href="https://twitter.com/EscortSEOAgency"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                    >
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/escortmarketingagency/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/escort-marketing-agency/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="skype:live:.cid.3022ec909df75187?chat"
                      aria-label="Skype"
                    >
                      <i className="fa fa-skype" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://escortmarketing.agency/sitemap.rss"
                      aria-label="RSS"
                    >
                      <i className="fa fa-rss" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
