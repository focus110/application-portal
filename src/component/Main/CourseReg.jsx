import React from 'react'
import { Link } from 'react-router-dom'

const CourseReg = () => {
  return (
    <div className='p-10 font-medium flex flex-col'>
      <span className='not-italic tracking-tighten text-2xl font-display text-rectem-75'>Course Registration</span>
      <div className='bg-white w-120 h-82 mt-16 p-12 shadow-box flex flex-col justify-between'> 
        <div className='text-center mt-3'>
          <span className='tracking-tighten not-italic font-body text-black font-bold text-2xl'>Make Payment</span>
        </div>
        <div className='text-center'>
          <span className='font-normal text-x text-rectem-grey tracking-tighten not-italic'>You need to make payment before you can start your course registration</span>
        </div>
        <Link to='/dashboard' className='text-center h-8 bg-rectem-50 rounded-3xl'>
          <span className='tracking-tighten not-italic font-bold text-xs font-body text-white'>Make Payment</span>
        </Link>
      </div>
    </div>
  )
}

export default CourseReg