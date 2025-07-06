import React from 'react';
import banner from '../../public/Banner.jpg'

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  dark:bg-gray-900 dark:text-white">
    
      <div className=" order-2 md:order-1 w-full md:w-1/2 ">
        <div className="space-y-12 mt-12">
          <br />
          <br />
          <h1 className="font-bold text-4xl">
            Hello, Welcome to here to learn something{' '}
            <span className="text-pink-500">new every day!!!</span>
          </h1>
          <p className="text-xl">
            Welcome to our world of books — where stories come to life and knowledge knows no bounds. At our bookstore, we believe that every reader deserves a place to discover, learn, and escape into the pages of a great book. Whether you're looking for timeless classics, thrilling adventures, academic resources, or heartwarming tales, our curated collection is here to inspire your next great read.
          </p>
        </div>
        <br/>
  <div>

          <label className="input validator  dark:bg-gray-900 dark:text-white">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="Email" required />
  </label>
<div className="validator-hint hidden">Enter valid email address</div>
  </div>
<br / >
<button className="btn btn-secondary">Insert Eamil</button>
<br /><br />
      </div>
  
    

     {/* second  div for right  side image  */}

      <div className=" order-1 w-full md:w-1/2">
        <img
          src={banner} 
          alt="Descriptive"
          className="w-full h-auto "
        />
      </div>
    </div>
  );
}

export default Banner;
