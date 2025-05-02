import React from "react";

const seoTools = [
  {
    name: "Screaming Frog",
    imgSrc: "https://escortmarketing.agency/wp-content/uploads/2025/01/screaming.jpg",
    trackingId: "61190331901",
    headingId: "37744146201",
  },
  {
    name: "Semrush",
    imgSrc: "https://escortmarketing.agency/wp-content/uploads/2025/01/semrush.jpg",
    trackingId: "66997365501",
    headingId: "74063599001",
  },
  {
    name: "Ahrefs",
    imgSrc: "https://escortmarketing.agency/wp-content/uploads/2025/01/ahrefs.jpg",
    trackingId: "37949757701",
    headingId: "31162678801",
  },
  {
    name: "Moz",
    imgSrc: "https://escortmarketing.agency/wp-content/uploads/2025/01/moz.jpg",
    trackingId: "13868645801",
    headingId: "35951624901",
  },
];

const SEOTools = () => {
  return (
    <section className="section-blue design-tools seo-tools">
      <div className="container relative">
        <h2
          className="section-title text-center text-shadow"
          data-tracking-id="69611499601"
        >
          SEO Services Tools
        </h2>
        <div>
          <p className="text-center line-height-1-6">
            SEO only becomes difficult when you don’t know it. Strategize with
            the Best SEO Agency in India.
          </p>
        </div>
        <div className="row g-1 text-center">
          {seoTools.map((tool, index) => (
            <div className="col" key={index}>
              <div className="card p-2">
                <div className="icon-box mx-auto mb-3">
                  <img
                    alt="SEO-Toolbox"
                    className="img-fluid rounded-3"
                    src={tool.imgSrc}
                    data-tracking-id={tool.trackingId}
                  />
                </div>
                <h6 data-tracking-id={tool.headingId}>{tool.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOTools;
