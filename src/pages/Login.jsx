'use client'

import { Link } from "react-router-dom"


export default function Login() {
  return (
    <div className='flex flex-col lg:flex-row w-full min-h-screen p-4 lg:p-0'>
      <div className="w-full lg:w-1/2 h-[400px] lg:h-screen bg-img8 bg-cover rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-none flex items-center justify-center mb-4 lg:mb-0">
        <div className="rounded-[20px] w-[85%] h-[85%] flex items-center justify-center bg-slate-200 bg-opacity-80">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-cutt">
            Lanka<span className="text-cut">Stay<span>.</span></span>
          </h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 lg:p-8"> 
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Create Account</h1>
        <form className='flex flex-col w-full max-w-md'>
          <label className='flex flex-col mb-4'>
            <span className="mb-1">Name</span>
            <input type="text" placeholder='Enter your name' className='h-12 px-4 border-2 rounded' />   
          </label>
          <label className='flex flex-col mb-4'>
            <span className="mb-1">E-mail</span>
            <input type="email" placeholder='name@example.com' className='h-12 px-4 border-2 rounded' />
          </label>
          <label className='flex flex-col mb-4'>
            <span className="mb-1">Phone No</span>
            <input type="tel" placeholder='With Country Code' className='h-12 px-4 border-2 rounded' />
          </label>
          <label className='flex flex-col mb-4'>
            <span className="mb-1">Country</span>
            <input type="text" placeholder='Country Name' className='h-12 px-4 border-2 rounded' />
          </label>
          <label className='flex flex-col mb-4'>
            <span className="mb-1">Username</span>
            <input type="text" placeholder='Username' className='h-12 px-4 border-2 rounded' />
          </label>
          <label className='flex flex-col mb-6'>
            <span className="mb-1">Password</span>
            <input type="password" placeholder='6+ characters' className='h-12 px-4 border-2 rounded' />
          </label>
          <div className='flex flex-col items-center'> 
            <p className='text-xs mb-4 text-center'>
              By signing up you agree to <span className='text-cutt'>terms and conditions</span> at zoho
            </p>
            <Link to="register">
              <button className='h-12 w-full max-w-xs bg-cutt text-white rounded-lg mb-4'>Register</button>
            </Link>
            <Link to="login" className='text-sm underline'>
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
