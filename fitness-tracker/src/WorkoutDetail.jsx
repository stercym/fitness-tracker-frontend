import React, { useState, useEffect } from "react";

function WorkoutDetail({ id, onBack, onUpdated, onDeleted }) {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fitness-tracker-api-pb2t.onrender.com/workouts/${id}`)
        .then((res) => res.json())
        .then((data) => setWorkout(data))
        .catch((err) => console.error("Failed to load workout:", err));
    }
  }, [id]);

  if (!id) return null;
  if (!workout) return <p>Loading...</p>;

  function handleUpdate() {
    const title = prompt("New title", workout.title);
    const notes = prompt("New notes", workout.notes);
    if (!title) return;

    fetch(`https://fitness-tracker-api-pb2t.onrender.com/workouts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...workout, title, notes }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setWorkout(updated);
        onUpdated(updated);
      })
      .catch((err) => console.error("Update failed:", err));
  }

  function handleDelete() {
    fetch(`https://fitness-tracker-api-pb2t.onrender.com/workouts/${id}`, { method: "DELETE" })
      .then(() => onDeleted(id))
      .catch((err) => console.error("Delete failed:", err));
  }

  return (
    <div>
      <h3>{workout.title}</h3>
      <p>Date: {workout.date}</p>
      <p>Notes: {workout.notes}</p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default WorkoutDetail;

