import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const user = {
  id: 0,
  name: "Jacinto Acosta",
};

export const LoginPage = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    const loginAction = {
      type: types.authLogin,
      payload: user,
    };

    dispatch(loginAction);
    history.replace(lastPath);
  };

  return (
    <main className="container">
      <h1>Login</h1>
      <hr className="divider" />

      <button className="btn btn-outline-success" onClick={handleLogin}>
        Login
      </button>
    </main>
  );
};
