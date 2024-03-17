import React from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login XD</h1>
      <hr />
      <button onClick={() => handleLogin()} className="btn btn-primary">
        Login (alengau)
      </button>
    </div>
  );
};
