import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
    <Nav/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection/>
    </div>
    </>
  )
}

export default App