import { useEffect, useState } from "react";
import ExerciseForm from "../components/ExerciseForm";

function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/exercises")
      .then((res) => res.json())
      .then(setExercises)
      .catch((err) => console.error("Failed to fetch exercises:", err));
  }, []);

  return (
    <div>
      <h1>Exercises</h1>
      <ExerciseForm onExerciseCreated={(e) => setExercises([...exercises, e])} />

      <ul>
  {exercises.map((ex) => (
    <li key={ex.id}>
      {ex.exercise_name} (Goal ID: {ex.goal_id})
    </li>
  ))}
</ul>

    </div>
  );
}
export default Exercises;