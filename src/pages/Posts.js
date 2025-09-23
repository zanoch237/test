import { useFetch } from "../hooks/useFetch";
export default function Posts() {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts", 100);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div>
      <h1 style={{ color: "green" }}> Liste des Posts</h1>
      {Array.isArray(posts) && posts.map((p) => (
        <div key={p.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd" }}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
