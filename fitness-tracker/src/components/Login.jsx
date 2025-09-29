import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setMessage({ text: data.error, type: "error" });
        } else {
          setMessage({ text: "Login successful!", type: "success" });
          if (onLogin) onLogin(data.user);
          navigate("/workouts");
        }
      })
      .catch(() => setMessage({ text: "Something went wrong.", type: "error" }));
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
      {message && <p className={`form-message ${message.type}`}>{message.text}</p>}
    </div>
  );
}

export default Login;
