import React, { useState } from "react";
import CustomButton from "../Button/Button";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Oscar's Photos</h1>
      <CustomButton buttonIcon="arrow-left" onButtonClick={previousSlide}>
        {" "}
        {"<"}{" "}
      </CustomButton>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <CustomButton buttonIcon="arrow-right" onButtonClick={nextSlide}>
        {" "}
        {">"}
      </CustomButton>
      <br />
      <Link to="/" style={{ display: "inline-block", width: "fit-content" }}>
        <CustomButton
          buttonIcon="circle-arrow-left"
          buttonName="Go to Home Page"
          buttonIntent="warning"
        />
      </Link>
    </div>
  );
};

export default Carousel;
