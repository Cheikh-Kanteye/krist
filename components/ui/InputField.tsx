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
      <div className="max-w-lg w-full">
        <div
          className={cn(
            `mt-4 relative rounded-lg flex items-center border border-black h-14 ${
              error ? "border-red-500" : ""
            }`,
            className
          )}
        >
          {IconLeft && (
            <div className="w-8 flex items-center justify-center">
              <IconLeft size={24} />
            </div>
          )}
          <div className="flex-1 w-full">
            <input
              type={type}
              name={name}
              ref={ref}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={cn(
                "w-full h-14 bg-transparent field rounded-lg px-4",
                inputClassName
              )}
              {...rest}
            />
            <label
              className={`absolute ${
                !IconLeft ? "left-3" : "left-12"
              } top-1/2 transform -translate-y-1/2 transition-all duration-300 pointer-events-none ${
                isFocused
                  ? "-translate-y-14 text-base text-gray-500"
                  : "text-base"
              }`}
            >
              {label}
            </label>
          </div>
          {IconRight && (
            <div className="w-8 flex items-center justify-center">
              <IconRight size={24} />
            </div>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-500 mt-1">{error.toString()}</p>
        )}
      </div>
    );
  }
);

// Assign a display name to help with debugging
InputField.displayName = "InputField";

export default InputField;
