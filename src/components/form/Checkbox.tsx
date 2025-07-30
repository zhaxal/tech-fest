import React from "react";

interface CheckboxOption {
  value: string;
  label: React.ReactNode;
}

interface CheckboxProps {
  value?: string[];
  options: CheckboxOption[];
  onChange?: (values: string[]) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name: string;
  direction?: "horizontal" | "vertical";
}

export default function Checkbox({
  value = [],
  options,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  className = "",
  name,
  direction = "vertical",
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const optionValue = e.target.value;
      const isChecked = e.target.checked;

      let newValues: string[];
      if (isChecked) {
        newValues = [...value, optionValue];
      } else {
        newValues = value.filter((v) => v !== optionValue);
      }

      onChange(newValues);
    }
  };

  return (
    <div className={`flex flex-col gap-2 w-full max-w-sm ${className}`}>
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
                type="checkbox"
                name={name}
                value={option.value}
                checked={value.includes(option.value)}
                onChange={handleChange}
                onBlur={onBlur}
                disabled={disabled}
                required={required}
                className="sr-only"
              />
              <div
                className={`
                w-8 h-8  border-2 transition-all duration-200
                ${
                  value.includes(option.value)
                    ? "border-black bg-white"
                    : "border-gray-400 bg-white hover:border-gray-600"
                }
                ${disabled ? "opacity-50" : ""}
              `}
              >
                {value.includes(option.value) && (
                  <svg
                    className="w-6 h-6 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            {option.label}
          </label>
        ))}
      </div>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
}
