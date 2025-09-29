import { useEffect, useState } from "react";
import ExerciseLogForm from "./ExerciseLogForm";
import "./ExerciseLogs.css";

function ExerciseLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fitness-tracker-api-pb2t.onrender.com/exercise_logs")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch exercise logs");
        return res.json();
      })
      .then((data) => {
        setLogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch logs:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="exercise-logs">
        <div className="loading-state">
          <p>Loading exercise logs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="exercise-logs">
        <div className="error-state">
          <p>Error: {error}</p>
          <p>Please try again later or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-logs">
      <div className="exercise-logs-header">
        <h1 className="exercise-logs-title">Exercise Logs</h1>
        <p className="exercise-logs-subtitle">
          Track and monitor your progress with detailed exercise logs
        </p>
      </div>

      <div className="exercise-logs-content">
        <div className="logs-form-section">
          <ExerciseLogForm onLogCreated={(log) => setLogs([...logs, log])} />
        </div>

        <div className="logs-list-section">
          {logs.length > 0 ? (
            <ul className="logs-list">
              {logs.map((log) => (
                <li key={log.id} className="log-item">
                  <div className="log-workout-info">
                    Workout #{log.workout_id} – Exercise #{log.exercise_id}
                  </div>
                  <div className="log-details">
                    <div className="log-stat">
                      <div className="log-stat-label">Sets</div>
                      <div className="log-stat-value">{log.sets}</div>
                    </div>
                    <div className="log-stat">
                      <div className="log-stat-label">Reps</div>
                      <div className="log-stat-value">{log.reps}</div>
                    </div>
                    <div className="log-stat">
                      <div className="log-stat-label">Weight</div>
                      <div className="log-stat-value">{log.weight} kg</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="logs-empty">
              <p>No exercise logs recorded yet. Start by logging your first exercise!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ExerciseLogs;