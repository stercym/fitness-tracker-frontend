import { Link } from "react-router-dom";
import Logout from "./Logout";

function NavBar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://file.aiquickdraw.com/imgcompressed/img/compressed_d13f8ff268f5c863836e3b2f1c1edc91.webp"
        alt="logo"
      />
      <ul className="nav-links">
        <li><strong><Link to="/">Home</Link></strong></li>
        <li><strong><Link to="/users">Users</Link></strong></li>
        <li><strong><Link to="/goals">Goals</Link></strong></li>
        <li><strong><Link to="/workouts">Workouts</Link></strong></li>
        <li><strong><Link to="/exercises">Exercises</Link></strong></li>
        <li><strong><Link to="/about">About</Link></strong></li>
      </ul>

      <div className="auth-links">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Logout onLogout={onLogout} />
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
            <span> | </span>
            <Link to="/users">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
