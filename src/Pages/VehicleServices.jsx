import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import SubServicesType from '../Components/SubServicesType'

const VehicleServices = () => {
  const vehicleservices = [
    {image:"/image/CarWashing.avif", spantext:"CAR CARE", heading:"Car Washing", text:"Complete exterior cleaning to remove dust, dirt and everyday stains from your car.", Rupees:"299"},
    {image:"/image/CarInteriorCleaning.jpg", spantext:"INTERIOR", heading:"Car Interior Cleaning", text:" Cleaning of seats, dashboard, mats and other accessible areas inside your vehicle.", Rupees:"499"},
    {image:"/image/BikeService.avif", spantext:"TWO WHEELER", heading:"Bike Service", text:"Basic maintenance and service support for bikes to keep them running smoothly.", Rupees:"399"},
    {image:"/image/CarACService.jpg", spantext:"CAR MAINTENANCE", heading:"Car AC Service", text:"Basic inspection and service support for common car air conditioning issues.", Rupees:"599"},
    {image:"/image/BatteryService.webp", spantext:"BATTERY", heading:"Battery Service", text:"   Battery inspection, replacement support and basic assistance for common vehicle battery problems.", Rupees:"299"},
    {image:"/image/TyreService.jpg", spantext:"TYRE CARE", heading:"Tyre Service", text:"Tyre inspection, air filling and basic tyre maintenance for cars and two-wheelers.", Rupees:"1000"},
  ]

  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='Moving-hero-img'>
        <img src="/image/subvehical.jpg" alt="" />

    </div>
    <div className='plumbing-types'>
      {vehicleservices.map((item, index) => (
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

export default VehicleServices