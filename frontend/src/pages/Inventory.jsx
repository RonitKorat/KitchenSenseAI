import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
const Inventory = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [images, setImages] = useState([]);

  const [isDragging, setIsDragging] = useState("");

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user",
  };

  // useEffect(() => {
  //   console.log("Updated images:", images);
  // }, [images]);

  const uploadImages = async () => {
    console.log(images);
    const formData = new FormData();
    for (const image of images) {
      const response = await fetch(image.preview);
      const blob = await response.blob();
      formData.append("images", blob, image.file.name);
    }

    try {
      let res = await axios.post("http://127.0.0.1:8000/upload", formData);

      console.log("Upload success", res.data);
    } catch (error) {
      console.log("error while uploading..");
    }
  };

  const startCamera = () => setIsCameraOn(true);
  const stopCamera = () => setIsCameraOn(false);

  const captureImage = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);

      // handleUploadCapturedImage(imageSrc);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOnDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
    // console.log(files)
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const newImages = imageFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      dimensions: null,
    }));

    const loadImagesWithDimensions = newImages.map(
      (image) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            image.dimensions = {
              width: img.width,
              height: img.height,
            };
            resolve(image);
          };
          img.src = image.preview;
        })
    );

    Promise.all(loadImagesWithDimensions).then((resolvedImages) => {
      setImages((prev) => [...prev, ...resolvedImages]);
    });

    console.log(images);
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

            <div className="bg-gray-600 transition-colors duration-300 mt-5 mx-auto rounded-xl w-[400px] h-[250px] overflow-hidden flex items-center justify-center ">
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
        <motion.div className="mt-20">
          <div>
            <div
              className={`w-250 h-50 mx-auto border-2 border-dashed rounded-lg p-8 text-center ${
                isDragging
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-gray-300 dark:border-gray-600"
              }`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleOnDrop}
            >
              <div className="flex space-x-4 justify-center mt-15 ">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <span>Choose Files</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    // ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleFileInput}
                  />
                </label>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Supports: PNG, JPG, GIF
                </div>
              </div>
            </div>
          </div>
          <button
            className="mt-10 px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-white"
            onClick={uploadImages}
            type="button"
          >
            Submit
          </button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Inventory;
