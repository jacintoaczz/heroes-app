import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { types } from "../types/types";

export const Navbar = () => {
  const history = useHistory();

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    const logoutAction = {
      type: types.authLogout,
      payload: { logged: false },
    };

    dispatch(logoutAction);
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search?q="
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ms-auto">
            <span className="nav-item nav-link text-info">{user.name}</span>

            <button
              className="btn ms-2 nav-item nav-link"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
