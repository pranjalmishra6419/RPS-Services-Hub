import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import './CSS/ElectricalServices.css'

const ElectricalServices = () => {
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='electric-hero-img'>
      <img src="image/subele.jpg" alt="" />
    </div>
    <Footer/>
    </>
  )
}

export default ElectricalServices