import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCar, FaCalendarAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const Work = () => {
  return (
    <section id="working">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-semibold mb-4">How It Works</p>
        <p className="text-gray-600 text-center mb-8">
          Renting a car with us is as easy as cruising down the highway! Here's
          the lowdown:
        </p>
        <div className="flex flex-wrap gap-8 items-center justify-center overflow-x-hidden">
          {/* Select Car */}
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-white text-5xl bg-orange-500 p-4 rounded-full w-24 h-24 flex items-center justify-center">
              <FaCar />
            </span>
            <div className="text-lg font-semibold">
              <p>Select Car</p>
            </div>
          </div>

          {/* Pick Up Location */}
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-white text-5xl bg-orange-500 p-4 rounded-full w-24 h-24 flex items-center justify-center">
              <FaLocationDot />
            </span>
            <div className="text-lg font-semibold">
              <p>Choose pick up & drop off location</p>
            </div>
          </div>

          {/* Pick Up Date */}
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-white text-5xl bg-orange-500 p-4 rounded-full w-24 h-24 flex items-center justify-center">
              <FaCalendarAlt />
            </span>
            <div className="text-lg font-semibold">
              <p>Choose pick up drop off date</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center justify-center gap-4">
            <span className="text-white text-5xl bg-orange-500 p-4 rounded-full w-24 h-24 flex items-center justify-center">
              <RiSecurePaymentLine />
            </span>
            <div className="text-lg font-semibold">
              <p>Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
