import React from 'react'
import '../Components/Css/ServiceCountPages.css'
import {FiTool,
  FiHome,
  FiTruck,
  FiMonitor,
  FiZap,
  FiDroplet,
FiArrowRight,} from 'react-icons/fi'

const ServiceCountPages = () => {
    const services = [
    {
      icon: <FiTool />,
      title: "Plumbing Services",
      text: "Professional plumbing solutions for homes and businesses."
    },
    {
      icon: <FiZap />,
      title: "Electrical Services",
      text: "Safe and reliable electrical services by skilled professionals."
    },
    {
      icon: <FiHome />,
      title: "Home Services",
      text: "Complete home maintenance and repair services."
    },
    {
      icon: <FiTruck />,
      title: "Vehicle Services",
      text: "Convenient bike and car service at your preferred location."
    },
    {
      icon: <FiMonitor />,
      title: "Tech Services",
      text: "Computer, laptop and other technology support services."
    },
    {
      icon: <FiDroplet />,
      title: "Cleaning Services",
      text: "Professional cleaning solutions for a cleaner space."
    }
  ];
  return (
    <>
    <section className="careflow-services" id="services">
    
            <div className="careflow-section-heading">
              <span className="careflow-section-label">OUR SERVICES</span>
    
              <h2>
                Services You Can
                <span> Count On.</span>
              </h2>
    
              <p>
                Whatever you need, find the right professional for the job.
              </p>
            </div>
    
            <div className="careflow-service-grid">
    
              {services.map((service, index) => (
                <div className="careflow-service-card" key={index}>
    
                  <div className="careflow-service-icon">
                    {service.icon}
                  </div>
    
                  <h3>{service.title}</h3>
    
                  <p>{service.text}</p>
    
                  <a href="/services">
                    Explore Service <FiArrowRight />
                  </a>
    
                </div>
              ))}
    
            </div>
    
            <div className="careflow-services-btn">
              <button className="careflow-outline-btn">
                View All Services <FiArrowRight />
              </button>
            </div>
    
          </section>
    </>
  )
}

export default ServiceCountPages