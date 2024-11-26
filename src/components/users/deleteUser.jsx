import { div, span } from 'framer-motion/client'
import Trash from '../../assets/icons/TrashOutline.svg'
import React from 'react'
import {motion} from "framer-motion"

const DeleteUser = ({ShouldDisplay, names}) => {
   const plural = names.length>1 ? <span>users</span> : <span>user</span>
function Displaying(){    
    
    if(ShouldDisplay >0){
        return(
            <motion.div className=' text-lg bottom-6 flex w-full bg-gray-900 text-white rounded-3xl justify-between items-center pt-4'>
                <div className='flex gap-2 w-full bg-white text-gray-800 p-3 rounded-2xl mr-4'>
                    <p className='break-normal font-semibold'>Selected users:</p>
                    <li className='w-full flex flex-wrap overflow-hidden gap-2 '>
                        {names.map((name, index) => (
                        <div className='group flex flex-row gap-2 bg-zinc-300 bg-opacity-80 justify-center items-center p-2 px-4 text-gray-800 rounded-2xl'>    
                            <ul  className="" key={index}>{name}</ul> 
                            {/* <button onClick={deselect} className='rotate-45 group-hover:scale-125 duration-300'><span className='text-4xl'>+</span></button> */}
                        </div>
                        ))}
                    </li>
                </div>
                <button className='text-base group hover:scale-105 hover:bg-opacity-90 duration-300 flex items-center gap-2 py-2 px-4 rounded-2xl h-auto w-auto bg-sky-900'>
                    <p>Delete {plural}</p>
                    <img src={Trash} alt="" className=''/>
                </button>
            </motion.div>
        )
    }}

  return (
    <>
        <Displaying />
    </>
  )
}

export default DeleteUser