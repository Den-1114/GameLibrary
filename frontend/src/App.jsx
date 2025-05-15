import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload from './Upload'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/upload' element={<Upload />}/>
      </Routes>
    </>
  )
}

export default App
