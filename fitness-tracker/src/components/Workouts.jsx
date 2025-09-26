import { useEffect, useState } from "react";
import WorkoutForm from "../components/WorkoutForm";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    fetch("http://127.0.0.1:5000/workouts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch workouts");
        }
        return res.json();
      })
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Callback to add newly created workout
  const handleWorkoutCreated = (newWorkout) => {
    setWorkouts((prev) => [...prev, newWorkout]);
  };

  return (
    <div>
      <h1>Workouts</h1>

      {/* Show loading or error states */}
      {loading && <p>Loading workouts...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Form for adding new workout */}
      <WorkoutForm onWorkoutCreated={handleWorkoutCreated} />

      {/* List of workouts */}
      {workouts.length > 0 ? (
        <ul>
          {workouts.map((w) => (
            <li key={w.id}>
              {w.date} — User ID: {w.user_id}
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No workouts found. Add one above!</p>
      )}
    </div>
  );
}
export default Workouts;