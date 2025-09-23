
import { useFetch } from "../hooks/useFetch";
import Formulaire from "../components/Formulaire";
import React, { useState } from "react";

export default function Users() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [userList, setUserList] = useState([]);
  const [editUser, setEditUser] = useState(null);

  React.useEffect(() => {
    if (Array.isArray(users)) setUserList(users);
  }, [users]);

  const fields = [
    { name: "name", label: "Nom", required: true },
    { name: "username", label: "Pseudo", required: true },
    { name: "email", label: "Email", required: true, type: "email" },
  ];

  const handleSubmit = (data) => {
    if (editUser) {
      setUserList(userList.map((u) => (u.id === editUser.id ? { ...editUser, ...data } : u)));
      setEditUser(null);
    } else {
      setUserList([...userList, { ...data, id: Date.now() }]);
    }
  };

  const handleDelete = (data) => {
    setUserList(userList.filter((u) => u.id !== data.id));
    setEditUser(null);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}> Liste des utilisateurs</h1>
      <Formulaire
        fields={fields}
        initialData={editUser || {}}
        onSubmit={handleSubmit}
        onDelete={editUser ? handleDelete : undefined}
        submitLabel={editUser ? "Modifier" : "Créer"}
        deleteLabel="Supprimer"
      />
      <ul>
        {Array.isArray(userList) && userList.map((u) => (
          <li key={u.id}>
            <strong>{u.name}</strong> ({u.username})  {u.email}
            <button style={{ marginLeft: 10 }} onClick={() => setEditUser(u)}>
              Modifier
            </button>
            <button style={{ marginLeft: 10, background: 'red', color: 'white' }} onClick={() => handleDelete(u)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
