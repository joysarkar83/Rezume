import React, { use, useState } from "react";
import InputField from "../components/InputField";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const formElements = [
    {
      label: "Username",
      id: "username",
      type: "text",
      placeholder: "Enter your username",
      value: formData.username,
      onChange: (e) => setFormData({ ...formData, username: e.target.value }),
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Enter your email",
      value: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
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
      <h1 className="font-bold text-4xl">New User</h1>
      <form className="flex flex-col justify-center items-center gap-2">
        {formElements.map((element, index) => InputField(element, { key: index }))}
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Register
        </button>
      </form>
    </main>
  );
};

export default Register;
