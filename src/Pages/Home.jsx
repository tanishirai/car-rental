import React from "react";
import Booking from "../components/Booking/Booking";
import "./home.css";
import Hero from "../components/Hero/Hero";
import Work from "../components/Working/Work";
const Home = () => {
  return (
    <main>
      <div className="hero">
        <Hero />
      </div>
      <div className="booking">
        <Booking />
      </div>
      <div className="working">
        <Work />
      </div>
    </main>
  );
};

export default Home;
