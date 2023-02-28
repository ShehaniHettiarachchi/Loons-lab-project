import './App.css';
import React from 'react';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import UserProfile from './components/pages/Userprofile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
