import React from 'react'
import arrowb from '../../assets/arrowb.png'
import leaf from '../../assets/leaf.png'
import lock from '../../assets/lock.png'
import bell from '../../assets/bell.png'
import goal from '../../assets/goal.png'

function ProgressBottom() {
  return (
    <div className="pb-20 bg-gradient-to-b from-blue-100 to-blue-300  flex justify-center items-center">
      <div className="flex flex-wrap justify-start">
        <div className="p-4 rounded-lg flex flex-col items-start">
          <img src={leaf} alt="Logo 1" className="h-6 mb-2" />
          <div className="text-left">
            <h1 className="font-bold">Integration ecosystem</h1>
            <p className='w-64 text-gray-700  break-words'>
              Track your progress and motivate your efforts everyday.{' '}
              <span className="text-black">Learn more</span>
              <span className="flex items-center">
        <span className="text-black !important text-sx">Learn more</span> 
        <img src={arrowb} alt="arrow" className="h-4 w-4 mx-2 text-black" />
      </span>
            </p>
          </div>
        </div>
        <div className="p-4 rounded-lg flex flex-col items-start">
          <img src={goal} alt="Logo 2" className="h-6 mb-2" />
          <div className="text-left">
            <h1 className="font-bold">Goal setting and tracking</h1>
            <p className='w-64 text-black  break-words'>

            Set and track goals with manageable task breakdowns.
            <span className="flex items-center">
        <span className="text-black !important text-sx">Learn more</span> 
        <img src={arrowb} alt="arrow" className="h-4 w-4 mx-2 text-black" />
      </span>
            </p>
          </div>
        </div>
        <div className="p-4 rounded-lg flex flex-col items-start">
          <img src={lock} alt="Logo 3" className="h-6 mb-2" />
          <div className="text-left">
            <h1 className="font-bold">Secure data encryption</h1>
            <p className='w-64 text-black  break-words'>

            Ensure your data’s safety with top-tier encryption.
            <span className="flex items-center">
        <span className="text-black !important text-sx">Learn more</span> 
        <img src={arrowb} alt="arrow" className="h-4 w-4 mx-2 text-black" />
      </span>
            </p>
          </div>
        </div>
        <div className="p-4 rounded-lg flex flex-col items-start">
          <img src={bell} alt="Logo 4" className="h-6 mb-2" />
          <div className="text-left">
            <h1 className="font-bold">Customizable notifications</h1>
            <p className='w-64 text-black  break-words'>
              Get alerts on tasks and deadlines that matter most.
            </p>
            <span className="flex items-center">
        <span className="text-black !important text-sx">Learn more</span> 
        <img src={arrowb} alt="arrow" className="h-4 w-4 mx-2 text-black" />
      </span>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default ProgressBottom