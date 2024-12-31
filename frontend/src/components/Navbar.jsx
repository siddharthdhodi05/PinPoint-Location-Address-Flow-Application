// src/components/Navbar.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Redux/searchSlice";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/authenticatedSlice"; // Import the login action

const Navbar = () => {
  const [searchQuery, setSearchQueryState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchQuery)); // Dispatching the search query to Redux
    setSearchQueryState(""); // Clear the search bar after submitting
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      // Send GET request for logout
      await axios.get("http://localhost:5003/api/v1/user/logout", { withCredentials: true });

      // Clear the token from cookies
      Cookies.remove("token");

      // Dispatch action to update Redux state (login to false for logout)
      dispatch(login({ token: null, isAuthenticated: false }));

      // Navigate to login page
      navigate("/login");

    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition-colors">
              Pinpoint
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center flex-grow px-2 lg:ml-6">
            <form onSubmit={handleSearch} className="relative flex items-center w-full max-w-lg">
              <input
                type="search"
                placeholder="Search anything..."
                aria-label="Search"
                className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                value={searchQuery}
                onChange={(e) => setSearchQueryState(e.target.value)}
              />
              <button type="submit" aria-label="Search Button" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors">
                🔍
              </button>
            </form>
          </div>

          <div className="hidden lg:flex space-x-6">
            <button
              className="rounded-xl bg-blue-600 text-white p-2 pl-6 pr-6"
              onClick={handleLogout} // Handle logout when clicked
            >
              Logout
            </button>
          </div>

          <div className="lg:hidden">
            <button
              className="text-gray-600 hover:text-blue-600 p-2 focus:outline-none"
              aria-label="Open Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
