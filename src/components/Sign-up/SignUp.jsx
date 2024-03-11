import React from 'react'
import hellx from '../../assets/mng/helix2 1.png'
import emoj from '../../assets/mng/emojistar 1.png'
import arrowb from '../../assets/arrowb.png'

function SignUp() {
  return (
    <div className="p-20 flex justify-center items-center bg-gradient-to-t to-white  from-blue-300 ">
    <div className="text-center relative">
      <h1 className="text-5xl font-bold mb-4">Sign up for free today</h1>
      <p className="text-black mb-6  break-words max-w-96 mx-20" >Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
      <div className="flex items-center justify-center">
        <button className="bg-black text-white rounded-full py-2 px-6 mr-4">Get for free</button>
        <span className="flex items-center">
        <span className="text-black !important text-sx">Learn more</span> 
        <img src={arrowb} alt="arrow" className="h-4 w-4 mx-2 text-black" />
      </span>
      </div>
    </div>
    <div className="absolute top-50 right-20 mt-4 mr-4">
      <img src={hellx} alt="Left Logo" />
    </div>
    <div className="absolute top-50 left-20 mt-4 ml-4">
      <img src={emoj} alt="Right Logo" />
    </div>
  </div>
  )
}

export default SignUp