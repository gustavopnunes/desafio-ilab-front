import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useRequests from "../hooks/useRequests";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const useRequest = useRequests();
  
  useEffect(() => {
    if (localStorage.getItem("@iLab/token")) {
      setIsAuthenticated(true);
    }
    //eslint-disable-next-line
  }, []);
  
  const validateLogin = (loginData) => {
    const formatedLoginData = {
      email: loginData.login,
      phone: loginData.login,
      password: loginData.password,
    };


    console.log()

    const failToast = () => toast.error("Login inválido! Tente novamente");

    useRequest.post("login", formatedLoginData).then((result) => {

      if (!result) {
        failToast();
      }
      
      else {
        const formatedToken = result.token.replace("Bearer ", "");
        localStorage.setItem("@iLab/token", formatedToken);
        setToken(formatedToken);
        window.location.replace("/orders");
      }
    });
  };


  
  const logout = () => {
    localStorage.removeItem("@iLab/token");
    setIsAuthenticated(false);
    window.location.replace("/login");
  };

  return (
    <AuthContext.Provider
      value={{ token, validateLogin, isAuthenticated, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
