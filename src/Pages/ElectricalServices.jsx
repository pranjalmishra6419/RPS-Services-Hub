import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import './CSS/ElectricalServices.css'
import SubServicesType from '../Components/SubServicesType'

const ElectricalServices = () => {
  const electricalservices = [
  {
    image: "/image/LightFanServices.jpg",
    spantext: "ELECTRICAL",
    heading: "Light & Fan Services",
    text: "Installation, repair and replacement of lights, ceiling fans and other electrical fittings.",
    Rupees: "299"
  },
  {
    image: "/image/SwitchSocketRepair.jpg",
    spantext: "ELECTRICAL",
    heading: "Switch & Socket Repair",
    text: "Repair and replacement of damaged switches, sockets and common electrical points.",
    Rupees: "199"
  },
  {
    image: "/image/WiringPower.avif",
    spantext: "ELECTRICAL",
    heading: "Wiring & Power",
    text: "Electrical wiring, power point installation and repair of common wiring issues.",
    Rupees: "499"
  },
  {
    image: "/image/MCBFuseServices.webp",
    spantext: "ELECTRICAL",
    heading: "MCB & Fuse Services",
    text: "Inspection, repair and replacement of MCB, fuse and basic electrical safety components.",
    Rupees: "299"
  },
  {
    image: "/image/InverterBattery.jpg",
    spantext: "ELECTRICAL",
    heading: "Inverter & Battery",
    text: "Installation and basic servicing of home inverters, batteries and their connections.",
    Rupees: "399"
  },
  {
    image: "/image/ElectricalApplianceInstallation.jpg",
    spantext: "ELECTRICAL",
    heading: "Electrical Appliance Installation",
    text: "Safe installation and connection of common electrical appliances and home devices.",
    Rupees: "349"
  },
];
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='Moving-hero-img'>
      <img src="image/subele.jpg" alt="" />
    </div>
    <div className='plumbing-types'>
      {electricalservices.map((item, index) => (
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
    
    <Footer/>
    </>
  )
}

export default ElectricalServices