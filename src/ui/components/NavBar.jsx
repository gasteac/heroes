import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {
  const { logout } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const hadleLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <nav className="navbar">
      {user ? (
        <Link className="icon" to="/">
          <h2>Heroes🦾</h2>
        </Link>
      ) : (
        <h2>Heroes🦾</h2>
      )}

      {user && (
        <>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/marvel"
          >
            Marvel
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/search"
          >
            Search
          </NavLink>
        </>
      )}

      <div className="logoutuser">
        <span>{user?.name}</span>
        {user && (
          <button
            onClick={() => {
              hadleLogout();
            }}
            className="nav-item nav-link btn"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
