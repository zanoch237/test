import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 15))); // limiter à 15
  }, []);

  return (
    <div>
      <h1 style={{ color: "purple" }}>Liste des Todos</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
