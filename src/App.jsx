import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exhibit from './pages/Exhibit.jsx'
import Monitor from './pages/Monitor.jsx'
import Alarm from './pages/Alarm.jsx'
import Compare from './pages/Compare.jsx'
import CurrentStation from './pages/CurrentStation.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Exhibit />} />
        <Route path='/monitor' element={<Monitor />} />
        <Route path='/alarm' element={<Alarm />} />
        <Route path='/compare' element={<Compare />} />
        <Route path='/current_station' element={<CurrentStation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
