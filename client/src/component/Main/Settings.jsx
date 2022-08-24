import React from 'react'
import image from '../../img/frame1.png'

const Settings = () => {
  return (
    <div className='p-10 font-medium flex flex-col gap-8'>
      <span className='not-italic tracking-tighten text-2xl font-display text-rectem-75'>Settings</span>

      {/* Body */}
      <div className="flex flex-row gap-16">

        {/* Profile Picture Part */}
        <div className='flex flex-col w-1/4 text-center gap-6'>
          <img src={image} alt="Profile Pic" className='rounded-full h-44 w-44' />
          <button>
            <span className='font-display tracking-tighten not-italic font-normal text-lg'>Edit</span>
          </button>
        </div>

        {/* Account Settings Part */}
        <div className='flex flex-col text-left w-2/4 gap-8'>
          <span className='not-italic font-bold tracking-tighten text-rectem-black text-2xl'>Account</span>

          {/* Personal Details */}
          <div className='flex flex-row gap-20'>
            <div className='flex flex-col justify-between gap-8'>

              {/* First Name */}
              <div className='flex flex-col justify-evenly gap-2'>
                <span className='text-rectem-black font-medium not-italic text-xs'>First name</span>
                <span className='text-rectem-grey font-display font-normal not-italic text-xs'>First name</span>
                <button className='text-left'>
                  <span className='text-rectem-50 font-medium not-italic text-xs'>Change First name</span>
                </button>
              </div>

              {/* Username */}
              <div className='flex flex-col justify-evenly gap-2'>
                <span className='text-rectem-black font-medium not-italic text-xs'>Username</span>
                <span className='text-rectem-grey font-display font-normal not-italic text-xs'>Username</span>
                <button className='text-left'>
                  <span className='text-rectem-50 font-medium not-italic text-xs'>Change Username</span>
                </button>
              </div>
            </div>

            {/* Last Name */}
            <div>
              <div className='flex flex-col justify-evenly gap-2'>
                <span className='text-rectem-black font-medium not-italic text-xs'>Last name</span>
                <span className='text-rectem-grey font-display font-normal not-italic text-xs'>Last name</span>
                <button className='text-left'>
                  <span className='text-rectem-50 font-medium not-italic text-xs'>Change Last name</span>
                </button>
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className='flex flex-row gap-20'>
            <div className='flex flex-col justify-between gap-6'>

              {/* Email */}
              <div className='flex flex-col justify-evenly gap-2'>
                <span className='text-rectem-black font-medium not-italic text-xs'>Email</span>
                <span className='text-rectem-grey font-display font-normal not-italic text-xs'>Email</span>
                <button className='text-left'>
                  <span className='text-rectem-50 font-medium not-italic text-xs'>Change Email</span>
                </button>
              </div>

              {/* Password */}
              <div className='flex flex-col justify-evenly gap-2'>
                <span className='text-rectem-black font-medium not-italic text-xs'>Password</span>
                <span className='text-rectem-grey font-display font-normal not-italic text-xs'>Password</span>
                <button className='text-left'>
                  <span className='text-rectem-50 font-medium not-italic text-xs'>Change Password</span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className='flex flex-col justify-evenly gap-2'>
                <span className='text-rectem-black font-medium not-italic text-xs'>Phone</span>
                <span className='text-rectem-grey font-display font-normal not-italic text-xs'>Phone</span>
                <button className='text-left'>
                  <span className='text-rectem-50 font-medium not-italic text-xs'>Change Phone</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings