import React from "react";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Enterprise SEO",
    link: "/enterprise-seo-services",
    description: "Scalable SEO solutions for large-scale adult businesses.",
  },
  {
    title: "Adult SEO",
    link: "/adult-seo",
    description: "Customized SEO strategies for adult content websites.",
  },
  {
    title: "Adult E-Commerce SEO",
    link: "/adult-e-commerce-seo",
    description: "Boost traffic and sales for adult online stores.",
  },
  {
    title: "Escort SEO",
    link: "/escort-seo",
    description: "Enhance visibility for escort agencies and independent escorts.",
  },
  {
    title: "Adult Link Building",
    link: "/adult-link-building",
    description: "High-quality link-building services for adult websites.",
  },
  {
    title: "Porn Tube SEO",
    link: "/porn-tube-seo",
    description: "Optimize video platforms to rank higher in search results.",
  },
  {
    title: "Adult Webcams SEO",
    link: "/webcams-seo",
    description: "Drive traffic to adult webcam platforms with tailored SEO.",
  },
  {
    title: "Adult Social Media Marketing",
    link: "/adult-social-media-marketing",
    description: "Expand your escort business with strategic social media campaigns.",
  },
  {
    title: "Adult Android App Development Agency",
    link: "/adult-android-app-development-agency",
    description: "Custom Android app development for adult businesses.",
  },
  {
    title: "Adult Content Writing Services",
    link: "/adult-content-writing-services",
    description: "Engaging, SEO-friendly content tailored for adult websites.",
  },
  {
    title: "Adult Dating SEO",
    link: "/adult-dating-websites-seo",
    description: "Optimize dating platforms to connect with more users.",
  },
  {
    title: "Porn Star SEO",
    link: "/pornstar-seo",
    description: "Build personal brands and increase online visibility for adult performers.",
  },
  {
    title: "Erotic Massage SEO",
    link: "/erotic-massage-seo",
    description: "Increase clientele for erotic massage services with targeted SEO.",
  },
  {
    title: "Strippers SEO",
    link: "/strippers-seo",
    description: "Expand the reach of strip clubs and independent performers.",
  },
  {
    title: "Brothel SEO",
    link: "/brothel-seo",
    description: "Drive traffic and improve rankings for brothel websites.",
  },
  {
    title: "Independent Escort SEO",
    link: "/independent-escort-seo",
    description: "# No. 1 SEO Agency for Independent Escorts",
  },
  {
    title: "Escort Directory SEO",
    link: "/escort-directory-seo",
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
                  <Link to={service.link} target="_blank" rel="noopener noreferrer">
                    {service.title}
                  </Link>
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
