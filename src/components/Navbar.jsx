// src/components/Navbar.jsx

import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Travel Ventures</div>

      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="#decouvrir">Destinations</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
