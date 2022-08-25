import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken";
import ProtectedRoute from "./component/routing/ProtectedRoute";
import AuthContext from "./context/auth/authContext";

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
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <StuDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/profile" element={<StuProfilePage />} />
          <Route path="/course" element={<StuCourseRegPage />} />
          <Route path="/settings" element={<StuSettingsPage />} />
        </Route>
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
