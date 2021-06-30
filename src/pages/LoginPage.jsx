import React from "react";

export const LoginPage = ({ history }) => {
  const handleLogin = () => {
    history.push("/");
  };

  return (
    <>
      <h1>Login</h1>
      <hr className="divider" />

      <button
        className="btn btn-outline-success"
        onClick={() => {
          handleLogin;
        }}
      >
        Login
      </button>
    </>
  );
};
