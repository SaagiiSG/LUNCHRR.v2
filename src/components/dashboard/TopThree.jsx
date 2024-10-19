import React from 'react'
import {motion} from 'framer-motion'
const TopThree = () => {
    return(
        <motion.section 
          layout
          initial={{opacity:0,y:-90}}
          animate={{opacity:1, y:0}}
          transition={{delay:.125 , duration:.2}}
          className='w-full flex justify-between gap-4 px-3 mt-4 '> 
        <div className='w-1/3 text-white bg-background border-2 border-pink-accent h-44 rounded-xl py-3 px-2 flex flex-col justify-between'>
          <h1 className='w-full text-right pr-4 text-xl font-medium'> <img src="" alt="" /> Average:</h1>
          <p className='w-full h-full text-center grid items-center  text-7xl'>23</p>
        </div>
        <div className='w-1/3 text-white bg-background border-2 border-pink-accent h-44 rounded-xl py-3 px-2 flex flex-col justify-between'>
          <h1 className='w-full text-right pr-4 text-xl font-medium'> <img src="" alt="" /> Today:</h1>
          <p className='w-full h-full text-center grid items-center  text-7xl'>7</p>
        </div>
        <div className='w-1/3 bg-pink-primary h-44 rounded-xl py-3 px-2 flex flex-col justify-between'>
          <h1 className='w-full text-right pr-4 text-xl font-medium'> <img src="" alt="" /> Payment:</h1>
          <p className='w-full h-full text-center grid items-center  text-7xl'>234234</p>
        </div>
      </motion.section>
      )
}

export default TopThree