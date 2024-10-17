import React from 'react'
import Navbar from './navbar/Navbar'
const Form = () => {
 
  return (
    <main className="flex w-full">
      <Navbar activebtnNumber={4}/>
   <article className='w-full h-full rounded-tl-3xl bg-white py-4 px-4  overflow-auto flex flex-col items-start justify-center gap-8'>
    <section className='h-1/2 flex flex-col gap-8 justify-center ml-[5%]'>
    <header className='flex flex-col gap-2'>
      <h1 className='text-2xl'>Welcome to <span className='text-pink-primary font-semibold'>LUNCHRR</span> </h1>
      <h3 className='text-4xl'>log into your account</h3>
    </header>
    <form action="" className='flex flex-col w-full gap-4 p-4'>
      <input className='py-3 rounded-xl pl-3 leading-relaxed tracking-wider focus:outline-pink-primary' type="email" placeholder='email'/>
      <input className='py-3 rounded-xl pl-3 leading-relaxed tracking-wider focus:outline-pink-primary' type="password" placeholder='password' />
      <button type='submit' className='text-xl py-2 px-9 text-white text-opacity-90 rounded-xl bg-background w-max hover:scale-105 duration-300 hover:border-pink-primary border-[4px] border-background'>log in</button>
    </form>
    </section>
   </article>
   </main>
  )
}

export default Form