import React from "react";

function WorkoutsList({ workouts, onSelect }) {
  return (
    <div>
      <h2>All Workouts</h2>
      <ul>
        {workouts.map((w) => (
          <li key={w.id}>
            <button onClick={() => onSelect(w.id)}>
              {w.title} ({w.date})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutsList;
