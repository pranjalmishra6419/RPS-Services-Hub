import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import './CSS/PlumbingServices.css'
import SubServicesType from '../Components/SubServicesType'

const PlumbingServices = () => {


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
    <div className='plumbing-head-image'>
      <img src="image/subcli.jpg" alt="" />
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

export default PlumbingServices