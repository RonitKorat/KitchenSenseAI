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
  const [isDark, setisDark] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setisDark(!isDark);
  };
  return (
    <>
      <motion.div className="flex items-center text-white justify-between  dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        {/* <div className="mt-5"> */}
        <div className="ml-10 text-3xl mt-10 dark:text-purple-400 dark:text-purple-700">
          <Link to="/home">SmartKitchen</Link>
        </div>
        <div className="mr-20 text-1.5xl mt-10">
          <ul className="flex gap-8">
            <li className="hover:text-purple-400">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:text-purple-400">
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <button onClick={toggleDarkMode} id="dark">
                {isDark ? (
                  <motion.div whileHover={{ rotate: 10 }}>
                    <SunIcon className="h-5 w-5 text-gray-300" />
                  </motion.div>
                ) : (
                  <MoonIcon
                    className="h-5 w-5 text-dark-300"
                    whileHover={{ rotate: 10 }}
                  />
                )}
              </button>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </motion.div>
    </>
  );
}
