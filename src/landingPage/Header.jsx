import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./E_learning.png";
import search from "./search.svg";
import arrow_left from "./arrow_left.svg";
import arrow_right from "./arrow_right.svg";
import "./style.css";
import "./responsive.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav_link">
            <NavLink to="/"> Course </NavLink>
            <div className="button">
              <NavLink to="/"> Login </NavLink>
              <NavLink to="/" className="btn">
                Sign Up
              </NavLink>
            </div>
          </div>
        </nav>
        <section>
          <h1>
            learn anything <br />
            you want
          </h1>
          <div className="search_bar">
            <input type="text" placeholder="Search Any Course" />
            <img src={search} alt="search_icon" />
          </div>
          <p>Million of courses to search from</p>
        </section>

        <div className="arrow">
          <img src={arrow_left} alt="arrow_left" />
          <img src={arrow_right} alt="arrow_right" />
        </div>
      </header>
    </>
  );
};

export default Header;
