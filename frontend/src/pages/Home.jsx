import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import {
  ChartBarIcon,
  CameraIcon,
  SparklesIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
const Home = () => {
  return (
    <>
      <div className="pt-1">
        {/*hero*/}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Transform Your Kitchen with
              <span className="text-green-600 dark:text-green-400"> AI</span>
            </motion.h1>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
