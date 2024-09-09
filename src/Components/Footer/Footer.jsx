import React from "react";
import "./Footer.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer-main">
        <div className="side-1">
          <h1>Contact Us</h1>
          <h4>Send us a message</h4>
          <div className="small-input">
            <input type="text" placeholder="Full name" />
          </div>
          <div className="small-input">
            <input type="text" placeholder="Your email" />
          </div>
          <div className="inputs">
            <input type="text" placeholder="Your message" />
          </div>
          <button className="btn">Submit</button>
        </div>
        <div className="side-2">
          <h1>Site Map</h1>
          <h4>All our pages</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="side-3">
          <img src="/Logo.png" alt="" />
          <div className="icons">
            <p>
              <FaPhone size={17} /> +234 70 1220 8069
            </p>
          </div>
          <div className="icons">
            <p>
              <FaEnvelope size={17} /> cypherdev6@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
