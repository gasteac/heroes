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
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      {user ? (
        <Link className="navbar-brand" to="/">
          Heroes🦾
        </Link>
      ) : (
        <div className="navbar-brand">Heroes🦾</div>
      )}
      <div className="navbar-collapse">
        <div className="navbar-nav">
          {user && (
            <>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/marvel"
              >
                Marvel
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/dc"
              >
                DC
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/search"
              >
                Search
              </NavLink>
            </>
          )}
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary mr-2">
            {user?.name}
          </span>
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
        </ul>
      </div>
    </nav>
  );
};
