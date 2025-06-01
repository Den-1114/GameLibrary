import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Upload from './Upload'
import GamePage from "./Game"
import CartPage from './Cart'

function App() {
  return (
    <>
      <header>
        <Link to="/cart">
         <img src='/cart.svg' width="50px" height="50px" />
        </Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/upload' element={<Upload />}/>
        <Route path="/game/:id" element={<GamePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
