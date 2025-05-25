import React, { useContext } from "react";
import { FeatureContext } from "../context/featureContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Features() {
  const { features } = useContext(FeatureContext);
  return (
    <>
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
    </>
  );
}

export default Features;
