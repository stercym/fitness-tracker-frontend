import React, { useState, useEffect } from "react";

function ProgressOverview({ userId }) {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    fetch(`https://fitness-tracker-api-pb2t.onrender.com/progress/${userId}`)
      .then((res) => res.json())
      .then((data) => setProgress(data))
      .catch((err) => console.error("Failed to fetch progress:", err));
  }, [userId]);

  if (!progress) return <p>Loading...</p>;

  return (
    <div>
      <h2>Progress Overview</h2>
      <p>Total Workouts: {progress.total_workouts}</p>
      <h3>Goals</h3>
      <ul>
        {progress.logs_by_goal.map((g) => (
          <li key={g.goal_id}>
            {g.goal_name} – {g.total_exercises} exercises
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgressOverview;

