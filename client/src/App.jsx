import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import WorkFlow from './components/WorkFlow'
import PricingSection from './components/PricingSection'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Nav/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection/>
    
    <Feature/>
    <WorkFlow />
    <PricingSection/>
    <Testimonial/>
    <Footer/>
    </div>
    </>
  )
}

export default App