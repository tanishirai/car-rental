import React from "react";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
const Home = () => {
  return (
    <main>
      <div className="mt-8 mr-12 mb-8 ml-12">
        <Hero />
      </div>
      <div className="mt-16 mr-[1.8rem] mb-16 ml-[1.8rem]">
        <Work />
      </div>
    </main>
  );
};

export default Home;
