import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Homee from './Pages/Homee'
import Login from './Pages/Login'
import Services from './Pages/Services'

const App = () => {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<Homee/>} />
            <Route path='/login' element={<Login/>} />   
            <Route path='/services' element={<Services/>} />   
            
          </Routes>
        </Router>
      </>
  )
}

export default App