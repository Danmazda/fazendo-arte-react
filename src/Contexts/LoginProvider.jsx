import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAdm, setIsAdm] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("adm")) {
      setIsAdm(true);
    }
  }, [isSignedIn]);
  useEffect(() => {
    if (localStorage.length !== 0) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, []);
  return (
    <LoginContext.Provider
      value={{ isSignedIn, setIsSignedIn, isAdm, setIsAdm }}
    >
      {children}
    </LoginContext.Provider>
  );
};
export default LoginProvider;