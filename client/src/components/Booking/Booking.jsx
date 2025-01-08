import React from "react";
import { FaCarSide, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="w-full bg-white shadow-lg flex flex-col p-8 lg:p-16 relative">
      <div className="mb-8">
        <p className="text-2xl font-bold m-0">Book a car</p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="car"
            className="flex items-center text-base font-semibold mb-1">
            <FaCarSide className="mr-2" />
            Select Your Car Type
          </label>
          <select
            name="car"
            id="car"
            className="border border-gray-300 rounded px-4 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Your Car Type</option>
            <option value="Maruti Suzuki Celerio">Maruti Suzuki Celerio</option>
            <option value="Maruti Suzuki WagonR">Maruti Suzuki WagonR</option>
            <option value="Tata Tiago">Tata Tiago</option>
            <option value="Hyundai Aura">Hyundai Aura</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="pick-up"
            className="flex items-center text-base font-semibold mb-1">
            <FaMapMarkerAlt className="mr-2" />
            Pick up
          </label>
          <select
            name="pick-up"
            id="pick-up"
            className="border border-gray-300 rounded px-4 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select Pick up location</option>
            <option value="Ayodhya">Ayodhya</option>
            <option value="varanasi">Varanasi</option>
            <option value="mirzapur">Mirzapur</option>
            <option value="lucknow">Lucknow</option>
            <option value="agra">Agra</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="drop-of"
            className="flex items-center text-base font-semibold mb-1">
            <FaMapMarkerAlt className="mr-2" />
            Drop off
          </label>
          <select
            name="drop-of"
            id="drop-of"
            className="border border-gray-300 rounded px-4 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select drop off location</option>
            <option value="Ayodhya">Ayodhya</option>
            <option value="varanasi">Varanasi</option>
            <option value="mirzapur">Mirzapur</option>
            <option value="lucknow">Lucknow</option>
            <option value="agra">Agra</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="pick-up-date"
            className="flex items-center text-base font-semibold mb-1">
            <FaRegCalendarAlt className="mr-2" />
            Pick up date
          </label>
          <input
            type="date"
            id="pick-up-date"
            className="border border-gray-300 rounded px-4 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="drop-of-date"
            className="flex items-center text-base font-semibold mb-1">
            <FaRegCalendarAlt className="mr-2" />
            Drop off date
          </label>
          <input
            type="date"
            id="drop-of-date"
            className="border border-gray-300 rounded px-4 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white py-4 px-6 rounded text-lg font-medium cursor-pointer hover:bg-orange-600 transition-colors duration-300 shadow-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Booking;
