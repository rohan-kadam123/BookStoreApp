import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Cpath from './components/Cpath'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
   <>
   
   <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Cpath/>}/>
       <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
       <Route path='/signup' element={<Signup/>}/>
     </Routes>
  </div>

     
   
   </>
  )
}

export default App
