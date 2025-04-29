import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





const PlatformLogoCarouse = () => {
  const settings = {
    dots: false,
    loop: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  const logos = [
    { image: "images/fansly_light_v3-1024x286.webp", name: "Fansly" },
    { image: "images/1024fans.png", name: "1024FANS" },
    { image: "images/flirtback-logo-light.png", name: "FlirtBack" },
    { image: "images/loyalfans.png", name: "LoyalFans" },
    { image: "images/peach.49f1951.png", name: "Peach" },
    { image: "images/unfilter-1024x182.png", name: "Unflitrd" },
    { image: "images/xgirl-hub.png", name: "XGirlHub" },
    { image: "images/logo123.png", name: "XXX Follow" }
  ];
  return (
    <Slider {...settings} className="">
    {/* all_categories owl-carousel owl-theme */}
    {logos.map((logos, index) => (
      <div className="item" key={index}>
      <figure>
        <img src={logos.image} alt={logos.name} />
      </figure>
      <p>{logos.name}</p>
      </div>
    ))}
  </Slider>
  );
};



export default PlatformLogoCarouse;