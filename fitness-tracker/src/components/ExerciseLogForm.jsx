import { useState } from "react";

function ExerciseLogForm({ onLogCreated }) {
  const [workoutId, setWorkoutId] = useState("");
  const [exerciseId, setExerciseId] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newLog = {
      workout_id: workoutId,
      exercise_id: exerciseId,
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseFloat(weight),
    };

    fetch("http://127.0.0.1:5000/exercise_logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLog),
    })
      .then((res) => res.json())
      .then((data) => {
        onLogCreated(data);
        setWorkoutId("");
        setExerciseId("");
        setSets("");
        setReps("");
        setWeight("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Exercise Log</h2>

      <label>
        Workout ID:
        <input
          type="number"
          value={workoutId}
          onChange={(e) => setWorkoutId(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Exercise ID:
        <input
          type="number"
          value={exerciseId}
          onChange={(e) => setExerciseId(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Sets:
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Reps:
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Weight (kg):
        <input
          type="number"
          step="0.1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <br />

      <button type="submit">Add Log</button>
    </form>
  );
}
export default ExerciseLogForm;