import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css'; // Import the CSS file for additional styling

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        <div className="slide">
          <img
            src="https://images.limely.co.uk/wp-content/uploads/fashion-websites-blog.jpg"
            alt=""
            className="slide-image"
          />
          <div className="slide-text">Let's Explore</div>
        </div>
        <div className="slide">
          <img
            src="https://media.istockphoto.com/id/1338646661/photo/gold-jewelry-diamond-rings-show-in-luxury-retail-store-window-display-showcase.webp?b=1&s=170667a&w=0&k=20&c=IjIyYsOhjFangGZVqki_9YHTtbN3JBFyQs7GXPA_eV0="
            alt=""
            className="slide-image"
          />
          <div className="slide-text">Shop Now</div>
        </div>
        <div className="slide">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230616/pngtree-computer-desktop-interface-showcasing-3d-rendered-online-shopping-with-a-shopping-image_3613084.jpg"
            alt=""
            className="slide-image"
          />
          <div className="slide-text">New Collections</div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroSection;
