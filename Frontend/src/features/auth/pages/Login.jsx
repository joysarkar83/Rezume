import React from "react";
import { useState } from "react";
import InputField from "../components/InputField";

const Login = () => {
  const [formData, setFormData] = useState({
    info: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const formElements = [
    {
      label: "Username or Email",
      id: "info",
      type: "text",
      placeholder: "Enter your username or email",
      value: formData.info,
      onChange: (e) => setFormData({ ...formData, info: e.target.value }),
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter your password",
      value: formData.password,
      onChange: (e) => setFormData({ ...formData, password: e.target.value }),
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center h-screen w-screen">
      <h1>Login</h1>
      <form className="flex flex-col justify-center items-center gap-2">
        {formElements.map((element, index) => InputField(element, { key: index }))}
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
