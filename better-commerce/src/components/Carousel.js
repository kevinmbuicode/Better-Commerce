import React from "react";
import AliceCarousel from "react-alice-carousel";

const Carousel = () => {
  const items = [
    <img
      src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"
      alt="imag"
      height='160px'
    />,
    <img
      src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"
      alt="imag"
      height='160px'
    />,
    <img
      src="https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg"
      alt="imag"
      height='160px'
    />,
  ];

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
};

export default Carousel;
