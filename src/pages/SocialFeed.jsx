import React from "react";
import escortBannerImg from "../assets/images/escort-banner.jpg";
import BannerSection from "../components/Bannar";
import BlogArea from "../components/BlogArea";
import SEOLogos from "../components/SEOLogos";
import ProjectFormSection from "../components/ProjectFormSection";

const EscortSocialFeedPage = () => {
  return (
    <>
      {/* Banner section */}
      <BannerSection bannerImage={escortBannerImg}>
        <div class="top_content_bnr">
          <h1 plerdy-tracking-id="88430901101">Social Feed </h1>
          <div class="breadcrumb_main">
            <ol itemscope="" itemtype="https://schema.org/BreadcrumbList">
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
                plerdy-tracking-id="92338336701"
              >
                {" "}
                <a
                  itemtype="https://schema.org/Thing"
                  itemprop="item"
                  href="https://escortmarketing.agency"
                  plerdy-tracking-id="92338336701"
                  target="_blank"
                >
                  {" "}
                  <span itemprop="name" plerdy-tracking-id="56607887001">
                    Home
                  </span>
                </a>
                <meta itemprop="position" content="1" />
              </li>
              <li
                itemprop="itemListElement"
                itemscope=""
                itemtype="https://schema.org/ListItem"
                plerdy-tracking-id="44047804901"
              >
                <a
                  itemtype="https://schema.org/Thing"
                  itemprop="item"
                  href="javascript:void(0)"
                  plerdy-tracking-id="44047804901"
                  target="_blank"
                >
                  {" "}
                  <span itemprop="name" plerdy-tracking-id="19361428801">
                    Social Feed
                  </span>
                </a>
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </BannerSection>
      {/* content  */}
      <section className="content_page_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content_area">
                <div id="bsf_rt_marker">
                  <h2 className="big_title" plerdy-tracking-id={22111312501}>
                    Our Social Feed
                  </h2>
                  <div id="sbi_mod_error">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* form area */}
      <ProjectFormSection />
      <BlogArea />
      <SEOLogos />
    </>
  );
};

export default EscortSocialFeedPage;
