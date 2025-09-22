import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 style={{ color: "blue" }}> Liste des utilisateurs</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> ({u.username})  {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
