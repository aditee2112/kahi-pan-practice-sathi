import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./Button/Button";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  return (
    <div>
      <h1>Oscar's Application</h1>
      <Carousel />
      <Link to="/user-form">
        <CustomButton buttonName="go to signup" buttonIntent="success" />
      </Link>
    </div>
  );
};

export default Home;
