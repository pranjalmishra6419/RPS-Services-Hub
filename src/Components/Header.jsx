import React from "react";
import { NavLink } from "react-router-dom";
import "./Css/Header.css";

const Header = () => {
  return (
    <header className="servicehub-header">

      {/* Logo */}
      <div className="servicehub-logo">
        <span>Services</span> Hub
      </div>

      {/* Navigation */}
      <nav className="servicehub-nav">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `servicehub-link ${isActive ? "servicehub-active" : ""}`
          }
        >
          Home
        </NavLink>
        

        
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `servicehub-link ${isActive ? "servicehub-active" : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            `servicehub-link ${isActive ? "servicehub-active" : ""}`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `servicehub-link ${isActive ? "servicehub-active" : ""}`
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `servicehub-link ${isActive ? "servicehub-active" : ""}`
          }
        >
          Contact
        </NavLink>

      </nav>

      {/* Login Button */}
      
        
            <NavLink
          to="/booknow"
          className={({ isActive }) =>
            `servicehub-link ${isActive ? "servicehub-active" : ""}`
          }
        >
          <div className="servicehub-login btn">
            Book Service
          </div>
        </NavLink>
       

      
      

    </header>
  );
};

export default Header;