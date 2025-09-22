import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
