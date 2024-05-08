import { createContext, useContext, useState } from "react";

export const AuthContetxt = createContext();

export const useAuthontext = () => {
  return useContext(AuthContetxt);
};

export const AuthContetxtProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("auth-user")) || null
  );
  return (
    <AuthContetxt.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContetxt.Provider>
  );
};
