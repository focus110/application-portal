import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../img/logo.png'
import { SidebarData } from '../Data/Data'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  const [active, setActive] = useState(props.index)

  return (
    <div className="flex flex-col p-8 border-r-2 border-rectem-cornwhite border-solid sticky top-0">
      
        {/* logo */}
        <div className="w-40 h-9 items-center justify-center">
          <img src={Logo} alt="School logo and name" />
        </div>

        {/* menu */}
        <div className='mt-12 flex flex-col'>
          {SidebarData.map((menu, index)=>{
            return(
              <Link key={index}
                    to={`/${menu.link}`}
                    className={active===index?'flex items-center gap-6 h-16 rounded-lg cursor-pointer p-6 bg-rectem-50 text-white':
                                              'flex items-center gap-6 h-16 rounded-lg cursor-pointer p-6 bg-white text-rectem-50'}
                    onClick={()=>setActive(index)}>
                <menu.icon className={active===index?'h-7 w-7 text-white':'h-7 w-7 text-rectem-50'} />
                <span className='font-normal'>{menu.heading}</span>
              </Link>
            )
          })}
        </div>
    </div>
  )
}

export default Sidebar