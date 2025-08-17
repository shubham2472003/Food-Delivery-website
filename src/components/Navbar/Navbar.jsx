import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { getTotalCartAmount } = useContext(StoreContext);

  const cartAmount = getTotalCartAmount(); // Total items in cart

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="navbar-logo" />
      </Link>

      {/* Menu Links */}
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            className={menu === "mobile" ? "active" : ""}
            onClick={() => setMenu("mobile")}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket" />
          </Link>
          {/* Only show the cart dot if cart has items */}
          {cartAmount > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)} className="sign-in-btn">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
