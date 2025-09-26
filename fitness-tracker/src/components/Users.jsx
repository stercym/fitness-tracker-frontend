import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching users");
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
      {error && <p className="text-red-500">{error}</p>}
      {users.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-700">Goal: {user.goal}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default User;
