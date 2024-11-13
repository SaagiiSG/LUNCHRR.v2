import { div } from 'framer-motion/client'
import Trash from '../../assets/icons/TrashOutline.svg'
import React from 'react'
import {motion} from "framer-motion"

const DeleteUser = ({ShouldDisplay}, props) => {
   
function Displaying(){    
    
    if(ShouldDisplay >0){
        return(
            <motion.div className=' text-lg bottom-6 flex w-full bg-background text-white rounded-3xl justify-between items-center pt-4'>
                <div className='flex gap-2'>
                    <p>Selected users:</p>
                    <p>{props.name}</p>
                </div>
                <button className='text-base group hover:scale-105 hover:bg-opacity-90 duration-300 flex items-center gap-2 px-4 rounded-2xl h-12 bg-pink-primary'>
                    <p>Delete this user</p>
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