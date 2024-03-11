import React from 'react'
import HeroMain from '../components/HeroSection/HeroMain.jsx'
import ProgressMain from '../components/ProgressSection/ProgressMain.jsx'
import Management from '../components/management/Management.jsx'
import Price from '../components/Pricing/Price.jsx'
import Test from '../components/Testimonial/Test.jsx'
import SignUp from '../components/Sign-up/SignUp.jsx'
import Footer from '../components/Footer/Footer.jsx'

function HomePage() {
  return (
    <>
    <HeroMain/>
    <ProgressMain/>
    <Management/>
    <Price/>
    <Test/>
    <SignUp/>
    <Footer/>
    </>
  )
}

export default HomePage