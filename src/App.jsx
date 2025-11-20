import { useState } from 'react'
import './css/App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import LaptopCatgory from './pages/laptopCatgory'
import Header from './component/header'
function App() {


  return (

    <>
      <Header />
      <main className='main-content'>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/c/laptops' element={<LaptopCatgory />} />
        </Routes>
      </main>

    </>

  )
}

export default App
