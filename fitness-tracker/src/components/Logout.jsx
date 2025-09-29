function Logout({ onLogout }) {
  function handleLogout() {
    fetch("https://fitness-tracker-api-pb2t.onrender.com/auth/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Logout failed');
        }
        return res.json();
      })
      .then(() => {
        if (onLogout) {
          onLogout();
        }
        window.location.assign('/');
      })
      .catch((err) => {
        console.error("Logout failed:", err);
        if (onLogout) {
          onLogout();
        }
        window.location.assign('/');
      });
  }

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
