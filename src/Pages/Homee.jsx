import React, { useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import aos from 'aos';
import {
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiStar,
  FiClock,
  FiUsers
} from "react-icons/fi";

import "./CSS/Home.css";
import Header from "../Components/Header";
import RequestToCall from "../Components/RequestToCall"
import Footer from "../Components/Footer";
import SubServicesHeader from "../Components/SubServicesHeader";
import AboutCounter from "../Components/AboutCounter";
import CleaningServices from "./CleaningServices";
import ServiceCountPages from "../Components/ServiceCountPages";

const Home = () => {

  useEffect(()=>{
    aos.init()
  })
  

  const features = [
    {
      icon: <FiShield />,
      title: "Verified Professionals",
      text: "Connect with trusted and verified service providers."
    },
    {
      icon: <FiClock />,
      title: "Quick Service",
      text: "Find and book the service you need without wasting time."
    },
    {
      icon: <FiUsers />,
      title: "Easy Booking",
      text: "Simple booking process designed for everyone."
    }
  ];  

  return (
    <>
    <Header/>
    <div className="careflow-home">
      {/* Hero */}
      <section className="careflow-hero" id="home">
        <div className="careflow-hero-content" data-aos="fade-down-right" 
  data-aos-duration="2500">

          <div className="careflow-badge">
            <FiCheckCircle />
            Trusted Service Platform
          </div>

          <h1>
            Your Everyday Services,
            <span> Made Simple.</span>
          </h1>

          <p>
            Find trusted professionals for your home, vehicle, technology
            and everyday service needs — all in one place.
          </p>

          <div className="careflow-hero-buttons"><NavLink to="/services">
            <button className="careflow-primary-btn">
              Explore Services <FiArrowRight />
            </button></NavLink>
            
            <button className="careflow-secondary-btn">
              Become a Provider
            </button>
          </div>

          <div className="careflow-trust">
            <div className="careflow-trust-stars">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <p>Trusted by customers for reliable services</p>
          </div>

        </div>

      </section>

      {/* About */}
      <section className="careflow-about" id="about" data-aos="zoom-in-up" data-aos-duration="800" >

        <div className="careflow-about-image">
          <div className="careflow-about-box">
            <strong>10K+</strong>
            <span>Services Completed</span>
          </div>
        </div>

        <div className="careflow-about-content">

          <span className="careflow-section-label">ABOUT CAREFLOW</span>

          <h2>
            Making Everyday Services
            <span> Simple, Fast & Reliable.</span>
          </h2>

          <p>
            CareFlow is an online service platform that helps customers
            discover, compare and book trusted professionals for their
            everyday needs.
          </p>

          <p>
            From home repairs to vehicle services and technology support,
            CareFlow brings different services together on one convenient
            platform.
          </p>

          <div className="careflow-check-list">
            <div>
              <FiCheckCircle />
              <span>Trusted Service Providers</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Simple & Easy Booking</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Reliable Customer Support</span>
            </div>
          </div>
          <NavLink to="/about">
          <button className="careflow-primary-btn">
            Read More <FiArrowRight />
          </button>
          </NavLink>
        </div>
      </section>

      {/* Services */}
      
    <ServiceCountPages/>

      {/* Why CareFlow */}
      <section className="careflow-why" data-aos="zoom-in-up" data-aos-duration="1000">

        <div className="careflow-section-heading">
          <span className="careflow-section-label">WHY CAREFLOW</span>

          <h2>
            Everything You Need,
            <span> In One Place.</span>
          </h2>

          <p>
            We make finding and booking everyday services easier.
          </p>
        </div>

        <div className="careflow-feature-grid">

          {features.map((feature, index) => (
            <div className="careflow-feature-card" key={index}>

              <div className="careflow-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </div>
          ))}

        </div>

      </section>

      {/* How It Works */}
      <section className="careflow-process" id="how-it-works">

        <div className="careflow-section-heading">
          <span className="careflow-section-label">HOW IT WORKS</span>

          <h2>
            Getting Help Is
            <span> Easy.</span>
          </h2>

          <p>
            Book your required service in just a few simple steps.
          </p>
        </div>

        <div className="careflow-process-grid">

          <div className="careflow-process-card">
            <span>01</span>
            <h3>Choose a Service</h3>
            <p>
              Select the service you need from our wide range of categories.
            </p>
          </div>

          <div className="careflow-process-card">
            <span>02</span>
            <h3>Choose a Provider</h3>
            <p>
              Find a suitable professional according to your requirements.
            </p>
          </div>

          <div className="careflow-process-card">
            <span>03</span>
            <h3>Book Your Service</h3>
            <p>
              Select a convenient time and confirm your booking.
            </p>
          </div>

          <div className="careflow-process-card">
            <span>04</span>
            <h3>Get It Done</h3>
            <p>
              Your professional arrives and completes the requested service.
            </p>
          </div>

        </div>

      </section>

      

      
      <RequestToCall/>
      <AboutCounter/>
          <Footer/>

                            
    </div>
    </>
  );
};

export default Home;
