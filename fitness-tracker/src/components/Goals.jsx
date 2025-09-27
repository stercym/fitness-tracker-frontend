import React, { useState, useEffect } from "react";
import "./Goals.css"; // Import CSS

function Goals() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  return (
    <div className="goals-container">
      <h1 className="goals-title">Exercise Goals</h1>
      <ul className="goals-list">
        {goals.map((g) => (
          <li key={g.id} className="goal-item">
            {g.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;
