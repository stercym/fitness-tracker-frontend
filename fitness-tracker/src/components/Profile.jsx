import React, { useState } from "react";

function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    goal: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://127.0.0.1:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Failed to create user");
      } else {
        setMessage("User registered successfully!");
        setFormData({ name: "", email: "", password: "", goal: "" });
      }
    } catch (err) {
      setMessage("An error occured while creating your account. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="app-heading">WELCOME TO YOUR FITNESS TRACKER</h1>
      <div className="container">
        <h2 className="title">REGISTER HERE</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter First name and Last name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label>Fitness Goal:</label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Goal --</option>
              <option value="Lose Weight">Lose Weight</option>
              <option value="Gain Muscle">Gain Muscle</option>
              <option value="Add Weight">Add Weight</option>
              <option value="Stay Fit">Stay Fit</option>
              <option value="Grow Glutes">Grow Glutes</option>
            </select>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Profile;