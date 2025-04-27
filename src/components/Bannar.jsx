import React from 'react';
import bannerImage from '../assets/images/bnr_01.webp'; 

const BannarSection = () => {
  return (
    <section className="main_bnr">
      <img src={bannerImage} alt="Banner" className="bnr_img" />

      <div className="main_txt_bnr">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="top_content_bnr">
                <div className="bnr_label">Welcome to</div>
                <h1>Escort Marketing Agency</h1>
                <p>
                  <strong>
                    Get your adult and escort website promoted on Google with our experienced team of over 7 years
                  </strong>
                </p>
                <div className="top_cta">
                  <a
                    className="mainbtn big"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannarSection;