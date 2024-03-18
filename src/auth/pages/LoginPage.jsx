import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = () => {
    login('Gaston')
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
