import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../Redux/searchSlice.js"; // Correct path

const Navbar = () => {
  const [searchQuery, setSearchQueryState] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchQuery)); // Dispatching the search query to Redux
    setSearchQueryState("")
  };

  

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-3xl font-extrabold text-blue-600 tracking-wide hover:text-blue-700 transition-colors"
            >
              Pinpoint
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center justify-center flex-grow px-2 lg:ml-6">
            <form
              onSubmit={handleSearch}
              className="relative flex items-center w-full max-w-lg"
            >
              <input
                type="search"
                placeholder="Search anything..."
                aria-label="Search"
                className="w-full py-2 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                value={searchQuery}
                onChange={(e) => setSearchQueryState(e.target.value)}
              />
              <button
                type="submit"
                aria-label="Search Button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <a
              href="/about"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
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
