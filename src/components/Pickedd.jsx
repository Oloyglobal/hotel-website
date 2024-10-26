import React from 'react';

const Pickedd = () => {
  return (
    <div>
      <div className='flex justify-center mt-28 m-auto'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[87%] p-5 m-auto">
          <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
            <h2 className='absolute text-[14px] text-center h-[30px] w-[120px] bg-cutt text-white translate-x-[128px] bdd'>
              Popular <span>Choice</span>
            </h2>
            <img 
              src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884381/Rectangle_3_2_amti6r.png" 
              alt="Shangri-La" 
          className='w-full'
            />
            <h2 className='mt-4 '>Shangri-La</h2>
            <p className='text-[14px] text-cut2 '>Colombo, Sri Lanka</p>
          </div>
          <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
            <img 
              src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884557/Rectangle_3_6_drnsbg.png" 
              alt="Top View" 
           className='w-full'


            />
            <h2 className='mt-4 '>Top View</h2>
            <p className='text-[14px] text-cut2 '>Hikkaduwe, Sri Lanka</p>
          </div>
          <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
            <img 
              src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884347/Rectangle_3_3_hvdjf7.png" 
              alt="Green Villa" 
           className='w-full'

    
            />
            <h2 className='mt-4 '>Green Villa</h2>
            <p className='text-[14px] text-cut2 '>Kandy, Sri Lanka</p>
          </div>
          <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
            <img 
              src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884746/pic_7_fhqrs4.png" 
              alt="Wodden Pit" 

           className='w-full'

            />
            <h2 className='mt-4 '>Wodden Pit</h2>
            <p className='text-[14px] text-cut2 '>Ambalangode, Sri Lanka</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[87%] p-5 m-auto">
        <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
          <img 
            src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884346/pic_9_e9iqo3.png" 
            alt="Boutiqe" 
           className='w-full'

      
          />
          <h2 className='mt-4 '>Boutiqe</h2>
          <p className='text-[14px] text-cut2 '>Kandy, Sri Lanka</p>
        </div>
        <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
          <img 
            src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884529/Rectangle_3_5_swo3vz.png" 
            alt="Modern" 
           className='w-full'

        
          />
          <h2 className='mt-4 '>Modern</h2>
          <p className='text-[14px] text-cut2 '>Nuwereliya, Sri Lanka</p>
        </div>
        <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
          <img 
            src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884347/pic_10_jprby2.png" 
            alt="Silver Rain" 
           className='w-full'

     
          />
          <h2 className='mt-4 '>Silver Rain</h2>
          <p className='text-[14px] text-cut2 '>Dehiwala, Sri Lanka</p>
        </div>
        <div className="h-[240px] w-full sm:w-[45%] md:w-[22%] relative">
          <h2 className='absolute text-[14px] text-center h-[30px] w-[120px] bg-cutt text-white translate-x-[128px] bdd'>
            Popular <span>Choice</span>
          </h2>
          <img 
            src="https://res.cloudinary.com/dicxuebms/image/upload/v1729884345/Rectangle_3_4_f3mviv.png" 
            alt="Cashville" 
           className='w-full'

          />
          <h2>Cashville</h2>
          <p className='text-[14px] text-cut2 '>Ampara, Sri Lanka</p>
        </div>
      </div>
    </div>
  );
};

export default Pickedd;
