import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../assets/css/owl.carousel.min.css";

const ServicesWeOffer = () => {
  const settings = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const services = [
    {
      img: "images/escort-seo.jpg",
      title: "Escort SEO Services",
      link: "https://escortmarketing.agency/escort-seo/",
    },
    {
      img: "images/escort-smo.jpg",
      title: "Escort Social Media Marketing",
      link: "https://escortmarketing.agency/escort-social-media-marketing/",
    },
    {
      img: "images/escort-app.jpg",
      title: "Adult App Development",
      link: "https://escortmarketing.agency/adult-android-app-development-agency/",
    },
    {
      img: "images/adult_seo.jpg",
      title: "Adult SEO",
      link: "https://escortmarketing.agency/adult-seo/",
    },
    {
      img: "images/adult.jpg",
      title: "Adult Content Writing",
      link: "https://escortmarketing.agency/adult-content-writing-services/",
    },
  ];

  return (
    <section className="what_offer">
      <div className="container">
        <div className="row align_center">
          <div className="col-lg-12">
            <div className="top_head_cont">
              <h2>Services We Offer</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="all_srvc">
              <Slider {...settings} className="all_categories owl-carousel owl-theme">
                {services.map((service, index) => (
                  <div className="item" key={index}>
                    <figure>
                      <a href={service.link}>
                        <img src={service.img} alt={service.title} />
                      </a>
                    </figure>
                    <div className="dtls">
                      <h3>
                        <a href={service.link}>{service.title}</a>
                      </h3>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesWeOffer;