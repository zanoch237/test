
import { useFetch } from "../hooks/useFetch";
import Formulaire from "../components/Formulaire";
import React, { useState } from "react";

export default function Todos() {
  const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos", 10);
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  React.useEffect(() => {
    if (Array.isArray(todos)) setTodoList(todos);
  }, [todos]);

  const fields = [
    { name: "title", label: "Titre", required: true },
    { name: "completed", label: "Complété", type: "checkbox" },
  ];

  const handleSubmit = async (data) => {
    if (editTodo) {
      // Modifier (PUT)
      await fetch(`https://jsonplaceholder.typicode.com/todos/${editTodo.id}` , {
        method: 'PUT',
        body: JSON.stringify({ ...editTodo, ...data }),
        headers: { 'Content-Type': 'application/json' }
      });
      setTodoList(todoList.map((t) => (t.id === editTodo.id ? { ...editTodo, ...data } : t)));
      setEditTodo(null);
    } else {
      // Créer (POST)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      const newTodo = await response.json();
  setTodoList([{ ...data, id: newTodo.id || Date.now() }, ...todoList]);
    }
  };

  const handleDelete = async (data) => {
    // Supprimer (DELETE)
    await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
      method: 'DELETE'
    });
    setTodoList(todoList.filter((t) => t.id !== data.id));
    setEditTodo(null);
  };

  return (
    <div>
      <h1 style={{ color: "purple" }}>Liste des Todos</h1>
      <Formulaire
        fields={fields}
        initialData={editTodo || {}}
        onSubmit={handleSubmit}
        onDelete={editTodo ? handleDelete : undefined}
        submitLabel={editTodo ? "Modifier" : "Créer"}
        deleteLabel="Supprimer"
      />
      <ul>
        {Array.isArray(todoList) && todoList.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={!!t.completed} readOnly /> {t.title}
            <button style={{ marginLeft: 10 }} onClick={() => setEditTodo(t)}>
              Modifier
            </button>
            <button style={{ marginLeft: 10, background: 'red', color: 'white' }} onClick={() => handleDelete(t)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
