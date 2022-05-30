import React from 'react'
import './Main.css'

const Dashboard = () => {
  return (
    <div className='p-10 font-medium flex flex-col font-display justify-between'>
      <span className='not-italic tracking-tighten text-2xl text-rectem-75'>Dashboard</span>
      <div className="flex flex-row justify-evenly gap-8">
        <div className='bg-rectem-blue w-1/2 h-32 text-white p-5'>
          DEPARTMENT<br/>COMPUTER SCIENCE
        </div>
        <div className='bg-rectem-blue w-1/2 h-32 text-white p-5'>
          ADMISSION STATUS<br/>ADMITTED
        </div>
      </div>
      <span className='not-italic tracking-tighten text-2xl text-rectem-75'>Application Guide</span>
      <div className="flex flex-row justify-evenly gap-8">
        <div className='bg-rectem-blue w-1/3 h-40 text-white p-5'>
          Fill your application to apply
        </div>
        <div className='bg-rectem-blue w-1/3 h-40 text-white p-5'>
          Payment due amount<br/>Not paid
        </div>
        <div className='bg-rectem-blue w-1/3 h-40 text-white p-5'>
          Fill your course form
        </div>
      </div>
    </div>
  )
}

export default Dashboard