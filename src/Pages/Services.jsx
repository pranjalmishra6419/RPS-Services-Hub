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
      <section className="service-section"  data-aos="fade-down-right" data-aos-duration="800">
        <div className="service-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="Moving and Shifting Service"
          />
        </div>

        <div className="service-content">
          <span className="service-tag">01 • TRANSPORT</span>

          <h2>
            <span>Moving</span> And <span>Shifting</span> Services
          </h2>

          <p>
            Get reliable and professional help for your moving, packing and
            shifting needs. We make your move simple, safe and stress-free.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>✓</span>
              <p>Transport</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Workers</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Packing Services</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Loading & Unloading</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Full Moving Package</p>
            </div>
          </div>

          <a href="#" className="service-btn">
            View Home Services →
          </a>
        </div>
      </section>
       <section className="service-section" data-aos="fade-down-left" data-aos-duration="800">
        

        <div className="service-content">
          <span className="service-tag">01 • TRANSPORT</span>

          <h2>
            <span>Moving</span> And <span>Shifting</span> Services
          </h2>

          <p>
            Get reliable and professional help for your moving, packing and
            shifting needs. We make your move simple, safe and stress-free.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>✓</span>
              <p>Transport</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Workers</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Packing Services</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Loading & Unloading</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Full Moving Package</p>
            </div>
          </div>

          <a href="#" className="service-btn">
            View Home Services →
          </a>
        </div>
        <div className="service-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="Moving and Shifting Service"
          />
        </div>
      </section>
      <section className="service-section" data-aos="fade-down-right" data-aos-duration="800">
        <div className="service-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="Moving and Shifting Service"
          />
        </div>

        <div className="service-content">
          <span className="service-tag">01 • TRANSPORT</span>

          <h2>
            <span>Moving</span> And <span>Shifting</span> Services
          </h2>

          <p>
            Get reliable and professional help for your moving, packing and
            shifting needs. We make your move simple, safe and stress-free.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>✓</span>
              <p>Transport</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Workers</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Packing Services</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Loading & Unloading</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Full Moving Package</p>
            </div>
          </div>

          <a href="#" className="service-btn">
            View Home Services →
          </a>
        </div>
      </section>
       <section className="service-section" data-aos="fade-down-left" data-aos-duration="800">
        

        <div className="service-content">
          <span className="service-tag">01 • TRANSPORT</span>

          <h2>
            <span>Moving</span> And <span>Shifting</span> Services
          </h2>

          <p>
            Get reliable and professional help for your moving, packing and
            shifting needs. We make your move simple, safe and stress-free.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>✓</span>
              <p>Transport</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Workers</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Packing Services</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Loading & Unloading</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Full Moving Package</p>
            </div>
          </div>

          <a href="#" className="service-btn">
            View Home Services →
          </a>
        </div>
        <div className="service-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="Moving and Shifting Service"
          />
        </div>
      </section>
      <section className="service-section" data-aos="fade-down-right" data-aos-duration="800">
        <div className="service-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="Moving and Shifting Service"
          />
        </div>

        <div className="service-content">
          <span className="service-tag">01 • TRANSPORT</span>

          <h2>
            <span>Moving</span> And <span>Shifting</span> Services
          </h2>

          <p>
            Get reliable and professional help for your moving, packing and
            shifting needs. We make your move simple, safe and stress-free.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>✓</span>
              <p>Transport</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Workers</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Packing Services</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Loading & Unloading</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Full Moving Package</p>
            </div>
          </div>

          <a href="#" className="service-btn">
            View Home Services →
          </a>
        </div>
      </section>
       <section className="service-section" data-aos="fade-down-left" data-aos-duration="800">
        

        <div className="service-content">
          <span className="service-tag">01 • TRANSPORT</span>

          <h2>
            <span>Moving</span> And <span>Shifting</span> Services
          </h2>

          <p>
            Get reliable and professional help for your moving, packing and
            shifting needs. We make your move simple, safe and stress-free.
          </p>

          <div className="service-list">
            <div className="service-item">
              <span>✓</span>
              <p>Transport</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Workers</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Packing Services</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Loading & Unloading</p>
            </div>

            <div className="service-item">
              <span>✓</span>
              <p>Full Moving Package</p>
            </div>
          </div>

          <a href="#" className="service-btn">
            View Home Services →
          </a>
        </div>
        <div className="service-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/016/798/947/small_2x/business-service-online-digital-technology-businessman-touching-digital-globe-hologram-quality-business-relationship-customer-service-advice-and-support-technology-robot-assistance-online-services-photo.jpg"
            alt="Moving and Shifting Service"
          />
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