import React from 'react'
import { Link } from 'react-router-dom'
const NavBtn = ({icon , btnName , path}) => {
  return (
    
        <Link to={path} className='w-full py-2 px-1 rounded-lg flex flex-row items-center gap-6 text-xl group active:bg-pink-primary cursor-pointer'>
            <img src={icon} alt="" className='group-hover:scale-[1.05] duration-200' />
            <p className='group-hover:scale-105 duration-200'>{btnName}</p>
            </Link>
        
  )
}

export default NavBtn