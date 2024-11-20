import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import AllUser from './pages/allUser'
import Convert from './pages/Calendar'
import DashBoardTable from './pages/dashBoardTable'
function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <section className='w-full h-screen pt-4 bg-gray-900 flex overflow-hidden'>
      
      {/* <main className='w-full h-screen   '>
        <Dashboard />
      </main> */}
      <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/Dashboard' element={<Dashboard loggedIn={isLoggedIn}/>} />
          <Route path='/Users' element={<AllUser loggedIn={isLoggedIn}/>} />
          <Route path='/Convert' element={<Convert loggedIn={isLoggedIn}/>} />
          <Route path='/' element={<Form loggedIn={isLoggedIn}/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default App
