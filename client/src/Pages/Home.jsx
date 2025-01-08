import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import Work from "../components/home/Work";
import Faq from "../components/home/Faq";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Home = () => {
  return (
    <motion.main initial="initial" animate="animate" className="min-h-screen">
      <motion.div variants={fadeInUp}>
        <Hero />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Work />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <Faq />
      </motion.div>
    </motion.main>
  );
};

export default Home;
