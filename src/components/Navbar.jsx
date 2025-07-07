import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-8 py-4 flex justify-between items-center shadow-lg border-b border-blue-900">
      <div className="flex items-center gap-4">
        <span className="text-4xl drop-shadow">🗳️</span>
        <h1 className="text-3xl font-extrabold tracking-tight drop-shadow">VoteNow</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg transition font-medium ${
              isActive
                ? "bg-blue-600 shadow font-bold scale-105"
                : "hover:bg-blue-700 hover:scale-105"
            }`
          }
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
        >
          Results
        </NavLink>
        <span className="mx-2 hidden md:inline-block border-l border-blue-400 h-6"></span>
        <NavLink
          to="/create"
          className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-lg transition transform hover:scale-105"
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
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}
