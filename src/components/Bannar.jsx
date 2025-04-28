import React from 'react';

const BannerSection = ({ bannerImage, children }) => {
  return (
    <section className="main_bnr">
      <img src={bannerImage} alt="Banner" className="bnr_img" />

      <div className="main_txt_bnr">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="top_content_bnr">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;