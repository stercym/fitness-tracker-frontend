import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import WorkoutsList from "./WorkoutsList";
import WorkoutForm from "./WorkoutForm";
import WorkoutDetail from "./WorkoutDetail";
import ProgressOverview from "./ProgressOverview";
import Goals from "./Goals";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [view, setView] = useState("workouts");
  const userId = 1; // demo user

  useEffect(() => {
    fetch("http://localhost:5000/api/workouts")
      .then((res) => res.json())
      .then((data) => setWorkouts(data))
      .catch(() => {});
  }, []);

  function handleCreated(newWorkout) {
    setWorkouts((prev) => [...prev, newWorkout]);
  }

  function handleUpdated(updatedWorkout) {
    setWorkouts((prev) =>
      prev.map((w) => (w.id === updatedWorkout.id ? updatedWorkout : w))
    );
  }

  function handleDeleted(id) {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
    setSelectedWorkout(null);
  }

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <Navbar current={view} onChange={setView} />

      {view === "workouts" && (
        <div>
          <WorkoutForm onCreated={handleCreated} />
          <WorkoutsList workouts={workouts} onSelect={setSelectedWorkout} />
          <WorkoutDetail
            id={selectedWorkout}
            onBack={() => setSelectedWorkout(null)}
            onUpdated={handleUpdated}
            onDeleted={handleDeleted}
          />
        </div>
      )}

      {view === "progress" && <ProgressOverview userId={userId} />}
      {view === "goals" && <Goals />}
    </div>
  );
}

export default App;


