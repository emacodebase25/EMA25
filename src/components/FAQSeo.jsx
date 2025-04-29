import React, { useState } from 'react';

const faqs = {
  seo: [
    {
      question: "What are the key components of Escort SEO?",
      answer: "Key components of Escort SEO include keyword research, on-page optimization, technical SEO, content creation, link building, and local SEO. These elements work together to improve a website’s search engine rankings and attract targeted traffic."
    },
    {
      question: "Is SEO different for escort websites compared to other industries?",
      answer: "While many SEO principles remain the same across industries, escort websites often face unique challenges due to the sensitive nature of the services offered. SEO strategies for escort websites may need to be tailored to comply with legal regulations and address specific industry nuances."
    },
    {
      question: "How do you perform keyword research for escort SEO?",
      answer: "Keyword research for Escort SEO involves identifying relevant search terms and phrases that potential clients are likely to use. Tools like SEMrush, Ahrefs, SpyFu, or SERanking can be used to find high-volume keywords with manageable competition."
    },
    {
      question: "What are some on-page SEO best practices for escort websites?",
      answer: "On-page SEO best practices include optimizing meta tags, using keywords in headings and content, optimizing image alt text, creating valuable content, and ensuring a user-friendly website structure."
    },
    {
      question: "How does link building benefit escort SEO?",
      answer: "Link building helps to increase a website’s authority and credibility. Quality backlinks from reputable sites can boost search rankings and bring more organic traffic."
    },
    {
      question: "What role does local SEO play in escort marketing?",
      answer: "Local SEO helps target clients in specific locations by creating location-specific content, optimizing Google My Business listings, and earning local citations."
    },
    {
      question: "Are there specific SEO strategies for promoting escort services on social media?",
      answer: "Yes, strategies include optimizing profiles with keywords, sharing quality content, engaging followers, and using hashtags to increase visibility."
    },
    {
      question: "What are some common mistakes to avoid in escort SEO?",
      answer: "Mistakes include keyword stuffing, black hat SEO tactics, neglecting mobile optimization, ignoring local SEO, and failing to update website content regularly."
    },
    {
      question: "How important is content marketing for escort SEO?",
      answer: "Content marketing is vital. It helps establish authority, attract organic traffic, and engage potential clients through blog posts, articles, guides, and multimedia."
    },
    {
      question: "What role do reviews and testimonials play in escort SEO?",
      answer: "Reviews provide social proof and credibility, improving rankings and attracting more clients. Managing online reputation is crucial."
    },
    {
      question: "How do you measure the success of escort SEO campaigns?",
      answer: "Success can be measured through organic traffic, keyword rankings, conversions, bounce rates, time on site, and ROI."
    },
    {
      question: "Are there any ethical considerations in escort SEO?",
      answer: "Yes, it’s important to prioritize privacy, consent, and respect for individuals' rights, following ethical standards to protect the business’s reputation."
    },
    {
      question: "Can escort SEO target specific niches or preferences?",
      answer: "Yes, SEO can be customized to target niches like BDSM, fetish, companionship, or specific demographics based on audience preferences."
    },
    {
      question: "How frequently should I update my escort website for SEO?",
      answer: "You should update your website regularly with fresh content and blog posts. Using a content calendar helps plan updates efficiently."
    },
    {
      question: "What are some ways to build trust and credibility in escort SEO?",
      answer: "Providing valuable content, showcasing client testimonials, maintaining a professional website, and being transparent about services and pricing builds trust."
    },
    {
      question: "Is it possible to maintain client confidentiality with escort SEO?",
      answer: "Yes, by avoiding the use of real names or specific client details, and by obtaining consent before sharing testimonials or reviews."
    },
    {
      question: "What strategies improve website load speed and how does it impact SEO?",
      answer: "Strategies include optimizing images, minifying files, leveraging browser caching, and using a CDN. Faster load times improve SEO and user experience."
    }
  ]
};

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState('seo');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq_home top_anm wow">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>FAQ</h2>
            <p>
              Escort marketing services revolve around attracting the appropriate audience to your escort website.
              Our Escort Marketing FAQs aim to address any lingering queries about our services.
              Below are the responses to the most frequent Escort Marketing FAQs.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9 mx-auto">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <button className={`nav-link ${activeTab === 'seo' ? 'active' : ''}`} onClick={() => setActiveTab('seo')} role="tab">
                  SEO FAQ
                </button>
              </li>
              {/* You can add SMM and APPS FAQs similarly if needed */}
            </ul>

            <div className="tab-content">
              {activeTab === 'seo' && (
                <div className="tab-pane active" id="seo" role="tabpanel">
                  <ul className="faq_list">
                    {faqs.seo.map((faq, index) => (
                      <li key={index}>
                        <div className="heading" onClick={() => toggleQuestion(index)} style={{ cursor: 'pointer' }}>
                          {faq.question}
                        </div>
                        {openIndex === index && (
                          <div className="contents">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;