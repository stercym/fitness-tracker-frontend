import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import Goals from "./components/Goals";    
import Workouts from "./components/Workouts";
import NavBar from "./components/NavBar";
import Exercise_Logs from "./components/ExerciseLogs";
import Exercises from "./components/Exercises";
import "./App.css";
import "./components/Profile.css";
import "./components/NavBar.css";
import "./index.css";
import "./components/NavBar.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/users" element={<Profile />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercise_logs" element={<Exercise_Logs />} />
      </Routes> 
    </Router>
  );
}

export default App;
