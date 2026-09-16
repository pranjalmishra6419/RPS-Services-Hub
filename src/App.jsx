import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './Pages/About'
import Homee from './Pages/Homee'

const App = () => {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<Homee/>} />
            
          </Routes>
        </Router>
      </>
  )
}

export default App