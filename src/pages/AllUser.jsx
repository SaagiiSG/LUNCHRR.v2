import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { json } from 'react-router'
import peopleIcon from "../assets/icons/people.svg"
import SearchIcon from "../assets/icons/SearchOutline.svg"
import Popup from '../components/users/Popup'
import DeleteUser from '../components/users/deleteUser'
import {motion} from "framer-motion"
// import UserListItem from '../components/users/UserListItem'
// import { data } from '@remix-run/router/dist/utils'

function UserListItem( props, {initialChecked, onToggle}){
  const [isChecked, setIsChecked] = React.useState(initialChecked); 
 
  const handleCheckboxChange = (event) => { 
    const checked = event.target.checked; 
    setIsChecked(checked); 
    onToggle(checked);

  }; 
  return (
    <tr className='even:bg-background even:bg-opacity-5 odd:bg-background odd:bg-opacity-15 w-full px-5'>
    <td className='h-14 text-lg font-md text-center w-[30%]'>{props.name}</td>
    <td className='h-14 text-lg font-md text-center w-[20%]'>{props.username}</td>
    <td className='h-14 text-lg font-md text-center w-[20%]'>{props.id}</td>
    <td className='h-14 text-lg font-md text-center w-[20%] '>{props.phone}</td>
    <td className='h-14 w-full flex items-center justify-center text-center pr-2'>
    <label class="flex items-center cursor-pointer relative">
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}  class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-pink-primary checked:border-slate-800" id="check" />
      <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
    </td>
  </tr>
  )}

const AllUser = ({loggedIn}) => {
    const [isChecked, setIsChecked] = React.useState(false); 
  
    const toggleChecked = (newState) => { 
      setIsChecked(newState); // Sync with the child's state 
    }; 
    const [selectedID, setSelectedID] = React.useState(null)

    const handleIdFromChild = (id) => {
      setSelectedID(id);
      console.log("Received ID from child:", id);
    };
    const[delUSelectedCount, setDelUSelectedCount ] = React.useState(2)

    const[users,setUsers] = React.useState([])
    const FetchUsers=() => {fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))}
    useEffect(()=>{
      FetchUsers()
    },[])
  
   console.log(users);
    const [isAddNewDisplay, setAddNewUser] = React.useState(false)
    const [selcetedName , setSelectedName] = React.useState("")
    const [ checked , setChecked] = React.useState(false)
    function settingChecked(){
      setChecked(!setChecked)
    }
   function DisplayAddNewUser(){
      setAddNewUser(!isAddNewDisplay)
   }
  
  return (
    <main className='w-full h-screen flex'>
      <Navbar activebtnNumber={2} loggedIn={loggedIn}/>
      <motion.article 
         initial={{opacity:0, background:"#f5f5f5"}}
         animate={{opacity:1}}
         transition={{delay:0, duration:0.6}}
        className='w-full h-full rounded-tl-3xl bg-white p-4 overflow-auto flex flex-col items-center justify-center gap-4 relative'>
        
        {isAddNewDisplay ? <Popup handleClick={DisplayAddNewUser}/> : ""}
        <section className='relative flex flex-col w-full gap-4 items-start text-lgx  py-5 px-4 bg-background text-white rounded-2xl'>
          
          <div className='flex w-full items-center justify-between'>
          
          <div className='flex gap-4 items-center'>
            <img src={peopleIcon} alt="" className='w-10' />
            <p className='text-2xl'>Users</p>
          </div>
          
          <div className='bg-white bg-opacity-95 text-background rounded-2xl items-center h-12 w-1/2 flex px-2 gap-2'>
            <img src={SearchIcon} alt="" />
            <input type="text"  placeholder='search' className='bg-transparent outline-none'/>
          </div>

          <button onClick={DisplayAddNewUser} className='group hover:scale-105 hover:bg-opacity-90 duration-300 flex items-center gap-2 px-4 rounded-2xl h-12 bg-pink-primary'>
            <p> add new user </p> 
            <span className='text-3xl rotate-180 group-hover:rotate-0 duration-300'>+</span>
          </button>
          </div>
          
          <DeleteUser ShouldDisplay={delUSelectedCount} name={selcetedName}/>
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
                  <UserListItem 
                    name={uData.name}
                    username={uData.username}
                    id={uData.id}
                    phone={uData.phone}
                    initialChecked={isChecked}
                    onToggle={toggleChecked} 
                    handleIdFromChild={handleIdFromChild}
                  />
                )
                })}
          </table>
        </section>
        
      </motion.article>
    </main>
  )
}

export default AllUser