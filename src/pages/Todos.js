
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

  const handleSubmit = (data) => {
    if (editTodo) {
      setTodoList(todoList.map((t) => (t.id === editTodo.id ? { ...editTodo, ...data } : t)));
      setEditTodo(null);
    } else {
      setTodoList([...todoList, { ...data, id: Date.now() }]);
    }
  };

  const handleDelete = (data) => {
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
