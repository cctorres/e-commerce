import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  return (
    <div className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          CSStore
        </NavLink>
        <ul className={click? "nav-menu active":"nav-menu"}>
          <li className="nav-item">
            <NavLink exact to="/car" className="nav-links">
              Car
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/products" className="nav-links">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/profile" className="nav-links">
              Profile
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
