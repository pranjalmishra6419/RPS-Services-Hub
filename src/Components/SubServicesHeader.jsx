import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./Css/SubNavbar.css";

const SubServicesHeader = () => {
  return (
    <div className="service-subnav">

      <div className="service-subnav-links">
        <NavLink to="/plumbingservices">Plumbing Services</NavLink>
        <NavLink to="/electricalservices">Electrical Services</NavLink>
        <NavLink to="/vehicleservices">Vehicle Services</NavLink>
        <NavLink to="/techservices">Tech Services</NavLink>
        <NavLink to="/cleaningservices">Cleaning Services</NavLink>
        <NavLink to="/movinsiftingservices">Moving And Shifting</NavLink>

      </div>

    </div>
  );
};

export default SubServicesHeader;