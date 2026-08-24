import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./Button/Button";
import Carousel from "./Carousel/Carousel";
import Hamburger from "./Hamburger/Hamburger";
import "./Home.css";
import Table from "./Table/Table";

const Home = () => {
  return (
    <div className="main-container">
      {/* Hamburger Menu */}
      <Hamburger />

      {/* Home Page Content */}
      <div className="home-page-container">
        <span className="title-container">Anything Application</span>

        <div className="button-container">
          <Link to="/user-form" className="link-container">
            <CustomButton
              buttonName="SIGN-UP"
              buttonIntent="success"
              buttonIcon="user"
            />
          </Link>

          <Link to="/carousel-page" className="link-container">
            <CustomButton
              buttonIcon="exchange"
              buttonIntent="primary"
              buttonName="See Carousel"
            />
          </Link>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Home;
