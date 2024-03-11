import React from 'react'

function Management() {
  return (
    <>
    <div className="flex justify-center items-center mt-20">
    <div className="text-center">
      <button className="text-black border border-gray-400 rounded px-3 py-1 my-2">Everything you need</button>
      <h1 className="text-4xl font-bold max-w-96 text-black my-4 break-words">Streamlined for easy management</h1>
      <p className="text-black break-words max-w-96">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
    </div>
    </div>

    <div className="flex justify-center">
      <div className=" flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
          <img src="path/to/first-logo.png" alt="Logo" className="w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-center">First Card</h2>
          <span className="text-gray-700 text-center">Details about the first card</span>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 mx-4">
          <img src="path/to/second-logo.png" alt="Logo" className="w-12 h-12 mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-center">Second Card</h2>
          <span className="text-gray-700 text-center">Details about the second card</span>
        </div>
      </div>
    </div>
    </>

  )
}

export default Management