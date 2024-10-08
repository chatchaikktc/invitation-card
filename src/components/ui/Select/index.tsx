import { ReactComponent as ChevronDownIcon } from "@/assets/icons/chevron-down.svg";
import * as BaseSelect from "@radix-ui/react-select";
import "./index.css";

interface SelectProps {
  options: { value: string; label: string }[];
  label?: string;
  placeholder?: string;
  className?: string;
}

export default function Select({ label, placeholder, options }: SelectProps) {
  return (
    <div>
      {label && (
        <label className="tw-mb-3 tw-block tw-font-bold">{label}</label>
      )}
      <BaseSelect.Root>
        <BaseSelect.Trigger className="SelectTrigger tw-relative tw-h-10 tw-w-full tw-rounded-md tw-border tw-border-platinum tw-pl-4 tw-text-left">
          <BaseSelect.Value placeholder={placeholder} />
          <ChevronDownIcon className="SelectIcon tw-absolute tw-right-4 tw-top-1/2 tw-h-7 tw-w-7 tw--translate-y-1/2 tw-text-light-gray tw-transition" />
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Content
            ref={(ref) => {
              // TODO: Remove me when radix-ui fix issue with touch behavior: https://github.com/radix-ui/primitives/issues/1658
              if (!ref) return;
              ref.ontouchstart = (e) => {
                e.preventDefault();
              };
            }}
            position="popper"
            className="SelectContent tw-overflow-hidden tw-border tw-border-platinum tw-bg-white"
          >
            {options.map(({ value, label }, index) => (
              <BaseSelect.Item
                className="tw-relative tw-select-none tw-px-4 tw-py-2 tw-text-black tw-outline-none tw-transition data-[highlighted]:tw-bg-bright-gray"
                value={value}
                key={index}
              >
                <BaseSelect.ItemText>{label}</BaseSelect.ItemText>
              </BaseSelect.Item>
            ))}
          </BaseSelect.Content>
        </BaseSelect.Portal>
      </BaseSelect.Root>
    </div>
  );
}
