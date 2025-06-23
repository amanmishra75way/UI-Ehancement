import React from "react";
import { motion } from "motion/react";
const Motion = () => {
  return (
    <div>
      <motion.div
        className="h-80 w-80 bg-red-500 border bored-white rounded-md"
        animate={{
          rotate: 360,
          scale: 1.2,
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      ></motion.div>
    </div>
  );
};

export default Motion;
