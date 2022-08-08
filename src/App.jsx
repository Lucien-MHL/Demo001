import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exhibit from './pages/Exhibit.jsx'
import CurrentStation from './pages/CurrentStation.jsx'
import Footer from './components/Footer.jsx'
import Login from './pages/Login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/exhibit' element={<Exhibit />} />
        <Route path='/singleStation_:id' element={<CurrentStation />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
