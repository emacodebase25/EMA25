import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // hide prev/next arrows if you want
  };

  const testimonials = [
    {
      name: "Melvin Davis",
      img: "images/image-removebg-preview-2024-07-02T103745.923.png",
      review:
        "My escort website, since the beginning, paid attention to the satisfaction and desires of customers, as a result, I didn't see my website appearing before my potential customers. I was promised to be enjoying the success of my escort business, however, the inexperienced SEO agencies previously dampened my enthusiasm to stay in the market. Today, I am glad to be associated with the maestro of the market 'escort marketing agency' that has been going extra miles in making my online business visible to my targeted audience and bringing conversions.",
    },
    {
      name: "Sean Thomas",
      img: "images/image-removebg-preview-2024-07-02T103745.923.png",
      review:
        "In my previous years, I entrusted the escort SEO work to one of the redundant and lousy escort SEO agencies, leading to, eventually, the failure of my business. See, we are aware that the majority of the young generation is inclined to the escort market owing to the adult content and offerings that come with it. Escort Marketing Agency made it possible in few months that right strategy and good business sense can break any barrier despite the competition. Nothing feels happier to see your efforts paying off and it is due to the best escort SEO agency 'escort marketing agency'.",
    },
    {
      name: "Derek Turner",
      img: "images/image-removebg-preview-2024-07-02T103745.923.png",
      review:
        "I totally understand that escort industry is reaching its peak in terms of competition. With every escort company comes the onus of the responsibilities to grow business and be there for customers’ requirements. All I can say about my escort business is that everything has changed now from the time I came in contact with Escort Marketing Agency. These guys are the real players in the market, true experts in their field. They understand the nuances of the escort market like no one else and are dedicated to helping their clients succeed. Since partnering with them, my Escort business has experienced a remarkable turnaround.",
    },
    {
      name: "Calvin Young",
      img: "images/image-removebg-preview-2024-07-02T103745.923.png",
      review:
        "Every alley you walk today is brimming with Escort SEO services and it gets confusing at times to trust the right ones like you guys. Had I known earlier that a team like yours exist, who would have wasted tons of money in bullshit marketing of other agencies. From day one, 'Escort Marketing Agency' listened attentively to my needs, ensuring my escort website not only appeared before potential customers but also converted them into satisfied clients. I now enjoy the success I've always envisioned for my business.",
    },
  ];

  return (
    <section
      className="testimonial_area1"
      style={{
        backgroundImage:
          "url('images/portrait-beautiful-sexy-blond-girl-lying-bed-black-lingerie-with-bright-makeup-hairstyle-scaled.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="title_area mb-5">
          <h2>
            Hear From <span>Our Clients</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-5">
            <div className="all_srvc">
              <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                  <div className="item" key={index}>
                    <div className="review-card">
                      <div className="d-flex align-items-center">
                        <img
                          src={testimonial.img}
                          alt={testimonial.name}
                          style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "50%" }}
                        />
                        <div className="ms-3">
                          <div className="fw-bold">{testimonial.name}</div>
                        </div>
                      </div>
                      <div className="stars my-2">
                        {"⭐️ ⭐️ ⭐️ ⭐️ ⭐️"}
                      </div>
                      <p>{testimonial.review}</p>
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

export default Testimonials;