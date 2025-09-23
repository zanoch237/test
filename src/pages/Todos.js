import { useFetch } from "../hooks/useFetch";
export default function Todos() {
  const { data: todos, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos", 100);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <h1 style={{ color: "purple" }}>Liste des Todos</h1>
      <ul>
        {Array.isArray(todos) && todos.map((t) => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} readOnly /> {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
