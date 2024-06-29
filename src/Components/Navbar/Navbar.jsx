import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div id="navbar" className="navbar">
      <img className="logo" src={logo} />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about" offset={50}>
            <p
              onClick={() => {
                setMenu("skill");
              }}
            >
              Skill
            </p>
          </AnchorLink>
          {menu === "skill" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#project" offset={50}>
            <p
              onClick={() => {
                setMenu("project");
              }}
            >
              Project
            </p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact" offset={50}>
            <p
              onClick={() => {
                setMenu("contact me");
              }}
            >
              Contact Me
            </p>
          </AnchorLink>
          {menu === "contact me" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connet">Connect With Me</div>
    </div>
  );
};

export default Navbar;
