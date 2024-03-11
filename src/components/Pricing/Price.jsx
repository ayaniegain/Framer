import React from 'react'
import GroupPrice from '../../assets/Group 5.png'

function Price() {
  return (
    <>
     <div className="flex justify-center items-center mt-20">
    <div className="text-center">
      <button className="text-black border border-gray-400 rounded px-3 py-1 my-2">Everything you need</button>
      <h1 className="text-5xl font-bold max-w-96 text-black my-4 break-words">Pricing</h1>
      <p className="text-black break-words max-w-96">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
    </div>
    </div>
    <div className='flex justify-center'>
        <img src={GroupPrice} alt="GroupPrice" />
    </div>
    </>
  )
}

export default Price