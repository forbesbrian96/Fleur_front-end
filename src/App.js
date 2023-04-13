import React, {useState, useEffect} from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Plant from './components/Plant'

const App = () => {



  return (
    <>
      <nav>
        <ul>
          <li><Link to='/api/plants'>Home</Link></li>
          <li><Link to='/api/plants/plant'>Plant</Link></li>
          {/* <li><Link to='/api/plants/plant/:id'>Plant</Link></li> */}
        </ul>
      </nav>
      <Routes>
        <Route path='/api/plants' element={<Home />} />
        <Route path='api/plants/plant' element={<Plant />} />
      </Routes>

     
    </>
  )
}

export default App