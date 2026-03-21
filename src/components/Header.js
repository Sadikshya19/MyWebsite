import React from "react";
import { motion } from "framer-motion";


const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Sadikshya Shrestha</h1>
      <p>Software Engineer | Designer | Creator</p>
    </motion.header>
  );
};

export default Header;