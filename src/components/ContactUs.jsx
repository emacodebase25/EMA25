import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
    services: [],
    startTime: [],
  });

  const servicesList = [
    "Adult SEO",
    "Adult E-Commerce SEO",
    "Escort SEO",
    "Escort Social Media Marketing",
    "Adult Android App Development",
    "Adult Content Writing Services",
    "Strippers SEO",
    "Adult Dating SEO",
    "Adult Webcams SEO",
    "Porn Star SEO",
    "Tube SEO",
    "Erotic Massage SEO",
    "Brothel SEO",
  ];

  const startTimeOptions = [
    "ASAP",
    "1 - 2 weeks",
    "2 - 4 weeks",
    "1 - 2 months",
    "+2 months (Just exploring)",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => {
        const updatedArray = prevData[name].includes(value)
          ? prevData[name].filter((item) => item !== value)
          : [...prevData[name], value];
        return { ...prevData, [name]: updatedArray };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="contact_us_area">
      <div className="container">
        <div className="row call_us">
          <div className="col-md-7 left-content">
            <div className="col-lg-12">
              <h2 className="text-center">
                Let’s Connect And Talk About The Growth Of Your Business
              </h2>
              <p>
                As the top digital marketing agency prioritizing client ROI, we
                firmly believe in mutual commitment. We invest time to
                comprehend your distinct requirements, creating most effective
                and well-organized strategy to help increase your websites rank
                amid the online crowd. Recognizing the challenges of
                entrepreneurship, we stand ready to assist you in surmounting
                obstacles and taking your business forward. Your satisfaction is
                our priority and we work for it relentlessly. Feel free to drop
                us a message or reach out via call/email to explore options or
                address any inquiries. Rest assured, our dedicated team will
                promptly connect with you.
              </p>
            </div>
            <div className="col-lg-12">
              <div className="part_01">
                <ul className="contact_box row">
                  <li className="col-12">
                    <div className="d-flex align-items-center g-5">
                      <div>
                        <figure className="m-0">
                          <img src="images/pin-1.png" alt="" />
                        </figure>
                      </div>
                      <div>
                        <h3>Location</h3>
                        <p>
                          ITHUM TOWER, A-153, Tower B,
                          <br />5<sup>th</sup> Floor, Noida, UP, 201309
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="col-12">
                    <div class="d-flex align-items-center g-5">
                      <div>
                        <figure class="m-0">
                          <img src="images/call_us.png" alt="" />
                        </figure>
                      </div>
                      <div>
                        <h3>Call Us</h3>
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "inline-block",
                              verticalAlign: "middle",
                            }}
                          >
                            <img src="images/in.webp" alt="Contact Icon" />
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              verticalAlign: "middle",
                            }}
                          >
                            <p>+91 7980282056</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="col-12">
                    <div class="d-flex align-items-center g-5">
                      <div>
                        <figure class="m-0">
                          <img src="images/call_us.png" alt="" />
                        </figure>
                      </div>
                      <div>
                        <h3>Call Us</h3>
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "inline-block",
                              verticalAlign: "middle",
                            }}
                          >
                            <img src="images/uk.png" alt="" />
                          </div>
                          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                            <p>+19295782749</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li class="col-12">
                    <div class="d-flex align-items-center g-5">
                      <div>
                        <figure class="m-0">
                          <img src="images/email_us.png" alt="" />
                        </figure>
                      </div>
                      <div>
                        <h3>Email Us</h3>
                        <div style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "inline-block",
                              verticalAlign: "middle",
                            }}
                          >
                            <img src="" alt="" />
                          </div>
                          <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                            <p>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                class="__cf_email__"
                                data-cfemail="7b171e143b1e081814090f161a09101e0f12151c551a1c1e151802"
                              >
                                [email�protected]
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <section className="world_map_area" id="book_now">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <form onSubmit={handleSubmit}>
                      <h2 className="form_heading">
                        Tell us about your project
                      </h2>
                      <h4>
                        Let’s discuss your project and find out what we can do
                        to provide value.
                      </h4>
                      <ul className="form_area row">
                        <li className="col-lg-12 check_heading">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </li>
                        <li className="col-lg-12 check_heading">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="abc@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </li>
                        <li className="col-lg-12 check_heading">
                          <label>Enter Website URL</label>
                          <input
                            type="text"
                            name="website"
                            placeholder="Enter URL"
                            value={formData.website}
                            onChange={handleChange}
                          />
                        </li>
                        <li className="col-lg-12 check_heading">
                          <label>Message</label>
                          <textarea
                            name="message"
                            placeholder="Describe Your Requirement"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </li>
                        <li className="col-lg-12 check_heading">
                          <label>How can we help you?*</label>
                          {servicesList.map((service) => (
                            <div key={service}>
                              <input
                                type="checkbox"
                                name="services"
                                value={service}
                                checked={formData.services.includes(service)}
                                onChange={handleChange}
                              />
                              <label>{service}</label>
                            </div>
                          ))}
                        </li>
                        <li className="col-lg-12 check_heading">
                          <label>
                            When would you like to start with this project?
                          </label>
                          {startTimeOptions.map((option) => (
                            <div key={option}>
                              <input
                                type="checkbox"
                                name="startTime"
                                value={option}
                                checked={formData.startTime.includes(option)}
                                onChange={handleChange}
                              />
                              <label>{option}</label>
                            </div>
                          ))}
                        </li>
                        <li className="col-lg-12">
                          <button
                            type="submit"
                            className="wpcf7-form-control wpcf7-submit sbmt"
                          >
                            Send
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
