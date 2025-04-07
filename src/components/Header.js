import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Not authenticated');
      })
      .then(userInfo => {
        setUserInfo(userInfo);
      })
      .catch(err => {
        setUserInfo(null);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/logout", {
        method: "POST",
        credentials: "include",
      });
      setUserInfo(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-bold">
        BBlog
      </Link>

      <nav className="flex gap-4 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        {userInfo ? (
          <>
            <span className="text-gray-300">Welcome, {userInfo.email}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">Login</Link>
            <Link to="/register" className="hover:text-gray-300">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}


