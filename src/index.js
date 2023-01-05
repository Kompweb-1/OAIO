import React from "react";
import "./style/index.css";
import ReactDOM from "react-dom/client";
import { DarkModeContextProvider } from "./components/context/darkModeContext";
import { AuthContextProvider } from "./components/context/AuthContext";
import App from "./App";
import reportWebVitals from "./components/utils/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
