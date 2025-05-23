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
  const features = [
    {
      name: "AI-Powered Inventory",
      description: "Automated inventory tracking using computer vision",
      icon: CameraIcon,
      path: "/inventory",
    },
    {
      name: "Smart Analytics",
      description: "Real-time insights and waste reduction metrics",
      icon: ChartBarIcon,
      path: "/analytics",
    },
    {
      name: "Menu Optimization",
      description: "AI-driven menu suggestions for better efficiency",
      icon: SparklesIcon,
      path: "/menu",
    },
    {
      name: "Waste Prediction",
      description: "Predict and prevent food spoilage",
      icon: ChartPieIcon,
      path: "/waste-analysis",
    },
  ];
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
              <span className="text-purple-800 dark:text-purple-400"> AI</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-3xl md:text-2xl text-purple-800 dark:text-purple-400 max-w-2xl mb-8 mx-auto"
            >
              Reduce waste, optimize inventory, and increase profitability with
              our AI-powered smart kitchen system.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white flex space-x-4 justify-center"
            >
              <Link
                to="/signup"
                className="bg-purple-500 text-white-800 rounded-full px-6 py-3 hover:bg-purple-700"
              >
                Get Started
              </Link>
              <Link
                to="/signin"
                className="rounded-full text-purple-500 border-2 px-6 py-3"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
        </section>
        {/*feature section */}
        <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20, delay: 0.2 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white max-w-3xl mx-auto text-center mb-10"
          >
            <h1 className="text-4xl mx-auto mb-5">Powerful Features</h1>
            <p className="mx-auto text-2xl text-purple-800 dark:text-purple-400">
              Everything you need to optimize your kitchen operations
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;
