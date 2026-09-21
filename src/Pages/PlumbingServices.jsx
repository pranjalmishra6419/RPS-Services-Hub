import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SubServicesHeader from '../Components/SubServicesHeader'
import './CSS/PlumbingServices.css'
import SubServicesType from '../Components/SubServicesType'

const PlumbingServices = () => {


  const plumbingservices = [
    {image:"/image/TapFaucetRepair.png", spantext:"REPAIR", heading:"Tap & Faucet Repair", text:"Repair and replacement of leaking, damaged or loose taps and faucets in your home.", Rupees:"199"},
    {image:"/image/SinkRepair.jpg", spantext:"KITCHEN & BATHROOM", heading:"Sink Repair", text:"Fixing leaking sinks, blocked drains and other common sink plumbing problems.", Rupees:"249"},
    {image:"/image/p1.jpg", spantext:"PIPE WORK", heading:"Pipe Repair", text:"Repairing leaking, damaged or loose water pipes to help prevent water wastage and damage.", Rupees:"299"},
    {image:"/image/ToiletRepai.webp", spantext:"BATHROOM", heading:"Toilet Repai", text:"Repair and maintenance of common toilet plumbing issues including leakage and flushing problems.", Rupees:"499"},
    {image:"/image/WaterTankService.jpg", spantext:"WATER SYSTEM", heading:"Water Tank Service", text:"Inspection and basic plumbing support for household water tanks and connected water lines.", Rupees:"399"},
    {image:"/image/ShowerInstallation.jpg", spantext:"INSTALLATION", heading:"Shower Installation", text:"Installation and replacement of shower fittings with proper water connection and basic plumbing support.", Rupees:"299"},
  ]
  
  return (
    <>
    <Header/>
    <SubServicesHeader/>
    <div className='plumbing-head-image'>
      <img src="image/plumbing.png" alt="" />
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