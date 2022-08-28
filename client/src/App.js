import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./component/routing/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StuDashboardPage from "./pages/StuDashboardPage";
import StuProfilePage from "./pages/StuProfilePage";
import StuCoursePage from "./pages/StuCoursePage";
import StuSettingsPage from "./pages/StuSettingsPage";

import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<StuDashboardPage />} />
              <Route path="/profile" element={<StuProfilePage />} />
              <Route path="/course" element={<StuCoursePage />} />
              <Route path="/settings" element={<StuSettingsPage />} />
            </Route>
          </Routes>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
