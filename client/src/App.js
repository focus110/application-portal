import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import StuDashboardPage from "./pages/StuDashboardPage";
import StuProfilePage from "./pages/StuProfilePage";
import StuCourseRegPage from "./pages/StuCourseRegPage";
import StuSettingsPage from "./pages/StuSettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<StuDashboardPage />} />
        <Route path="/profile" element={<StuProfilePage />} />
        <Route path="/course" element={<StuCourseRegPage />} />
        <Route path="/settings" element={<StuSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
