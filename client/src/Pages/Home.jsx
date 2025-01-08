import React from "react";
import Booking from "../components/Booking/Booking";
import "./home.css";
import Hero from "../components/Hero/Hero";
import Work from "../components/Working/Work";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
const Home = () => {
  return (
    <main>
      <div className="hero">
        <Hero />
      </div>

      <div className="working">
        <Work />
      </div>
      <div className="faq">
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
