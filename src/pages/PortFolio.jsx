import React from "react";
import escortBannerImg from "../assets/images/escort-banner.jpg";
import BannerSection from "../components/Bannar";
import BlogArea from "../components/BlogArea";
import SEOLogos from "../components/SEOLogos";
import ProjectFormSection from "../components/ProjectFormSection";
import "../assets/css/style.css";

const EscortPortFolioPage = () => {
  return (
    <>
      {/* Banner section */}
      <BannerSection bannerImage={escortBannerImg}>
        <div className="top_content_bnr">
          <h1>Portfolio </h1>
          <div className="breadcrumb_main">
            <ol itemscope="" itemtype="https://schema.org/BreadcrumbList">
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                {" "}
                <a
                  itemtype="https://schema.org/Thing"
                  itemprop="item"
                  href="https://escortmarketing.agency"
                >
                  {" "}
                  <span itemprop="name">Home</span>
                </a>
                <meta itemprop="position" content="1" />
              </li>
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
              >
                <a
                  itemtype="https://schema.org/Thing"
                  itemprop="item"
                  href="javascript:void(0)"
                >
                  {" "}
                  <span itemprop="name">Portfolio</span>
                </a>
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </BannerSection>

      {/* content */}
      <div className="row">
        <div className="col-lg-12">
          <div className="top_head_cont">
            <h2>Portfolio</h2>
          </div>

          <ul className="info_graphic portfolio_list">
            <li>
              <figure>
                <img src="images/4.jpg" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img src="images/2.jpg" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img src="/images/3.jpg" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img src="images/1.jpg" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img
                  src="images/WhatsApp-Image-2024-10-05-at-1.20.34-PM.jpeg"
                  alt=""
                />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img src="images/port_03.png" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img src="images/port_02.png" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>

            <li>
              <figure>
                <img src="images/port_01.png" alt="" />
              </figure>

              <div className="dtls">
                <h3></h3>
              </div>
            </li>
          </ul>
          <div className="cta_link text-center">
            <a href="/contact-us/" className="mainbtn big">
              REQUEST A QUOTE
            </a>
          </div>
        </div>
      </div>

      {/* why we choose */}
      <ProjectFormSection />
      {/* blogger */}
      <BlogArea />
      {/* seo icon */}
      <SEOLogos />
    </>
  );
};

export default EscortPortFolioPage;
