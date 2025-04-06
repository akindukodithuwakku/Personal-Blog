import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  
  return (
    <header>
      <Link to="/" className="logo"> 
        <h4>BBlog</h4>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}


