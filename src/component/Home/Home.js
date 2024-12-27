import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="px-4 py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-col items-center gap-8">
              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 text-left md:text-left"
              >
                <p className="text-lg md:text-xl mb-3">Apple Watch Studio</p>
                <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
                  Choose a case.
                  <br /> Pick a band.
                  <br /> Create your own style.
                </h1>
                <Link to="/WatchStudio">
                  <motion.button
                    className="bg-blue-600 text-white rounded-full py-2 px-6 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="w-full md:w-1/2 relative mt-8 md:mt-0"
              >
                <motion.img
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735232456/MYA33ref_SR_S10_VW_PF_tzuwlr.jpg"
                  alt="band"
                  className="w-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
                <motion.img
                  src="https://res.cloudinary.com/dzaz9bsnw/image/upload/v1735232284/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_ae9kbd.png"
                  alt="watch"
                  className="w-full absolute -top-0 md:top-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
