import React from "react";
import Car1 from "../../images/car-1.png";
import "./Hero.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="h-container">
        <div className="sub-cont">
          <p className="t-1">Plan your trip now</p>
          <p className="t-2">
            Save <span>big</span> with our car rental
          </p>
          <p className="t-3">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="b-1">
            <button className="b-r" onClick={() => navigate("/models")}>Book Ride &nbsp;<FaRegCheckCircle /></button>
            <button className="l-m" onClick={() => navigate("/learnmore")}>Learn More &nbsp;<MdKeyboardArrowRight /></button>
          </div>
        </div>
        <div className="img-cont">
          <img src={Car1} alt="car" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
