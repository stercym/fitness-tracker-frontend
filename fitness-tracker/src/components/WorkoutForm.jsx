import { useState } from "react";

export default function WorkoutForm({ onWorkoutCreated }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [userId, setUserId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const workoutData = { title, date, notes, user_id: userId };

    fetch("http://127.0.0.1:5000/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(workoutData),
    })
      .then((res) => res.json())
      .then((newWorkout) => {
        onWorkoutCreated(newWorkout);
        setTitle("");
        setDate("");
        setNotes("");
        setUserId("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Workout</h2>

      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="What is the workout called?"
        />
      </label>
      <br />

      <label>
        Notes:
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What do you want to achieve?"
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          placeholder="You want to achieve it by what date?"
        />
      </label>
      <br />

      
      <br />

      <br />

      <button type="submit" className="submit_workout">Create Workout</button>
    </form>
  );
}
