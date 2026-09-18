import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./Css/SubNavbar.css";

const SubServicesHeader = () => {
  return (
    <div className="service-subnav">

      <div className="service-subnav-links">
        <NavLink to="/home-services">Home Services</NavLink>
        <NavLink to="/vehicle-services">Plumbing Services</NavLink>
        <NavLink to="/tech-services">Electrical Services</NavLink>
        <NavLink to="/repair-services">Vehicle Services</NavLink>
        <NavLink to="/cleaning-services">Tech Services</NavLink>
        <NavLink to="/personal-care">Cleaning Services</NavLink>
      </div>

    </div>
  );
};

export default SubServicesHeader;