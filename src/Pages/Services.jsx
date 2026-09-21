import React, { useEffect } from "react";
import aos from 'aos'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SubServicesHeader from "../Components/SubServicesHeader";
import CleaningServices from "./CleaningServices";
import "./CSS/Services.css";
import ServiceCountPages from "../Components/ServiceCountPages";
import CtaServices from "../Components/CtaServices";

const Services = () => {
  useEffect(()=>{
    aos.init()
  })
  return (
    <>
      <Header />
      <SubServicesHeader />
      {/* <CleaningServices/> */}

      <section className="services-page-head">
        <img src="/image/services-hero-final2.png" alt="" />
      </section>
      {/* cotegory */}
{/* ================= MOVING & SHIFTING ================= */}

<section
  className="service-section"
  data-aos="fade-down-right"
  data-aos-duration="800"
>
  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1000&q=85"
      alt="Moving and Shifting Service"
    />
  </div>

  <div className="service-content">
    <span className="service-tag">01 • MOVING</span>

    <h2>
      <span>Moving</span> And <span>Shifting</span> Services
    </h2>

    <p>
      Get reliable support for packing, transportation and shifting.
      We make your move simple, organized and stress-free.
    </p>

    <div className="service-list">
      <div className="service-item"><span>✓</span><p>Home Shifting</p></div>
      <div className="service-item"><span>✓</span><p>Office Shifting</p></div>
      <div className="service-item"><span>✓</span><p>Packing Services</p></div>
      <div className="service-item"><span>✓</span><p>Loading & Unloading</p></div>
      <div className="service-item"><span>✓</span><p>Furniture Moving</p></div>
    </div>

    <a href="/movinsiftingservices" className="service-btn">
      View Moving Services →
    </a>
  </div>
</section>


{/* ================= CLEANING ================= */}

<section
  className="service-section service-reverse"
  data-aos="fade-down-left"
  data-aos-duration="800"
>
  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85"
      alt="Cleaning Service"
    />
  </div>

  <div className="service-content">
    <span className="service-tag">02 • CLEANING</span>

    <h2>
      <span>Cleaning</span> Services For Your <span>Home</span>
    </h2>

    <p>
      Keep your home and workplace fresh, clean and comfortable with
      convenient professional cleaning services.
    </p>

    <div className="service-list">
      <div className="service-item"><span>✓</span><p>Home Cleaning</p></div>
      <div className="service-item"><span>✓</span><p>Bathroom Cleaning</p></div>
      <div className="service-item"><span>✓</span><p>Kitchen Cleaning</p></div>
      <div className="service-item"><span>✓</span><p>Sofa Cleaning</p></div>
      <div className="service-item"><span>✓</span><p>Deep Cleaning</p></div>
    </div>

    <a href="/cleaningservices" className="service-btn">
      View Cleaning Services →
    </a>
  </div>
</section>


{/* ================= VEHICLE ================= */}

<section
  className="service-section"
  data-aos="fade-down-right"
  data-aos-duration="800"
>
  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=85"
      alt="Vehicle Service"
    />
  </div>

  <div className="service-content">
    <span className="service-tag">03 • VEHICLE</span>

    <h2>
      <span>Vehicle</span> Care & <span>Maintenance</span>
    </h2>

    <p>
      Take care of your car and two-wheeler with convenient cleaning,
      maintenance and basic vehicle support services.
    </p>

    <div className="service-list">
      <div className="service-item"><span>✓</span><p>Car Washing</p></div>
      <div className="service-item"><span>✓</span><p>Interior Cleaning</p></div>
      <div className="service-item"><span>✓</span><p>Bike Service</p></div>
      <div className="service-item"><span>✓</span><p>Battery Service</p></div>
      <div className="service-item"><span>✓</span><p>Tyre Service</p></div>
    </div>

    <a href="/vehicleservices" className="service-btn">
      View Vehicle Services →
    </a>
  </div>
</section>


{/* ================= PLUMBING ================= */}

<section
  className="service-section service-reverse"
  data-aos="fade-down-left"
  data-aos-duration="800"
>
  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=85"
      alt="Plumbing Service"
    />
  </div>

  <div className="service-content">
    <span className="service-tag">04 • PLUMBING</span>

    <h2>
      <span>Plumbing</span> Repair & <span>Installation</span>
    </h2>

    <p>
      Get quick and convenient plumbing support for common household
      repairs, leaks, fittings and water-related problems.
    </p>

    <div className="service-list">
      <div className="service-item"><span>✓</span><p>Tap & Faucet Repair</p></div>
      <div className="service-item"><span>✓</span><p>Sink Repair</p></div>
      <div className="service-item"><span>✓</span><p>Pipe Repair</p></div>
      <div className="service-item"><span>✓</span><p>Drain Cleaning</p></div>
      <div className="service-item"><span>✓</span><p>Water Leakage Repair</p></div>
    </div>

    <a href="/plumbingservices" className="service-btn">
      View Plumbing Services →
    </a>
  </div>
</section>


{/* ================= TECH SERVICES ================= */}

<section
  className="service-section"
  data-aos="fade-down-right"
  data-aos-duration="800"
>
  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
      alt="Tech Services"
    />
  </div>

  <div className="service-content">
    <span className="service-tag">05 • TECHNOLOGY</span>

    <h2>
      <span>Tech</span> Services For <span>Everyday Needs</span>
    </h2>

    <p>
      Get help with everyday technology problems, device setup and
      basic technical support from convenient service providers.
    </p>

    <div className="service-list">
      <div className="service-item"><span>✓</span><p>Computer Repair</p></div>
      <div className="service-item"><span>✓</span><p>Laptop Support</p></div>
      <div className="service-item"><span>✓</span><p>Wi-Fi Setup</p></div>
      <div className="service-item"><span>✓</span><p>Printer Setup</p></div>
      <div className="service-item"><span>✓</span><p>Device Installation</p></div>
    </div>

    <a href="/techservices" className="service-btn">
      View Tech Services →
    </a>
  </div>
</section>


{/* ================= ELECTRICIAN ================= */}

<section
  className="service-section service-reverse"
  data-aos="fade-down-left"
  data-aos-duration="800"
>
  <div className="service-image">
    <img
      src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=85"
      alt="Electrician Service"
    />
  </div>

  <div className="service-content">
    <span className="service-tag">06 • ELECTRICAL</span>

    <h2>
      <span>Electrical</span> Repair & <span>Installation</span>
    </h2>

    <p>
      Get dependable electrical support for household repairs,
      installations and common electrical maintenance needs.
    </p>

    <div className="service-list">
      <div className="service-item"><span>✓</span><p>Switch & Socket Repair</p></div>
      <div className="service-item"><span>✓</span><p>Fan Installation</p></div>
      <div className="service-item"><span>✓</span><p>Light Installation</p></div>
      <div className="service-item"><span>✓</span><p>Wiring Support</p></div>
      <div className="service-item"><span>✓</span><p>Electrical Repair</p></div>
    </div>

    <a href="/electricalservices" className="service-btn">
      View Electrical Services →
    </a>
  </div>
</section>


      <section className="services-detail-section">
        <div className="services-detail-content">
          <span>ONE PLATFORM</span>
          <h2>One Place For Different Services</h2>
          <p>
            <b> Services Hub</b> brings different everyday services together so customers
            don't have to search for different providers for every requirement.
          </p>

          <div className="services-detail-points">
            <div>
              <strong>01</strong>
              <div>
                <h3>Home & Maintenance</h3>
                <p>
                  Plumbing, electrical, carpentry, painting and other household
                  services.
                </p>
              </div>
            </div>

            <div>
              <strong>02</strong>
              <div>
                <h3>Vehicle & Repair</h3>
                <p>
                  Vehicle servicing, repairs and general maintenance solutions.
                </p>
              </div>
            </div>

            <div>
              <strong>03</strong>
              <div>
                <h3>Technology & Cleaning</h3>
                <p>
                  Tech support, device services and cleaning solutions for
                  different spaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="services-detail-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
            alt="CareFlow Services"
          />
        </div>
      </section>

      <ServiceCountPages/>

      <section className="services-process-section">
        <div className="services-heading services-dark-heading">
            <span>HOW IT WORKS</span><br /><br />
            <h2>Get A Service In Simple Steps</h2><br />
            <p>Find a service, select what you need and get started.</p>
        </div>

        <div className="services-process-grid">
          <div className="services-process-card">
            <strong>01</strong>
            <h3>Choose a Service</h3>
            <p>Select the category that matches your requirement.</p>
          </div>

          <div className="services-process-card">
            <strong>02</strong>
            <h3>Select Your Requirement</h3>
            <p>Choose the specific service you want to book.</p>
          </div>

          <div className="services-process-card">
            <strong>03</strong>
            <h3>Book a Service</h3>
            <p>Provide your details and choose a suitable time.</p>
          </div>

          <div className="services-process-card">
            <strong>04</strong>
            <h3>Get It Done</h3>
            <p>Your selected service is scheduled for you.</p>
          </div>
        </div>
      </section>
      <CtaServices/>

      <Footer />
    </>
  );
};

export default Services;