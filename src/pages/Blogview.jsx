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
                    />
                    <a
                      className="a2a_button_twitter"
                      href="https://www.addtoany.com/add_to/twitter?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Twitter"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={45396219001}
                    />
                    <a
                      className="a2a_button_email"
                      href="https://www.addtoany.com/add_to/email?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Email"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={77476910701}
                    />
                    <a
                      className="a2a_button_telegram"
                      href="https://www.addtoany.com/add_to/telegram?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Telegram"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={99410711201}
                    />
                    <a
                      className="a2a_button_reddit"
                      href="https://www.addtoany.com/add_to/reddit?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="Reddit"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={13675492101}
                    />
                    <a
                      className="a2a_button_linkedin"
                      href="https://www.addtoany.com/add_to/linkedin?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="LinkedIn"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={93813603101}
                    />
                    <a
                      className="a2a_button_whatsapp"
                      href="https://www.addtoany.com/add_to/whatsapp?linkurl=https%3A%2F%2Fescortmarketing.agency%2Ffrom-strip-clubs-to-sensual-spas-where-to-advertise-in-nycs-adult-scene%2F&linkname=From%20Strip%20Clubs%20to%20Sensual%20Spas%3A%20Where%20to%20Advertise%20in%20NYC%E2%80%99s%20Adult%20Scene"
                      title="WhatsApp"
                      rel="nofollow noopener"
                      target="_blank"
                      plerdy-tracking-id={23100177901}
                    />
                    <a
                      className="a2a_dd addtoany_share_save addtoany_share"
                      href="https://www.addtoany.com/share"
                      target="_blank"
                      plerdy-tracking-id={44723178701}
                    />
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
