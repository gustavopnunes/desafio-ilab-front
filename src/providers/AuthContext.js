import { createContext, useContext, useEffect, useState } from "react";
import useRequests from "../hooks/useRequests";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const useRequest = useRequests();

  useEffect(() => {
     if (localStorage.getItem("@iLab/token")) {
         setIsAuthenticated(true)
     }
    //eslint-disable-next-line
  }, []);

  if (token){
      console.log("logado")
  } else {
      console.log("deslogado")
  }

  const validateLogin = (loginData) => {
    const formatedLoginData = {
      email: loginData.login,
      phone: loginData.login,
      password: loginData.password,
    };

    useRequest.post("login", formatedLoginData).then((result) => {
      if (result.token) {
        const formatedToken = result.token.replace("Bearer ", "");
        localStorage.setItem("@iLab/token", formatedToken);
        setToken(formatedToken);
      } else {
        console.log("login invalido!");
      }
    });
  };

  return (
    <AuthContext.Provider value={{token, validateLogin, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
