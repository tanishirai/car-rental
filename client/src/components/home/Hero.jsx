import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { assets } from "../../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="flex flex-col md:flex-row w-full">
        {/* Left content container */}
        <div className="w-full md:w-[30%] flex flex-col items-center md:items-start justify-start mt-12 transition-all duration-400">
          <p className="text-2xl font-bold">Plan your trip now</p>
          <p className="text-5xl font-black my-5">
            Save <span className="text-orange-500">big</span> with our car
            rental
          </p>
          <p className="text-gray-600 text-center md:text-left">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>

          {/* Buttons container */}
          <div className="flex items-center space-x-4 my-8">
            <button
              onClick={() => navigate("/models")}
              className="flex items-center justify-center px-4 py-3 bg-orange-500 text-white rounded 
                        shadow-lg shadow-orange-500/35 border-2 border-orange-500 text-lg">
              Book Ride <FaRegCheckCircle className="ml-2" />
            </button>

            <button
              onClick={() => navigate("/learnmore")}
              className="flex items-center justify-center px-4 py-3 bg-black text-white rounded 
                        border-2 border-black text-lg transition-all duration-400
                        hover:bg-transparent hover:text-black">
              Learn More <MdKeyboardArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Right image container */}
        <div
          className="hidden md:flex w-[70%] bg-[url('/src/images/bg-1.png')] bg-center bg-no-repeat bg-cover 
                      items-center justify-center transition-all duration-400">
          <img src={assets.car} alt="car" className="w-[40rem] h-auto" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
