import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate instead of useHistory
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate object for redirection

  // Handle form submission
  async function login(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
      });

      if (response.ok) {
        alert("Login successful!");
        // Redirect to the home page after successful login
        navigate("/"); // Using navigate() for redirect
      } else {
        alert("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    }

    // Clear the form fields after submission (optional)
    setEmail("");
    setPassword("");
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login To Blog</h1>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <p className="register">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
}
