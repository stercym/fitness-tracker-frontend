import { useEffect, useState } from "react";
import ExerciseLogForm from "./ExerciseLogForm";

function ExerciseLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/exercise_logs")
      .then((res) => res.json())
      .then(setLogs)
      .catch((err) => console.error("Failed to fetch logs:", err));
  }, []);

  return (
    <div>
      <h1>Exercise Logs</h1>
      <ExerciseLogForm onLogCreated={(log) => setLogs([...logs, log])} />
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            Workout {log.workout_id} – Exercise {log.exercise_id}:{" "}
            {log.sets} sets × {log.reps} reps ({log.weight} kg)
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ExerciseLogs;