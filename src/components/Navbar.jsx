import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-4 md:px-8 py-4 flex justify-between items-center shadow-lg border-b border-blue-900 relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-4xl drop-shadow">🗳️</span>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow">
          VoteNow
        </h1>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Nav Links */}
      <div
        className={`
          flex-col md:flex-row md:flex items-center gap-2 md:gap-4
          absolute md:static top-full left-0 w-full md:w-auto bg-gradient-to-b md:bg-none from-blue-900/95 via-blue-800/95 to-blue-700/95 md:from-transparent md:via-transparent md:to-transparent z-20
          transition-all duration-300
          ${menuOpen ? "flex" : "hidden md:flex"}
        `}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-blue-600 shadow font-bold scale-105"
                : "hover:bg-blue-700 hover:scale-105"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/vote"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-blue-600 shadow font-bold scale-105"
                : "hover:bg-blue-700 hover:scale-105"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Vote
        </NavLink>
        <NavLink
          to="/results"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-blue-600 shadow font-bold scale-105"
                : "hover:bg-blue-700 hover:scale-105"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Results
        </NavLink>
        <span className="mx-2 hidden md:inline-block border-l border-blue-400 h-6"></span>
        <NavLink
          to="/create"
          className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-lg transition transform hover:scale-105"
          onClick={() => setMenuOpen(false)}
        >
          + Create Vote
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-blue-600 shadow font-bold scale-105"
                : "hover:bg-blue-700 hover:scale-105"
            }`
          }
          onClick={() => setMenuOpen(false)}
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}
