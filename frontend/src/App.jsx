import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WastePrediction from "./pages/WastePrediction";
import Features from "./pages/Features";
import React from "react";
import "./App.css";
import SignIn from "./pages/SignIn";
import Menu from "./pages/Menu";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/wasteprediction" element={<WastePrediction />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
