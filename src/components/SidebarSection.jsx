import React from "react";
import useBlogStore from "../stores/blogStore";

const SidebarSection = () => {
    const { latestBlogs } = useBlogStore();
    
  return (
    <div className="col-md-3">
      {/* Latest Articles */}
      <div className="side_nav">
        <h3>Latest Articles</h3>
        <div id="sidebar" role="complementary">
          <section
            id="block-35"
            className="widget widget_block widget_recent_entries"
          >
            <ul className="wp-block-latest-posts__list wp-block-latest-posts">
              {latestBlogs.map((blog, index) => (
                <li key={index}>
                  <a
                    className="wp-block-latest-posts__post-title"
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog.title.rendered}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Leave a Message Form */}
      <div className="side_nav">
        <h3>Leave a Message</h3>
        <form
          className="wpcf7-form init"
          noValidate
          aria-label="Contact form"
          onSubmit={(e) => {
            e.preventDefault();
            // handle form submission logic here
          }}
        >
          <div className="contact_form">
            <ul>
              <li>
                <p>
                  <label>Name*</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                    required
                    placeholder="Enter Name*"
                  />
                </p>
              </li>
              <li>
                <p>
                  <label>Email*</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                    required
                    placeholder="Enter Email*"
                  />
                </p>
              </li>
              <li>
                <p>
                  <label>Phone*</label>
                  <br />
                  <input
                    type="tel"
                    name="phone"
                    className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control"
                    required
                    placeholder="Enter Phone No*"
                  />
                </p>
              </li>
              <li>
                <p>
                  <label>Website Url</label>
                  <br />
                  <input
                    type="text"
                    name="website"
                    className="wpcf7-form-control wpcf7-text form-control"
                    placeholder="Enter Website Url"
                  />
                </p>
              </li>
              <li>
                <p>
                  <label>Enter Your Idea*</label>
                  <br />
                  <textarea
                    name="idea"
                    rows="3"
                    className="wpcf7-form-control wpcf7-textarea form-control"
                    placeholder="Enter Your Idea*"
                    required
                  ></textarea>
                </p>
              </li>
              <li>
                <p>
                  <input
                    type="submit"
                    value="Send Message"
                    className="wpcf7-form-control has-spinner wpcf7-submit sbmt_btn"
                  />
                </p>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SidebarSection;
