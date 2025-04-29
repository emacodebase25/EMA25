import React from "react";
import escortBannerImg from "../assets/images/escort-banner.jpg";
import BannerSection from "../components/Bannar";
import PricingTable from "../components/PricingContent";
import ProjectFormSection from "../components/ProjectFormSection";
import BlogArea from "../components/BlogArea";
import SEOLogos from "../components/SEOLogos";

const EscortPricingPage = () => {
    return (
        <>
          <BannerSection bannerImage={escortBannerImg}>
            {/* Dynamic content passed as children */}
            <div>
              <h1>Pricing</h1>
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
                      <span itemprop="name">Pricing</span>
                    </a>
                    <meta itemprop="position" content="2" />
                  </li>
                </ol>
              </div>
            </div>
          </BannerSection>
          
          {/* content section */}
         <PricingTable />

         {/* why we choose us*/}
         <ProjectFormSection />

         {/* latest news */}
         <BlogArea />

         {/* icon */}
         <SEOLogos />
          </>
          );
};

export default EscortPricingPage;
