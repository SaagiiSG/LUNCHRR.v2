import React from 'react'
import DashboardIcon from '../../assets/icons/mage_dashboard-2.svg'
import UserIcon from '../../assets/icons/people-filled.svg'
import CalendarIcon from '../../assets/icons/ion_calendar-outline.svg'
import LogoutIcon from '../../assets/icons/majesticons_logout-half-circle-line.svg'
import NavBtn from './NavBtn'
// import { Link } from 'react-router-dom'
import Profile from '../profile'
const Navbar = () => {
  const [DashIconState , SetDashIcon] = React.useState(false)
  
  const icon = DashboardIcon
  return (
    <nav className=' min-w-[250px] h-screen bg-background text-white flex flex-col items-center justify-between '>
      <section className='w-full'>

      <header className='w-full py-8 text-center text-3xl font-bold tracking-widest'>Lunchrr</header>
      
      <div className='w-full flex flex-col items-start gap-6 px-4 mt-8'>
        
        <NavBtn icon={DashboardIcon} btnName={"Dashboard"} path={"/"}/>
        <NavBtn icon={UserIcon} btnName={"Users"} path={"/"}/>
        <NavBtn icon={CalendarIcon} btnName={"Convert"} path={"/"}/>
        <NavBtn icon={LogoutIcon} btnName={"Login"} path={"/login"}/>
      </div>
      </section>
      <Profile 
        userName={"test user 123456 789" } 
        userAcces={"admin"} 
        userUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6upkc6jjdNBwfdiHyTHtOv0M4C2YHf4nmCQ&s"} />
    </nav>
  )
}

export default Navbar