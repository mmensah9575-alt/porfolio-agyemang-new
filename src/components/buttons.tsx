import React from "react";

// 1. Define an interface for the component's props
interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  className?: string;
}

// 2. Define the functional component with TypeScript typing
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) => {
  const baseStyles =
    "px-5 py-2.5 rounded-full font-medium transition-all duration-200 cursor-pointer inline-block";

  const variants = {
    primary: "bg-[#275297] text-white hover:bg-[#275389] w-35 h-10",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
