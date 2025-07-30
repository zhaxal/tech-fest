import React from "react";

import { gothampro } from "@/utils/fonts";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  value?: string;
  options: SelectOption[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
}

export default function Select({
  label,
  placeholder,
  value,
  options,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  className = "",
  id,
  name,
}: SelectProps) {
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
      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3
          border border-gray-300 
          text-base font-normal
          bg-white
          transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-3 focus:ring-gray-100 focus:border-gray-500
          hover:border-gray-400
          disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed
        `}
      >
        {placeholder && (
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}
