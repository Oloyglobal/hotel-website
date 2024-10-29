import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };
  const handle = () =>{
    navigate('/login')
  }
  return (
    <div>
        <div className='flex gap-9 justify-center items-center  p-1'>
            <div className=" h-[600px] w-[40%] bg-white">
        
          <form action="" className='flex flex-col w-[70%] m-auto'>
          <Link to="/">
            <h1 className="text-[22px] sm:text-[26px] font-[500] leading-[39px] text-cutt ">
              Lanka<span className="text-cut">Stay<span>.</span></span>
            </h1>
          </Link>
            <label htmlFor="" className='mt-4'>Name</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Enter your name'/>
            <label htmlFor="" className='mt-4'>Email</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='ismailafeez080@gmail.com'/>
            <label htmlFor="" className='mt-4'>Phone No</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='With country code'/>
            <label htmlFor="" className='mt-4'>Country</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Country name'/>
            <label htmlFor="" className='mt-4'>Nic</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='National Identity No'/>
            <label htmlFor="" className='mt-4'>Username</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Username'/>
            <label htmlFor="" className='mt-4'>Password</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='5+ Characters'/>
          </form>
            </div>
            <div className=" h-[600px] w-[40%] bg-white">
           
            <h1 className="text-[22px] sm:text-[26px] font-[500] leading-[39px] text-cutt text-center ">
              Register <span className="text-cut">Your hotel<span>.</span></span>
            </h1>
      
            <form action="" className='flex flex-col w-[70%] m-auto'>
     
            <label htmlFor="" className='mt-4'>Hotel Name</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Full Name'/>
            <label htmlFor="" className='mt-4'>Registration No</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='PV1(LTD)'/>
            <label htmlFor="" className='mt-4'> Adress</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Locaion'/>
            <label htmlFor="" className='mt-4'>Upload Images</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Country name'/>
            <label htmlFor="" className='mt-4'>Upload Documents</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Upload'/>
            <label htmlFor="" className='mt-4'>Facilities</label>
            <input type="text" name="" id=""  className='h-[35px] border-[2px] p-2 text-[12px] rounded-lg' placeholder='Describe'/>
            <div className='w-[100%] m-auto flex flex-col mt-6'>
              <button className='h-[40px] w-[390px] bg-cutt text-white rounded-lg' onClick={handleLoginRedirect}>Register</button>

               <button onClick={handle} className='underline'> Login</button>
                
            </div>
           
          </form>
            </div>

        </div>
    </div>
  )
}

export default Register