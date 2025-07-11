import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Course from './Course'


function Cpath() {

  
  return (
   <>
   <div className='dark:bg-gray-900 dark:text-white'>
    <Navbar/>
  
     <Course/>
  
   <Footer/>
   </div>
   
   </>
  )
}

export default Cpath

