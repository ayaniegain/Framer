import React from 'react'
import Visual1 from '../../assets/Visual1.png'
import cylinder from '../../assets/cylinder 1.png'
import halftorus from '../../assets/half-torus 1.png'
import arrowb from '../../assets/arrowb.png'

function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-customBlue to-rdeep py-10 px-6 md:px-12 lg:px-24 xl:px-32 flex justify-between items-center relative">
    <div className="max-w-md -my-40">
      <button className="rounded-full border border-slate-500 flex items-center justify-center px-4">
        <p className="text-black text-xs">Version 2.0 is here</p>
      </button>
  
      <h1 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold mt-">Pathway to productivity</h1>
      <p className="text-black text-lg mt-4">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
      <div className="mt-6 flex flex-col md:flex-row">
        <button className="bg-black text-white rounded-full px-6 py-2 mb-4 md:mb-0 md:mr-4">Get for Free</button>
        {/* <button className="bg-transparent text-black font-bold  ">Learn More</button> */}
        <span className="flex items-center">
        <span className="text-black !important text-sx">Learn more</span> 
        <img src={arrowb} alt="arrow" className="h-4 w-4 mx-2 text-black" />
      </span>
      </div>
    </div>
    <div className="flex items-center">
      <div className="relative">
        <img src={cylinder} alt="Logo 1" className="absolute top-0  mb-1" style={{ marginBottom: "-10px", transform: "translateX(-50%)" }} />
        <img src={Visual1} alt="Logo 2" className="mb-2 mx-24"  />
        <img src={halftorus} alt="Logo 3" className="absolute -bottom-36 right-0 z-10" />
      </div>
    </div>
  </div>
  
  
  )
}

export default HeroSection