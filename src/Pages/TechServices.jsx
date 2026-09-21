import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import SubServicesType from '../Components/SubServicesType'

const TechServices = () => {
  const techservices = [
  {
    image: "/image/ComputerLaptopRepair.jpg",
    spantext: "TECH",
    heading: "Computer & Laptop Repair",
    text: "Troubleshooting, hardware checking and repair support for common computer and laptop problems.",
    Rupees: "399"
  },
  {
    image: "/image/SoftwareInstallation.avif",
    spantext: "TECH",
    heading: "Software Installation",
    text: "Installation and basic setup of operating systems, drivers and commonly used software.",
    Rupees: "299"
  },
  {
    image: "/image/Wi-FiRouterSetup.jpg",
    spantext: "TECH",
    heading: "Wi-Fi & Router Setup",
    text: "Router installation, Wi-Fi configuration and basic troubleshooting for home internet connections.",
    Rupees: "249"
  },
  {
    image: "/image/CCTVInstallation.jpg",
    spantext: "TECH",
    heading: "CCTV Installation",
    text: "Installation and basic setup of CCTV cameras for homes, shops and small workplaces.",
    Rupees: "599"
  },
  {
    image: "/image/PrinterSetupRepair.jpg",
    spantext: "TECH",
    heading: "Printer Setup & Repair",
    text: "Printer installation, configuration and troubleshooting for common printing issues.",
    Rupees: "299"
  },
  {
    image: "/image/DataBackupTransfer.jpg",
    spantext: "TECH",
    heading: "Data Backup & Transfer",
    text: "Help with transferring important files and creating basic backups between devices.",
    Rupees: "399"
  }
];
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='Moving-hero-img'>
      <img src="image/subtech.jpg" alt="" />
    </div>
    <div className='plumbing-types'>
      {techservices.map((item, index) => (
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

export default TechServices