import React from "react";
import "./CSS/CleaningServices.css";
import Header from "../Components/Header";
import SubServicesHeader from "../Components/SubServicesHeader";
import "../Pages/CSS/CleaningServices.css";
import SubServicesType from "../Components/SubServicesType";

const CleaningServices = () => {

  const cleaningservices = [
  {
    image: "/image/HomeCleaning.jpg",
    spantext: "HOME",
    heading: "Home Cleaning",
    text: "Complete cleaning for rooms, floors, surfaces and commonly used areas of your home.",
    Rupees: "499"
  },
  {
    image: "/image/BathroomCleaning.jpg",
    spantext: "BATHROOM",
    heading: "Bathroom Cleaning",
    text: "Deep cleaning of bathroom floors, tiles, sinks, mirrors and other surfaces.",
    Rupees: "299"
  },
  {
    image: "/image/KitchenCleaning.avif",
    spantext: "KITCHEN",
    heading: "Kitchen Cleaning",
    text: "Remove grease, dust and dirt from kitchen counters, surfaces and selected appliances.",
    Rupees: "399"
  },
  {
    image: "/image/DeepHomeCleaning.jpg",
    spantext: "DEEP CLEANING",
    heading: "Deep Home Cleaning",
    text: "Detailed cleaning of multiple areas for a more thorough and fresh home environment.",
    Rupees: "999"
  },
  {
    image: "/image/SofaCleaning.jpg",
    spantext: "FURNITURE",
    heading: "Sofa Cleaning",
    text: "Professional cleaning for sofas and upholstered furniture to remove dust and dirt.",
    Rupees: "399"
  },
  {
    image: "/image/WindowCleaning.jpg",
    spantext: "GLASS & WINDOWS",
    heading: "Window Cleaning",
    text: "Cleaning for windows, glass doors and other accessible glass surfaces.",
    Rupees: "299"
  }
];
  return (
    <>
      <Header />
      <SubServicesHeader />
      <div className="cleaning-hero-img">
        <img src="image/subcli.jpg" alt="" />
      </div>

      <div className='plumbing-types'>
      {cleaningservices.map((item, index) => (
          <SubServicesType
              key={index}
              image={item.image}
              spantext={item.spantext}
              heading={item.heading}
              text={item.text}
              Rupees={item.Rupees}
          />
      ))}
    </div>

      
    </>
  );
};

export default CleaningServices;
