import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import StuDashboardPage from "./pages/StuDashboardPage";
import StuProfilePage from "./pages/StuProfilePage";
import StuCourseRegPage from "./pages/StuCourseRegPage";
import StuSettingsPage from "./pages/StuSettingsPage";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Routes>
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<StuDashboardPage />} />
            <Route path="/profile" element={<StuProfilePage />} />
            <Route path="/course" element={<StuCourseRegPage />} />
            <Route path="/settings" element={<StuSettingsPage />} />
            <Route path="/*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
