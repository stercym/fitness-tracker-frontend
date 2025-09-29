import { useState } from "react";
import "./forms.css";

export default function WorkoutForm({ onWorkoutCreated, user }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!user) {
      setError("You must be logged in to create a workout.");
      return;
    }

    const workoutData = { title, date, notes, user_id: user.id };

    fetch("https://fitness-tracker-api-pb2t.onrender.com/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workoutData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to create workout");
        return res.json();
      })
      .then((newWorkout) => {
        onWorkoutCreated(newWorkout);
        setTitle("");
        setDate("");
        setNotes("");
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">Log New Workout</h2>

        <div className="form-group">
          <label className="form-label">Workout Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="E.g., Morning Run, Upper Body Strength"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Notes</label>
          <textarea
            className="form-textarea"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Record any details about your workout..."
          />
        </div>

        {error && <p className="form-message error">{error}</p>}

        <button 
          type="submit" 
          className="form-button"
          disabled={!user}
        >
          {user ? 'Create Workout' : 'Login to Create Workout'}
        </button>
      </form>
    </div>
  );
}
