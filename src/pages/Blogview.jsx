import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DOMPurify from "dompurify";

import SidebarSection from "../components/SidebarSection";
import SEOLogos from "../components/SEOLogos";
import BlogArea from "../components/BlogArea";
import useBlogStore from "../stores/blogStore";
import NotFoundPage from "../components/NotFoundPage";

function generateTOC(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const headings = Array.from(doc.querySelectorAll("h2, h3"));

  return headings.map((el, index) => {
    const id = el.id || `heading-${index}`;
    el.id = id;
    return {
      id,
      text: el.textContent,
      level: parseInt(el.tagName.substring(1)), // h2 => 2
    };
  });
}

const EscortBlogViewPage = () => {
  const { id } = useParams();
  const [tocItems, setTocItems] = useState([]);
  console.log("id from url", id);
  const blogPosts = useBlogStore((state) => state.blogPosts);
  console.log("blogpost ", blogPosts);
  const post = blogPosts.find((p) => p.id.toString() === id);
  console.log("post ", post);

  if (!post) return <NotFoundPage />;

  // const toc = generateTOC(post.content);
  // setTocItems(toc);
  const img =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "Not found";
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const sizes =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes;
  const full = sizes?.full?.source_url;
  const large = sizes?.large?.source_url;
  const medium = sizes?.medium?.source_url;
  const thumbnail = sizes?.thumbnail?.source_url;

  return (
    <>
      <section className="innerpage-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb_main">
                <ol itemScope="" itemType="https://schema.org/BreadcrumbList">
                  <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                    plerdy-tracking-id={92338336701}
                  >
                    {" "}
                    <a
                      itemType="https://schema.org/Thing"
                      itemProp="item"
                      href="https://escortmarketing.agency"
                      target="_blank"
                      plerdy-tracking-id={92338336701}
                    >
                      {" "}
                      <span itemProp="name" plerdy-tracking-id={56607887001}>
                        Home
                      </span>
                    </a>
                    <meta itemProp="position" content={1} />
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                    plerdy-tracking-id={92360218801}
                  >
                    <a
                      itemType="https://schema.org/Thing"
                      itemProp="item"
                      href="https://escortmarketing.agency/blog/"
                      target="_blank"
                      plerdy-tracking-id={92360218801}
                    >
                      {" "}
                      <span itemProp="name" plerdy-tracking-id={56629769101}>
                        Blog
                      </span>
                    </a>
                    <meta itemProp="position" content={2} />
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="https://schema.org/ListItem"
                    plerdy-tracking-id={29684509601}
                  >
                    <a
                      itemType="https://schema.org/Thing"
                      itemProp="item"
                      href="javascript:void(0)"
                      target="_blank"
                      plerdy-tracking-id={29684509601}
                    >
                      {" "}
                      <span itemProp="name" plerdy-tracking-id={74697911301}>
                        {post.title.rendered}
                      </span>
                    </a>
                    <meta itemProp="position" content={3} />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_dtls_page">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <figure className="top_blg">
                <img
                  src={full}
                  alt={post?.title?.rendered}
                  className="attachment-full size-full wp-post-image"
                  decoding="async"
                  loading="lazy"
                  srcSet={`${full} 1040w, ${thumbnail} 300w, ${medium} 768w, ${large} 1024w`}
                  sizes="(max-width: 1040px) 100vw, 1040px"
                  style={{ width: "100%", height: "auto", maxWidth: "1040px" }}
                />
              </figure>
              <h1 plerdy-tracking-id={22817621801}>{post.title.rendered}</h1>
              <ul className="publish">
                <li plerdy-tracking-id={35635051201}>
                  <i className="fa fa-calendar" /> <strong> Posted On: </strong>
                  {formattedDate}
                </li>
                <li plerdy-tracking-id={44876338201}>
                  <i className="fa fa-user" /> <strong>Posted By: </strong>{" "}
                  Emily Thompson
                </li>
                <li className="read_timer" plerdy-tracking-id={20950254101}>
                  <i className="fa fa-clock" />{" "}
                  <strong>
                    <span className="span-reading-time rt-reading-time">
                      <span className="rt-label rt-prefix">Reading Time:</span>{" "}
                      <span className="rt-time"> 16</span>{" "}
                      <span className="rt-label rt-postfix">minutes</span>
                    </span>{" "}
                  </strong>
                </li>
              </ul>
              <div className="content_area">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content.rendered),
                  }}
                />

                {/* icon of shear blog */}
                <div className="addtoany_share_save_container addtoany_content addtoany_content_bottom">
                  <div
                    className="a2a_kit a2a_kit_size_32 addtoany_list"
                    data-a2a-url="https://escortmarketing.agency/from-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene/"
                    data-a2a-title="From Strip Clubs to Sensual Spas: Where to Advertise in NYC’s Adult Scene"
                  >
                    <a
                      className="a2a_button_facebook"
                      href="https://www.addtoany.com/add_to/facebook?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Facebook"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={91434829101}
                      style={{ backgroundColor: "rgb(8, 102, 255)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_button_twitter"
                      href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Twitter"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={45396219001}
                      style={{ backgroundColor: "rgb(29, 155, 240)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_button_email"
                      href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Email"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={77476910701}
                      style={{ backgroundColor: "rgb(136, 137, 144)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_button_telegram"
                      href="https://www.addtoany.com/add_to/telegram?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Telegram"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={99410711201}
                      style={{ backgroundColor: "rgb(44, 165, 224)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          d="M25.515 6.896 6.027 14.41c-1.33.534-1.322 1.276-.243 1.606l5 1.56 1.72 5.66c.226.625.115.873.77.873.506 0 .73-.235 1.012-.51l2.43-2.363 5.056 3.734c.93.514 1.602.25 1.834-.863l3.32-15.638c.338-1.363-.52-1.98-1.41-1.577z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_button_reddit"
                      href="https://www.addtoany.com/add_to/reddit?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Reddit"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={13675492101}
                      style={{ backgroundColor: "rgb(255, 69, 0)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#fff"
                          d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.88 2.88 0 0 0-1.9.713 14.1 14.1 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.3 14.3 0 0 0-7.316 2.029 2.9 2.9 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5 5 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5 5 0 0 0-.053-.706 2.96 2.96 0 0 0 1.427-2.51m-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.71 1.71 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711m9.565 4.968a5.57 5.57 0 0 1-4.081 1.272h-.032a5.58 5.58 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_button_linkedin"
                      href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="LinkedIn"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={93813603101}
                      style={{ backgroundColor: "rgb(0, 123, 181)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          d="M6.227 12.61h4.19v13.48h-4.19zm2.095-6.7a2.43 2.43 0 0 1 0 4.86c-1.344 0-2.428-1.09-2.428-2.43s1.084-2.43 2.428-2.43m4.72 6.7h4.02v1.84h.058c.56-1.058 1.927-2.176 3.965-2.176 4.238 0 5.02 2.792 5.02 6.42v7.395h-4.183v-6.56c0-1.564-.03-3.574-2.178-3.574-2.18 0-2.514 1.7-2.514 3.46v6.668h-4.187z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_button_whatsapp"
                      href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="WhatsApp"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={23100177901}
                      style={{ backgroundColor: "rgb(18, 175, 10)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="#FFF"
                          fill-rule="evenodd"
                          d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.24 11.24 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292m0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.35 9.35 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4s9.397 4.22 9.397 9.4c0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055s0-.445.15-.584c.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297s.287-1.24.22-1.363c-.07-.123-.26-.203-.54-.357z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="a2a_dd addtoany_share_save addtoany_share"
                      href="https://www.addtoany.com/share"
                      target="_blank"
                      plerdy-tracking-id={44723178701}
                      style={{ backgroundColor: "rgb(1, 102, 255)" }}
                    >
                      <svg
                        focusable="false"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <g fill="#FFF">
                          <path d="M14 7h4v18h-4z"></path>
                          <path d="M7 14h18v4H7z"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="top_doctor doc_info_area">
                  <figure>
                    <img
                      src="/images/emily.png"
                      alt="Emily Thompson"
                      plerdy-tracking-id={74683508601}
                    />
                  </figure>
                  <div className="doc_dtls">
                    <h3 plerdy-tracking-id={15158028001}>Emily Thompson</h3>
                    <label plerdy-tracking-id={56188979501}>
                      {" "}
                      Content Writer
                    </label>
                    <p>
                      Experienced Adult SEO content writer with 6 years in the
                      industry. Specializing in crafting compelling and
                      optimized content for the adult entertainment sector.
                      Passionate about creating engaging narratives and driving
                      organic traffic through strategic keyword integration.
                      Ready to bring your adult website or business to the
                      forefront of search engine results.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <SidebarSection />
          </div>
        </div>
      </section>

      <section className="footer_cta_blog">
        <div className="container">
          <div className="row     justify-content-center">
            <div className="col-lg-10">
              <div className="quote-section">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="quote-text">
                      <h3 plerdy-tracking-id={26735064201}>
                        Received a quote? Get a second opinion
                      </h3>
                      <p>
                        Let us know what you need and we’ll find a solution.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="quote-action">
                      <p>
                        Request a quote within 15 minutes and get a FREE
                        Marketing Audit.
                      </p>
                      <a
                        href="https://escortmarketing.agency/contact-us/"
                        target="_blank"
                        plerdy-tracking-id={73581610001}
                      >
                        <button
                          className="btn-quote"
                          plerdy-tracking-id={49111564201}
                        >
                          REQUEST A QUOTE
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div
                      className="quote-timer"
                      plerdy-tracking-id={14751649401}
                    >
                      <div
                        id="timer"
                        className="row timer justify-content-center"
                      >
                        <div className="col-lg-6 col-6">
                          <div className="item w-100 text-center">
                            -30<span>minutes</span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-6">
                          <div className="item w-100 text-center">
                            -54<span>seconds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_coment">
        <div className="container" plerdy-tracking-id={11551275301}>
          <div id="bsf-rt-comments" />
          <div
            id="comments"
            className="comments-area default-max-width show-avatars"
          >
            <div id="respond" className="comment-respond">
              <h2
                id="reply-title"
                className="comment-reply-title"
                plerdy-tracking-id={24842839101}
              >
                Leave a comment{" "}
                <small>
                  <a
                    rel="nofollow"
                    id="cancel-comment-reply-link"
                    href="/from-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene/#respond"
                    style={{ display: "none" }}
                    target="_blank"
                    plerdy-tracking-id={85296167201}
                  >
                    Cancel reply
                  </a>
                </small>
              </h2>
              <form
                action="https://escortmarketing.agency/wp-comments-post.php"
                method="post"
                id="commentform"
                className="comment-form"
                noValidate=""
              >
                <p className="comment-notes">
                  <span id="email-notes">
                    Your email address will not be published.
                  </span>{" "}
                  <span className="required-field-message">
                    Required fields are marked{" "}
                    <span className="required">*</span>
                  </span>
                </p>
                <p className="comment-form-comment">
                  <label htmlFor="comment" plerdy-tracking-id={18733028301}>
                    Comment <span className="required">*</span>
                  </label>{" "}
                  <textarea
                    id="comment"
                    name="comment"
                    cols={45}
                    rows={5}
                    maxLength={65525}
                    required=""
                    plerdy-tracking-id={67171166001}
                    defaultValue={""}
                  />
                </p>
                <p className="comment-form-author">
                  <label htmlFor="author" plerdy-tracking-id={54982047701}>
                    Name <span className="required">*</span>
                  </label>{" "}
                  <input
                    id="author"
                    name="author"
                    type="text"
                    defaultValue=""
                    size={30}
                    maxLength={245}
                    autoComplete="name"
                    required=""
                    plerdy-tracking-id={28822655301}
                  />
                </p>
                <p className="comment-form-email">
                  <label htmlFor="email" plerdy-tracking-id={46712937501}>
                    Email <span className="required">*</span>
                  </label>{" "}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue=""
                    size={30}
                    maxLength={100}
                    aria-describedby="email-notes"
                    autoComplete="email"
                    required=""
                    plerdy-tracking-id={68223089801}
                  />
                </p>
                <p className="comment-form-url">
                  <label htmlFor="url" plerdy-tracking-id={24314901301}>
                    Website
                  </label>{" "}
                  <input
                    id="url"
                    name="url"
                    type="url"
                    defaultValue=""
                    size={30}
                    maxLength={200}
                    autoComplete="url"
                    plerdy-tracking-id={81790496401}
                  />
                </p>
                <p className="comment-form-cookies-consent">
                  <input
                    id="wp-comment-cookies-consent"
                    name="wp-comment-cookies-consent"
                    type="checkbox"
                    defaultValue="yes"
                    plerdy-tracking-id={31718645301}
                  />{" "}
                  <label
                    htmlFor="wp-comment-cookies-consent"
                    plerdy-tracking-id={41323855601}
                  >
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </p>
                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="submit"
                    className="submit"
                    defaultValue="Post Comment"
                    plerdy-tracking-id={67665100201}
                  />{" "}
                  <input
                    type="hidden"
                    name="comment_post_ID"
                    defaultValue={7613}
                    id="comment_post_ID"
                    plerdy-tracking-id={10706336801}
                  />
                  <input
                    type="hidden"
                    name="comment_parent"
                    id="comment_parent"
                    defaultValue={0}
                    plerdy-tracking-id={78415216901}
                  />
                </p>
              </form>{" "}
            </div>
          </div>
        </div>
      </section>

      <BlogArea />
      <SEOLogos />
    </>
  );
};

export default EscortBlogViewPage;
