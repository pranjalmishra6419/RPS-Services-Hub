import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Header/>} />
          </Routes>
        </Router>
      </>
  )
}

export default App