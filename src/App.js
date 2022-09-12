import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StuDashboardPage from "./pages/StuDashboardPage";
import StuProfilePage from "./pages/StuProfilePage";
import StuCoursePage from "./pages/StuCoursePage"
import StuSettingsPage from "./pages/StuSettingsPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<StuDashboardPage />} />
        <Route path="/profile" element={<StuProfilePage />} />
        <Route path="/course" element={<StuCoursePage />} />
        <Route path="/settings" element={<StuSettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
