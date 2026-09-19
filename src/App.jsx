import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

// main pages
import About from './Pages/About'
import Homee from './Pages/Homee'
import Login from './Pages/Login'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'


// sub pages
import PlumbingServices from './Pages/PlumbingServices'
import MovinSiftingServices from './Pages/MovinSiftingServices'
import ElectricalServices from './Pages/ElectricalServices'
import TechServices from './Pages/TechServices'
import VehicleServices from './Pages/VehicleServices'
import CleaningServices from './Pages/CleaningServices'

const App = () => {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Homee/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />  
            <Route path='/login' element={<Login/>} /> 
            <Route path='/blog' element={<Blog/>} /> 
            <Route path='/contact' element={<Contact/>} /> 

            <Route path='/plumbingservices' element={<PlumbingServices/>}/>
            <Route path='/movinsiftingservices' element={<MovinSiftingServices/>}/>
            <Route path='/electricalservices' element={<ElectricalServices/>}/>
            <Route path='/techservices' element={<TechServices/>}/>
            <Route path='/cleaningservices' element={<CleaningServices/>}/>
            <Route path='/vehicleservices' element={<VehicleServices/>}/>
          </Routes>
        </Router>
      </>
  )
}

export default App