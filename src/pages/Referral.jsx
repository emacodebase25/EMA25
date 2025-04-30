import React from "react";
import escortBannerImg from "../assets/images/escort-banner.jpg";
import BannerSection from "../components/Bannar";
import BlogArea from "../components/BlogArea";
import SEOLogos from "../components/SEOLogos";
import ProjectFormSection from "../components/ProjectFormSection";

const EscortReferralPage = () => {
  return (
    <>
      {/* Banner section */}
      <BannerSection bannerImage={escortBannerImg}>
        <div className="top_content_bnr">
          <h1>Referral </h1>
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
                  <span itemprop="name">Referral</span>
                </a>
                <meta itemprop="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </BannerSection>

      {/* Referral content */}
      <section className="content_page_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ref_form">
                <h2>Refer another business to EMA</h2>
                <p>
                  At our Escort Marketing Agency, the biggest compliment you
                  could give us is to refer our services to your near dear ones.
                  If you know someone who is willing to grow their escort
                  business online then you can provide a referral to them.
                  Referrals are the most effective path to growing a business.
                  Here you need to fill in the following details your name,
                  phone number, email address, referral name, their phone
                  number, email address, the website that they want to grow, and
                  explain in a few words the services that they want to avail
                  from our end. As we know rewards are essential and when you
                  motivate referrers or ask them to tell their family and
                  friends then you will get 25% of the amount of service
                  they have availed.
                </p>

                <div
                  className="wpcf7 no-js"
                  id="wpcf7-f3021-o1"
                  lang="en-US"
                  dir="ltr"
                >
                  <div className="screen-reader-response">
                    <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                    <ul></ul>
                  </div>
                  <form
                    action="/referral/#wpcf7-f3021-o1"
                    method="post"
                    className="wpcf7-form init"
                    aria-label="Contact form"
                    novalidate="novalidate"
                    data-status="init"
                  >
                    <div style={{"display": "none"}}>
                      <input type="hidden" name="_wpcf7" value="3021" />
                      <input
                        type="hidden"
                        name="_wpcf7_version"
                        value="5.7.7"
                      />
                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                      <input
                        type="hidden"
                        name="_wpcf7_unit_tag"
                        value="wpcf7-f3021-o1"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_container_post"
                        value="0"
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_posted_data_hash"
                        value=""
                      />
                      <input
                        type="hidden"
                        name="_wpcf7_recaptcha_response"
                        value=""
                      />
                    </div>
                    <ul className="form_area">
                      <li>
                        <p>
                          <label>Your Name</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="text-152"
                          >
                            <input
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Your Name Here"
                              value=""
                              type="text"
                              name="text-152"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Your Phone Number</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="number-153"
                          >
                            <input
                              className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Phone Number"
                              value=""
                              type="number"
                              name="number-153"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Your Email</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="email-162"
                          >
                            <input
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="abc@gmail.com"
                              value=""
                              type="email"
                              name="email-162"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Referral's NameName</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="text-154"
                          >
                            <input
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Your Name Here"
                              value=""
                              type="text"
                              name="text-154"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Their Phone</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="number-154"
                          >
                            <input
                              className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Phone Number"
                              value=""
                              type="number"
                              name="number-154"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Their Email</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="email-163"
                          >
                            <input
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="abc@gmail.com"
                              value=""
                              type="email"
                              name="email-163"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>Their Website</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="text-155"
                          >
                            <input
                              size="40"
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                              aria-required="true"
                              aria-invalid="false"
                              placeholder="Enter Your Name Here"
                              value=""
                              type="text"
                              name="text-155"
                            />
                          </span>
                        </p>
                      </li>
                      <li>
                        <p>
                          <label>How can we help them</label>
                          <span
                            className="wpcf7-form-control-wrap"
                            data-name="textarea-144"
                          >
                            <textarea
                              cols="40"
                              rows="10"
                              className="wpcf7-form-control wpcf7-textarea"
                              aria-invalid="false"
                              placeholder="Describe Their Requirement"
                              name="textarea-144"
                            ></textarea>
                          </span>
                        </p>
                      </li>
                      <li>
                        <div className="cta_area">
                          <p>
                            <input
                              className="wpcf7-form-control has-spinner wpcf7-submit sbmt"
                              type="submit"
                              value="Send"
                            />
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div
                      className="wpcf7-response-output"
                      aria-hidden="true"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="content_area">
                <div id="bsf_rt_marker"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectFormSection />
      <BlogArea />
      <SEOLogos />
    </>
  );
};

export default EscortReferralPage;
