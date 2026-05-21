import React, { use, useState } from "react";
import InputField from "../components/InputField";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { loading, handleRegister } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleRegister({ username, email, password });
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  const formElements = [
    {
      label: "Username",
      id: "username",
      type: "text",
      placeholder: "Enter your username",
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
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
      <h1 className="font-bold text-4xl">New User</h1>
      <form className="flex flex-col justify-center items-center gap-2">
        {formElements.map((element, index) =>
          InputField(element, { key: index }),
        )}
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
