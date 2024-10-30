import React from 'react'
import { Link } from 'react-router-dom'

const Room = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <div className="w-full md:w-[20%] p-4 md:p-7 bg-white border-b md:border-r md:min-h-screen">
          <Link to="/">
            <h1 className="text-[22px] sm:text-[28px] md:text-[36px] font-[500] leading-[39px] text-cutt">
              Lanka<span className="text-cut">Stay<span>.</span></span>
            </h1>
          </Link>
          
          <nav className="flex md:flex-col gap-4 md:gap-6 mt-6 overflow-x-auto md:overflow-visible">
            <button className="flex items-center gap-3 min-w-fit">
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730209359/Vector_1_qflqn7.png" alt="" className="w-5 h-5" />
              <span className='text-cut4 whitespace-nowrap'>Dashboard</span>
            </button>
            <button className="flex items-center gap-3 min-w-fit">
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730209342/document-text_hagkj6.png" alt="" className="w-5 h-5" />
              <span className='text-cutt whitespace-nowrap'>Booking</span>
            </button>
            <button className="flex items-center gap-3 min-w-fit">
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730209351/Vector_2_aptje0.png" alt="" className="w-5 h-5" />
              <span className='text-cut4 whitespace-nowrap'>Refund</span>
            </button>
            <button className="flex items-center gap-3 min-w-fit md:mt-14">
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730209342/Vector_3_jj1snu.png" alt="" className="w-5 h-5" />
              <span className='text-cut4 whitespace-nowrap'>Message</span>
            </button>
            <button className="flex items-center gap-3 min-w-fit">
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730209342/Vector_4_sl8z0z.png" alt="" className="w-5 h-5" />
              <span className='text-cut4 whitespace-nowrap'>Help</span>
            </button>
            <button className="flex items-center gap-3 min-w-fit">
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730209342/Vector_5_fdbpog.png" alt="" className="w-5 h-5" />
              <span className='text-cut4 whitespace-nowrap'>Setting</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-[80%] bg-gray-100 p-4 md:p-10">
          {/* Header */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
            <div>
              <h1 className='text-[20px] sm:text-[23px] font-bold text-cut6'>Hello, User</h1>
              <p className='text-cut2'>Have a nice day</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className='border-r pr-4'>
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730211060/mdi_bell-badge_jkpezw.png" alt="" className='h-[25px]'/>
              </div>
              <div className='flex items-center gap-3'>
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730211185/Ellipse_132_t2lwbk.png" alt="" className="w-10 h-10" />
                <div>
                  <h1 className='text-cut6 flex items-center'>
                    Harflex 
                    <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730211336/mdi_chevron-down_im4glx.png" alt="" className="ml-2" />
                  </h1>
                  <p className='text-cut2'>user</p>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className='text-cutt font-[700] text-[20px] sm:text-[24px] mt-6'>Harflex Don</h1>

          {/* Search Section */}
          <div className='mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
            <div className='w-full sm:w-[70%] lg:w-[80%] relative'>
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730212331/Group_frdbif.png" alt="" className='absolute top-1/2 -translate-y-1/2 left-3 h-[16px]' />
              <input 
                type="text" 
                placeholder='Search Documents'
                className='w-full h-[45px] rounded-lg pl-10 pr-4 outline-none shadow-lg'
              />
            </div>
            <div className='flex items-center gap-4 text-sm sm:text-base'>
              <span>Sort by</span>
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730211336/mdi_chevron-down_im4glx.png" alt="" />
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730212858/Frame_1_q9bjf1.png" alt="" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className='mt-8 flex flex-col sm:flex-row gap-6 justify-between'>
            <div className='grid grid-cols-4 gap-3 w-full sm:w-auto'>
              <div className='aspect-square border-2 rounded flex items-center justify-center'>
                <img 
                  src="https://res.cloudinary.com/dicxuebms/image/upload/v1730278222/Vector_6_z4qm5h.png" 
                  alt="" 
                  className='w-6 h-6'
                />
              </div>
              <div className='aspect-square border-2 rounded flex items-center justify-center'>
                <img 
                  src="https://res.cloudinary.com/dicxuebms/image/upload/v1730278217/Vector_7_nzqotm.png" 
                  alt="" 
                  className='w-6 h-6'
                />
              </div>
              <div className='aspect-square border-2 rounded flex items-center justify-center'>
                <img 
                  src="https://res.cloudinary.com/dicxuebms/image/upload/v1730278217/Vector_8_g4iemr.png" 
                  alt="" 
                  className='w-6 h-6'
                />
              </div>
              <div className='aspect-square border-2 rounded flex items-center justify-center'>
                <img 
                  src="https://res.cloudinary.com/dicxuebms/image/upload/v1730278216/Vector_9_lowaen.png" 
                  alt="" 
                  className='w-6 h-6'
                />
              </div>
            </div>
            
            <div className='flex flex-wrap gap-4 items-center'>
              <button className="h-[50px] px-4 border flex items-center justify-between gap-2 min-w-[120px]">
                <span className='text-[14px]'>Booking</span>
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730211336/mdi_chevron-down_im4glx.png" alt="" />
              </button>
              <button className="h-[50px] px-4 border flex items-center justify-between gap-2 min-w-[120px]">
                <span className='text-[14px]'>Refund</span>
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730211336/mdi_chevron-down_im4glx.png" alt="" />
              </button>
              <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730280140/Create_xe87pt.png" alt="" className='h-[50px]' />
            </div>
          </div>

          {/* Booking List */}
          <div className='mt-8 bg-white rounded-lg p-6'>
            <div className='max-w-xl'>
              <h2 className="text-xl font-semibold">Booking List</h2>
              <p className="text-gray-600 mt-1">Lorem ipsum lorem uojuhn</p>
              
              <div className='mt-6 border-2 rounded-lg p-4'>
                <div className="relative h-[300px] rounded-2xl bg-img5 bg-cover">
                  <div className='absolute top-4 left-1/2 -translate-x-1/2 bg-cutt text-white px-6 py-2 rounded'>
                    $200 per night
                  </div>
                  <div className='absolute bottom-4 left-4 text-white'>
                    <p className="text-lg">Blue Origin Fams</p>
                    <p>Galle, Sri Lanka</p>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <p>20 Jan - 22 Jan</p>
                  <p>02 Days</p>
                  <p>Galle to Colombo Road 245,<br />Main Street, Galle.</p>
                  <p>Initial Payment $200</p>
                  <div className='flex items-center gap-4'>
                    <p>Total Payment $400</p>
                    <div className='flex gap-4'>
                      <button className='border p-2'>
                        <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730282074/Vector_11_mrsby6.png" alt="" />
                      </button>
                      <button className='border p-2'>
                        <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1730278216/Vector_10_buupx4.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Room