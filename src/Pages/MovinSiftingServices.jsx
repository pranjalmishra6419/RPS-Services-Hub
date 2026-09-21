import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import '../Pages/CSS/MovingSiftingServices.css'
import SubServicesType from '../Components/SubServicesType'

const MovinSiftingServices = () => {

  const movinsiftingservices = [
  {
    image: "/image/HomeShifting.jpg",
    spantext: "MOVING",
    heading: "Home Shifting",
    text: "Complete support for shifting household items safely from one location to another.",
    Rupees: "1499"
  },
  {
    image: "/image/OfficeShifting.jpg",
    spantext: "MOVING",
    heading: "Office Shifting",
    text: "Organized shifting support for office furniture, equipment and other workplace items.",
    Rupees: "1999"
  },
  {
    image: "/image/TransportService.jpg",
    spantext: "TRANSPORT",
    heading: "Transport Service",
    text: "Vehicle-based transport support for moving furniture, boxes and household belongings.",
    Rupees: "999"
  },
  {
    image: "/image/PackingUnpacking.jpg",
    spantext: "PACKING",
    heading: "Packing & Unpacking",
    text: "Careful packing and unpacking of household items to make your move easier and safer.",
    Rupees: "799"
  },
  {
    image: "/image/FurnitureMoving.jpg",
    spantext: "FURNITURE",
    heading: "Furniture Moving",
    text: "Loading, carrying and arranging furniture during home or office shifting.",
    Rupees: "699"
  },
  {
    image: "/image/MovingWorkers.jpg",
    spantext: "LABOUR",
    heading: "Moving Workers",
    text: "Workers to help with loading, unloading and handling items during shifting.",
    Rupees: "499"
  }
];


  return (
    
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='Moving-hero-img'>
      <img src="image/submovsif.jpg" alt="" />
    </div>
    <div className='plumbing-types'>
      {movinsiftingservices.map((item, index) => (
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

export default MovinSiftingServices