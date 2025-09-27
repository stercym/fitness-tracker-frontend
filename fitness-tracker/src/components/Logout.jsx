function Logout({ onLogout }) {
  function handleLogout() {
    fetch("http://127.0.0.1:5000/auth/logout", {
      method: "POST",
      credentials: "include", 
    })
      .then((res) => res.json())
      .then(() => {
        if (onLogout) onLogout();
      })
      .catch((err) => console.error("Logout failed:", err));
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
