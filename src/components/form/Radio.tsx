import React from "react";

import { gothampro } from "@/utils/fonts";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioProps {
  label?: string;
  value?: string;
  options: RadioOption[];
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name: string;
  direction?: "horizontal" | "vertical";
}

export default function Radio({
  label,
  value,
  options,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  className = "",
  name,
  direction = "vertical",
}: RadioProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`flex flex-col gap-2 w-full max-w-sm ${className}`}>
      {label && (
        <label
          className={`${gothampro.className} text-base font-bold text-black`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className={`flex gap-2 ${
          direction === "vertical" ? "flex-col" : "flex-row flex-wrap"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center gap-3 cursor-pointer relative
              ${
                disabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:text-gray-700"
              }
            `}
          >
            <div className="relative">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={handleChange}
                onBlur={onBlur}
                disabled={disabled}
                required={required}
                className="sr-only"
              />
              <div
                className={`
                w-8 h-8 rounded-full border-2 transition-all duration-200
                ${
                  value === option.value
                    ? "border-black bg-white"
                    : "border-gray-400 bg-white hover:border-gray-600"
                }
                ${disabled ? "opacity-50" : ""}
              `}
              >
                {value === option.value && (
                  <div className="w-4 h-4 rounded-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            </div>
            <span
              className={`${gothampro.className} text-base font-normal text-black select-none`}
            >
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}
