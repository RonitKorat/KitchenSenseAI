import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Inventory = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  const startCamera = () => setIsCameraOn(true);
  const stopCamera = () => setIsCameraOn(false);

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ opacity: 0.8, duration: 0.5 }}
        className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
      >
        <h1 className="pt-5 text-4xl font-bold text-gray-800 dark:text-white mb-4">
          AI-Powered Inventory Management
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Track and manage your inventory with real-time AI detection
        </p>

        <motion.div
          className="mx-25 mt-5 text-white text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div>
            <h2 className="text-2xl font-semibold">
              Real Time Stock Detection
            </h2>

            <div className="bg-gray-800 transition-colors duration-300 mt-5 mx-auto rounded-xl w-[400px] h-[250px] overflow-hidden flex items-center justify-center ">
              {isCameraOn && (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/png"
                  videoConstraints={videoConstraints}
                  width={400}
                  height={250}
                  placeholder="capture video"
                />
              )}
            </div>

            <div className="flex mt-5 justify-center gap-4 flex-wrap">
              <button
                className={`px-4 py-2 border-2 border-white rounded-xl bg-green-500 text-white-700 hover:bg-green-600 hover:text-white transition duration-300 disabled:opacity-50 ${
                  isCameraOn
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 cursor-cell"
                }`}
                onClick={startCamera}
                disabled={isCameraOn}
              >
                Start Camera
              </button>
              <button
                className={`px-4 py-2 border-2 border-white rounded-xl  text-white  transition duration-300 disabled:opacity-50 ${
                  !isCameraOn
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 cursor-cell"
                }`}
                onClick={stopCamera}
                disabled={!isCameraOn}
              >
                Stop Camera
              </button>
              <button
                className={`px-4 py-2 border-2 border-white rounded-xl  text-white hover:text-white transition duration-300 disabled:opacity-50  ${
                  !isCameraOn
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-800 hover:bg-pueple-700 cursor-cell"
                }`}
                onClick={captureImage}
                disabled={!isCameraOn}
              >
                Capture Image
              </button>
            </div>

            {capturedImage && (
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium mb-2">Captured Image:</h3>
                <img
                  src={capturedImage}
                  alt="Captured"
                  className="w-80 border-2 border-gray-300 rounded-md mx-auto"
                />
              </div>
            )}
          </div>
        </motion.div>
        <motion.div></motion.div>
      </motion.div>
    </>
  );
};

export default Inventory;
