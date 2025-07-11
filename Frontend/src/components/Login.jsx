import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
    email:data.email,
    password:data.password
   }
    await axios.post("http://localhost:4001/user/login",userInfo)
     .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('Login successfully!');
         document.getElementById("my_modal_3").close();
        setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));     
                      
        },1000);    
      
      }


     })
     .catch((err)=>{
     if(err.response){
      console.log(err);
      toast.error("Error:" +err.response.data.message);
      setTimeout(() => {}, 1000);
      
     }
      
     })
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal  dark:bg-slate-900 dark:text-white">
        <div className="modal-box  dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg mb-4 mt-2">Login</h3>

            <div className='space-y-2'>
              <label>
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
              </label>
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className='mt-4 space-y-2'>
              <label>
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
              </label>
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div className='flex justify-between mt-6 items-center'>
              <button
                type='submit'
                className='bg-pink-400 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>

              <div className='text-sm'>
                <span>Not Registered? </span>
                <Link to="./signup" className='underline text-blue-900 cursor-pointer'>
                  SignUp
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login;
