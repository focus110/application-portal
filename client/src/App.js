import React, { useContext, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./component/routing/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StuDashboardPage from "./pages/StuDashboardPage";
import StuProfilePage from "./pages/StuProfilePage";
import StuCoursePage from "./pages/StuCoursePage";
import StuSettingsPage from "./pages/StuSettingsPage";
import setAuthToken from "./utils/setAuthToken";
import AuthContext from "./context/auth/authContext";
import Page404 from "./pages/Page404";
import Nav from "./component/Main/Nav";
import AvatarContext from "./context/avatar/avatarContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App(props) {
  const authContext = useContext(AuthContext);
  const avatarContext = useContext(AvatarContext);

  const { user } = authContext;

  // const goTo = useNavigate();

  useEffect(() => {
    authContext.loadUser();

    // if (!authContext.isAuthenticated) {
    //   goTo("/");
    // }
    // eslint-disable-next-line
    // avatarContext.getAvatar();
  }, []);

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<StuDashboardPage />} />
          <Route path="/profile" element={<StuProfilePage />} />
          <Route path="/course" element={<StuCoursePage />} />
          <Route path="/settings" element={<StuSettingsPage />} />
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
