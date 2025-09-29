import React, { useState } from "react";

function WorkoutForm({ onCreated }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://fitness-tracker-api-pb2t.onrender.com/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, notes }),
    })
      .then((res) => res.json())
      .then((newWorkout) => {
        setTitle("");
        setDate("");
        setNotes("");
        onCreated(newWorkout);
      })
      .catch((err) => console.error("Error creating workout:", err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Workout</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
        required
      />
      <input
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default WorkoutForm;

