import React, { useState } from "react";

const CarouselImages = () => {
  const images = [
    "/src/assets/image4.png",
    "/src/assets/image5.png",
    "/src/assets/image6.png",
    "/src/assets/image7.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length ? 0 : prevIndex + 1,
    );
  };
  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };
  return (
    <div className="carousel">
      <button onClick={previousImage}>{"<"}</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextImage}>{">"}</button>
    </div>
  );
};
