import React from 'react';

const SEOPlanCard = ({ title, keywords, supportHours, duration, wordsPM, features }) => (
  <div className="col-lg-4 mb-5 mb-lg-0">
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="h6 text-uppercase font-weight-bold mb-4">{title}</h2>
      <div className="custom-separator my-4 mx-auto bg-primary"></div>
      <p>
        <a
          className="btn btn-primary btn-block p-2 shadow rounded-pill"
          href="https://escortmarketing.agency/contact-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Escort SEO Experts
        </a>
      </p>
      <ul className="list-unstyled my-5 text-small text-left">
        {features.map((item, index) => (
          <li key={index}>
            <i className="fa fa-check mr-2 text-primary"></i>
            {item}
          </li>
        ))}
        <li><i className="fa fa-check mr-2 text-primary"></i>No. of Keywords/Phrases: {keywords}</li>
        <li><i className="fa fa-check mr-2 text-primary"></i>SEO Plan Duration: {duration}</li>
        <li><i className="fa fa-check mr-2 text-primary"></i>Up to {wordsPM} Words PM</li>
        <li><i className="fa fa-check mr-2 text-primary"></i>Free Dev Support Up To {supportHours} Hrs</li>
      </ul>
    </div>
  </div>
);

export default SEOPlanCard;
