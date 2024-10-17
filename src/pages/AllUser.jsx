import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { json } from 'react-router'
import peopleIcon from "../assets/icons/people.svg"
import {motion} from "framer-motion"
// import { data } from '@remix-run/router/dist/utils'
const AllUser = () => {

    const[users,setUsers] = React.useState([])
    const FetchUsers=() => {fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))}
    useEffect(()=>{
      FetchUsers()
    },[])
  
   console.log(users);
   

  return (
    <main className='w-full h-screen flex'>
      <Navbar activebtnNumber={2}/>
      <motion.article 
         initial={{opacity:0, background:"#f5f5f5"}}
         animate={{opacity:1}}
         transition={{delay:0, duration:0.6}}
        className='w-full h-full rounded-tl-3xl bg-white p-4 overflow-auto flex flex-col items-start justify-start gap-4'>
        <section className='flex w-full justify-between items-center text-lgx  py-5 px-4 bg-background text-white rounded-2xl'>
          <div className='flex gap-4 items-center'>
            <img src={peopleIcon} alt="" className='w-10' />
            <p className='text-2xl'>Users</p>
          </div>
          <div className='flex gap-2 px-4 bg-white bg-opacity-95 text-background rounded-lg items-center h-12'>
            <p>sort :</p> 
            <select name="" id="" className='text-center bg-transparent  outline-none grid items-center h-full'>
              <option className='bg-background bg-opacity-10 outline-none border-none hover:bg-pink-primary' value="">A-Z</option>
              <option className='bg-background bg-opacity-10 outline-none border-none hover:bg-pink-primary' value="">highest - lowest</option>
            </select>
          </div>
        </section>
        
        <section className='w-full h-full border-2 rounded-2xl border-background overflow-auto mb-4'>
          <table className='w-full relative border-collapse'>
            <tr className='bg-white sticky top-0 border-b-2 border-background z-50'>
              <th className='h-16 text-xl font-semibold w-[30%] border-b-2 border-background'>Name</th>
              <th className='h-16 text-xl font-semibold w-[20%] border-b-2 border-background'>Last name</th>
              <th className='h-16 text-xl font-semibold w-[20%] border-b-2 border-background'>Card Id</th>
              <th className='h-16 text-xl font-semibold w-[20%] border-b-2 border-background'>Monthly payment</th>
              <th className='h-16 text-xl font-semibold w-[10%] border-b-2 border-background'></th>
            </tr>
            
              {users.map((uData)=>{
                return(
                  <tr className='even:bg-background even:bg-opacity-5 odd:bg-background odd:bg-opacity-15 w-full px-5'>
                    <td className='h-14 text-lg font-md text-center w-[30%]'>{uData.name}</td>
                    <td className='h-14 text-lg font-md text-center w-[20%]'>{uData.username}</td>
                    <td className='h-14 text-lg font-md text-center w-[20%]'>{uData.id}</td>
                    <td className='h-14 text-lg font-md text-center w-[20%] '>{uData.phone}</td>
                    <td className='h-14 w-full flex items-center justify-center text-center pr-2'>
                    <label class="flex items-center cursor-pointer relative">
                      <input type="checkbox"  class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-primary checked:border-slate-800" id="check" />
                      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                    </td>
                  </tr>
                )
                })}
          </table>
        </section>
      </motion.article>
    </main>
  )
}

export default AllUser