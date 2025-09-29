import { useState } from "react";
import "./forms.css";

function ExerciseLogForm({ onLogCreated }) {
  const [workoutId, setWorkoutId] = useState("");
  const [exerciseId, setExerciseId] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const newLog = {
      workout_id: parseInt(workoutId),
      exercise_id: parseInt(exerciseId),
      sets: parseInt(sets),
      reps: parseInt(reps),
      weight: parseFloat(weight),
    };

    fetch("http://127.0.0.1:5000/exercise_logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLog),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create exercise log");
        return res.json();
      })
      .then((data) => {
        onLogCreated(data);
        // Reset form
        setWorkoutId("");
        setExerciseId("");
        setSets("");
        setReps("");
        setWeight("");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Log Exercise Details</h2>

        <div className="form-group">
          <label className="form-label">Workout ID</label>
          <input
            type="number"
            className="form-input"
            value={workoutId}
            onChange={(e) => setWorkoutId(e.target.value)}
            required
            min="1"
            placeholder="Enter workout ID"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Exercise ID</label>
          <input
            type="number"
            className="form-input"
            value={exerciseId}
            onChange={(e) => setExerciseId(e.target.value)}
            required
            min="1"
            placeholder="Enter exercise ID"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Sets</label>
          <input
            type="number"
            className="form-input"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            required
            min="1"
            placeholder="Number of sets"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Reps</label>
          <input
            type="number"
            className="form-input"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            required
            min="1"
            placeholder="Reps per set"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            min="0"
            step="0.1"
            placeholder="Weight used"
          />
        </div>

        {error && <p className="form-message error">{error}</p>}

        <button type="submit" className="form-button">
          Log Exercise
        </button>
      </form>
    </div>
  );
}

export default ExerciseLogForm;