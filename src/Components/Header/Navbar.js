import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const disclaimer = () => {
    window.alert(
      "This page is under construction, this is just a personal DEMO for self learning. This page is powered by React Js. MercadoLibre API. Firebase Auth & Firestore. Images from PixaBay"
    );
  };
  return (
    <div className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          CSStore
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink exact to="/car" className="nav-links">
              Car
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/profile" className="nav-links">
              Profile
            </NavLink>
          </li>
          <li className="nav-item" onClick={disclaimer}>
            <NavLink exact to="/" className="nav-links">
              Dislcaimer
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
