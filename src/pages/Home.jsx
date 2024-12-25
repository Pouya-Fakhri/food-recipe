import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import CommunitySection from '../components/CommunitySection'
import CTA from '../components/CTA'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className='py-11  w-screen font-inter overflow-hidden' >
        <Navbar />
        <Header />
        <AboutUs />
        <CommunitySection />
        <CTA />
        <Footer />
    </div>
  )
}

export default Home
