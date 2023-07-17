import React from "react";
import logo from "./../../assets/logo.png";
import "./Nav.css";
const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <img className="flash-logo" src={logo} alt="" />
          <p className="flash-logo-text">TypeForTest</p>
        </div>
        <div className="nav-right">
          <a
            href="https://github.com/tribanj"
            target="_blank"
            className="nav-link"
            rel="noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
