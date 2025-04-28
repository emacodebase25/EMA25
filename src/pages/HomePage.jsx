import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style_1.css";
import "font-awesome/css/font-awesome.min.css";
import BannerSection from "../components/Bannar";
import AuditForm from "../components/AuditForm";
import FAQSection from "../components/FAQSection";
import TestimonialSection from "../components/Testimonials";
import ServicesWeOffer from "../components/ServicesWeOffer";
import BlogArea from "../components/BlogArea";
import ProjectFormSection from "../components/ProjectFormSection";
import bannerImage from "../assets/images/bnr_01.webp";

const EscortHomePage = () => {
  return (
    <>
      <BannerSection bannerImage={bannerImage}>
        {/* Dynamic content passed as children */}
        <div className="bnr_label">Welcome to</div>
        <h1>Escort Marketing Agency</h1>
        <p>
          <strong>
            Get your adult and escort website promoted on Google with our
            experienced team of over 7 years
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
      </BannerSection>
      <AuditForm />
      <div className="escort-services-page">
        {/* Services We Offer Section */}
        <ServicesWeOffer />

        {/* What We Do - Adult SEO Section */}
        <section className="what_we_do">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src="images/adult-seo-jjwjwd.webp" alt="Adult SEO" />
                </figure>
              </div>
              <div className="col-lg-6">
                <div className="srvc_info">
                  <h2>Adult SEO</h2>
                  <p>
                    Looking to dominate the competitive landscape of the adult
                    entertainment industry? Look no further than
                    EscortMarketing.agency's specialized Adult SEO services. Our
                    team of seasoned experts understands the unique dynamics of
                    the adult market and employs advanced strategies to
                    skyrocket your online visibility, drive targeted traffic,
                    and boost conversions.
                  </p>
                  <p>
                    With our comprehensive Adult SEO services, we tailor
                    strategies to suit your specific needs, whether you're an
                    escort agency, adult performer, or adult e-commerce brand.
                    From keyword research and on-page optimization to link
                    building and content marketing, we cover every aspect of
                    Adult SEO to ensure your website stands out from the crowd.
                  </p>
                  <p>
                    Don't settle for mediocrity when it comes to your online
                    presence. Partner with EscortMarketing.agency and unleash
                    the full potential of Adult SEO to propel your business to
                    new heights of success in the ever-evolving world of adult
                    entertainment. Contact us today to learn more and take the
                    first step towards domination in the digital realm.
                  </p>
                  <p>
                    <a
                      className="mainbtn black_cta"
                      href="https://escortmarketing.agency/adult-seo/"
                    >
                      Know More
                    </a>{" "}
                    <a
                      className="mainbtn black_cta"
                      href="https://escortmarketing.agency/contact-us/"
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Solutions Section */}
        <section className="what_offer cab_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="top_head_cont">
                  <h2>MARKETING SOLUTIONS FOR ESCORT BUSINESS</h2>
                  <p>
                    Supercharge your business growth by teaming up with a
                    company that nails SEO with the good stuff—no shortcuts.
                    We're all about reeling in the right visitors, using the
                    perfect keywords that match what your customers are itching
                    for. Short, medium, long—we cover it all, hitting the
                    bullseye on what matters most to your audience. Our track
                    record speaks volumes, our commitment is measured not in
                    contracts but in the success we drive for you. It's not just
                    about our passion; it's about empowering your business with
                    measurable outcomes every month. Welcome to a partnership
                    where success becomes the only language spoken.
                  </p>
                </div>

                <ul className="info_graphic main_srvc">
                  <MarketingSolutionItem
                    image="images/srvc_01.png"
                    title="Quality And User Friendly Content"
                    content="Creating original and top-quality content for an Escort website is utmost important to leave long lasting imprint in a sea of competitors. Drawing inspiration from leading Escort websites, one can incorporate a plethora of tantalizing details to captivate audiences. From sensual narratives that build the imagination to visually stimulating imagery that ignites desire, every aspect must be crafted with finesse. Engaging in-depth articles exploring various facets of human sexuality, from the intricacies of intimate relationships to the exploration of diverse kinks and fetishes, can provide valuable insights to readers. By integrating multimedia elements such as high-definition videos featuring authentic performances by skilled performers, escort marketing agency can elevate the user experience to new heights."
                  />
                  <MarketingSolutionItem
                    image="images/srvc_02.png"
                    title="Optimizing Escort Business Related Keywords"
                    content="In the competitive Escort websites era, optimizing content with the right blend of LSI (Latent Semantic Indexing) keywords and goal keywords is significant for achieving higher rankings and attracting organic traffic. Optimizing tools like Ahrefs and SEMrush provide invaluable insights into competitors' ratings and keyword strategies. By identifying low-difficulty keywords utilized by rivals, one can refine their own content strategy to target similar terms effectively. SEMrush's analysis highlights keywords competitors are using but are absent from one's own content, presenting opportunities for optimization and expansion. Through meticulous research and strategic implementation of our escort marketing agency team, your Escort websites can achieve a competitive edge in the digital domain, attracting organic traffic and nurturing user interaction to solidify their online presence."
                  />
                  <MarketingSolutionItem
                    image="images/srvc_03.png"
                    title="Drive Relevant Traffic for Your Escort Website Through Social Media"
                    content="Quality Escort websites often provide a plethora of NSFW (Not Safe for Work) content catering to diverse preferences, ensuring a steady stream of traffic. These platforms offer a wide range of categories, including but not limited to, erotica, BDSM, amateur, and professional content. Through​ engagement with their communities, users are encouraged to share posts and links to these platforms across social networking sites like Reddit, using NSFW boards to drive traffic. While Reddit offers a vast array of NSFW subreddits where users can freely share Escort content, Twitter serves as another avenue for promotion, albeit with caution due to content restrictions and the need to mark accounts as NSFW to avoid potential reporting. Despite several barriers, we promote Escort content, facilitating engagement within the community and driving traffic to quality Escort websites."
                  />
                  <MarketingSolutionItem
                    image="images/srvc_04.png"
                    title="Building Quality Backlinks For Escort Websites"
                    content="When it comes to acquiring backlinks for Escort websites, we employ strategic approaches tailored to the niche. One effective method we emphasize is to engage with webmasters across various Escort niches and offer to contribute guest posts. By providing valuable content, you can negotiate backlinks in return, using the authority of these sites. Another tactic involves uploading content to top-tier tube websites, and embedding a watermark featuring your website's URL. This not only drives traffic but also reinforces brand visibility. Prioritizing high-authority platforms is key, as Google values such backlinks over those from spammy sites. Conducting thorough research using tools like Ahrefs to analyze competitor backlink profiles can reveal valuable insights into effective link-building strategies."
                  />
                  <MarketingSolutionItem
                    image="images/srvc_05.png"
                    title="Ensuring SPAM Control"
                    content="Quality Escort websites understand the importance of maintaining a low SPAM score to maximize their reach and credibility. With Escort campaigns aiming for broader exposure, Escort marketing agency keeps track of SPAM as unwanted sites and non-requited traffic can inadvertently link back, affecting the website's reputation. Utilizing tools like Moz provides an effective means of monitoring and controlling SPAM scores. Ideally, Escort websites aim for a SPAM ratio of less than three percent to ensure optimal performance and legitimacy. In case of a high SPAM score, prompt action is necessary to mitigate any potential negative impact on the website's ranking and reputation. We always implement the right disavowal techniques to address and rectify any SPAM-related issues for Escort websites efficiently, safeguarding their online presence and maintaining a reputable image within the industry."
                  />
                  <MarketingSolutionItem
                    image="images/srvc_06.png"
                    title="Monthly Reporting And Progress"
                    content="Our monthly reports aim to provide you with comprehensive insights into the progress made in enhancing the Escort SEO strategy. Imbibing inspiration from leading Escort websites renowned for their quality and efficacy, our reports can meticulously track various metrics important for success. We ensure to pay attention to the intricacies of ranking dynamics, meticulously monitoring fluctuations and identifying trends to fine-tune our approach. In addition to this, our reports illuminate changes in ROI, allowing for a clear understanding of the effectiveness of our strategies in driving tangible results. With a commitment to transparency and excellence, our reports act as a savior for refining and optimizing our Escort SEO strategy, ensuring sustained growth and prominence in the competitive digital era."
                  />
                </ul>

                <div className="cta_link text-center">
                  <a
                    href="https://escortmarketing.agency/contact-us/"
                    className="mainbtn big"
                  >
                    REQUEST A QUOTE
                  </a>
                  <a
                    href="https://escortmarketing.agency/escort-seo/"
                    className="mainbtn big"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Marketing Section */}
        <section className="top_overview">
          <div className="container">
            <div className="row align_center">
              <div className="col-lg-12">
                <div className="text_lft">
                  <h2>SOCIAL MEDIA MARKETING FOR ESCORT AGENCIES</h2>
                  <p>
                    When operating an escort business, embracing all ways of
                    promotion becomes essential, including using social media
                    platforms. Our{" "}
                    <a href="https://escortmarketing.agency/escort-social-media-marketing/">
                      escort social media marketing
                    </a>{" "}
                    offers a cost-effective and potent means to engage with
                    target audiences effectively. Given the widespread usage and
                    appeal of social media, it presents an unparalleled
                    opportunity to connect with potential customers. Building a
                    robust online presence demands consistency, responsiveness,
                    and creativity. You can make the most of the immense
                    potential of social media platforms to amplify brand
                    visibility, drive traffic to your website, and ultimately,
                    build quality connections with your audience with us.
                  </p>
                </div>

                <ul className="info_graphic main_srvc">
                  <SocialMediaItem
                    image="images/social_01.png"
                    title="Choose the right Escort agency"
                    content="In crafting a successful social media marketing strategy for an escort business, selecting the appropriate platform is paramount. Tailoring your choice to align with the nature of your content is of utmost important for optimal engagement and conversion rates. Investing time and resources judiciously in platforms that promise the highest return on investment is prudent, maximizing the effectiveness of your marketing efforts."
                  />
                  <SocialMediaItem
                    image="images/social_02.png"
                    title="Create quality content for results"
                    content="The pivotal axis of success or failure revolves around the narrative you sculpt and the content you disseminate. Your ability to craft an immersive storyline can steer your campaign towards triumph or disappointment. It's essential to discern the unique elements that distinguish you from competitors and captivate your audience. Whether through mesmerizing visuals, tantalizing imagery, or compelling prose, the essence lies in depth—the kind that enraptures hearts and maintains audience engagement."
                  />
                  <SocialMediaItem
                    image="images/social_03.png"
                    title="Keep an eye on trends & take advantage"
                    content="Remaining ahead of the competition in the adult entertainment industry depends on constant innovation and vigilance, particularly when using social media for website promotion. By actively monitoring social media dynamics, one can identify emerging trends and tailor marketing strategies accordingly, ensuring maximum impact and audience engagement. This proactive approach not only enhances brand visibility but also cultivates a competitive edge in a saturated market."
                  />
                </ul>

                {/* Platform Logos Section */}
                <section className="what_offer seo_logos a_seo_logo">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>
                          Boost Your Adult Content Revenue with Expert Marketing
                          Solutions for OnlyFans, Fansly, and More!
                        </h2>
                        <strong>
                          Escort Marketing Agency specializes in marketing
                          solutions for adult and escort creators, helping you
                          manage and grow your presence on platforms like
                          OnlyFans, Fansly, Flirtback, FanCentro, LoyalFans,
                          LoverFans, and many more. We offer expert strategies
                          to boost your visitors and maximize revenue across
                          popular adult social media and content-sharing
                          channels. Let us help you expand your reach and
                          increase your earnings with tailored growth solutions.
                        </strong>

                        <div className="logo_list location_logo al_cat_logo owl-carousel owl-theme">
                          <PlatformLogo
                            image="images/fansly_light_v3-1024x286.webp"
                            name="Fansly"
                          />
                          <PlatformLogo
                            image="images/1024fans.png"
                            name="1024FANS"
                          />
                          <PlatformLogo
                            image="images/flirtback-logo-light.png"
                            name="FlirtBack"
                          />
                          <PlatformLogo
                            image="images/loyalfans.png"
                            name="LoyalFans"
                          />
                          <PlatformLogo
                            image="images/peach.49f1951.png"
                            name="Peach"
                          />
                          <PlatformLogo
                            image="images/unfilter-1024x182.png"
                            name="Unflitrd"
                          />
                          <PlatformLogo
                            image="images/xgirl-hub.png"
                            name="XGirlHub"
                          />
                          <PlatformLogo
                            image="images/logo123.png"
                            name="XXX Follow"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Social Media Icons */}
                <div className="smo_icons">
                  <ul>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="reddit">
                        <i
                          className="fa fa-reddit-alien"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="snapchat">
                        <i
                          className="fa fa-snapchat-ghost"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="vk">
                        <i className="fa fa-vk" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitch">
                        <i className="fa fa-twitch" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flickr">
                        <i className="fa fa-flickr" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:live:.cid.3022ec909df75187?chat"
                        className="skype"
                      >
                        <i className="fa fa-skype" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="cta_link text-center">
                    <a
                      href="https://escortmarketing.agency/contact-us/"
                      className="mainbtn big"
                    >
                      REQUEST A QUOTE
                    </a>
                    <a
                      href="https://escortmarketing.agency/escort-social-media-marketing/"
                      className="mainbtn big"
                    >
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Development Section */}
        <section className="what_we_do">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img
                    src="images/Independent-Escort.jpg"
                    alt="Escort and Adult Mobile App Development"
                  />
                </figure>
              </div>
              <div className="col-lg-6">
                <div className="srvc_info">
                  <h2>Escort and Adult Mobile App Development</h2>
                  <p>
                    We are a leading{" "}
                    <a href="https://escortmarketing.agency/adult-android-app-development-agency/">
                      <strong>adult app design company</strong>
                    </a>{" "}
                    dedicated to crafting top software solutions. Our expert
                    development teams specialize in a multitude of technology
                    stacks, adept at seamlessly integrating innovative designs
                    with cutting-edge adult app development services. Whether
                    it's consumer-facing or B2B applications, we cater to
                    various digital platforms including mobile, web, and
                    desktop. Our comprehensive{" "}
                    <a href="https://escortmarketing.agency/adult-android-app-development-agency/">
                      <strong>Adult Entertainment Mobile Apps services</strong>
                    </a>{" "}
                    encompass technology consultation, development, rigorous
                    testing, ongoing support, and maintenance. With a track
                    record of success in the escort marketing domain, we excel
                    in auditing and enhancing existing apps, as well as
                    modernizing legacy systems.
                  </p>
                  <p>
                    <a
                      className="mainbtn black_cta"
                      href="https://escortmarketing.agency/adult-android-app-development-agency/"
                    >
                      Know More
                    </a>{" "}
                    <a
                      className="mainbtn black_cta"
                      href="https://escortmarketing.agency/contact-us/"
                    >
                      Contact Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="work_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="home_port">
                  <h2>Our Work</h2>
                  <PortfolioCarousel />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Map Section */}
        <section
          className="sd--global sd-pt-100 sd-pb-100 d-none d-md-block"
          style={{ background: "#f1f3f5c4", marginTop: "80px" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="images/Screenshot-2025-02-14-142405.png"
                  className="img-fluid"
                  alt="global-map"
                  loading="lazy"
                />
              </div>
              <div className="col-md-6">
                <h2 className="sd--headingh2 sd-dark-text">
                  Join The Leaders!
                </h2>
                <p className="sd--paragraph my-4 r d-none">
                  Digital Piloto has been a talented SEO company in Kolkata that
                  offers equal benefits for everyone. Your opportunity to join a
                  top SEO Agency in Kolkata initiates here!
                </p>
                <div className="cta_link">
                  <a
                    href="https://escortmarketing.agency/contact-us/"
                    className="mainbtn"
                  >
                    Connect With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <FAQSection />
        </div>
        <div>
          <TestimonialSection />
        </div>
        {/* Book for testimonials */}
        <ProjectFormSection />

        <BlogArea />
      </div>
    </>
  );
};

