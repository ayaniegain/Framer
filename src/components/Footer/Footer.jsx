import React from 'react'
import clogo from '../../assets/mng/Frame 31.png'

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={clogo} alt="Footer Logo" className="" />
        </div>
        <div className="flex gap-4">
          <div className="mr-8">
            <h2 className="text-white font-bold mb-2">Product</h2>
            <ul className='text-gray-400'>
              <li >Features</li>
              <li>Integrations</li>
              <li>Updates</li>
              <li>FAQ</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="mr-8">
            <h2 className="text-white font-bold mb-2">Company</h2>
            <ul className='text-gray-400'>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Manifesto</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Careers</li>
          </ul>
        </div>
        <div className="mr-8">
            <h2 className="text-white font-bold mb-2">Resources</h2>
            <ul className='text-gray-400'>
              <li>About</li>
              <li>Examples</li>
              <li>Community</li>
              <li>Guides</li>
              <li>Docs</li>
          </ul>
        </div>
        <div className="mr-8">
            <h2 className="text-white font-bold mb-2">Legal</h2>
            <ul className='text-gray-400'>
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer