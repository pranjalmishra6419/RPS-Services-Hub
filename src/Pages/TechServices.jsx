import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'

const TechServices = () => {
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='subtech-hero-img'>
      <img src="image/subtech.jpg" alt="" />
    </div>
    <Footer/>
    </>
  )
}

export default TechServices