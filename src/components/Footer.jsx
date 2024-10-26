import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex justify-center mt-16'>
      <div className="flex flex-col md:flex-row items-center justify-center w-[85%] gap-10 md:gap-20 p-4">
        <div className="h-[120px] w-full md:w-[86%]">
          <Link to="/">
            <h1 className="text-[22px] sm:text-[26px] font-[500] leading-[39px] text-cutt">
              Lanka<span className="text-cut">Stay<span>.</span></span>
            </h1>
          </Link>
          <p className='text-cut2 text-[14px] mt-2'>We kaboom your beauty holiday</p>
          <p className='text-cut2 text-[14px]'>instantly and memorable.</p>
        </div>
        <div className="h-[120px] w-full md:w-[20%] flex flex-col m-auto">
          <h2>Become hotel Owner</h2>
          <Link to="register" className='mt-5'>
            <button className='h-[40px] w-[120px] bg-cutt text-white rounded-lg'>Register Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
