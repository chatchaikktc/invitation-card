import { twMerge } from "@/lib/twMerge";
import React from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, label, errorMessage, ...props }, ref) => {
    return (
      <div className="tw-text-primary-gray">
        {label && (
          <label className="tw-mb-3 tw-block tw-font-bold">{label}</label>
        )}
        <input
          ref={ref}
          type={type || "text"}
          className={twMerge(
            "tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-platinum tw-pl-4 placeholder:tw-text-primary-gray placeholder:tw-opacity-60",
            !!errorMessage && "tw-border-primary-red",
            className
          )}
          {...props}
        />
        {errorMessage && (
          <div className="tw-mt-0.5 tw-text-sm tw-text-primary-red tw-opacity-70">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
