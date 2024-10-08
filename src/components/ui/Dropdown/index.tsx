import * as BaseDropdown from "@radix-ui/react-dropdown-menu";
import { twMerge } from "@/lib/twMerge";

interface DropdownProps extends BaseDropdown.DropdownMenuProps {}

interface DropdownTriggerProps extends BaseDropdown.DropdownMenuTriggerProps {}

interface DropdownContentProps extends BaseDropdown.DropdownMenuContentProps {
  className?: string;
}

export default function Dropdown({ children, ...props }: DropdownProps) {
  return (
    <BaseDropdown.Root modal={false} {...props}>
      {children}
    </BaseDropdown.Root>
  );
}

export function DropdownTrigger({ children }: DropdownTriggerProps) {
  return <BaseDropdown.Trigger>{children}</BaseDropdown.Trigger>;
}

export function DropdownContent({
  children,
  className,
  ...props
}: DropdownContentProps) {
  return (
    <BaseDropdown.Portal>
      <BaseDropdown.Content
        className={twMerge(
          "tw-rounded-lg tw-border tw-border-black tw-border-opacity-10 tw-bg-white tw-px-3 tw-py-1.5",
          className
        )}
        align="start"
        sideOffset={6}
        {...props}
      >
        {children}
      </BaseDropdown.Content>
    </BaseDropdown.Portal>
  );
}
