import { useEffect, useState } from "react";
import WorkoutForm from "./WorkoutForm";
import "./Workouts.css";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function Workouts({ user }) {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch("http://127.0.0.1:5000/workouts", {
        credentials: 'include', // Sends cookies to identify the user
      })
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
    } else {
      // If no user is logged in, clear workouts and don't show loading state
      setWorkouts([]);
      setLoading(false);
    }
  }, [user]);

  const handleWorkoutCreated = (newWorkout) => {
    setWorkouts((prev) => [...prev, newWorkout]);
  };

  if (loading) {
    return (
      <div className="workouts-container">
        <div className="loading-state">
          <p>Loading your workouts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="workouts-container">
        <div className="error-state">
          <p>Error: {error}</p>
          <p>Please try again later or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="workouts-container">
      <div className="workouts-header">
        <h1 className="workouts-title">Your Workouts</h1>
        <p className="workouts-subtitle">
          Track and monitor your fitness journey with detailed workout logs
        </p>
      </div>

      <div className="workouts-content">
        <div className="workouts-form-section">
          <WorkoutForm onWorkoutCreated={handleWorkoutCreated} user={user} />
        </div>

        <div className="workouts-list-section">
          {user ? (
            workouts.length > 0 ? (
              <ul className="workouts-list">
                {workouts.map((workout) => (
                  <li key={workout.id} className="workout-item">
                    <div className="workout-header">
                      <h3 className="workout-title">{workout.title}</h3>
                      <span className="workout-date">
                        {formatDate(workout.date)}
                      </span>
                    </div>
                    {workout.notes && (
                      <p className="workout-details">{workout.notes}</p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty-state">
                <p>No workouts recorded yet. Start by adding your first workout!</p>
              </div>
            )
          ) : (
            <div className="empty-state">
              <p>Please log in to see your workouts.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Workouts;