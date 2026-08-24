import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
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
    </div>
  );
};

export default Hamburger;
