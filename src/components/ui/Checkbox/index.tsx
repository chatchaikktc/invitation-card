import { ReactComponent as CheckIcon } from "@/assets/icons/check-white.svg";
import React, { useState } from "react";
import { twMerge } from "@/lib/twMerge";

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  labelClassName?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, labelClassName, className, ...props }, ref) => {
    const [checked, setChecked] = useState(props.defaultChecked || false);

    return (
      <label
        className={twMerge(
          "tw-flex tw-cursor-pointer tw-items-center",
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="tw-hidden"
          {...props}
          onChange={(e) => {
            if (props.onChange) {
              props.onChange(e);
            }

            setChecked(e.target.checked);
          }}
        />
        <div
          className={twMerge(
            "tw-mr-3 tw-flex tw-h-5 tw-w-5 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-platinum tw-transition",
            checked && "tw-border-primary-dark-red tw-bg-primary-red"
          )}
        >
          <CheckIcon className={twMerge("tw-hidden", checked && "tw-block")} />
        </div>
        {label && <div className={twMerge(labelClassName)}>{label}</div>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
