import React from "react";
import Sec from "./Sec";
import Picked from "./Picked";
import Pickedd from "./Pickedd";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-full sm:w-[87%] flex flex-col sm:flex-row items-center justify-center p-3 gap-8 sm:gap-[120px]">
          <div className="w-full sm:w-[50%] h-auto sm:h-[458px] text-center sm:text-left">
            <h1 className="text-[32px] sm:text-[42px] font-[700] text-cut mt-7">Forget Busy Work,</h1>
            <h1 className="text-[32px] sm:text-[42px] font-[700] text-cut">Start Next Vacation</h1>
            <p className="text-[14px] sm:text-[16px] text-cut2 font-[300] mt-4 sm:mt-0">
              We provide what you need to enjoy your holiday with family. Time to
              make another memorable moments.
            </p>
            <button className="mt-6 sm:mt-9 h-[40px] w-[120px] bg-cutt text-white text-[15px] rounded-md">Show More</button>
            <div className="w-full sm:w-[70%] flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8 h-auto sm:h-[80px] mt-8 sm:mt-11">
              <div className="h-[80px] w-[30%] min-w-[100px] text-center sm:text-left">
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1729867892/eb8cj0izadxqaxgxwz9u.png" alt="" className="mx-auto sm:mx-0" />
                <p className="flex flex-col sm:flex-row mt-2 text-[15px] font-[500] gap-1 justify-center sm:justify-start">
                  <span>2500</span> <span className="text-cut2">Users</span>
                </p>
              </div>
              <div className="h-[80px] w-[30%] min-w-[100px] text-center sm:text-left">
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1729867919/nqhqnqwqpz3ujlyiluvp.png" alt="" className="mx-auto sm:mx-0" />
                <p className="flex flex-col sm:flex-row mt-2 text-[15px] font-[500] gap-1 justify-center sm:justify-start">
                  <span>200</span> <span className="text-cut2">treasure</span>
                </p>
              </div>
              <div className="h-[80px] w-[30%] min-w-[100px] text-center sm:text-left">
                <img src="https://res.cloudinary.com/dicxuebms/image/upload/v1729867966/zoosgr3y2g1emfk9zcnr.png" alt="" className="mx-auto sm:mx-0" />
                <p className="flex flex-col sm:flex-row mt-2 text-[15px] font-[500] gap-1 justify-center sm:justify-start">
                  <span>100</span> <span className="text-cut2">cities</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[45%] h-auto sm:h-[420px] mt-8 sm:mt-0">
            <img
              src="https://res.cloudinary.com/dicxuebms/image/upload/v1729867008/hpohowr1gfeksz0hxs0z.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Sec />
      <Picked/>
      <Pickedd/>
    </div>
  );
};

export default Hero;