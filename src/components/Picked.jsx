import { ArrowBigRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Picked = () => {
  return (
    <div className="flex mt-10 sm:mt-16 lg:mt-20 xl:mt-24 justify-center">
      <div className="w-full px-4 sm:w-[95%] lg:w-[87%] flex flex-col lg:flex-row items-center justify-center gap-6 p-4 sm:p-6 lg:p-8">
        <div className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] w-full lg:w-[30%] rounded-2xl bg-img1 bg-cover bg-no-repeat bg-center relative">
          <div className="h-[35px] w-[170px] bg-cutt text-white flex text-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
            <Link to="/about">
              <p>
                <span>$50</span>{" "}
                <span className="font-[100]">
                  per night{" "}
                  <span className="inline-flex items-center ">
                    <ArrowBigRight />
                  </span>
                </span>
              </p>
            </Link>
          </div>
          <div className="absolute bottom-4 right-4 text-end text-white">
            <h1 className="leading-[30px] text-[17px]">Blue Origin Fams</h1>
            <p className="font-[300]">Galle, Sri Lanka</p>
          </div>
        </div>
        <div className="h-auto lg:h-[450px] w-full lg:w-[75%]">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-[50px]">
            <div className="h-[200px] w-full sm:w-[47%] rounded-2xl bg-img2 bg-cover bg-no-repeat bg-center relative">
              <div className="h-[35px] w-[170px] bg-cutt text-white flex text-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
                <p>
                  <span>$22</span> <span className="font-[100]">per night</span>
                </p>
              </div>
              <div className="absolute bottom-4 right-4 text-end text-white">
                <h1 className="leading-[30px] text-[17px]">Ocean Land</h1>
                <p className="font-[300]">Trincomalee, Sri Lanka</p>
              </div>
            </div>
            <div className="h-[200px] w-full sm:w-[47%] rounded-2xl bg-img3 bg-cover bg-no-repeat bg-center relative">
              <div className="h-[35px] w-[170px] bg-cutt text-white flex text-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
                <p>
                  <span>$856</span>{" "}
                  <span className="font-[100]">per night</span>
                </p>
              </div>
              <div className="absolute bottom-4 right-4 text-end text-white">
                <h1 className="leading-[30px] text-[17px]">Stark House</h1>
                <p className="font-[300]">Dehiwala, Sri Lanka</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-between mt-6 sm:mt-10">
            <div className="h-[200px] w-full sm:w-[47%] rounded-2xl bg-img4 bg-cover bg-no-repeat bg-center relative">
              <div className="h-[35px] w-[170px] bg-cutt text-white flex text-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
                <p>
                  <span>$62</span> <span className="font-[100]">per night</span>
                </p>
              </div>
              <div className="absolute bottom-4 right-4 text-end text-white">
                <h1 className="leading-[30px] text-[17px]">Vinna Vill</h1>
                <p className="font-[300]">Beruwala, Sri Lanka</p>
              </div>
            </div>
            <div className="h-[200px] w-full sm:w-[47%] rounded-2xl bg-img5 bg-cover bg-no-repeat bg-center relative">
              <div className="h-[35px] w-[170px] bg-cutt text-white flex text-center justify-center absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
                <p>
                  <span>$72</span> <span className="font-[100]">per night</span>
                </p>
              </div>
              <div className="absolute bottom-4 right-4 text-end text-white">
                <h1 className="leading-[30px] text-[17px]">Bobox</h1>
                <p className="font-[300]">Kandy, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picked;
