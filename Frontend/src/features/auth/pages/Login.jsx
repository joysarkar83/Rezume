import React from "react";
import { useState } from "react";
import InputField from "../components/InputField";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const {loading, handleLogin} = useAuth();
  const navigate = useNavigate();

  const [info, setInfo] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    handleLogin({info, password});
    navigate("/");
  }

  if(loading){
    return (
      <main><h1>Loading...</h1></main>
    )
  }

  const formElements = [
    {
      label: "Username or Email",
      id: "info",
      type: "text",
      placeholder: "Enter your username or email",
      value: info,
      onChange: (e) => setInfo(e.target.value),
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      <h1>Login</h1>
      <form className="flex flex-col justify-center items-center gap-2">
        {formElements.map((element, index) =>
          InputField(element, { key: index }),
        )}
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
