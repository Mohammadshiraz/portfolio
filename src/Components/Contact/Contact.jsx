import React from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take new project,so feel free to send me
            massage about anything that you want me to work on.You can contact
            me anytime
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>mohdshiraz980@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91-8299519060</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Utter Pradesh,INDIA</p>
            </div>
          </div>
        </div>
        <form className="contact-right" action="">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your name" name="email" />
          <label htmlFor="">Write your massage here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message here"
            id=""
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
