import React from "react";
import { useEffect, useState } from "react";
import escortBannerImg from "../assets/images/escort-banner.jpg";
import BannerSection from "../components/Bannar";
import SEOLogos from "../components/SEOLogos";
import BlogCard from "../components/BlogCard";
import useBlogStore from "../stores/blogStore";
import SidebarSection from "../components/SidebarSection";

const EscortBlogPage = () => {
  const { blogPosts, fetchBlogs } = useBlogStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [topFiveBlogs, setTopFiveBlogs] = useState([]);

  useEffect(() => {
    if (currentPage === 1 && blogPosts.length === 0) {
      fetchBlogs(currentPage, 8);
    } else if (currentPage !== 1) {
      fetchBlogs(currentPage, 8);
    }
  }, [currentPage]);

  useEffect(() => {
    console.log(blogPosts);
    if (currentPage === 1 && blogPosts.length > 0) {
      setTopFiveBlogs(blogPosts.slice(0, 5));
    }
    setTotalPages(9);
  }, [blogPosts, currentPage]);

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      {/* banner section */}
      <BannerSection bannerImage={escortBannerImg}>
        <div>
          <h1>Blog</h1>
          <div className="breadcrumb_main">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <a itemProp="item" href="https://escortmarketing.agency">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <a itemProp="item" href="javascript:void(0)">
                  <span itemProp="name">Blog</span>
                </a>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </div>
      </BannerSection>

      {/* Show blog card */}
      <section className="inner_page_area blog_list_area">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6">
              <h3>Blog Articles</h3>
            </div>
            <div className="col-lg-6 blg-search">
              <input
                type="search"
                className="form-control"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                >
                  <path
                    d="M460.355,421.59L353.844,315.078c20.041-27.553,31.885-61.437,31.885-98.037
						C385.729,124.934,310.793,50,218.686,50C126.58,50,51.645,124.934,51.645,217.041c0,92.106,74.936,167.041,167.041,167.041
						c34.912,0,67.352-10.773,94.184-29.158L419.945,462L460.355,421.59z M100.631,217.041c0-65.096,52.959-118.056,118.055-118.056
						c65.098,0,118.057,52.959,118.057,118.056c0,65.096-52.959,118.056-118.057,118.056C153.59,335.097,100.631,282.137,100.631,217.041
						z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-9">
              <div className="row">
                {blogPosts.map((blog, index) => {
                  const img =
                    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "Not found";
                    const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
                      month: "long", 
                      day: "numeric", 
                      year: "numeric", 
                    });

                  return (
                    <BlogCard
                      key={index}
                      title={blog.title.rendered}
                      imageUrl={img}
                      date={formattedDate}
                      link={`/blogs/${blog.id}`}
                    />
                  );
                })}
              </div>

              {/* Pagination */}
              <div className="paginations">
                {Array.from({ length: totalPages }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <span
                      key={page}
                      className={`page-numbers ${
                        currentPage === page ? "current" : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                      style={{ cursor: "pointer", margin: "0 5px" }}
                    >
                      {page}
                    </span>
                  );
                })}
                {currentPage < totalPages && (
                  <span
                    className="next page-numbers"
                    onClick={() => handlePageChange(currentPage + 1)}
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  >
                    Next →
                  </span>
                )}
              </div>
            </div>

            <SidebarSection topFiveBlogs={topFiveBlogs}/>
          </div>
        </div>
      </section>

      {/* seologo */}
      <SEOLogos />
    </>
  );
};

export default EscortBlogPage;
