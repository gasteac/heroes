import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { NavBar } from "../../ui/components/NavBar";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath" || "/");
    login("Usuario");
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <>
    <NavBar/>
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button onClick={() => handleLogin()} className="btn btn-primary">
        Login
      </button>
    </div>
    </>
  );
};
