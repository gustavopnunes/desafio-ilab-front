import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useRequests from "../hooks/useRequests";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dpId, setDpId] = useState()
  const useRequest = useRequests();

  useEffect(() => {
    if (localStorage.getItem("@iLab/token")) {
      setIsAuthenticated(true);
      setToken(localStorage.getItem("@iLab/token"));

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
        const { userId } = jwtDecode(formatedToken)
        setDpId(userId)
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
      value={{ token, validateLogin, isAuthenticated, logout, dpId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
