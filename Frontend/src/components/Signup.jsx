import React from 'react';
import { useForm } from 'react-hook-form';
import Login from './Login';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
 const location=useLocation()
 const navigate=useNavigate()
 const from =location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password
   }
    await axios.post("http://localhost:4001/user/signup",userInfo)
     .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Signup successfully!');
        navigate(from,{replace:true});
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }


     })
     .catch((err)=>{
     if(err.response){
      console.log(err);
       toast.error("Error:" +err.response.data.message);

      
     }
      
     })

  };

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
      <div className="border-[1px] shadow-md p-5 rounded-md w-[600px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to='/'
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>

          <h3 className="font-bold text-lg">SignUp</h3>

          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder='Enter your fullname'
              className='w-80 px-3 py-1 border outline-none rounded-md'
              {...register("fullname", { required: "FullName is required" })}
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
          </div>

          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder='Enter your email'
              className='w-80 px-3 py-1 border outline-none rounded-md'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email"
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder='Enter your password'
              className='w-80 px-3 py-1 border outline-none rounded-md'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className='flex justify-around mt-4 items-center'>
            <button
              type="submit"
              className='bg-pink-400 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
            >
              Signup
            </button>

            <div>
              <span>Have account? </span>
              <button
                type="button"
                className='underline text-blue-900 cursor-pointer'
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
             
            </div>
          </div>
        </form>
         <Login />
      </div>
    </div>
    </>
  );
  
}

export default Signup;
