import "./App.css";
import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import IndexPage from "./pages/IndexPage";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />

      </Route>
      
    </Routes>
  
    </>
  );
}

export default App;
