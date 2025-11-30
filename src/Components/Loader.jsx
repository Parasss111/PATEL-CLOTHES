import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[ 999999] select-none">

      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <span className="text-4xl font-serif font-bold tracking-[12px] text-black">
          PATEL
        </span>

        <span className="text-sm font-medium tracking-[6px] text-gray-600 -mt-1">
          CLOTHES
        </span>
      </motion.div>

      {/* Subtle Fade Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        className="mt-6 text-gray-700 text-sm tracking-widest"
      >
        LOADING...
      </motion.p>
    </div>
  );
};

export default Loader;
