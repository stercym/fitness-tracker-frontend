import React, { useEffect, useState } from "react";

function WorkoutDetail({ id, onBack, onUpdated, onDeleted }) {
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/workouts/${id}`)
        .then((res) => res.json())
        .then((data) => setWorkout(data))
        .catch((err) => console.error("Failed to load workout:", err));
    }
  }, [id]);

  if (!id) return null;
  if (!workout) return <p>Loading...</p>;

  function handleUpdate() {
    const title = prompt("New title", workout.title);
    if (!title) return;

    fetch(`http://localhost:5000/api/workouts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...workout, title }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setWorkout(updated);
        onUpdated(updated);
      })
      .catch((err) => console.error("Update failed:", err));
  }

  function handleDelete() {
    fetch(`http://localhost:5000/api/workouts/${id}`, { method: "DELETE" })
      .then(() => onDeleted(id))
      .catch((err) => console.error("Delete failed:", err));
  }

  return (
    <div>
      <h2>{workout.title}</h2>
      <p>{workout.date}</p>
      <p>{workout.notes}</p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default WorkoutDetail;
