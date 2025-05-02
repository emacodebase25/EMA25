import React from 'react';

const platforms = [
  'Artboard-5.svg', 'Artboard-13.svg', 'Artboard-1.svg', 'Artboard-9.svg',
  'Artboard-4.svg', 'Artboard-8.svg', 'Artboard-15.svg', 'Artboard-12.svg',
  'Artboard-19.svg', 'Artboard-18.svg', 'Artboard-16.svg', 'Artboard-3.svg',
  'Artboard-20.svg', 'Artboard-17.svg', 'Artboard-11.svg', 'Artboard-7-1.svg',
];

const BASE_URL = 'https://escortmarketing.agency/wp-content/uploads/2025/01/';

const PlatformsOptimized = () => {
  return (
    <section className="top_overview srvc_info_area brand_section">
      <div className="container">
        <div className="row align_center">
          <div className="col-lg-12">
            <div className="techbrand my-5 py-5">
              <h2 className="text-center mb-3">PLATFORMS WE OPTIMIZE</h2>
              <ul className="techbrand d-flex flex-wrap justify-content-center list-unstyled p-0">
                {platforms.map((fileName, index) => (
                  <li key={index} className="m-3">
                    <div className="brnimg">
                      <img
                        src={`${BASE_URL}${fileName}`}
                        alt={`Platform ${index + 1}`}
                        style={{ maxWidth: '100px', height: 'auto' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformsOptimized;
