import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import escortBannerImg from "../assets/images/escort-banner.jpg";
import BannerSection from "../components/Bannar";
import SEOLogos from "../components/SEOLogos";
import BlogCard from "../components/BlogCard";

const mockArticles = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second post.",
  },
];

const EscortBlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlogs = async (page) => {
    try {
      const response = await axios.get(
        `https://escortmarketing.agency/wp-json/wp/v2/posts?per_page=8&page=${page}&_embed`
      );
      setBlogs(response.data);
      console.log(currentPage);
      console.log(response.data[0].title);
      setTotalPages(response.data.totalPages || 9);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const filteredArticles = mockArticles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* banner section */}
      <BannerSection bannerImage={escortBannerImg}>
        {/* Dynamic content passed as children */}
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
      <section className="inner_page_area">
        <div className="container">
          <div className="row mb-3">
            <div className="col-lg-6">
              <h3>Blog Articles</h3>
            </div>
            <div className="col-lg-6">
              <input
                type="search"
                className="form-control"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-lg-9">
              <div className="row">
                {blogs.map((blog, index) => {
                  const img =
                    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "Not found";
                  const formattedDate = new Date(
                    blog.date
                  ).toLocaleDateString();

                  return (
                    <BlogCard
                      key={index}
                      title={blog.title.rendered}
                      imageUrl={img}
                      date={formattedDate}
                      link={blog.link}
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
          </div>
        </div>
      </section>

      {/* seologo */}
      <SEOLogos />
    </>
  );
};

export default EscortBlogPage;
