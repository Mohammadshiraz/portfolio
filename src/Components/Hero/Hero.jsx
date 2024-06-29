import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Mohammad Shiraz,</span>Web Developer
      </h1>
      <p>I am a MERN stack Developer</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
