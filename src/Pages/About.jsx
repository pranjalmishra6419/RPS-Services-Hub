import React, { useEffect } from "react";
import aos from 'aos'
import "./CSS/About.css";
import {
  FaBolt,
  FaSearch,
  FaUser,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import AboutCounter from '../Components/AboutCounter'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServiceCountPages from "../Components/ServiceCountPages";




const services = [
  {
    icon: "🏠",
    title: "Home Services",
    text: "Reliable solutions for your everyday home needs.",
  },
  {
    icon: "🚗",
    title: "Vehicle Services",
    text: "Convenient vehicle care and maintenance services.",
  },
  {
    icon: "💻",
    title: "Tech Services",
    text: "Get help with computers, devices and technology.",
  },
  {
    icon: "🔧",
    title: "Repair Services",
    text: "Quick and dependable solutions for repair needs.",
  },
  {
    icon: "🧹",
    title: "Cleaning Services",
    text: "Professional cleaning services for a cleaner space.",
  },
  {
    icon: "💇",
    title: "Personal Care",
    text: "Personal care services designed around your needs.",
  },
];

const problems = [
  "Finding the right service provider",
  "Contacting multiple people",
  "Waiting for responses",
  "Checking availability",
  "Unnecessary delays",
];

const features = [
  {
    icon: <FaBolt />,
    title: "Save Time",
    text: "Find services without wasting time searching everywhere.",
  },
  {
    icon: <FaSearch />,
    title: "Easy Discovery",
    text: "Explore different services in one convenient place.",
  },
  {
    icon: <FaUser />,
    title: "Provider Choice",
    text: "Choose a provider according to your requirements.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Easy Booking",
    text: "Make the service booking process simple and quick.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "At Your Location",
    text: "Get everyday services where you need them.",
  },
  {
    icon: <FaStar />,
    title: "Better Experience",
    text: "Enjoy a smoother and more organized experience.",
  },
];

const About = () => {
  useEffect(()=>{
    aos.init()
  })
  return (
    <>
    <Header/>
    <main className="about-page">
      <section className="about-hero" data-aos="fade-right" data-aos-duration="2500">

        <div className="hero-container">

          <div className="hero-content">

            <span className="small-title">
              ABOUT SERVICES HUB
            </span>

            <h1>
              Making Everyday Services
              <span> Simple, Fast & Reliable.</span>
            </h1>

            <p>
              CareFlow brings everyday services together in one simple
              platform, making it easier to discover, choose and book
              the services you need.
            </p>

            <a href="#who-we-are" className="main-btn">
              Discover Services Hub
              <span>→</span>
            </a>

          </div>

          <div className="hero-image">

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="CareFlow Services"
            />

          </div>

        </div>

      </section>


      {/* ================= WHO WE ARE ================= */}
<section className="story-section" id="who-we-are" data-aos="zoom-in-down" data-aos-duration="1000">
  <div className="section-container story-wrapper">

    {/* LEFT CONTENT */}
    <div className="story-heading">
      <span className="small-title">WHO WE ARE</span>

      <h2>
        Services Made Easier
        <span> For Everyone.</span>
      </h2>

      <p>
        CareFlow is a modern multi-service platform created to
        simplify the way people find and book everyday services.
      </p>

      <p>
        From home services to vehicle care, technology, repairs,
        cleaning and personal care, everything is available in
        one convenient place.
      </p>

      <a href="#services" className="story-btn">
        Explore Services <span>→</span>
      </a>
    </div>


    {/* RIGHT PROCESS */}
    <div className="story-process">

      <div className="process-line"></div>

      <div className="process-card">
        <div className="process-number">01</div>

        <div className="story-icon">
          🔎
        </div>

        <div>
          <h3>Discover</h3>
          <p>
            Explore different service categories and quickly
            find what you need.
          </p>
        </div>
      </div>


      <div className="process-card">
        <div className="process-number">02</div>

        <div className="story-icon">
          👤
        </div>

        <div>
          <h3>Choose</h3>
          <p>
            Select a suitable service provider according to
            your requirements.
          </p>
        </div>
      </div>


      <div className="process-card">
        <div className="process-number">03</div>

        <div className="story-icon">
          📅
        </div>

        <div>
          <h3>Book</h3>
          <p>
            Book your selected service and enjoy a simple,
            convenient experience.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* ================= STATISTICS ================= */}

      {/* <section className="stats-section">

        <div className="section-container">

          <div className="stats-grid">

            <div className="stat-box">
              <h2>6+</h2>
              <p>Service Categories</p>
            </div>

            <div className="stat-box">
              <h2>1</h2>
              <p>Simple Platform</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Service Access</p>
            </div>

            <div className="stat-box">
              <h2>Easy</h2>
              <p>Booking Experience</p>
            </div>

          </div>

        </div>

      </section> */}
      <ServiceCountPages/>
      <AboutCounter/>


      {/* ================= MISSION ================= */}

      <section className="mission-section">

        <div className="section-container">

          <div className="mission-content">

            <span className="small-title">
              OUR MISSION
            </span>

            <h2>
              To Make Getting a Service
              <span> Simple.</span>
            </h2>

            <p>
              We want to remove unnecessary complexity from everyday
              service discovery and create a smooth experience where
              customers can find, choose and book with ease.
            </p>

          </div>

        </div>

      </section>


      {/* ================= PROBLEM ================= */}

      <section className="problem-section">

        <div className="section-container">

          <div className="problem-grid">

            <div className="problem-content">

              <span className="small-title">
                PROBLEM WE SOLVE
              </span>
              <h2>
                Everyday Service Problems
                <span> Shouldn't Be Complicated.</span>
              </h2>
              <p>
                Finding the right service provider can often become
                time-consuming. CareFlow brings the process together
                in one simple experience.
              </p>

            </div>
            <div className="problem-list">

              {problems.map((problem, index) => (

                <div className="problem-item" key={index}>
                  <span className="problem-number">
                    {index + 1}
                  </span>
                  <p>{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= WHY CAREFLOW ================= */}

      <section className="why-section">

        <div className="section-container">

          <div className="why-grid">

            {/* <div className="why-image">

              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1100&q=85"
                alt="CareFlow Provider"
              />

            </div> */}


            <div className="why-content">

              <span className="small-title">
                WHY SERVICES HUB?
              </span>

              <h2>
                Built Around
                <span> Your Convenience.</span>
              </h2>

              <p>
                CareFlow focuses on making every step of the service
                journey easier, faster and more convenient.
              </p>


              <div className="features-grid">

                {features.map((feature, index) => (

                  <div className="feature-item" key={index}>

                    <div className="feature-icon">
                      {feature.icon}
                    </div>

                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VISION ================= */}
<section className="vision-section">

  <div className="section-container">

    <div className="vision-box">

      {/* LEFT SIDE */}
      <div className="vision-mark">

        <span>VISION</span>

        <div className="vision-circle">
          ✦
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="vision-content">

        <span className="small-title">
          OUR VISION
        </span>

        <h2>
          A Future Where Every Service
          Is Just <span>A Few Clicks Away.</span>
        </h2>

        <p>
          A connected service ecosystem where convenience,
          accessibility and simplicity come first. CareFlow
          aims to make everyday services easier to discover,
          choose and book.
        </p>


        {/* Vision Highlights */}
        <div className="vision-points">

          <div className="vision-point">
            <span>✓</span>
            <div>
              <strong>Easy Access</strong>
              <small>Services in one place</small>
            </div>
          </div>

          <div className="vision-point">
            <span>✓</span>
            <div>
              <strong>Simple Experience</strong>
              <small>Less effort, more convenience</small>
            </div>
          </div>

          <div className="vision-point">
            <span>✓</span>
            <div>
              <strong>Connected Services</strong>
              <small>Everything works together</small>
            </div>
          </div>

        </div>


        {/* Promise */}
        <div className="vision-promise">
          <span>✦</span>
          <p>
            <strong>Our Promise</strong>
            <br />
            Making everyday service experiences simpler,
            faster and more reliable.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


    </main>
    
    <Footer/>
    </>
  );
};

export default About;