// Reusable Components
const ServiceItem = ({ image, title, link }) => (
  <div className="item">
    <figure>
      <a href={link}>
        <img src={image} alt={title} />
      </a>
    </figure>
    <div className="dtls">
      <h3>
        <a href={link}>{title}</a>
      </h3>
      <p></p>
    </div>
  </div>
);

const MarketingSolutionItem = ({ image, title, content }) => (
  <li>
    <figure>
      <a href="">
        <img src={image} alt={title} />
      </a>
    </figure>
    <div className="dtls">
      <h3>
        <a href="">{title}</a>
      </h3>
      <p>{content}</p>
    </div>
  </li>
);

const SocialMediaItem = ({ image, title, content }) => (
  <li>
    <figure>
      <a href="">
        <img src={image} alt={title} />
      </a>
    </figure>
    <div className="dtls">
      <h3>
        <a href="">{title}</a>
      </h3>
      <p>{content}</p>
    </div>
  </li>
);

const PlatformLogo = ({ image, name }) => (
  <li className="item">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <p>{name}</p>
  </li>
);

const PortfolioCarousel = () => (
  <Carousel id="demo" className="carousel slide">
    <Carousel.Item className="carousel-item active">
      <img src="images/4.jpg" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/3.jpg" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/2.jpg" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/1.jpg" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/WhatsApp-Image-2024-10-05-at-1.20.34-PM.jpeg" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/port_01.png" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/port_02.png" alt="" />
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img src="images/port_03.png" alt="" />
    </Carousel.Item>
  </Carousel>
);

export default EscortHomePage;
