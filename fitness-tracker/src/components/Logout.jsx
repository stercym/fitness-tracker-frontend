function Logout({ onLogout }) {
  function handleLogout() {
    fetch("http://127.0.0.1:5000/auth/logout", {
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
