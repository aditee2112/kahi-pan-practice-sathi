import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "/src/assets/image1.png",
    "/src/assets/image2.png",
    "/src/assets/image3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="carousel">
      <button onClick={previousSlide}> {"<"} </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}> {">"}</button>
    </div>
  );
};

export default Carousel;
