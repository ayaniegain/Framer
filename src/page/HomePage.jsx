import React from 'react'
import HeroMain from '../components/HeroSection/HeroMain.jsx'
import ProgressMain from '../components/ProgressSection/ProgressMain.jsx'
import Management from '../components/management/Management.jsx'
import Price from '../components/Pricing/Price.jsx'
import Test from '../components/Testimonial/Test.jsx'

function HomePage() {
  return (
    <>
    <HeroMain/>
    <ProgressMain/>
    <Management/>
    <Price/>
    <Test/>
    </>
  )
}

export default HomePage