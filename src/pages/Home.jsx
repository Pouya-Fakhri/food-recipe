import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function Home() {
  return (
    <div className='py-11 px-24 w-screen font-inter' >
        <Navbar />
        <Header />
    </div>
  )
}

export default Home
