import React from "react";

const BlogArea = () => {
  const blogPosts = [
    {
      link: "https://escortmarketing.agency/build-adult-brand-tulsa/",
      imgSrc: "images/WhatsApp-Image-2025-04-25-at-12.52.02_05694835.webp",
      imgAlt: "How to Create a Strong Brand for Your Adult Business in Tulsa",
      date: "25 Apr",
      title: "How to Create a Strong Brand for Your Adult Business in Tulsa",
      description: "To cut it short, there is nothing extraordinary about starting an adult business in Tulsa as an entrepreneurial journey.",
    },
    {
      link: "https://escortmarketing.agency/escort-marketing-tips-for-tulsa-usa/",
      imgSrc: "images/WhatsApp-Image-2025-04-25-at-12.42.19_7044b3bf.webp",
      imgAlt: "Boost Your Independent Escort Business in Tulsa: Effective Digital Marketing Tips",
      date: "24 Apr",
      title: "Boost Your Independent Escort Business in Tulsa: Effective Digital Marketing Tips",
      description: "The independent escort lifestyle in Tulsa gives you a powerful thing: freedom. You are the one making the rules yourself.",
    },
    {
      link: "https://escortmarketing.agency/5-website-essentials-for-a-high-end-escort-brand/",
      imgSrc: "images/WhatsApp-Image-2025-04-22-at-20.14.23_71a8429b.jpg",
      imgAlt: "5 Website Essentials for a High-End Escort Brand",
      date: "22 Apr",
      title: "5 Website Essentials for a High-End Escort Brand",
      description: "In luxury companionship, your website is more than just a digital calling card. It is the first impression of your brand.",
    },
  ];

  return (
    <section className="blog_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Latest News & Updates</h2>
            <ul>
              {blogPosts.map((post, index) => (
                <li key={index}>
                  <figure>
                    <a href={post.link}>
                      <img
                        src={post.imgSrc}
                        alt={post.imgAlt}
                        style={{ width: "100%", height: "auto", maxWidth: "1040px" }}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                    <label>{post.date}</label>
                  </figure>
                  <div className="dtls_more">
                    <h3>
                      <a href={post.link}>{post.title}</a>
                    </h3>
                    <p>{post.description}</p>
                    <a href={post.link} className="cta">
                      Read More
                      <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989592 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                          fill="#282938"
                        />
                      </svg>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;