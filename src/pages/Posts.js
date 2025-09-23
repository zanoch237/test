
import { useFetch } from "../hooks/useFetch";
import Formulaire from "../components/Formulaire";
import React, { useState } from "react";

export default function Posts() {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts", 10);
  const [postList, setPostList] = useState([]);
  const [editPost, setEditPost] = useState(null);

  React.useEffect(() => {
    if (Array.isArray(posts)) setPostList(posts);
  }, [posts]);

  const fields = [
    { name: "title", label: "Titre", required: true },
    { name: "body", label: "Contenu", required: true },
  ];

  const handleSubmit = (data) => {
    if (editPost) {
      setPostList(postList.map((p) => (p.id === editPost.id ? { ...editPost, ...data } : p)));
      setEditPost(null);
    } else {
      setPostList([...postList, { ...data, id: Date.now() }]);
    }
  };

  const handleDelete = (data) => {
    setPostList(postList.filter((p) => p.id !== data.id));
    setEditPost(null);
  };

  return (
    <div>
      <h1 style={{ color: "green" }}> Liste des Posts</h1>
      <Formulaire
        fields={fields}
        initialData={editPost || {}}
        onSubmit={handleSubmit}
        onDelete={editPost ? handleDelete : undefined}
        submitLabel={editPost ? "Modifier" : "Créer"}
        deleteLabel="Supprimer"
      />
      {Array.isArray(postList) && postList.map((p) => (
        <div key={p.id} style={{ margin: "10px 0", padding: "10px", border: "1px solid #ddd" }}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <button style={{ marginLeft: 10 }} onClick={() => setEditPost(p)}>
            Modifier
          </button>
          <button style={{ marginLeft: 10, background: 'red', color: 'white' }} onClick={() => handleDelete(p)}>
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
