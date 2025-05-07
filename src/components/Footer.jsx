import React from "react";
import payImg from "../assets/images/payments-ezgif.png";

const Footer = () => {
  const seoLinks = [
    { href: "/seo/philippines", label: "Adult SEO Services Philippines" },
    { href: "/seo/montenegro", label: "Adult SEO Services Montenegro" },
    { href: "/seo/slovenia", label: "Adult SEO Services Slovenia" },
    { href: "/seo/portugal", label: "Adult SEO Services Portugal" },
    { href: "/seo/malta", label: "Adult SEO Services Malta" },
    { href: "/seo/lebanon", label: "Adult SEO Services Lebanon" },
    { href: "/seo/panama", label: "Adult SEO Services Panama" },
    { href: "/seo/peru", label: "Adult SEO Services Peru" },
    { href: "/seo/indonesia", label: "Adult SEO Services Indonesia" },
    { href: "/seo/greece", label: "Adult SEO Services Greece" },
    { href: "/seo/turkey", label: "Adult SEO Services Turkey" },
    { href: "/seo/india", label: "Adult SEO Services India" },
    { href: "/seo/south_korea", label: "Adult SEO Services South Korea" },
    { href: "/seo/switzerland", label: "Adult SEO Services Switzerland" },
    { href: "/seo/brazil", label: "Adult SEO Services Brazil" },
    { href: "/seo/thailand", label: "Adult SEO Services Thailand" },
    { href: "/seo/italy", label: "Adult SEO Services Italy" },
    { href: "/seo/singapore", label: "Adult SEO Services Singapore" },
    { href: "/seo/poland", label: "Adult SEO Services Poland" },
    { href: "/seo/newzealand", label: "Adult SEO Services New Zealand" },
    { href: "/seo/japan", label: "Adult SEO Services Japan" },
    { href: "/seo/hungary", label: "Adult SEO Services Hungary" },
    { href: "/seo/finland", label: "Adult SEO Services Finland" },
    { href: "/seo/estonia", label: "Adult SEO Services Estonia" },
    { href: "/seo/bulgaria", label: "Adult SEO Services Bulgaria" },
    { href: "/seo/belgium", label: "Adult SEO Services Belgium" },
    { href: "/seo/austria", label: "Adult SEO Services Austria" },
    { href: "/seo/spain", label: "Adult SEO Services Spain" },
    { href: "/seo/romania", label: "Adult SEO Services Romania" },
    { href: "/seo/germany", label: "Adult SEO Services Germany" },
    { href: "/seo/denmark", label: "Adult SEO Services Denmark" },
    { href: "/seo/russia", label: "Adult SEO Services Russia" },
    { href: "/seo/canada", label: "Adult SEO Services Canada" },
    { href: "/seo/sweden", label: "Adult SEO Services Sweden" },
    { href: "/seo/ireland", label: "Adult SEO Services Ireland" },
    { href: "/seo/china", label: "Adult SEO Services China" },
    { href: "/seo/luxembourg", label: "Adult SEO Services Luxembourg" },
    { href: "/seo/netherlands", label: "Adult SEO Services Netherlands" },
    { href: "/seo/australia", label: "Adult SEO Services Australia" },
    { href: "/seo/tanzania", label: "Adult SEO Services Tanzania" },
    { href: "/seo/uruguay", label: "Adult SEO Services Uruguay" },
    { href: "/seo/armenia", label: "Adult SEO Services Armenia" },
    { href: "/seo/usa", label: "Adult SEO Services USA" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Logo and Address */}
          <div className="col-lg-4">
            <figure className="wp-block-image size-full">
              <img
                decoding="async"
                loading="lazy"
                width="863"
                height="287"
                src="https://escortmarketing.agency/wp-content/uploads/2024/02/logo_foot.png"
                alt="Footer Logo"
                className="wp-image-2264"
              />
            </figure>
            <p>
              SEO for adult websites can unlock the true potential of your
              business, disseminating various opportunities for growth.
            </p>
            <div className="address">
              <ul>
                <li>
                  <figure>
                    <span className="fa fa-map-marker"></span>
                  </figure>
                  <div className="rt_dtls">
                    <p>
                      ITHUM TOWER, A-153, Tower B,
                      <br />5<sup>th</sup> Floor, Noida, UP, 201309
                    </p>
                  </div>
                </li>
                <li>
                  <figure>
                    <span className="fa fa-envelope"></span>
                  </figure>
                  <div className="rt_dtls">
                    <p>
                      <a href="mailto:info@escortmarketing.agency" target="_blank" rel="noopener noreferrer">
                        info@escortmarketing.agency
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <figure>
                    <span className="fa fa-phone"></span>
                  </figure>
                  <div className="rt_dtls">
                    <p>
                      <a href="tel:19295782749" target="_blank" rel="noopener noreferrer">+1 929 578 2749</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Extra Images */}
            <div className="row pt-3 pb-3">
              <div className="col-lg-4">
                <div className="outer_logo">
                  <img
                    src="/images/01.jpeg"
                    className="img-fluid"
                    alt="Logo 1"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="outer_logo o_logo">
                  <img
                    src="/images/WhatsApp-Image-2024-06-15-at-5.40.jpg"
                    className="img-fluid"
                    alt="Logo 2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 pt-3">
            <h3>Quick Links</h3>
            <ul className="quick_link">
              <li>
                <a href="/about-us" target="_blank" rel="noopener noreferrer">About</a>
              </li>
              <li>
                <a href="/faqs" target="_blank" rel="noopener noreferrer">FAQ</a>
              </li>
              <li>
                <a href="/blog" target="_blank" rel="noopener noreferrer">Blog</a>
              </li>
              <li>
                <a href="/pricing" target="_blank" rel="noopener noreferrer">Pricing</a>
              </li>
              <li>
                <a href="/contact-us" target="_blank" rel="noopener noreferrer">Contact</a>
              </li>
              <li>
                <a href="/careers" target="_blank" rel="noopener noreferrer">Careers</a>
              </li>
              <li>
                <a href="/portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </li>
              <li>
                <a href="/ema-guest-blogging-guidelines" target="_blank" rel="noopener noreferrer">
                  Guest Blogging Guidelines
                </a>
              </li>
              <li>
                <a href="/referral" target="_blank" rel="noopener noreferrer">Referral</a>
              </li>
              <li>
                <a href="/important-update-regarding-scammers" target="_blank" rel="noopener noreferrer">
                  Important Update Regarding Scammers
                </a>
              </li>
              <li>
                <a href="/sitemap" target="_blank" rel="noopener noreferrer">Sitemap</a>
              </li>
              <li>
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </li>
              <li>
                <a href="/request-free-seo-analysis" target="_blank" rel="noopener noreferrer">
                  Request Free SEO Analysis
                </a>
              </li>
              <li>
                <a href="/social-feed" target="_blank" rel="noopener noreferrer">Social Feed</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-3 pt-3">
            <h3>Services</h3>
            <ul className="quick_link">
              <li>
                <a href="/adult-seo/" target="_blank" rel="noopener noreferrer">Adult SEO</a>
              </li>
              <li>
                <a href="/adult-e-commerce/" target="_blank" rel="noopener noreferrer">Adult E-Commerce SEO</a>
              </li>
              <li>
                <a href="/escort-seo/" target="_blank" rel="noopener noreferrer">Escort SEO</a>
              </li>
              <li>
                <a href="/adult-social-media-marketing/" target="_blank" rel="noopener noreferrer">
                  Escort Social Media Marketing
                </a>
              </li>
              <li>
                <a href="/adult-android-app-development-agency/" target="_blank" rel="noopener noreferrer">
                  Adult Android App Development
                </a>
              </li>
              <li>
                <a href="/adult-content-writing-services/" target="_blank" rel="noopener noreferrer">
                  Adult Content Writing
                </a>
              </li>
              <li>
                <a href="/strippers-seo/" target="_blank" rel="noopener noreferrer">Strippers SEO</a>
              </li>
              <li>
                <a href="/adult-dating-websites-seo/" target="_blank" rel="noopener noreferrer">Adult Dating SEO</a>
              </li>
              <li>
                <a href="/webcams-seo/" target="_blank" rel="noopener noreferrer">Adult Webcams SEO</a>
              </li>
              <li>
                <a href="/pornstar-seo/" target="_blank" rel="noopener noreferrer">Porn Star SEO</a>
              </li>
              <li>
                <a href="/porn-tube-seo/" target="_blank" rel="noopener noreferrer">Tube SEO</a>
              </li>
              <li>
                <a href="/erotic-massage-seo/" target="_blank" rel="noopener noreferrer">Erotic Massage SEO</a>
              </li>
              <li>
                <a href="/brothel-seo/" target="_blank" rel="noopener noreferrer">Brothel SEO</a>
              </li>
              <li>
                <a href="/adult-link-building/" target="_blank" rel="noopener noreferrer">Adult Link Building</a>
              </li>
              <li>
                <a href="/adult-website-design/" target="_blank" rel="noopener noreferrer">Adult Web Design</a>
              </li>
              <li>
                <a href="/independent-escort-seo/" target="_blank" rel="noopener noreferrer">Independent Escort SEO</a>
              </li>
              <li>
                <a href="/escort-directory-seo/" target="_blank" rel="noopener noreferrer">Escort Directory SEO</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-lg-2 pt-3">
            <h3>Follow Us</h3>
            <ul className="quick_link">
              <li>
                <a
                  href="https://twitter.com/EscortSEOAgency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/escortmarketingagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/escort-marketing-agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="skype:live:.cid.3022ec909df75187?chat" target="_blank" rel="noopener noreferrer">Skype</a>
              </li>
              <li>
                <a href="/feed/" target="_blank" rel="noopener noreferrer">RSS</a>
              </li>
            </ul>
          </div>

          {/* SEO Services Global */}
          <div className="col-lg-12 pt-3 mb-5">
            <h3 style={{ textAlign: "center" }}>
              SEO Services for Global Community
            </h3>
            <div className="row" style={{ color: "white" }}>
              {seoLinks.map((link, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="quick_link">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* pay via */}
          <div className="row">
            <div className="col-md-12">
              <div className="last_footer">
                <div className="row">
                  <div className="col-lg-6">
                    <div id="footer-2">
                      <aside id="block-24" className="widget widget_block">
                        <p>
                          © 2023 Escort Marketing Agency. All Rights Reserved
                        </p>
                      </aside>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center justify-content-end gap-2">
                    <div className="footerBottomImageBox">
                      <span>Pay Us Via</span>
                      <img src={payImg} alt="payments image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;