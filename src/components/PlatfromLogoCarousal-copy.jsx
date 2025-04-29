import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';


const logos = [
  { image: "images/fansly_light_v3-1024x286.webp", name: "Fansly" },
  { image: "images/1024fans.png", name: "1024FANS" },
  { image: "images/flirtback-logo-light.png", name: "FlirtBack" },
  { image: "images/loyalfans.png", name: "LoyalFans" },
  { image: "images/peach.49f1951.png", name: "Peach" },
  { image: "images/unfilter-1024x182.png", name: "Unflitrd" },
  { image: "images/xgirl-hub.png", name: "XGirlHub" },
  { image: "images/logo123.png", name: "XXX Follow" }
];

// Helper to group logos into sets of 4 per slide
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const PlatformLogoCarousel2 = () => {
  const groupedLogos = chunkArray(logos, 4); 

  return (
    <Carousel className="platform-carousel">
      {groupedLogos.map((group, idx) => (
        <Carousel.Item key={idx}>
          <Row className="justify-content-center py-4">
            {group.map((logo, index) => (
              <Col key={index} xs={6} md={3} className="text-center">
                <PlatformLogo image={logo.image} name={logo.name} />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const PlatformLogo = ({ image, name }) => (
  <li className="item">
    <figure>
      <img src={image} alt={name} />
    </figure>
    <p>{name}</p>
  </li>
);

export default PlatformLogoCarousel2;