import React from 'react'
import Navbar from '../components/navbar/Navbar'
import CalendarIcon from "../assets/icons/ion_calendar.svg"
import circleArrow from "../assets/icons/arrows-rotate-solid.svg"
import MonthDisplay from '../components/month/MonthDisplay'
import coinIcon from "../assets/icons/bx_coin.svg"
import foodIcon from "../assets/icons/mdi_food.svg"
import personIcon from "../assets/icons/people.svg"
import {motion} from "framer-motion"
const Convert = () => {
  const [selected ,setSelected] = React.useState(false)
  return (
    <main className='w-full flex'>
    <Navbar activebtnNumber={3}/>
    <article className='w-full rounded-tl-3xl bg-white py-4 px-4  overflow-auto flex flex-col items-start justify-start gap-8'>
      <section className='flex w-full h-[80px] justify-between items-center text-lgx  py-5 px-4 bg-background text-white rounded-2xl'>
            <div className='flex gap-4 items-center'>
              <img src={CalendarIcon} alt="" className='w-10' />
              <p className='text-2xl'>Convert</p>
            </div>
            {selected && 
            <button className='group hover:bg-pink-primary duration-200 flex relative items-center gap-3 p-3 bg-white bg-opacity-90 rounded-xl text-background group'>
              <motion.span 
                animate={{rotate:180}}
                transition={{ repeat:Infinity, duration:6}}
              className=' '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-8  '><path className='group-hover:fill-white' fill="#30324a" d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
              </motion.span>
              <p className='group-hover:text-white'>Convert selected month</p>
            </button> 
            }
            

      </section>
      <section className='w-full flex flex-wrap items-center gap-4'>
       <div className='w-[32%] flex flex-col border-pink-accent border-2 rounded-2xl px-3 py-2'>
            <header className='w-full flex flex-col pb-4 pt-2 border-b-2'>
                <h1 className='text-2xl font-semibold'>Oct</h1>
                <p className='text-md opacity-85'>2024.10.1 - 2024.10.31</p>
            </header>
            <ul className='mt-4 flex flex-col gap-2 text-lg'>
              <li className='w-full flex gap-3'><img className='w-10' src={foodIcon} alt="" /> <p>sjhhdafskjd;</p></li> 
              <li className='w-full flex gap-3'><img className='w-10' src={coinIcon} alt="" /> <p>sjhhdafskjd;</p></li>
              <li className='w-full flex gap-3'><img className='w-10' src={personIcon} alt="" /> <p>sjhhdafskjd;</p></li>
            </ul>
       </div>
       <div className='w-[32%] flex flex-col border-pink-accent border-2 rounded-2xl px-3 py-2'>
            <header className='w-full flex flex-col pb-4 pt-2 border-b-2'>
                <h1 className='text-2xl font-semibold'>Oct</h1>
                <p className='text-md opacity-85'>2024.10.1 - 2024.10.31</p>
            </header>
            <ul className='mt-4 flex flex-col gap-2 text-lg'>
              <li className='w-full flex gap-3'><img className='w-10' src={foodIcon} alt="" /> <p>sjhhdafskjd;</p></li> 
              <li className='w-full flex gap-3'><img className='w-10' src={coinIcon} alt="" /> <p>sjhhdafskjd;</p></li>
              <li className='w-full flex gap-3'><img className='w-10' src={personIcon} alt="" /> <p>sjhhdafskjd;</p></li>
            </ul>
       </div>
       <div className='w-[32%] flex flex-col border-pink-accent border-2 rounded-2xl px-3 py-2'>
            <header className='w-full flex flex-col pb-4 pt-2 border-b-2'>
                <h1 className='text-2xl font-semibold'>Oct</h1>
                <p className='text-md opacity-85'>2024.10.1 - 2024.10.31</p>
            </header>
            <ul className='mt-4 flex flex-col gap-2 text-lg'>
              <li className='w-full flex gap-3'><img className='w-10' src={foodIcon} alt="" /> <p>sjhhdafskjd;</p></li> 
              <li className='w-full flex gap-3'><img className='w-10' src={coinIcon} alt="" /> <p>sjhhdafskjd;</p></li>
              <li className='w-full flex gap-3'><img className='w-10' src={personIcon} alt="" /> <p>sjhhdafskjd;</p></li>
            </ul>
       </div>
      </section>
    </article>
  </main>
  )
}

export default Convert