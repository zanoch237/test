import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10))); // limiter à 10
  }, []);

  return (
    <div>
      <h1 style={{ color: "green" }}> Liste des Posts</h1>
      {posts.map((p) => (
        <div key={p.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd" }}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
