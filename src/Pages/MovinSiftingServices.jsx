import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import '../Pages/CSS/MovingSiftingServices.css'

const MovinSiftingServices = () => {
  return (
    
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='Moving-hero-img'>
      <img src="image/submovsif.jpg" alt="" />
    </div>
    <Footer/>
    </>
  )
}

export default MovinSiftingServices