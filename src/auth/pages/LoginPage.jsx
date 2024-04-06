import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { NavBar } from "../../ui/components/NavBar";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const handleInput = ({ target }) => {
    setNameInput(target.value);
    console.log(nameInput);
  };

  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastPath" || "/");
    login(nameInput || "NoName");
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />
        <h3>Please provide your name :)</h3>
        <form onSubmit={() => handleLogin()}>
          <div className="d-flex">
            <input
              type="text"
              value={nameInput}
              placeholder="Name"
              onChange={handleInput}
            />
            <button type="submit" className="btn btn-primary mx-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
