import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="/images/ott-site-logo.png" className="logo" alt="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="https://api.whatsapp.com/send?phone=7620747379"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              <a
              href="https://api.whatsapp.com/send?phone=7620747379"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-icon"
            >
              <FaWhatsapp className="whatsapp-icon" />
            </a>
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon mobile-navbar-btn">
                <CgCloseR
                  name="close-outline"
                  className="mobile-nav-icon"
                />
              </span>
            ) : (
              <span className="icon mobile-navbar-btn">
                <CgMenu name="menu-outline" className="mobile-nav-icon" />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
