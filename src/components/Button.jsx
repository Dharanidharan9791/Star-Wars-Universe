import React from "react";

const Button = ({ variant = "primary", children, onClick, disabled }) => {
  const baseStyles = "text-lg py-2 px-4 rounded font-semibold";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    tertiary: "bg-white text-black border border-black hover:bg-gray-300",
    ghost: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
