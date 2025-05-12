import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* s<Route path='/upload' element={}/> */}
      </Routes>
    </>
  )
}

export default App
