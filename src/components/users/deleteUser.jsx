import { div, span } from 'framer-motion/client'
import Trash from '../../assets/icons/TrashOutline.svg'
import React from 'react'
import {motion} from "framer-motion"

const DeleteUser = ({ShouldDisplay, names}) => {
   const plural = names.length>1 ? <span>users</span> : <span>user</span>
function Displaying(){    
    
    if(ShouldDisplay >0){
        return(
            <motion.div className=' text-lg bottom-6 flex w-full bg-background text-white rounded-3xl justify-between items-center pt-4'>
                <div className='flex gap-2 w-full'>
                    <p className='break-normal'>Selected users:</p>
                    <div className='w-1/2 flex flex-wrap overflow-hidden'>
                        {names.map((name, index) => (
                        <p key={index}>{name}{index < names.length - 1 ? ', ' : ''}</p> // Display each name, separated by commas
                        ))}
                    </div>
                </div>
                <button className='text-base group hover:scale-105 hover:bg-opacity-90 duration-300 flex items-center gap-2 py-2 px-4 rounded-2xl h-auto w-auto bg-pink-primary'>
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