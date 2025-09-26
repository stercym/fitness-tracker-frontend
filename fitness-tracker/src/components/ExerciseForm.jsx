import { useState, useEffect } from "react";

function ExerciseForm({ onExerciseCreated }) {
  const [exerciseName, setExerciseName] = useState("");
  const [goalId, setGoalId] = useState("");
  const [goals, setGoals] = useState([]);

  // Fetch all goals for the dropdown
  useEffect(() => {
    fetch("http://127.0.0.1:5000/goals")
      .then((res) => res.json())
      .then(setGoals)
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newExercise = {
      exercise_name: exerciseName,
      goal_id: parseInt(goalId),
    };

    fetch("http://127.0.0.1:5000/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExercise),
    })
      .then((res) => res.json())
      .then((data) => {
        onExerciseCreated(data);
        setExerciseName("");
        setGoalId("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Exercise</h2>

      <label>
        Exercise Name:
        <input
          type="text"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Goal:
        <select
          value={goalId}
          onChange={(e) => setGoalId(e.target.value)}
          required
        >
          <option value="">-- Select Goal --</option>
          {goals.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </label>
      <br />

      <button type="submit">Add Exercise</button>
    </form>
  );
}
export default ExerciseForm;