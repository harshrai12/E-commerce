import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="overflow-hidden"> {/* Add overflow-hidden class here */}
      <Slider {...settings} className="banner">
        <div className="shop">
          <h1 className="banner-text">TechNest</h1>
        </div>
        <div className="shop">
          <h1 className="banner-text">50% off on all </h1>
        </div>
        <div className="shop">
          <h1 className="banner-text">Buy Now</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;



