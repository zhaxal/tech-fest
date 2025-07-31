import React from "react";

import { gothampro } from "@/utils/fonts";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "date" | "datetime-local" | "time";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
  min?: string;
  max?: string;
}

function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  className = "",
  id,
  name,
  min,
  max,
}: InputProps) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id || name}
          className={`${gothampro.className} text-base font-bold text-black`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        min={min}
        max={max}
        className={`
          w-full px-4 py-3 
          border border-gray-300 
          text-base font-normal
          bg-white
          placeholder-gray-400
          transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-3 focus:ring-gray-100 focus:border-gray-500
          hover:border-gray-400
          disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
        `}
      />
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}

export default Input;
