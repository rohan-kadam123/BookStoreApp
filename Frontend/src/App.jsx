import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Cpath from './components/Cpath'
import Signup from './components/Signup'
import Contact from './components/Contact'
import About from './components/About'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {
   const [authUser,setAuthUser]=useAuth();
    console.log(authUser);
    
  return (
   <>
   
   <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={authUser?<Cpath/>:<Navigate to="/signup"/>}/>
       <Route path='/contact' element={<Contact/>}/>
         <Route path='/about' element={<About/>}/>
       <Route path='/signup' element={<Signup/>}/>
     </Routes>
      <Toaster position="top-center" reverseOrder={false}/>
  </div>

     
   
   </>
  )
}

export default App
