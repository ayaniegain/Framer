import React from 'react'
import Pyramid from '../../assets/pyramid 1.png'
import torus from '../../assets/torus 1.png'
import productImage from '../../assets/Product Image.png'

function ProgressMiddle() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-100 flex justify-center items-center">
          <img src={productImage} alt="Main" className="relative " />
          <img src={torus} alt="Left" className="absolute left-60  bottom-20" />
          <img src={Pyramid} alt="Right" className="absolute right-60 top-0" />
        </div>
  )
}

export default ProgressMiddle