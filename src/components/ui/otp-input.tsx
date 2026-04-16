/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "antd";
import { forwardRef, useEffect, useRef } from "react";

interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  inputClassName?: string;
  separator?: React.ReactNode;
}

const OtpInput = forwardRef<HTMLDivElement, OtpInputProps>(
  (
    {
      length = 6,
      value,
      onChange,
      disabled = false,
      autoFocus = false,
      className = "",
      inputClassName = "",
      separator,
    },
    ref,
  ) => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    // Auto-focus first input when component mounts
    useEffect(() => {
      if (autoFocus && inputsRef.current[0] && !disabled) {
        inputsRef.current[0]?.focus();
      }
    }, [autoFocus, disabled]);

    // Split value into array for rendering
    const values = value.padEnd(length, "").split("").slice(0, length);

    const handleChange = (index: number, newValue: string) => {
      if (!/^\d*$/.test(newValue)) return; // Only allow digits

      const newValues = [...values];
      newValues[index] = newValue.slice(-1); // Take only the last character

      const newOtp = newValues.join("");
      onChange(newOtp);

      // Auto move to next input
      if (newValue && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (
      index: number,
      e: React.KeyboardEvent<HTMLInputElement>,
    ) => {
      if (e.key === "Backspace" && !values[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      } else if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        inputsRef.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        e.preventDefault();
        inputsRef.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData("text")
        .replace(/\D/g, "") // Remove non-digits
        .slice(0, length);

      if (pasted.length > 0) {
        onChange(pasted);
        // Focus the appropriate input
        const focusIndex = Math.min(pasted.length, length - 1);
        inputsRef.current[focusIndex]?.focus();
      }
    };

    return (
      <div ref={ref} className={`flex items-center gap-3 ${className}`}>
        {Array.from({ length }).map((_, index) => (
          <div key={index} className="flex items-center">
            <Input
              ref={(el) => {
                inputsRef.current[index] = el as HTMLInputElement | null;
              }}
              type="text"
              maxLength={1}
              value={values[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e as any)}
              onPaste={index === 0 ? handlePaste : undefined}
              disabled={disabled}
              className={`
                w-14! h-14! 
                text-center text-2xl font-semibold
                border border-gray-300 rounded-xl
                focus:border-[#1d4ed8]! focus:ring-2! focus:ring-blue-200!
                hover:border-gray-400
                transition-all duration-200
                disabled:bg-gray-100 disabled:cursor-not-allowed
                ${inputClassName}
              `}
              style={{ fontSize: "24px" }}
            />

            {separator && index < length - 1 && (
              <span className="mx-3 text-gray-400 text-xl font-light">
                {separator}
              </span>
            )}
          </div>
        ))}
      </div>
    );
  },
);

OtpInput.displayName = "OtpInput";

export { OtpInput };
