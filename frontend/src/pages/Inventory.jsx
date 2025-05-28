import { motion } from "framer-motion";
import React from "react";
import { useRef, useState } from "react";
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
        className="text-white text-center bg:purple:"
        intial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Live Camera Feed</h2>
        {isCameraOn && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
            style={{
              width: "640px",
              height: "480px",
              border: "2px solid #FFFFFF",
              borderRadius: "8px",
            }}
            className="mt-5 mx-auto border-2 solid white rounded-xl"
          />
        )}
        <div className="flex mt-5 justify-center gap-2">
          <button
            className="px-3 py-1.5 border-2 white rounded-xl hover:bg-purple-500 hover:text-white hover:transition-opacity-1 hover:duration-1000"
            onClick={startCamera}
            disabled={isCameraOn}
          >
            Start Camera
          </button>
          <button
            className="px-3 py-1.5 border-2 white rounded-xl hover:bg-purple-500 hover:text-white hover:transition-opacity-1 hover:duration-1000"
            onClick={stopCamera}
            disabled={!isCameraOn}
          >
            Stop Camera
          </button>
          <button
            className="px-3 py-1.5 border-2 white rounded-xl hover:bg-purple-500 hover:text-white hover:transition-opacity-1 hover:duration-1000"
            onClick={captureImage}
            disabled={!isCameraOn}
          >
            Capture Image
          </button>
          {capturedImage && (
            <div style={{ marginTop: "20px" }}>
              <h3>Captured Image:</h3>
              <img
                src={capturedImage}
                alt="Captured"
                style={{ width: "320px", border: "2px solid #ccc" }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Inventory;
