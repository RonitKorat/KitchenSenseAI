import { createContext, useState } from "react";
import React from "react";
export const userContext = createContext();


const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const resetState = () => {
    setEmail("");
    setconfirmPassword("");
    setpassword("");
  };
  const value = {
    email,
    setEmail,
    password,
    confirmPassword,
    setconfirmPassword,
    setpassword,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserContextProvider;
