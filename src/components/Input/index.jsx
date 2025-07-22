import React from "react";

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={name} className="text-white font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`bg-[#1A2332] text-white border rounded px-3 py-2 focus:outline-none ${
          error
            ? "border-red-500"
            : "border-none focus:ring-2 focus:ring-blue-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
