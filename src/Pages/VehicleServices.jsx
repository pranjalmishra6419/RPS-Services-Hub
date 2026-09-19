import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'

const VehicleServices = () => {
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='vehicle-hero-img'>
        <img src="/image/subvihical.jpg" alt="" />

    </div>
    <Footer/>
    </>
  )
}

export default VehicleServices