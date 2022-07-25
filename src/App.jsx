import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Exhibit from './pages/Exhibit.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Exhibit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
