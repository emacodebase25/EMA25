import React from 'react';

const AuditForm = () => {
  return (
    <section className="audit_form_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="audit_form">
              <h3>Free Audit Now</h3>
              <form className="wpcf7-form" noValidate>
                <ul className="row">
                  <li className="col-lg-4">
                    <p>
                      <input
                        type="text"
                        name="text-784"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        placeholder="Enter Name"
                        required
                      />
                    </p>
                  </li>
                  <li className="col-lg-4">
                    <p>
                      <input
                        type="email"
                        name="email-627"
                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                        placeholder="Enter Email"
                        required
                      />
                    </p>
                  </li>
                  <li className="col-lg-4">
                    <p>
                      <input
                        type="number"
                        name="number-381"
                        className="wpcf7-form-control wpcf7-number wpcf7-validates-as-number"
                        placeholder="Enter Phone"
                      />
                    </p>
                  </li>
                  <li className="col-lg-4">
                    <p>
                      <input
                        type="text"
                        name="text-153"
                        className="wpcf7-form-control wpcf7-text form-control"
                        placeholder="Enter Website Url"
                      />
                    </p>
                  </li>
                  <li className="col-lg-4">
                    <p>
                      <textarea
                        name="textarea-69"
                        className="wpcf7-form-control wpcf7-textarea"
                        placeholder="Enter Message"
                        rows="5"
                      ></textarea>
                    </p>
                  </li>
                  <li className="col-lg-4"></li>
                  <li className="col-lg-4">
                    <p>
                      <input
                        type="submit"
                        value="Send"
                        className="wpcf7-form-control has-spinner wpcf7-submit"
                      />
                    </p>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;