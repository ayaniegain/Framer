import React from 'react'
import clg1 from '../../assets/mng/cube-helix 1.png'
import clg2 from '../../assets/mng/cube-helix 2.png'

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

    <div className="flex justify-center my-3">
      <div className=" flex items-center justify-center">
        <div className="bg-white shadow-lg shadow-grey-500/50 rounded-lg p-6 mx-4">
          <img src={clg2} alt="Logo" className=" mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-center">Integration ecosystem</h2>
          <p className="text-gray-700 text-center break-words max-w-80">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="bg-white shadow-lg shadow-grey-500/50 rounded-lg p-6 mx-4">
          <img src={clg1} alt="Logo" className=" mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-center">Goal setting and tracking</h2>
          <p className="text-gray-700 break-words max-w-80  text-center">Define and track your goals, 
          breaking down objectives into achievable tasks to keep your targets in sight.</p>
        </div>
      </div>
    </div>
    </>

  )
}

export default Management