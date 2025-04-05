import React from "react";
import "../styles/Register.css";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  async function register(e) {
    e.preventDefault();

    try {
      // Validate password and confirmPassword match
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
    } catch (error) {
      console.error("Error validating passwords:", error);
      return;
    }

    // Send a POST request to the server with the form data

    try {
      await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({
          email: e.target[0].value,
          password: e.target[1].value,
          confirmPassword: e.target[2].value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Registration successful!");
      // Redirect to the login page after successful registration
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
    //clear the form fields
    setEmail("");
    setPassword("");
    setConfirmPassword("");

   
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register To Blog</h1>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="false"
        autoCorrect="off"
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="false"
        autoCorrect="false"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        autoComplete="false"
        autoCorrect="off"
      />
      <button type="submit">Register</button>
      <div className="login-link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </form>
  );
}
