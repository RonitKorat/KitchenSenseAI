import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FeatureContext } from "../context/featureContext";
import React from "react";
const Home = () => {
  const { features } = useContext(FeatureContext);

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
                to="/login"
                className="rounded-full text-purple-500 border-2 px-6 py-3"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
        </section>
        {/*feature section */}
        <section className="bg-white dark:bg-gray-900 transition-colors duration-300 py-20">
          <div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
              {features.map((feature, index) => (
                <Link key={feature.name} to={feature.path} className="block">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-700 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-200" />
                    </motion.div>
                    <motion.h2
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-purple-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {feature.name}
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
