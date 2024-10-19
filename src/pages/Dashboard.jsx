import React from 'react'
import { Link } from 'react-router-dom'
import DashBoardTable from './dashBoardTable'
import TopThree from '../components/dashboard/TopThree'
import Navbar from '../components/navbar/Navbar'
import dashboradIconfill from "..//assets/icons/mage_dashboard-2-fill.svg"
import { motion } from 'framer-motion'
const Dashboard = ({loggedIn}) => {
  const m = new Date()
  const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  const activeMonthNumber = m.getMonth()
  const activeMonth = months[activeMonthNumber]

  const [selectedMonth, setSelectedMonth] = React.useState(activeMonth)
  console.log(selectedMonth);

  const handleChange=(e)=>{
    setSelectedMonth(e.target.value)
  }
  const [open, setOpen] = React.useState(false)
 

   
    return (
   <main
      className='w-full h-[200vh]  flex'>
      <Navbar activebtnNumber={1} loggedIn={loggedIn}/>
      <motion.article 
        initial={{opacity:0, background:"#f5f5f5"}}
        animate={{opacity:1}}
        transition={{delay:0, duration:0.6}}
        className='w-full rounded-tl-3xl bg-white py-4 px-4 text-white overflow-auto flex flex-col gap-4 '>
        <motion.div 
          layout
          initial={{height:"72px", borderRadius:"1rem"}}
          animate={{height:"fit-content",borderRadius:"1rem"}}
          transition={{duration:"0.3"}}
          className='group w-full h-fit  bg-background py-4' >
            <motion.button layout onClick={()=>{ setOpen(!open) }} className='flex w-full justify-between items-center text-lgx  py-1  px-4 bg-background text-white rounded-2xl'>
                <motion.div layout className='flex gap-4 items-center'>
                  <img src={dashboradIconfill} alt="" className='w-9' />
                  <p className='text-2xl'>Admin dashboard</p>
                </motion.div>
                <motion.button layout onClick={()=>{ setOpen(!open) }} style={{rotate: open? "180deg" : "0deg"}} className='duration-300'>
                    <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={"-rotate-90 right-0 duration-300"}>
                    <path d="M16.904 13.16L19.026 11.04L30.584 22.594C30.7703 22.7791 30.9181 22.9993 31.019 23.2418C31.1199 23.4843 31.1719 23.7443 31.1719 24.007C31.1719 24.2696 31.1199 24.5297 31.019 24.7722C30.9181 25.0147 30.7703 25.2348 30.584 25.42L19.026 36.98L16.906 34.86L27.754 24.01L16.904 13.16Z" fill="#f5f5f5"/>
                    </svg>
                  </motion.button>
              </motion.button> 

             {open && <TopThree/>}
        </motion.div>
        <section className='w-full h-screen flex flex-col gap-2 text-background  border-background border-2 pt-2 rounded-2xl px-1'>
              <div className='flex h-12 items-center border-b-2 border-background border-opacity-50 w-32 relative'>
                <select value={selectedMonth} onChange={(e)=>handleChange(e)} className='appearance-none flex flex-row gap-1 pl-3 text-lg py-1  w-32 outline-none bg-transparent z-10'> 
                    {months.map((month)=>{
                      return(
                        <option>{month}</option>
                      )
                    })}
                </select>
                  <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-90 absolute right-0'>
                  <path d="M16.904 13.16L19.026 11.04L30.584 22.594C30.7703 22.7791 30.9181 22.9993 31.019 23.2418C31.1199 23.4843 31.1719 23.7443 31.1719 24.007C31.1719 24.2696 31.1199 24.5297 31.019 24.7722C30.9181 25.0147 30.7703 25.2348 30.584 25.42L19.026 36.98L16.906 34.86L27.754 24.01L16.904 13.16Z" fill="#30324A"/>
                  </svg>
              </div>
          <DashBoardTable displayMonth={selectedMonth} />
        
        </section>
      </motion.article>
      </main>
  )
}

export default Dashboard
