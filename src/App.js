import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <RegisterPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
