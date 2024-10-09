import React from 'react'

const Profile = (props) => {
  
  return (
    <div className='w-full py-8 border-t-2 flex items-center justify-center gap-3'>
      <img src={props.userUrl} alt="" className='w-16 h-16 rounded-md'/>
      <div className=''>
        <h1>
          {props.userName}
        </h1>
        <h2 className='text-sm opacity-90'>{props.userAcces}</h2>
      </div>
    </div>
  )
}

export default Profile