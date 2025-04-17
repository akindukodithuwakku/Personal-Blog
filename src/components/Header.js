import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Header() {
  const { userInfo, updateUserInfo } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/profile`,
          {
            credentials: "include",
          }
        );

        if (response.ok) {
          const userData = await response.json();
          updateUserInfo(userData);
        } else {
          updateUserInfo(null);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        updateUserInfo(null);
      }
    };

    fetchUserInfo();
  }, []); // Empty dependency array means this runs once on mount

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
      updateUserInfo(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200 text-white">
      <Link to="/" className="text-xl font-bold">
        BBlog
      </Link>

      <nav className="flex gap-4 items-center">
        {userInfo ? (
          <>
            <span className="text-gray-600">Welcome, {userInfo.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
            >
              Logout
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
              <Link to="/create" className="hover:text-gray-300">
                Create Post
              </Link>
            </button>
          </>
        ) : (
          <>
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
              <Link to="/register" className="hover:text-gray-300">
                Register
              </Link>
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
