import React from "react";
import { useEffect } from "react";
import useBlogStore from "../stores/blogStore";

const BlogArea = ({ sticky_class }) => {
  const { latestBlogs, fetchBlogs } = useBlogStore();

  useEffect(() => {
    if (latestBlogs.length === 0) {
      fetchBlogs();
    }
  }, []);

  const getExcerptPreview = (html, wordLimit = 30) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const plainText = tempElement.textContent || tempElement.innerText || "";
    const words = plainText.trim().split(/\s+/).slice(0, wordLimit);
    return words.join(" ") + (words.length === wordLimit ? "..." : "");
  };

  return (
    <section className="blog_area" style={{ sticky_class }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Latest News & Updates</h2>
            <ul>
              {latestBlogs.slice(0,3).map((post, index) => {
                const img =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "Not found";
                const formattedDate = new Date(post.date).toLocaleDateString(
                  "en-US",
                  {
                    day: "2-digit",
                    month: "short",
                  }
                );
                return (
                  <li key={index}>
                    <figure>
                      <a href={post.link}>
                        <img
                          src={img}
                          alt={"Not found"}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "1040px",
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                      <label>{formattedDate}</label>
                    </figure>
                    <div className="dtls_more">
                      <h3>
                        <a href={post.link}>{post.title.rendered}</a>
                      </h3>
                      {/* <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> */}
                      <p>{getExcerptPreview(post.excerpt.rendered)}</p>
                      <a
                        href={post.link}
                        className="cta"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                        <svg
                          width="25"
                          height="12"
                          viewBox="0 0 25 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989592 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z"
                            fill="#282938"
                          />
                        </svg>
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
