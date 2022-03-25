import { useState } from "react";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import StartTracking from "./pages/StartTracking";
import FinishTracking from "./pages/FinishTracking";
import Routes from "./routes";
import { useAuth } from "./providers/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  
  const { isAuthenticated } = useAuth();



  return (
    
    isAuthenticated? <Orders /> : <Login />

  );
}

export default App;
