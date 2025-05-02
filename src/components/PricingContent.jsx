import { useState } from 'react';

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState(2); 

  const tabs = [
    { id: 1, name: "Independent Escort SEO Package" },
    { id: 2, name: "Escort Agency SEO Package" },
    { id: 3, name: "Independent Escort SMM Package" },
    { id: 4, name: "Escort Agency SMM Package" },
    { id: 5, name: "Adult App Development" },
    { id: 6, name: "Adult SEO Package" }
  ];

  const tabContents = {
    1: (
        <div className="tab-content animated fadeIn clearfix">
        <h2 className="text-center">{tabs[activeTab - 1].name}</h2>
        <div className="container py-5">
          <div className="row text-center align-items-end">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="h6 text-uppercase font-weight-bold mb-4">Low Competition</h2>
                <h2 className="h1 font-weight-bold"></h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Keyword Research</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>No. of keywords /Phrases : 10</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Competitor Analysis</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Website Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Backlink Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Content Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>4 Months SEO Plans &amp; Targets</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>On-page and Off-page SEO</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Up to 3000 words P/M</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Technical SEO</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>SEO Website Development</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Analytics and Reporting</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Dedicated SEO Account Manager</li>
                </ul>
                <button 
                  className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  onClick={() => console.log('Hire Escort SEO Specialist - Low Competition')}
                >
                  Hire Escort SEO Specialist
                </button>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="h6 text-uppercase font-weight-bold mb-4">Professional</h2>
                <h2 className="h1 font-weight-bold"></h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Keyword Research</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>No. of keywords /Phrases : 15</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Competitor Analysis</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Website Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Backlink Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Content Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>5 Months SEO Plans &amp; Targets</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>On-page and Off-page SEO</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Up to 5000 words P/M</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Technical SEO</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>SEO Website Development</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Analytics and Reporting</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Dedicated SEO Account Manager</li>
                </ul>
                <button 
                  className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  onClick={() => console.log('Hire Escort SEO Specialist - Professional')}
                >
                  Hire Escort SEO Specialist
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-white p-5 rounded-lg shadow">
                <h2 className="h6 text-uppercase font-weight-bold mb-4">Enterprise</h2>
                <h2 className="h1 font-weight-bold"></h2>
                <div className="custom-separator my-4 mx-auto bg-primary"></div>
                <ul className="list-unstyled my-5 text-small text-left">
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Keyword Research</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>No. of keywords /Phrases : 25</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Competitor Analysis</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Website Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Backlink Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Content Audit</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>6 Months SEO Plans &amp; Targets</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>On-page and Off-page SEO</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Up to 6000 words P/M</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Technical SEO</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>SEO Website Development</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Analytics and Reporting</li>
                  <li className="mb-3"><i className="fa fa-check mr-2 text-primary"></i>Dedicated SEO Account Manager</li>
                </ul>
                <button 
                  className="btn btn-primary btn-block p-2 shadow rounded-pill"
                  onClick={() => console.log('Hire Escort SEO Specialist - Enterprise')}
                >
                  Hire Escort SEO Specialist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    2: (
        <section id="section-linebox-2" className="">
        <div className="tab-content animated fadeIn clearfix">
          <h2 className="text-center">Escort Agency SEO Package</h2>
          <div className="container py-5">
            <div className="row text-center align-items-end">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Agency L1
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Keyword Research
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Number of keywords : 55
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Competitor Analysis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Website Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backlink Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Content Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />4 Month SEO
                      Plans &amp; Targets
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      On-page and Off-page SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      6000&nbsp;words&nbsp;P/M
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Technical SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SEO Website Development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics and Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Dedicated SEO Account Manager
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Escort SEO Specialist
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Agency L2
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Keyword Research
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Number of keywords : 75
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Competitor Analysis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Website Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backlink Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Content Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />5 Month SEO
                      Plans &amp; Targets
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      On-page and Off-page SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      8000 words P/M
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Technical SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SEO Website Development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics and Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Dedicated SEO Account Manager
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Escort SEO Specialist
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Agency L3
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Keyword Research
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Number of keywords : 95
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Competitor Analysis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Website Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backlink Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Content Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />6 Month SEO
                      Plans &amp; Targets
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      On-page and Off-page SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      10000 words P/M
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Technical SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SEO Website Development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics and Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Dedicated SEO Account Manager
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Escort SEO Specialist
                  </a>
                </div>
              </div>
              {/* END */}
            </div>
          </div>{" "}
        </div>
      </section>
    ),
    3: (
        <section id="section-linebox-3" className="content-current">
        <div className="tab-content animated fadeIn clearfix">
          <h2 className="text-center">Independent Escort SMM Package</h2>
          <div className="container py-5">
            <div className="row text-center align-items-end">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Low Competition
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Social Media Content Strategy
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />4 Managed
                      Social Media Accounts
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      16 Unique Posts per Account every week
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Fully managed solution
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Custom profile design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Boosted Paid Posts*
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Monthly Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Email support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Calls Included
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Professional
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Social Media Content Strategy
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />5 Managed
                      Social Media Accounts
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      20 Unique Posts per Account every week
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Fully managed solution
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Custom profile design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Boosted Paid Posts*
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Monthly Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Email support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Calls Included
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Enterprise
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Social Media Content Strategy
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />9 Managed
                      Social Media Accounts
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      45 Unique Posts per Account every week
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Fully managed solution
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Custom profile design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Boosted Paid Posts*
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Monthly Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Email support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Calls Included
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    ),
    4: (
        <section id="section-linebox-4" className="">
        <div className="tab-content animated fadeIn clearfix">
          <h2 className="text-center">Escort Agency SMM Package</h2>
          <div className="container py-5">
            <div className="row text-center align-items-end">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Low Competition
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Social Media Content Strategy
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />4 Managed
                      Social Media Accounts
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Unique Posts per Account every week as per Agency Size
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Fully managed solution
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Custom profile design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Boosted Paid Posts*
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Monthly Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Email support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Calls Included
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Professional
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Social Media Content Strategy
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />5 Managed
                      Social Media Accounts
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Unique Posts per Account every week as per Agency Size
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Fully managed solution
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Custom profile design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Boosted Paid Posts*
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Monthly Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Email support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Calls Included
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Enterprise
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Social Media Content Strategy
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />9 Managed
                      Social Media Accounts
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Unique Posts per Account every week as per Agency Size
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Fully managed solution
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Custom profile design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Boosted Paid Posts*
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Monthly Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Email support
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Calls Included
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    ),
    5: (
        <section id="section-linebox-5" className="">
        <div className="tab-content animated fadeIn clearfix">
          <h2 className="text-center">Adult App Development</h2>
          <div className="container py-5">
            <div className="row text-center align-items-end">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Silver
                  </h2>
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Only Android platform
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Intuitive UI/UX design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Push notification
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Map integration
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SMS/phone call integration
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No Analytics
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No Backend server development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No API integration
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Developer
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">Gold</h2>
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      iOS/Android platform
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Intuitive UI/UX design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Push notification
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Map integration
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SMS/phone call integration
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backend server development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No API integration
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Developer
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Platinum
                  </h2>
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      iOS/Android platform
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Intuitive UI/UX design
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Push notification
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Map integration
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SMS/phone call integration
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backend server development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      API integration
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Developer
                  </a>
                </div>
              </div>
              {/* END */}
            </div>
          </div>{" "}
        </div>
      </section>
    ),
    6: (
        <section id="section-linebox-6" className="">
        <div className="tab-content animated fadeIn clearfix">
          <h2 className="text-center">Adult SEO Package</h2>
          <div className="container py-5">
            <div className="row text-center align-items-end">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Low Competition
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Keyword Research
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No. of keywords /Phrases : 10
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Competitor Analysis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Website Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backlink Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Content Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />4 Months SEO
                      Plans &amp; Targets
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      On-page and Off-page SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Up to 3000 words P/M
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Technical SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SEO Website Development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics and Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Dedicated SEO Account Manager
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Adult SEO Experts
                  </a>
                </div>
              </div>
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Professional
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Keyword Research
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No. of keywords /Phrases : 15
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Competitor Analysis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Website Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backlink Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Content Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />5 Months SEO
                      Plans &amp; Targets
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      On-page and Off-page SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Up to 5000 words P/M
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Technical SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SEO Website Development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics and Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Dedicated SEO Account Manager
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Adult SEO Experts
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h2 className="h6 text-uppercase font-weight-bold mb-4">
                    Enterprise
                  </h2>
                  <h2 className="h1 font-weight-bold" />
                  <div className="custom-separator my-4 mx-auto bg-primary" />
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Keyword Research
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      No. of keywords /Phrases : 25
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Competitor Analysis
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Website Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Backlink Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Content Audit
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />6 Months SEO
                      Plans &amp; Targets
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      On-page and Off-page SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Up to 6000&nbsp;words&nbsp;P/M
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Technical SEO
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      SEO Website Development
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Analytics and Reporting
                    </li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary" />
                      Dedicated SEO Account Manager
                    </li>
                  </ul>
                  <a
                    className="btn btn-primary btn-block p-2 shadow rounded-pill"
                    href="https://escortmarketing.agency/contact-us/"
                    target="_blank"
                  >
                    Hire Adult SEO Experts
                  </a>
                </div>
              </div>
              {/* END */}
            </div>
          </div>{" "}
        </div>
      </section>
    ),
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    return (
      <div className="tab-content animated fadeIn clearfix">
        {tabContents[activeTab] || <div className="p-5 text-center">No Content Available</div>}
      </div>
    );
  };


  return (
    <div className="content_page_area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content_area">
              <div id="bsf_rt_marker">
                <div className="tab-awesome tab-post-3057">
                  <div className="style-sabelas">
                    <div className="tabs bg-color-tab tabs-style-linebox">
                      <nav>
                        <ul>
                          {tabs.map(tab => (
                            <li key={tab.id} className={activeTab === tab.id ? "tab-current" : ""}>
                              <a 
                                className="title-tab"
                                onClick={() => handleTabClick(tab.id)}
                              >
                                <span>{tab.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                      <div className="content-wrap clearfix">
                        {renderTabContent()}
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
  );
}