import React, { useState } from "react";
import "../Pages/CSS/Blog.css";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {
  FaWrench,
  FaBolt,
  FaCar,
  FaLaptop,
  FaBroom,
  FaBoxOpen,
} from "react-icons/fa";

const departments = [
  {
    name: "Plumbing Services",
    icon: <FaWrench />,
    image: "/image/p1.jpg",
    services: [
      "Tap & Faucet Repair",
      "Bathroom Fitting",
      "Water Leakage Repair",
      "Toilet Repair & Installation",
      "Drain & Pipe Blockage",
      "Pipe Repair / Replacement",
      "Water Tank Service",
      "Geyser Plumbing Connection",
    ],
    content: [
      "Water leakage ko time par repair karna water wastage aur damage ko reduce karne me help karta hai.",
      "Tap aur faucet ki continuous dripping common plumbing problem ho sakti hai.",
      "Bathroom fittings ki proper installation se leakage aur fitting-related issues kam ho sakte hain.",
      "Blocked drain ki timely cleaning se overflow aur bad smell ko control kiya ja sakta hai.",
      "Toilet blockage ya fitting problem ke liye proper plumbing inspection zaroori hota hai.",
      "Damaged pipes ko condition ke according repair ya replace karna chahiye.",
      "Water tank ki regular service plumbing system ko properly maintain karne me help karti hai.",
      "Geyser ke water inlet aur outlet connection ki proper fitting important hoti hai.",
      "Low water pressure pipe blockage ya fitting problem ki wajah se ho sakta hai.",
      "Service Hub par common plumbing problems ke liye convenient home service arrange ki ja sakti hai.",
    ],
  },

  {
    name: "Electrical Services",
    icon: <FaBolt />,
    image: "/image/e1.jpg",
    services: [
      "Light & Fan Services",
      "Switch & Socket Repair",
      "Wiring & Power",
      "MCB & Fuse Services",
      "Inverter & Battery",
      "Electrical Appliance Installation",
      "Electrical Inspection",
    ],
    content: [
      "Ghar ki electrical wiring ko safe aur proper condition me rakhna bahut zaroori hai.",
      "Flickering light ya baar-baar fuse hona electrical problem ka signal ho sakta hai.",
      "Damaged switch aur socket ko time par repair karna safety ke liye important hai.",
      "Loose wiring se short circuit aur overheating ka risk badh sakta hai.",
      "MCB ghar ke electrical system ko overload aur short circuit se protect karne me help karta hai.",
      "Fan ki unusual noise ya slow speed ko ignore nahi karna chahiye.",
      "Inverter aur battery ki regular checking se backup performance better reh sakti hai.",
      "Extra electrical load ke liye proper wiring aur suitable power connection zaroori hai.",
      "Electrical appliances ki installation proper connection aur safety ke saath karni chahiye.",
      "Service Hub par common electrical problems ke liye professional home service arrange ki ja sakti hai.",
    ],
  },

  {
    name: "Vehicle Services",
    icon: <FaCar />,
    image: "/image/v1.jpg",
    services: [
      "Clutch & Brake Repair",
      "Engine Repair",
      "Tyre & Wheel Service",
      "Vehicle Washing",
      "Battery Service",
      "Roadside Assistance",
    ],
    content: [
      "Vehicle ki regular servicing smooth aur reliable driving ke liye important hoti hai.",
      "Brake se unusual sound aaye to brake system ki checking karani chahiye.",
      "Clutch me excessive hardness ya slipping driving experience ko affect kar sakti hai.",
      "Engine ki unusual noise ya vibration ko ignore nahi karna chahiye.",
      "Proper tyre pressure se handling aur tyre life maintain karne me help milti hai.",
      "Uneven tyre wear wheel alignment ya suspension issue ka indication ho sakta hai.",
      "Battery ki condition check karna starting problems ko reduce karne me useful hota hai.",
      "Regular vehicle washing se dust aur dirt accumulation ko control kiya ja sakta hai.",
      "Emergency roadside assistance breakdown ke time quick support provide kar sakti hai.",
      "Timely maintenance se vehicle ke important components ki condition better maintain ki ja sakti hai.",
    ],
  },

  {
    name: "Tech Services",
    icon: <FaLaptop />,
    image: "/image/t1.jpg",
    services: [
      "Computer & Laptop Repair",
      "Software Installation",
      "Wi-Fi & Router Setup",
      "CCTV Installation",
      "Printer Setup & Repair",
      "Data Backup & Transfer",
    ],
    content: [
      "Laptop slow hone ke peeche storage, software ya system-related reasons ho sakte hain.",
      "Computer aur laptop ki regular checking performance problems ko identify karne me help karti hai.",
      "Wi-Fi slow ya frequently disconnect hone par router aur network settings check ki ja sakti hain.",
      "Software installation hamesha trusted aur compatible sources se karna important hai.",
      "CCTV installation ke liye proper camera placement aur connection zaroori hota hai.",
      "Printer me paper jam ya connectivity issue ke liye technical inspection ki requirement ho sakti hai.",
      "Important files ka backup technical problems ke time data loss ka risk reduce karta hai.",
      "Laptop overheating ko ignore karne se performance par effect pad sakta hai.",
      "Regular software updates system security aur compatibility maintain karne me help karte hain.",
      "Service Hub daily technology-related problems ke liye convenient technical support provide karta hai.",
    ],
  },

  {
    name: "Cleaning Services",
    icon: <FaBroom />,
    image: "/image/clean-home.jpg",
    services: [
      "Home Cleaning",
      "Bathroom Cleaning",
      "Kitchen Cleaning",
      "Deep Home Cleaning",
      "Sofa Cleaning",
      "Window Cleaning",
      "Office Cleaning",
      "Move In / Move Out Cleaning",
    ],
    content: [
      "Regular home cleaning se dust aur dirt accumulation ko control karne me help milti hai.",
      "Bathroom ki deep cleaning tiles, floor aur commonly used surfaces ko clean rakhne me useful hai.",
      "Kitchen cleaning se grease, dust aur surface dirt ko remove karne me help milti hai.",
      "Deep cleaning ghar ke multiple areas ki detailed cleaning provide karti hai.",
      "Sofa cleaning upholstered furniture par accumulated dust aur dirt ko remove karne me help karti hai.",
      "Window aur glass cleaning se visible dirt aur marks ko clean kiya ja sakta hai.",
      "Office cleaning workspace ko organized aur clean maintain karne me useful hoti hai.",
      "Move-in aur move-out cleaning shifting ke time cleaning process ko convenient bana sakti hai.",
      "Regular cleaning se commonly used surfaces ko better condition me maintain kiya ja sakta hai.",
      "Service Hub par different cleaning requirements ke according suitable service choose ki ja sakti hai.",
    ],
  },

  {
    name: "Moving & Shifting",
    icon: <FaBoxOpen />,
    image: "/image/move-home.jpg",
    services: [
      "Home Shifting",
      "Office Shifting",
      "Transport Service",
      "Packing & Unpacking",
      "Furniture Moving",
      "Moving Workers",
      "Complete Shifting Support",
    ],
    content: [
      "Ghar shifting se pehle proper planning karne se unnecessary stress ko kam kiya ja sakta hai.",
      "Important samaan ko category-wise pack karna shifting process ko organized banata hai.",
      "Fragile items ke liye proper wrapping aur protective packing use karna important hai.",
      "Furniture shifting ke liye experienced workers damage risk ko reduce karne me help kar sakte hain.",
      "Boxes par item name likhne se new location par samaan arrange karna easy hota hai.",
      "Heavy furniture ke liye suitable transport vehicle select karna zaroori hai.",
      "Electronics ko shift karte waqt proper protection aur careful handling ki requirement hoti hai.",
      "Complete shifting service me transport aur workers dono available hone se process convenient ho sakta hai.",
      "Moving ke din important documents aur personal items ko separately carry karna better hota hai.",
      "Service Hub shifting ko planned, organized aur convenient banane ke liye different service options provide karta hai.",
    ],
  },
];
const Blog = () => {

  // Kis card ka Read More open hai
  const [expandedCard, setExpandedCard] = useState(null);

  const handleReadMore = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <>
    <Header/>
    <div className="blog-page">

      {/* Hero Section */}
      <section className="blog-hero">
        <img
          src="/image/blog.png"
          alt="Service Hub Home Services"
        />

        <div className="hero-overlay">
          <div className="service-logo"></div>
        </div>
      </section>


      {/* Introduction */}
      <section className="blog-intro">
        <span className="small-heading">SERVICE HUB</span>

        <h2>Helpful Tips For Your Everyday Services</h2>

        <p>
          Service Hub ka aim sirf service provide karna nahi hai, balki
          customers ko apni daily problems ke baare me useful information
          dena bhi hai. Yahan aapko electrician, plumbing, appliance,
          vehicle, shifting aur technology services se related simple
          aur practical information milegi.
        </p>
      </section>


      {/* Department Cards */}
      <section className="department-container">

        {departments.map((department, index) => {

          const isExpanded = expandedCard === index;

          return (
            <article
              className={`department-card ${
                isExpanded ? "card-expanded" : ""
              }`}
              key={department.name}
            >

              {/* Image */}
              <div className="department-image">

                <img
                  src={department.image}
                  alt={department.name}
                />

                <div className="department-badge">
                  {department.icon}
                </div>

              </div>


              {/* Content */}
              <div className="department-content">

                {/* Title */}
                <div className="department-title">

                  <div>
                    <span>Service Department</span>

                    <h2>{department.name}</h2>
                  </div>

                  <div className="card-logo">
                    Service <b>Hub</b>
                  </div>

                </div>


                {/* Services */}
                <div className="services-section">

                  <h3>Our Services</h3>

                  <div className="service-list">

                    {department.services.map((service) => (
                      <span key={service}>
                        ✓ {service}
                      </span>
                    ))}

                  </div>

                </div>


                {/* Blog Content */}
                <div className="blog-content">

                  <h3>Useful Tips & Information</h3>

                  <div className="blog-lines">

                    {department.content.map((line, i) => {

                      /*
                        Closed:
                        Sirf first number 01 dikhega

                        Open:
                        Saare 10 numbers dikhenge
                      */
                      if (!isExpanded && i !== 0) {
                        return null;
                      }

                      return (
                        <div
                          className="blog-line"
                          key={i}
                        >

                          <span className="line-number">
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          <p>{line}</p>

                        </div>
                      );

                    })}

                  </div>


                  {/* Read More Button */}
                  {department.content.length > 1 && (

                    <button
                      className="read-more-btn"
                      onClick={() => handleReadMore(index)}
                    >

                      {isExpanded ? "Read Less ↑" : "Read More →"}

                    </button>

                  )}

                </div>

              </div>

            </article>
          );
        })}

      </section>


      {/* Bottom CTA */}
      <section className="blog-bottom">

        <div className="bottom-logo">
          Service <b>Hub</b>
        </div>

        <h2>
          One Platform For Your Everyday Service Needs
        </h2>

        <p>
          Electrician se lekar Tech Services tak, Service Hub ka goal hai
          ki customers ko convenient aur reliable service experience mile.
        </p>

      </section>
      <Footer/>

    </div>
    </>
  );
};

export default Blog;