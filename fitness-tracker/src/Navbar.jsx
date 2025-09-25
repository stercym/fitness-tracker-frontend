import React from "react";

function Navbar({ current, onChange }) {
  return (
    <nav>
      <button onClick={() => onChange("workouts")} disabled={current === "workouts"}>Workouts</button>
      <button onClick={() => onChange("progress")} disabled={current === "progress"}>Progress</button>
      <button onClick={() => onChange("goals")} disabled={current === "goals"}>Goals</button>
    </nav>
  );
}

export default Navbar;
