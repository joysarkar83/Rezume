import React from "react";

const InputField = ({ label, id, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col h-max w-full">
      <label htmlFor={id} className="font-semibold text-xl">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="font-medium text-xl px-10 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
