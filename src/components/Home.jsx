import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./Button/Button";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          padding: "15px",
          zIndex: 1001,
        }}
      >
        <button
          onClick={toggleMenu}
          style={{
            fontSize: "30px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          ☰
        </button>
      </div>

      {/* Side Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "300px",
            height: "100vh",
            backgroundColor: "white",
            boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
            paddingTop: "80px",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              padding: "10px 30px",
            }}
          >
            Home
          </Link>

          <Link
            to="/user-form"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              padding: "10px 30px",
            }}
          >
            Sign-up
          </Link>

          <Link
            to="/carousel-page"
            onClick={() => setMenuOpen(false)}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              padding: "10px 30px",
            }}
          >
            Carousel
          </Link>
        </div>
      )}

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
