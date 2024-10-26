import React from 'react'

const Sec = () => {
  return (
    <div className='flex m-auto items-center justify-center px-4 sm:px-0'>
      <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-6 items-center bg-cut3 w-full sm:w-[87%] gap-4 sm:gap-9 rounded-[20px] sm:rounded-[40px]">
        <div className="h-[60px] bg-white w-full sm:w-[20%] shadow-md flex items-center justify-center gap-4 sm:gap-7 rounded-md p-2 sm:p-0">
          <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1729871398/n86hbqsgiteu9lvh0hho.png" alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
          <p className="text-sm sm:text-base">Check Available</p>
        </div>
        <div className="h-[60px] bg-white w-full sm:w-[20%] shadow-md flex items-center justify-center gap-4 sm:gap-7 rounded-md p-2 sm:p-0">
          <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1729871557/Vector_uytnir.png" alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
          <p className="text-sm sm:text-base">Person <span>2</span><span>..</span></p>
        </div>
        <div className="h-[60px] bg-white w-full sm:w-[20%] shadow-md flex items-center justify-center gap-4 sm:gap-7 rounded-md p-2 sm:p-0">
          <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1729871583/add_location_alt_qgaezg.png" alt="" className="w-6 h-6 sm:w-auto sm:h-auto" />
          <p className="text-sm sm:text-base">Select Location</p>
        </div>
        <div className="h-[60px] bg-white w-full sm:w-[20%] shadow-md flex items-center justify-center gap-4 sm:gap-7 rounded-md p-2 sm:p-0">
          <button className='h-[45px] w-full sm:w-[130px] bg-cutt text-white rounded-md text-sm sm:text-base'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Sec