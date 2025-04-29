import React from "react";
import escortBannerImg from "../assets/images/image.png";
import BannerSection from "../components/Bannar";
// import "../assets/css/style_1.css";
// import "font-awesome/css/font-awesome.min.css";
import ProjectFormSection from "../components/ProjectFormSection";
import BlogArea from "../components/BlogArea";
import SEOLogos from "../components/SEOLogos";
import ContactUs from "../components/ContactUs";

const EscortContactPage = () => {
  return (
    <>
      <BannerSection bannerImage={escortBannerImg}>
        <div>
        <h1>Contact us </h1>
          <div className="breadcrumb_main">
            <ol itemscope itemtype="https://schema.org/BreadcrumbList">
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                <a
                  itemtype="https://schema.org/Thing"
                  itemprop="item"
                  href="https://escortmarketing.agency"
                >
                  <span itemprop="name">Home</span>
                </a>
                <meta itemprop="position" content="1" />
              </li>
              <li
                itemprop="itemListElement"
                itemscope
                itemtype="https://schema.org/ListItem"
              >
                <a
                  itemtype="https://schema.org/Thing"
                  itemprop="item"
                  href="javascript:void(0)"
                >
                  <span itemprop="name">Contact us</span>
                </a>
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </BannerSection>

      {/* Content area */}

      <ContactUs />
      <ProjectFormSection />
      <BlogArea />
      <SEOLogos />
    </>
  );
};

export default EscortContactPage;
