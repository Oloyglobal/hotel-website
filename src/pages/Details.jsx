import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      <div className="flex justify-center">
        <div className="w-full lg:w-[79.5%] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-[70px] mt-8 lg:mt-16">
          <div className="w-full md:w-[58%] flex flex-col md:flex-row items-start md:items-center">
            <Link to="/">
              <h1 className="text-cut2">
                Home <span>/</span>
              </h1>
            </Link>
            <h1 className="mt-2 md:mt-0 md:ml-2">Hotel Details</h1>
          </div>
          <div className="w-full md:w-[55%] mt-4 md:mt-0">
            <h1 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-cut">
              Blue Origin Fams
            </h1>
            <p className="text-cut2 text-sm md:text-[14px] md:ml-11">Galle, Sri Lanka</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-10 gap-4 md:gap-[10px]">
        <div className="w-full md:w-[40%] h-[200px] md:h-[400px]">
          <img
            src="https://res.cloudinary.com/dlb3doese/image/upload/v1729945663/Rectangle_5_2_oci66p.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-[35%] flex flex-col gap-4 md:gap-6">
          <div className="w-full h-[150px] md:h-[190px]">
            <img
              src="https://res.cloudinary.com/dlb3doese/image/upload/v1729946083/small_1_dwedz6.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-[150px] md:h-[185px]">
            <img
              src="https://res.cloudinary.com/dlb3doese/image/upload/v1729946099/small_2_svhqxw.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[90%] flex flex-col justify-center mx-auto gap-8 md:gap-[120px] mt-8 md:mt-10">
        <div className="flex flex-col md:flex-row w-full justify-center gap-8 md:gap-12">
          <div className="w-full md:w-[50%]">
            <h3 className="text-xl font-semibold mb-4">About the place</h3>
            <p className="text-cut2 text-sm md:text-base">
              Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell. Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
            </p>
          </div>
          <div className="w-full md:w-1/3 rounded-md p-6 bordd">
            <h2 className="text-lg font-semibold mb-4">Start Booking</h2>
            <p className="text-green-500 text-2xl mb-4">$200 <span className="text-cut2 text-base">per Day</span></p>
            <button className="w-full h-[35px] bg-cutt text-white rounded-md">Book Now!</button>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex flex-nowrap gap-16 p-4 md:justify-center">
            {[
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952534/item_ley9wt.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729953155/item_15_dxldhg.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952529/item_1_mdeaqg.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952529/item_2_oi167d.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952895/item_11_svl59x.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952895/item_12_o4fhjd.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952895/item_13_utbjzd.png",
              "https://res.cloudinary.com/dlb3doese/image/upload/v1729952533/item_10_dgtuzu.png"
            ].map((src, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={src} alt="" className="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 px-4 md:px-8 lg:px-28">Treasure to Choose</h2>
        <div className="w-full md:w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 mx-auto">
          {[
            { src: "https://res.cloudinary.com/dlb3doese/image/upload/v1729953591/pic_1_hrvjmm.png", title: "Green Lake", subtitle: "Nature" },
            { src: "https://res.cloudinary.com/dlb3doese/image/upload/v1729953591/pic_2_gzh9qs.png", title: "Dog Clubs", subtitle: "Pool" },
            { src: "https://res.cloudinary.com/dlb3doese/image/upload/v1729953593/Rectangle_3_pn1c6s.png", title: "Labour and Wait", subtitle: "Shopping" },
            { src: "https://res.cloudinary.com/dlb3doese/image/upload/v1729953600/Rectangle_3_1_sjomox.png", title: "Snorkeling", subtitle: "Beach" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
              <img src={item.src} alt="" className=" " />
              <h1 className="mt-2 font-semibold">{item.title}</h1>
              <p className="text-cut2">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;