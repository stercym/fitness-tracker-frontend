import { useEffect, useState } from "react";
import ExerciseForm from "./ExerciseForm";
import "./Exercises.css";

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [goals, setGoals] = useState({});

  useEffect(() => {
    // Fetches all exercises from the backend
    fetch("https://fitness-tracker-api-pb2t.onrender.com/exercises")
      .then((res) => res.json())
      .then(setExercises)
      .catch((err) => console.error("Failed to fetch exercises:", err));

    // Fetch goals to display goal names instead of goal IDs
    fetch("https://fitness-tracker-api-pb2t.onrender.com/goals")
      .then((res) => res.json())
      .then((goalsData) => {
        const goalsMap = {};
        goalsData.forEach((goal) => {
          goalsMap[goal.id] = goal.name;
        });
        setGoals(goalsMap);
      })
      .catch((err) => console.error("Failed to fetch goals:", err));
  }, []);

  return (
    <div className="exercises-container">
      <h1 className="exercises-header">Exercise Library</h1>
      
      <ExerciseForm onExerciseCreated={(e) => setExercises([...exercises, e])} />

      {exercises.length > 0 ? (
        <ul className="exercise-list">
          {exercises.map((ex) => (
            <li key={ex.id} className="exercise-item">
              <h3 className="exercise-name">{ex.exercise_name}</h3>
              <p className="exercise-goal">
                Goal: {goals[ex.goal_id] || 'Loading...'}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="exercises-empty">
          <p>No exercises added yet. Start by adding your first exercise!</p>
        </div>
      )}
    </div>
  );
}
export default Exercises;