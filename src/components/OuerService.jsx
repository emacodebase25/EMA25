import React from "react";

const services = [
  {
    title: "Enterprise SEO",
    link: "https://escortmarketing.agency/enterprise-seo-services/",
    description: "Scalable SEO solutions for large-scale adult businesses.",
  },
  {
    title: "Adult SEO",
    link: "https://escortmarketing.agency/adult-seo/",
    description: "Customized SEO strategies for adult content websites.",
  },
  {
    title: "Adult E-Commerce SEO",
    link: "https://escortmarketing.agency/adult-e-commerce-seo/",
    description: "Boost traffic and sales for adult online stores.",
  },
  {
    title: "Escort SEO",
    link: "https://escortmarketing.agency/escort-seo/",
    description: "Enhance visibility for escort agencies and independent escorts.",
  },
  {
    title: "Adult Link Building",
    link: "https://escortmarketing.agency/adult-link-building/",
    description: "High-quality link-building services for adult websites.",
  },
  {
    title: "Porn Tube SEO",
    link: "https://escortmarketing.agency/porn-tube-seo/",
    description: "Optimize video platforms to rank higher in search results.",
  },
  {
    title: "Adult Webcams SEO",
    link: "https://escortmarketing.agency/webcams-seo/",
    description: "Drive traffic to adult webcam platforms with tailored SEO.",
  },
  {
    title: "Adult Social Media Marketing",
    link: "https://escortmarketing.agency/adult-social-media-marketing/",
    description: "Expand your escort business with strategic social media campaigns.",
  },
  {
    title: "Adult Android App Development Agency",
    link: "https://escortmarketing.agency/adult-android-app-development-agency/",
    description: "Custom Android app development for adult businesses.",
  },
  {
    title: "Adult Content Writing Services",
    link: "https://escortmarketing.agency/adult-content-writing-services/",
    description: "Engaging, SEO-friendly content tailored for adult websites.",
  },
  {
    title: "Adult Dating SEO",
    link: "https://escortmarketing.agency/adult-dating-websites-seo/",
    description: "Optimize dating platforms to connect with more users.",
  },
  {
    title: "Porn Star SEO",
    link: "https://escortmarketing.agency/pornstar-seo/",
    description: "Build personal brands and increase online visibility for adult performers.",
  },
  {
    title: "Erotic Massage SEO",
    link: "https://escortmarketing.agency/erotic-massage-seo/",
    description: "Increase clientele for erotic massage services with targeted SEO.",
  },
  {
    title: "Strippers SEO",
    link: "https://escortmarketing.agency/strippers-seo/",
    description: "Expand the reach of strip clubs and independent performers.",
  },
  {
    title: "Brothel SEO",
    link: "https://escortmarketing.agency/brothel-seo/",
    description: "Drive traffic and improve rankings for brothel websites.",
  },
  {
    title: "Independent Escort SEO",
    link: "https://escortmarketing.agency/independent-escort-seo/",
    description: "# No. 1 SEO Agency for Independent Escorts",
  },
  {
    title: "Escort Directory SEO",
    link: "https://escortmarketing.agency/escort-directory-seo/",
    description:
      "Maximize Visibility, Increase Traffic, and Drive Conversions for Your Escort Directory Business",
  },
];

const OurServices = () => {
  return (
    <section className="our-services main_our_serv_section">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-sm-3" key={index}>
              <div className="service-con">
                <h4 className="fw-semibold mb-0 text-body-emphasis">
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    {service.title}
                  </a>
                </h4>
                <p className="text-body-secondary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
