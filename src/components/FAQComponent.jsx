import React from "react";

const FAQSection = ({ faqList }) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="accordion">
          <ul className="faq_list">
            {faqList.map((faq, index) => (
              <li key={index}>
                <div className="heading">{faq.question}</div>
                <div className="contents">
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
