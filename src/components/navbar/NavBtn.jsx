import React from 'react'
import { Link } from 'react-router-dom'
const NavBtn = ({icon , btnName , path, activeBtn}) => {
  
  // const [active, setActive] = React.useState(false)
  
  const activeClass = 'bg-pink-primary w-full py-2 px-1 rounded-lg flex flex-row items-center gap-6 text-xl group cursor-pointer'
  const inActiveClass = 'w-full py-2 px-1 rounded-lg flex flex-row items-center gap-6 text-xl group cursor-pointer '
  return (
    
        <Link to={path} className={activeBtn ? activeClass : inActiveClass}>
            <img src={icon} alt="" className='group-hover:scale-[1.05] duration-200' />
            <p className='group-hover:scale-105 duration-200'>{btnName}</p>
            </Link>
        
  )
}

export default NavBtn 