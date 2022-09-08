import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import AvatarState from "./context/avatar/AvatarState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthState>
      <AlertState>
        <AvatarState>
          <App />
        </AvatarState>
      </AlertState>
    </AuthState>
  </React.StrictMode>
);
