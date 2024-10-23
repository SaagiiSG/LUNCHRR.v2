import React from 'react'
import {motion} from "framer-motion"
const Popup = ({handleClick}) => {
    const isUserAdded = true
    function alert(){
        if(isUserAdded){
            alert("user succesfully added to the data base")
        }
    }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} className='absolute flex flex-col items-center justify-center text-white bg-background bg-opacity-60 w-full h-full z-[100]'>
        
        <form action="" className='flex flex-col relative items-center rounded-2xl justify-center text-background bg-white p-4 px-6 gap-3 w-1/2 z-[110]'>
        <button onClick={handleClick} className='absolute top-2 right-3 text-background hover:scale-110 duration-300'><p className='rotate-45 text-5xl'>+</p></button>
        <header className='text-2xl my-3 font-semibold'>Add new user</header>
            <input className='w-[70%] px-2 py-3   required rounded-2xl outline-pink-primary   border-pink-primary border-[1.5px]' type="text" placeholder='user name' />
            <input className='w-[70%] px-2 py-3 rounded-2xl outline-pink-primary  border-pink-primary border-[1.5px]' type="text" placeholder='user last name' />
            <input className='w-[70%] px-2 py-3 rounded-2xl outline-pink-primary  border-pink-primary border-[1.5px]' type="text" placeholder='card Id' />
            <input className='w-[70%] px-2 py-3 rounded-2xl outline-pink-primary  border-pink-primary border-[1.5px]' type="text" placeholder='re-enter card Id' />
            <button onClick={alert} className='text-xl py-2 px-9 text-white text-opacity-90 rounded-xl bg-background w-max hover:scale-105 duration-300 hover:border-pink-primary border-[4px] border-background my-3'>Add new user</button>
        </form>
    </motion.section>
  )
}

export default Popup