import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./Css/SubNavbar.css";

const SubServicesHeader = () => {
  return (
    <div className="service-subnav">

      <div className="service-subnav-links">
        <NavLink to="/home-services">Home Services</NavLink>
        <NavLink to="/vehicle-services">Vehicle Services</NavLink>
        <NavLink to="/tech-services">Tech Services</NavLink>
        <NavLink to="/repair-services">Repair Services</NavLink>
        <NavLink to="/cleaning-services">Cleaning Services</NavLink>
        <NavLink to="/personal-care">Personal Care</NavLink>
        <NavLink to="/personal-care">Moving And Shifting</NavLink>
      </div>

      <div className="service-subnav-search">
        <FiSearch />
        <input
          type="search"
          placeholder="Search services..."
        />
      </div>

    </div>
  );
};

export default SubServicesHeader;