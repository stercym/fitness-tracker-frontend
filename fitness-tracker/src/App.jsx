import React, { useEffect, useState } from "react"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Goals from "./components/Goals";    
import Workouts from "./components/Workouts";
import NavBar from "./components/NavBar";
import Exercise_Logs from "./components/ExerciseLogs";
import Exercises from "./components/Exercises";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import "./App.css";
import "./components/Profile.css";
import "./components/NavBar.css";
import "./index.css";
import "./components/NavBar.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <NavBar user={user} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={user ? null : <Profile />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/workouts" element={<Workouts user={user} />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login" element={<Login onLogin={(u) => setUser(u)} />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
