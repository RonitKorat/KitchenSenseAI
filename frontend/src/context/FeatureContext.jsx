import {Children, createContext } from "react";
import React from "react";
import {
  ChartBarIcon,
  SparklesIcon,
  ChartPieIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
export const FeatureContext = createContext();

const FeatureContextProvider = ({ children }) => {
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
      path: "/wasteprediction",
    },
  ];
  const value = { features };

  return (
    <FeatureContext.Provider value={value}>{children}</FeatureContext.Provider>
  );
};

export default FeatureContextProvider;
