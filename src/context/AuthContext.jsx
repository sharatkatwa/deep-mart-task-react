import { createContext, useContext, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [AllUser, setAllUser] = useState(JSON.parse(localStorage.getItem("AllUsers")) || []);
  const [LoggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("LoggedInUser")) || null);
  

  const logoutFun = () => {

    localStorage.removeItem("LoggedInUser");
    setLoggedInUser(null);
    
  };

  return (
    <Auth.Provider value={{ AllUser, setAllUser, LoggedInUser, setLoggedInUser, logoutFun }}>{children}</Auth.Provider>
  );
};
export const UseAuth = () => useContext(Auth);
