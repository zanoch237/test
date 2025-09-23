import { useFetch } from "../hooks/useFetch";
export default function Users() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <h1 style={{ color: "blue" }}> Liste des utilisateurs</h1>
      <ul>
        {Array.isArray(users) && users.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> ({u.username})  {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
