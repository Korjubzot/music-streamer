import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      data-testid="header"
      className="bg-blue-500 text-white p-4 shadow-md"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Music Library</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/upload" className="hover:text-gray-300">
              Upload
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
