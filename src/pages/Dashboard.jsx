import React from 'react'
import { Link } from 'react-router-dom'
import DashBoardTable from './dashBoardTable'
const Dashboard = () => {
  const m = new Date()
  const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  const activeMonthNumber = m.getMonth()
  const activeMonth = month[activeMonthNumber]

  const [selectedMonth, setSelectedMonth] = React.useState(activeMonth)
  console.log(selectedMonth);
  
  const handleChange=(e)=>{
    setSelectedMonth(e.target.value)
  }

  return (
   
      <article className='w-full h-full rounded-tl-3xl bg-white py-4 px-4 text-white overflow-auto'>
        <section className='w-full flex justify-between gap-4'>
          <div className='w-1/3 bg-background h-44 rounded-xl py-3 px-2 flex flex-col justify-between'>
            <h1 className='w-full text-right pr-4 text-xl font-medium'> <img src="" alt="" /> Average:</h1>
            <p className='w-full h-full text-center grid items-center  text-7xl'>23</p>
          </div>
          <div className='w-1/3 bg-background h-44 rounded-xl py-3 px-2 flex flex-col justify-between'>
            <h1 className='w-full text-right pr-4 text-xl font-medium'> <img src="" alt="" /> Today:</h1>
            <p className='w-full h-full text-center grid items-center  text-7xl'>7</p>
          </div>
          <div className='w-1/3 bg-pink-primary h-44 rounded-xl py-3 px-2 flex flex-col justify-between'>
            <h1 className='w-full text-right pr-4 text-xl font-medium'> <img src="" alt="" /> Payment:</h1>
            <p className='w-full h-full text-center grid items-center  text-7xl'>234234</p>
          </div>
        </section> 
        <section className='w-full h-full flex flex-col gap-2 text-background mt-6 border-background border-2 pt-2 rounded-2xl px-1'>
          <div className='flex h-12 items-center border-b-2 border-background border-opacity-50 w-32 relative'>
            <select value={selectedMonth} onChange={(e)=>handleChange(e)} className='appearance-none flex flex-row gap-1 pl-3 text-lg py-1  w-32 outline-none bg-transparent z-10'> 
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
            </select>
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className='rotate-90 absolute right-0'>
              <path d="M16.904 13.16L19.026 11.04L30.584 22.594C30.7703 22.7791 30.9181 22.9993 31.019 23.2418C31.1199 23.4843 31.1719 23.7443 31.1719 24.007C31.1719 24.2696 31.1199 24.5297 31.019 24.7722C30.9181 25.0147 30.7703 25.2348 30.584 25.42L19.026 36.98L16.906 34.86L27.754 24.01L16.904 13.16Z" fill="#30324A"/>
              </svg>
          </div>
          {/* {selectedMonth == "Dec" ? <p>all I want for Xmas is youuuu </p>:""} */}
          <DashBoardTable displayMonth={selectedMonth} />
        <section>
            
            
          </section>
        </section>
      </article>
   
  )
}

export default Dashboard