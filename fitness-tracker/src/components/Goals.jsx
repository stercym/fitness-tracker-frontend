import React, { useState, useEffect } from "react";
import "./Goals.css";

function Goals() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/goals")
      .then((res) => res.json())
      .then((data) => {
        setGoals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch goals:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="goals-container goals-empty">
        <p>Loading goals...</p>
      </div>
    );
  }

  return (
    <div className="goals-container">
      <div className="goals-header">
        <h1 className="goals-title">Fitness Goals</h1>
        <p className="goals-subtitle">
          Track your progress and achieve your fitness aspirations
        </p>
      </div>

      {goals.length > 0 ? (
        <div className="goals-grid">
          {goals.map((goal) => (
            <div key={goal.id} className="goal-card">
              <h3 className="goal-name">{goal.name}</h3>
              <div className="goal-description">
                {goal.description || "No description available"}
              </div>
              <div className="goal-progress">
                <div
                  className="goal-progress-bar"
                  style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                />
              </div>
              <div className="goal-metrics">
                <span>Progress</span>
                <span>{Math.floor(Math.random() * 100)}%</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="goals-empty">
          <p>No goals added yet. Start by creating your first fitness goal!</p>
        </div>
      )}
    </div>
  );
}

export default Goals;
