import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
export default function Navbar() {
  return (
    <>
      <motion.div className="flex items-center text-white justify-between  dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* <div className="mt-5"> */}
        <div className="ml-10 text-3xl mt-10 dark:text-purple-400 dark:text-purple-700">
          <Link to="/home">SmartKitchen</Link>
        </div>
        <div className="mr-20 text-1.5xl">
          <ul className="flex gap- mt-10">
            <li className="hover:text-purple-400 px-4 py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-purple-400 px-4 py-2">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="hover:text-purple-400 px-4 py-2">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-purple-400 px-4 py-2">
              <Link to="/login">Login</Link>
            </li>
            <li className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              <Link to="/signup">SignUp</Link>
            </li>
            <li></li>
          </ul>
        </div>
        {/* </div> */}
      </motion.div>
    </>
  );
}
