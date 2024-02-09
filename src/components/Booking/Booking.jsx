import React from 'react'
import { FaCarSide ,FaMapMarkerAlt,FaRegCalendarAlt } from "react-icons/fa";
import "./Booking.css";


const Booking = () => {
  return (
    <div className='container'>
        <div className="text-container">
            <p>Book a car</p>
        </div>
        <form>
            <div className='form-box'>
            <label htmlFor="car"> <FaCarSide />&nbsp;Select Your Car Type</label>
            <select name="car" id="car" className='sl'>
                <option>Select Your Car Type</option>
                <option value="Maruti Suzuki Celerio">Maruti Suzuki Celerio</option>
                <option value="Maruti Suzuki WagonR">Maruti Suzuki WagonR</option>
                <option value="Tata Tiago">Tata Tiago</option>
                <option value="Hyundai Aura">Hyundai Aura</option>
            </select>
            </div>
            <div className='form-box'>
            <label htmlFor="pick-up"><FaMapMarkerAlt />&nbsp;Pick up</label>
            <select name="pick-up" id="pick-up" className='sl'>
                <option>Select Pick up location</option>
                <option value="Ayodhya">Ayodhya</option>
                <option value="varanasi">varanasi</option>
                <option value="mirzapur">mirzapur</option>
                <option value="lucknow">lucknow</option>
                <option value="agra">agra</option>
            </select>
            </div>
            <div className='form-box'>
            <label htmlFor="drop-of"><FaMapMarkerAlt />&nbsp;drop of</label>
            <select name="drop-of" id="drop-of" className='sl'>
                <option>Select drop of location</option>
                <option value="Ayodhya">Ayodhya</option>
                <option value="varanasi">varanasi</option>
                <option value="mirzapur">mirzapur</option>
                <option value="lucknow">lucknow</option>
                <option value="agra">agra</option>
            </select>
            </div>
            <div className='form-box'>
            <label htmlFor="pick-up-date"> <FaRegCalendarAlt />&nbsp;pick-up</label>
           <input type="date" id="pick-up-date" className='sl'/>
            </div>
            <div className='form-box'>
            <label htmlFor="drop-of-date"> <FaRegCalendarAlt />&nbsp;drop-of</label>
           <input type="date" id="drop-of-date"className='sl'/>
            </div>
            <button type="submit">Submit</button>
        </form>
      
    </div>
  )
}

export default Booking
