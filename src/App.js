import "./App.css";
import Post from "./components/Post";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Post />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
