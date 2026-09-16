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

      </nav>

      {/* Login Button */}
      <button className="servicehub-login">
        Login / Signup
      </button>

    </header>
  );
};

export default Header;