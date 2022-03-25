import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./providers/AuthContext";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <AuthProvider>
        <App />
        <Toaster toastOptions={{
          error: {
            style: {
              background: "#EA1D2C",
              fontFamily: "Helvetica",
              color: "blanchedalmond"
            }
          }
        }}/>
      </AuthProvider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
