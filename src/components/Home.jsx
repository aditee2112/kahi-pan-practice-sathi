import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./Button/Button";
import Carousel from "./Carousel/Carousel";
import Hamburger from "./Hamburger/Hamburger";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Hamburger Menu */}
      <Hamburger />

      {/* Home Page Content */}
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          textAlign: "center",
          paddingTop: "70px",
          boxSizing: "border-box",
        }}
      >
        <span
          style={{
            fontFamily: "fantasy",
            fontSize: "50px",
          }}
        >
          Anything Application
        </span>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingTop: "40px",
            alignItems: "center",
          }}
        >
          <Link
            to="/user-form"
            style={{
              display: "inline-block",
              width: "fit-content",
            }}
          >
            <CustomButton
              buttonName="SIGN-UP"
              buttonIntent="success"
              buttonIcon="user"
            />
          </Link>

          <Link
            to="/carousel-page"
            style={{
              display: "inline-block",
              width: "fit-content",
            }}
          >
            <CustomButton
              buttonIcon="exchange"
              buttonIntent="primary"
              buttonName="See Carousel"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
