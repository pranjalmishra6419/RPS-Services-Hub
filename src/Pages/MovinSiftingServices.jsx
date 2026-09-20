import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import '../Pages/CSS/MovingSiftingServices.css'
import SubServicesType from '../Components/SubServicesType'

const MovinSiftingServices = () => {

  const plumbingservices = [
    {image:"/image/e1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/e2.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/e3.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/e3.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/e4.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/e6.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/e4.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
  ]


  return (
    
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='Moving-hero-img'>
      <img src="image/submovsif.jpg" alt="" />
    </div>
    <div className='plumbing-types'>
      {plumbingservices.map((item, index) => (
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