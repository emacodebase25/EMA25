import React, { useState } from 'react';

const AboutProjectForm = ({formHeading}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send formData to an API here
  };

  return (
    <section className="py-5 about_project_section about_project_section_2">
      <div className="container">
  <div className="row">
    <div className="col-sm-4">
      <img
        src="https://escortmarketing.agency/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-28-at-12.53.45_9750cb13.jpg"
        className="img-fluid"
        plerdy-tracking-id={92638625102}
      />
    </div>
    <div className="col-sm-8">
      <div className="escorform">
        <h2 plerdy-tracking-id={61428836102}>Shine like a star!</h2>
        <h4 plerdy-tracking-id={88653225202}>
          Let EMA be the silent force behind your spotlight.
        </h4>
        <div className="wpcf7 js" id="wpcf7-f6345-o3" lang="en-US" dir="ltr">
          <div className="screen-reader-response">
            <p role="status" aria-live="polite" aria-atomic="true" /> <ul />
          </div>
          <form
            action="/escort-seo/#wpcf7-f6345-o3"
            method="post"
            className="wpcf7-form init"
            aria-label="Contact form"
            noValidate="novalidate"
            data-status="init"
          >
            <div style={{ display: "none" }}>
              <input
                type="hidden"
                name="_wpcf7"
                defaultValue={6345}
                plerdy-tracking-id={10311254002}
              />
              <input
                type="hidden"
                name="_wpcf7_version"
                defaultValue="5.7.7"
                plerdy-tracking-id={68294343403}
              />
              <input
                type="hidden"
                name="_wpcf7_locale"
                defaultValue="en_US"
                plerdy-tracking-id={65658627703}
              />
              <input
                type="hidden"
                name="_wpcf7_unit_tag"
                defaultValue="wpcf7-f6345-o3"
                plerdy-tracking-id={12700005701}
              />
              <input
                type="hidden"
                name="_wpcf7_container_post"
                defaultValue={0}
                plerdy-tracking-id={69203885703}
              />
              <input
                type="hidden"
                name="_wpcf7_posted_data_hash"
                defaultValue=""
                plerdy-tracking-id={20639939603}
              />
              <input
                type="hidden"
                name="_wpcf7_recaptcha_response"
                defaultValue="03AFcWeA7ixVq4qh2zbocP2Q72rFbGVLO9_m1oj3go-3KQ4nN6n3l1-rUAAdx5ar_8PhvDELA79rs8M66uNzykp2bnARLeq6nNtSH352ghieajXLVEJcDri8uSQIoVSv9_GtIthZwHiv_SG2XiOM62QKwlRb6XcFDn5yk6crE96jw71PLcz0xHFrihiJYzfbmyvztQbFpQWl9lu6Ki-DkKiK-PsHbfmvTZAEHBj56yyZ43GDpySZ525QX69zRDpw79H6kuPjwzs8NnB6QI-JEoKgcije3M654ZU_m5mZPr0yzIf0gNEwqdHpW7GKs05z07VPkCAXls8vj087cNw9Y4PM0qsvIxEFzSDURhShHTq_OoAB4v2pSXYxEdqI7FSegWjx5uRR9P8i-7I7HnjUnWIeuDjbZxm_YX7jBKaC3jglxHHcmyYGLnyLyHidEIO8tnin1mznU7cRBkZNgcGKenk2z9JTE6D0mnO1y67uYMg3uI6DV1HMwQY73LvBktmpa5Iv_K439JSXCQymFX2sKCNTe7j0xBwqZq1eofxft32rNUcMJTe_sfqXtILEgqlF_GsStOF0OX-dcMh9LAZjdxKUcwfPUlO06Tk5Jjj6IwI6YjbBXLMdUU-RjsM1LiG8RIpujJR_xMRBEdHg5dcmQG_KWy00IAZrS_-TrqfTNYE16l_1lKTTGADn51HQu99Rf3v6di-oOZ-X1DxtUD1XUlvZjGhkMCWXDwdfbYypJ4FJqbUcCV1ZQniIJwpCIUFJCvQmcgGa_4o6hBijQVM5l3iDc1j3QZHBzRkrUPjTLNit3A5O-HZStou00pZujAtuig0cEjO0klVXTJGWln827HAoKeHTNmkdEm7pZ2KIvyttpWjjAKfOInVhBfd9em7Cl6wYZMD42ft5mok-UyPhicc_1dKWE0cGqyWCHMhnPCbLjOtoTvUpWiBJMy1MB11bdST7vxx-UUMRUquv330a4BFN3gSgM2Nu0ft5KEQQW62wG4UagSN_1MsftCHJTUV50yCeoeC9zbdLcAH6cyeddvSviFMPLPqFD8iSnVbyJE-BRF0MKRJsdnmCYcwDgczYnOZjpSxq1QeILy-_WhTmUIviH6_20E5lVFcAF6pelFxkPFiVqtx5mskx3oXAJ2_Yu73TtgUu7iIsAvn6WBGR8RvGrpYlaB7fdMwWlFo8iSbFEjHh6p_4adxEBwxTZ4QiSi6nTUGuVx1dI9HxvDRRY22dvLc4maYOKC9WyymdvPUb1LaSmfYoInFpOPfPYRya4cN_9yEQL7-CSPlscpPbGqNgzJFjjq4BNamN1aqNGExg9pDurWtL7-EYG-H2lCVrS3wxALT3cKrR3wEIddJajUWz-SlMRQFxxi3huexB0kM-rsqSDErwrPwd-XlZ1z3JmtuXmAqIzOCZ0ftnEveytWWtMk8Zs6jaTpZWoqZk3hDaMstdtl34si4qtmhvtirATOXSeOIjBW91fEwe9NP2ZWBzLO-rFykx2SzoQyYeW6c0EjE5c_ZH1hc59XiJyVGxV4HFU0DWpeay1NY5yv-yDSpYnwNQpjKzAKpp5h2uxmg_9iuoBiuRgFJo8XdHvpEM69BkFvIDrsvsLkjkiSTk4UGHJGfHSefOuXVjZGbHTA__yi_PjnPledvQtbRGD3KMdRJEiAm2nbNdzHIKhyMCkr-p9m15KhUlGoJrRLmjd0OOA21jlnrNdh-RCmFjsbTIxnfmZYmwlYHZArxtwf2LvnieFCq_9iUkT6n9S-M-5gNeNQjZEDyG6YxTcv6x2TNnsJAEmU12f6-YhbzpDos54Fv1jSlDBQ8RaxxkRodPF2l40miCJMbBuSXb3JfAJ7XK3FVL8v0Dzei58AKkGjvSeYfCURGOwqKAaHdQxIOyqkcA2TsDpHoaHS7-lg4_K-JufESAmYo8jpVhoLE5kJqjJEI090wMnpr9rvkL9iXMgu5UFv8UQN1SrT0BARKiL5rWksWD-bFLcu60_IHSppRti7XYkB3j-4AedP382zHgCafR7zFb9KlMGTf3x-Iv-dHSLGxWxIyRn1QBh9"
                plerdy-tracking-id={35553496603}
              />
            </div>
            <ul className="form_area row">
              <li className="col-lg-6" plerdy-tracking-id={31401690602}>
                <p>
                  <label plerdy-tracking-id={21330784602}>Name</label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="text-769"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Enter Your Name Here"
                      defaultValue=""
                      type="text"
                      name="text-769"
                      plerdy-tracking-id={19943253902}
                    />
                  </span>
                </p>
              </li>
              <li className="col-lg-6" plerdy-tracking-id={58338382802}>
                <p>
                  <label plerdy-tracking-id={33999125602}>Phone Number</label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="number-898"
                  >
                    <input
                      className="wpcf7-form-control wpcf7-number wpcf7-validates-as-required wpcf7-validates-as-number form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Phone Number"
                      defaultValue=""
                      type="number"
                      name="number-898"
                      plerdy-tracking-id={55937660502}
                    />
                  </span>
                </p>
              </li>
              <li className="col-lg-6" plerdy-tracking-id={73763156702}>
                <p>
                  <label plerdy-tracking-id={66606325102}>Email</label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="email-157"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="abc@gmail.com"
                      defaultValue=""
                      type="email"
                      name="email-157"
                      plerdy-tracking-id={45936738002}
                    />
                  </span>
                </p>
              </li>
              <li className="col-lg-6 re_for" plerdy-tracking-id={80910384102}>
                <p>
                  <label plerdy-tracking-id={91434504702}>
                    Select Services
                  </label>
                  <br />
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="select-service"
                  >
                    <select
                      className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      name="select-service"
                      plerdy-tracking-id={75317368102}
                    >
                      <option value="" plerdy-tracking-id={31351583903}>
                        —Please choose an option—
                      </option>
                      <option
                        value="Adult SEO"
                        plerdy-tracking-id={60911039002}
                      >
                        Adult SEO
                      </option>
                      <option
                        value="Adult E-Commerce SEO"
                        plerdy-tracking-id={49878238402}
                      >
                        Adult E-Commerce SEO
                      </option>
                      <option
                        value="Escort SEO"
                        plerdy-tracking-id={57653923002}
                      >
                        Escort SEO
                      </option>
                      <option
                        value="ESCORT SOCIAL MEDIA MARKETING"
                        plerdy-tracking-id={48231237002}
                      >
                        ESCORT SOCIAL MEDIA MARKETING
                      </option>
                      <option
                        value="Adult Android App Development Agency"
                        plerdy-tracking-id={28815843202}
                      >
                        Adult Android App Development Agency
                      </option>
                      <option
                        value="Adult Content Writing"
                        plerdy-tracking-id={27344791002}
                      >
                        Adult Content Writing
                      </option>
                      <option
                        value="Strippers SEO"
                        plerdy-tracking-id={93656919002}
                      >
                        Strippers SEO
                      </option>
                      <option
                        value="Adult Dating SEO"
                        plerdy-tracking-id={89970575602}
                      >
                        Adult Dating SEO
                      </option>
                      <option
                        value="Adult Webcams SEO"
                        plerdy-tracking-id={35187961002}
                      >
                        Adult Webcams SEO
                      </option>
                      <option
                        value="Porn Star SEO"
                        plerdy-tracking-id={58693045202}
                      >
                        Porn Star SEO
                      </option>
                      <option value="Tube SEO" plerdy-tracking-id={99475081802}>
                        Tube SEO
                      </option>
                      <option
                        value="Erotic Massage SEO"
                        plerdy-tracking-id={48521480002}
                      >
                        Erotic Massage SEO
                      </option>
                      <option
                        value="Brothel SEO"
                        plerdy-tracking-id={87143535802}
                      >
                        Brothel SEO
                      </option>
                    </select>
                  </span>
                </p>
              </li>
              <li className="col-lg-6" plerdy-tracking-id={18317901202}>
                <p>
                  <label plerdy-tracking-id={73453907202}>Select Budget</label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="text-775"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Budget"
                      defaultValue=""
                      type="text"
                      name="text-775"
                      plerdy-tracking-id={40472224602}
                    />
                  </span>
                </p>
              </li>
              <li className="col-lg-6" plerdy-tracking-id={19630024302}>
                <p>
                  <label plerdy-tracking-id={21117544702}>
                    Enter Website URL
                  </label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="text-154"
                  >
                    <input
                      size={40}
                      className="wpcf7-form-control wpcf7-text form-control"
                      aria-invalid="false"
                      placeholder="Enter URL"
                      defaultValue=""
                      type="text"
                      name="text-154"
                      plerdy-tracking-id={69339132202}
                    />
                  </span>
                </p>
              </li>
              <li className="col-lg-12" plerdy-tracking-id={72920408102}>
                <p>
                  <label plerdy-tracking-id={32169427102}>
                    When would you like to start with this project?
                  </label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="select-service"
                  >
                    <select
                      className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                      aria-required="true"
                      aria-invalid="false"
                      name="select-service"
                      plerdy-tracking-id={71669227902}
                    >
                      <option value="" plerdy-tracking-id={31351583904}>
                        —Please choose an option—
                      </option>
                      <option value="ASAP" plerdy-tracking-id={54741497402}>
                        ASAP
                      </option>
                      <option
                        value="1 - 2 weeks"
                        plerdy-tracking-id={34146075402}
                      >
                        1 - 2 weeks
                      </option>
                      <option
                        value="2 - 4 weeks"
                        plerdy-tracking-id={10361944802}
                      >
                        2 - 4 weeks
                      </option>
                      <option
                        value="1 - 2 months"
                        plerdy-tracking-id={82045242202}
                      >
                        1 - 2 months
                      </option>
                      <option
                        value="+2 months (Just exploring)"
                        plerdy-tracking-id={18946233402}
                      >
                        +2 months (Just exploring)
                      </option>
                    </select>
                  </span>
                </p>
              </li>
              <li className="col-lg-12" plerdy-tracking-id={60312608502}>
                <p>
                  <label plerdy-tracking-id={91213352602}>Message</label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="textarea-132"
                  >
                    <textarea
                      cols={40}
                      rows={10}
                      className="wpcf7-form-control wpcf7-textarea"
                      aria-invalid="false"
                      placeholder="Describe Your Requirement"
                      name="textarea-132"
                      plerdy-tracking-id={46323138502}
                      defaultValue={""}
                    />
                  </span>
                </p>
              </li>
              <li className="col-lg-6" plerdy-tracking-id={40513755902}></li>
              <li
                className="col-lg-12"
                style={{ flex: "inherit" }}
                plerdy-tracking-id={50948756102}
              >
                <div className="cta_area">
                  <p>
                    <input
                      className="wpcf7-form-control has-spinner wpcf7-submit sbmt"
                      type="submit"
                      defaultValue="Send My Free Proposal"
                      plerdy-tracking-id={85887822402}
                    />
                    <span className="wpcf7-spinner" />
                  </p>
                </div>
              </li>
            </ul>
            <div className="wpcf7-response-output" aria-hidden="true" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutProjectForm;
