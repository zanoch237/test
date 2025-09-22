import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#2563eb", color: "white" }}>
      <Link to="/users" style={{ margin: "0 10px", color: "white" }}> Users</Link>
      <Link to="/posts" style={{ margin: "0 10px", color: "white" }}> Posts</Link>
      <Link to="/todos" style={{ margin: "0 10px", color: "white" }}> Todos</Link>
    </nav>
  );
}
