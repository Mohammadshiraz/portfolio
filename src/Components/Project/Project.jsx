import React from "react";
import "./Project.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import myProjectData from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Project = () => {
  return (
    <div id="project" className="myProject">
      <div className="myProject-title">
        <h1>My Project</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="myProject-container">
        {myProjectData.map((work, index) => {
          return <img key={index} src={work.w_img} alt=""></img>;
        })}
      </div>
      <div className="myproject-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Project;
