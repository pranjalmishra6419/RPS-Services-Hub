import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'

const TechServices = () => {
  const plumbingservices = [
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
    {image:"/image/p1.jpg", spantext:"Plumbing", heading:"Plumbing Services", text:"lorem jhefsu fsbfhj  fs kf fsd sf dsbf fs  fusgfhdsbj fusb", Rupees:"1000"},
  ]
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='subtech-hero-img'>
      <img src="image/subtech.jpg" alt="" />
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

export default TechServices