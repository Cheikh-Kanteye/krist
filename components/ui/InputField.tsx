"use client";

import React, { useState, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

// Using forwardRef to pass the ref to the input element
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ name, type, label, error, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
      <>
        <div className="relative max-w-lg mt-4">
          <input
            type={type}
            name={name}
            ref={ref} // Attach the ref from react-hook-form
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`border border-black w-full px-3 h-14 rounded-lg peer ${
              error ? "border-red-500" : ""
            }`}
            {...rest} // Spread the rest of the props (e.g., required)
          />
          <label
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 pointer-events-none ${
              isFocused || (rest as any).value
                ? "-translate-y-14 text-base text-gray-500"
                : "text-base"
            }`}
          >
            {label}
          </label>
        </div>
        {error && <p className="text-sm text-red-500">{error.toString()}</p>}
      </>
    );
  }
);

// Assign a display name to help with debugging
InputField.displayName = "InputField";

export default InputField;
