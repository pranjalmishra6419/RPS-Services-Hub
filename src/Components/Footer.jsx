import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Css/Footer.css";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            <span>Services</span>Hub
          </NavLink>

          <p className="footer-description">
  Service Hub is your convenient platform for booking everyday services.
  Find the right service, choose a provider and get the service at your
  location with a simple and reliable booking experience.
</p>
        </div>
        <div className="footer-column">
          <h3>Our Services</h3>
          <NavLink to="/services/home">Home Services</NavLink>
          <NavLink to="/services/vehicle">Vehicle Services</NavLink>
          <NavLink to="/services/tech">Tech Services</NavLink>
          <NavLink to="/services/repair">Repair Services</NavLink>
          <NavLink to="/services/cleaning">Cleaning Services</NavLink>
          <NavLink to="/services/personal-care">Personal Care</NavLink>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About Us</NavLink>

          <NavLink to="/services">All Services</NavLink>

          <NavLink to="/loging">Login</NavLink>

          <NavLink to="/createaccount">Signup</NavLink>

          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <a href="#">
            <FaLocationDot /> Lucknow, Uttar Pradesh
          </a>

          <a href="tel:+919876543210">
            <FaPhone /> +91 98765 43210
          </a>

          <a href="mailto:support@serviceshub.com">
            <MdEmail /> support@serviceshub.com
          </a>
          <div className="footer-social">
            <a href="https://www.facebook.com/">
              <FaFacebook size={30} className="icons-footer-social" />
            </a>
            <a href="https://www.linkedin.com/">
              <IoLogoLinkedin size={30} className="icons-footer-social" />
            </a>
            <a href="http://www.twitter.com/">
              <FaTwitter size={30} className="icons-footer-social" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagramSquare size={30} className="icons-footer-social" />
            </a>
          </div>
        </div>

        {/* <div className="footer-column">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Government%20Polytechnic%20Rajgarh%20Mirzapur&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Hub Location"
            ></iframe>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <p>© 2026 CareFlow. All Rights Reserved.</p>

        <div className="footer-bottom-links">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>

          <NavLink to="/terms">Terms & Conditions</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
