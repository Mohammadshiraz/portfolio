import React from "react";
import "./About.css";
import theam_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theam_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Welcome to my portfolio! I'm Mohammad Shiraz, a passionate web
              developer with a knack for creating immersive digital experiences.
              I specialize in crafting clean and efficient code to bring ideas
              to life.
            </p>
            <p>
              In my portfolio, you'll find a collection of projects that
              showcase my skills in front-end and back-end development. From
              responsive websites that adapt seamlessly across devices to
              dynamic web applications powered by the latest technologies, each
              project represents a unique challenge I've tackled with creativity
              and precision.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>NODE JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>EXPRESS JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
