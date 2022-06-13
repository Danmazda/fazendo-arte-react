import { createContext, useEffect, useState } from "react";
import { apiRequestsUsers } from '../services/api';
export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAdm, setIsAdm] = useState(false);
  const isJwtValid = async() =>{
    const response = await apiRequestsUsers.getUserByEmail();
    if(response.error){
      setIsSignedIn(false);
      localStorage.clear();
    }else{
      setIsSignedIn(true);
    }
  }
  useEffect(() => {
    if (isSignedIn && localStorage.getItem("adm")) {
      setIsAdm(true);
    } else {
      setIsAdm(false);
    }
  }, [isSignedIn]);
  useEffect(() => {
    isJwtValid();
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
