import React from 'react'
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";

function Navbar() {
  return (
    <div className="bg-customBlue flex justify-between items-center py-4 px-6">
    {/* Left Side */}
    <div className="flex items-center">
      {/* Logo and Text */}
      <img src={logo1} alt="Logo" className="h-10" />
      <span className="text-black ml-2">made by</span>
      {/* Second Logo with Text */}
      <img src={logo2} alt="Logo" className="h-7 ml-4 font-bold" />
      <span className="text-black font-bold">Framer</span>
    </div>
  
    {/* Right Side */}
    <div className="flex items-center">
      {/* Navigation Links */}
      <a href="#" className="text-black opacity-60 ml-6 hover:text-gray-800">About</a>
      <a href="#" className="text-black opacity-60 ml-6 hover:text-gray-800">Features</a>
      <a href="#" className="text-black opacity-60 ml-6 hover:text-gray-800">Customers</a>
      <a href="#" className="text-black opacity-60 ml-6 hover:text-gray-800">Updates</a>
      <a href="#" className="text-black opacity-60 ml-6 hover:text-gray-800">Help</a>
      {/* Button */}
      <button className="bg-black text-white ml-6 py-2 px-4 rounded-full hover:bg-gray-800">Get for Free</button>
    </div>
  </div>
  
  )
}

export default Navbar