// Imports
import React, { useState } from 'react'
import './Rightside.css'
import { BellIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'
import image from '../../img/frame1.png'
import frame from '../../img/frame3.png'
import { Link } from 'react-router-dom'

const Rightside = () => {
  // State for dropdown button
  const [arrowIsOpen, setArrowIsOpen] = useState(false)
  // State for Notification
  const [notIsOpen, setNotIsOpen] = useState(false)

  return (
    <div className='flex flex-col sticky top-0'>
      <div className="flex flex-row gap-10 p-4 justify-end content-center">

        {/* Notification Button */}
        <div className='pt-2'>
          <button onClick={()=>{setNotIsOpen(!notIsOpen)}}>
            <BellIcon className='text-black h-8 w-8' />
          </button>
          <div>

          </div>
        </div>

        {/* Profile picture */}
        <Link to='/profile'>
          <img src={image} alt="profile pic" className='h-14 w-14 rounded-full'  />
        </Link>

        {/* Arrow Dropdown */}
        <div className={arrowIsOpen===true?'drop pt-2 relative inline-block':'pt-2 relative inline-block'}>
          <button className='cursor-pointer' onClick={()=>{setArrowIsOpen(!arrowIsOpen)}}>
            <ChevronDownIcon className='text-black h-8 w-8' />
          </button>
          <div className={arrowIsOpen===true?'dropdown-content drop':'dropdown-content'} onMouseLeave={()=>{setArrowIsOpen(false)}}>
            <Link to='/dashboard'>Application Guide</Link><hr/>
            <Link to='/dashboard'>Need help?</Link><hr/>
            <Link to='/'>Logout</Link>
          </div>
        </div>
      </div>

      {/* School Rising champions Image */}
      <div className='p-6'>
        <img src={frame} alt="" className='' />
      </div>
    </div>
  )
}

export default Rightside