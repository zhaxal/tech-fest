import React from 'react'

import { gothampro } from "@/utils/fonts";

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  name?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  resize?: "none" | "both" | "horizontal" | "vertical";
}

function Textarea({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  className = "",
  id,
  name,
  rows = 4,
  cols,
  maxLength,
  resize = "vertical",
}: TextareaProps) {
  const resizeClass = {
    none: "resize-none",
    both: "resize",
    horizontal: "resize-x",
    vertical: "resize-y",
  }[resize];

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
      <textarea
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
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
          ${resizeClass}
        `}
      />
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}

export default Textarea