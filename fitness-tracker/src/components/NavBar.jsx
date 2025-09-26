import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <img className ="logo" src="/home/stercy/Downloads/FitnessTracker.png" alt="logo" />
        <ul className="nav-links">
            <li><strong><Link to="/">Home</Link></strong></li>
            <li><strong><Link to="/users">Users</Link></strong></li>
            <li><strong><Link to="/goals">Goals</Link></strong></li>
            <li><strong><Link to="/workouts">Workouts</Link></strong></li>
            <li><strong><Link to="/exercises">Exercises</Link></strong></li>
            <li><strong><Link to="/exercise-logs">Exercise Logs</Link></strong></li>
        </ul>
    </nav>
  );
}
export default NavBar;