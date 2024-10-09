import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import DashBoardTable from './pages/dashBoardTable'
function App() {
  
  return (
    <section className='w-full h-screen pt-4 bg-background flex overflow-hidden'>
      
      {/* <main className='w-full h-screen   '>
        <Dashboard />
      </main> */}
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Form/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default App
