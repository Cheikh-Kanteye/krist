"use client";

import { cn } from "@/utils";
import React, { useState, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { IconType } from "react-icons";

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  className?: string;
  inputClassName?: string;
  iconRight?: IconType;
  iconLeft?: IconType;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
}

// Using forwardRef to pass the ref to the input element
const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      name,
      type,
      label,
      error,
      className,
      inputClassName,
      iconLeft: IconLeft,
      iconRight: IconRight,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
      <>
        <div
          className={cn(
            `mt-4 rounded-lg max-w-lg flex gap-2 w-fit items-center border border-black h-14 ${
              error ? "border-red-500" : ""
            }`,
            className
          )}
        >
          {IconLeft && (
            <div className="w-8">
              <IconLeft size={24} />
            </div>
          )}
          <div className="relative">
            <input
              type={type}
              name={name}
              ref={ref} // Attach the ref from react-hook-form
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={cn(`flex-1 h-full`, inputClassName)}
              {...rest} // Spread the rest of the props (e.g., required)
            />
            <label
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 pointer-events-none ${
                isFocused || (rest as any).value
                  ? "-translate-y-14 text-base text-gray-500"
                  : "text-base"
              }`}
            >
              {label}
            </label>
          </div>
          {IconRight && (
            <div>
              <IconRight size={24} />
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error.toString()}</p>}
      </>
    );
  }
);

// Assign a display name to help with debugging
InputField.displayName = "InputField";

export default InputField;
