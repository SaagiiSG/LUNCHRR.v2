import React from 'react'
import DashboardIcon from '../../assets/icons/mage_dashboard-2.svg'
import UserIcon from '../../assets/icons/people-filled.svg'
import CalendarIcon from '../../assets/icons/ion_calendar-outline.svg'
import LogoutIcon from '../../assets/icons/majesticons_logout-half-circle-line.svg'
import NavBtn from './NavBtn'
import {NextUIProvider} from "@nextui-org/system";
import Profile from '../profile'
import logo from "./../../assets/Logo-noFill.svg"

const Navbar = ({activebtnNumber, loggedIn}) => {
  const isLoggedIn = loggedIn;
  
  const logInOrOut = isLoggedIn ? "Log Out" : "Log In"
  const icon = DashboardIcon
  return (
    <NextUIProvider>
    <nav  
      
      className=' min-w-[250px] h-screen bg-gray-900 text-white flex flex-col items-center justify-between'>
      <section className='w-full'>

      <header className='w-full xl:py-8 md:pb-4 flex flex-col items-center gap-3 text-center text-3xl font-bold tracking-widest'>
          <img src={logo} alt="LUNCHRR logo" className='xl:w-32 md:w-24'/>
          <p className='md:text-2xl xl:text-3xl'>Lunchrr</p>
      </header>
      
      <div className='w-full flex flex-col items-start gap-6 px-4 mt-8'>
        
      {isLoggedIn == true ? <>
        {activebtnNumber == 1 ? <NavBtn icon={DashboardIcon} btnName={"Dashboard"} path={"/Dashboard"} activeBtn={true}/> : <NavBtn icon={DashboardIcon} btnName={"Dashboard"} path={"/Dashboard"} activeBtn={false}/>  } 
        {activebtnNumber == 2 ? <NavBtn icon={UserIcon} btnName={"Users"} path={"/Users"} activeBtn={true}/> : <NavBtn icon={UserIcon} btnName={"Users"} path={"/Users"} activeBtn={false}/>  } 
        {activebtnNumber == 3 ? <NavBtn icon={CalendarIcon} btnName={"Convert"}  path={"/Convert"} activeBtn={true}/> : <NavBtn icon={CalendarIcon} btnName={"Convert"}  path={"/Convert"} activeBtn={false}/>}</>:""}
        {activebtnNumber == 4 ? <NavBtn icon={LogoutIcon} btnName={logInOrOut} path={"/"} activeBtn={true}/> : <NavBtn icon={LogoutIcon} btnName={logInOrOut} path={"/"} activeBtn={false}/>} 
      </div>
      </section>
      {isLoggedIn == true ? <Profile 
        userName={"test user 123456 789" } 
        userAcces={"admin"} 
        userUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6upkc6jjdNBwfdiHyTHtOv0M4C2YHf4nmCQ&s"} /> :""}
      
    </nav>
    </NextUIProvider>
  )
}

export default Navbar