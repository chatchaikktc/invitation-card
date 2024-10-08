import { ReactComponent as CrossIcon } from "@/assets/icons/cross.svg";
import * as BaseCollapsible from "@radix-ui/react-collapsible";
import "./index.css";
import { twMerge } from "@/lib/twMerge";

interface CollapsibleProps extends BaseCollapsible.CollapsibleProps {
  children: React.ReactNode;
  className?: string;
}

interface CollapsibleTriggerProps {
  children: React.ReactNode;
  icon?: boolean;
  iconClassName?: string;
  className?: string;
}

interface CollapsibleContentProps {
  children: React.ReactNode;
  className?: string;
}

export default function Collapsible({
  children,
  className,
  ...props
}: CollapsibleProps) {
  return (
    <BaseCollapsible.Root
      className={twMerge(
        "tw-border-b tw-border-separator-gray tw-text-lg",
        className
      )}
      {...props}
    >
      {children}
    </BaseCollapsible.Root>
  );
}

export function CollapsibleTrigger({
  children,
  icon,
  iconClassName,
  className
}: CollapsibleTriggerProps) {
  return (
    <BaseCollapsible.Trigger className={twMerge("collapsible-trigger tw-relative tw-w-full tw-text-left",className)}>
      {children}
      {icon !== false && (
        <CrossIcon
          className={twMerge(
            "collapsible-icon tw-absolute tw-right-0 tw-top-1/2 tw-h-5 tw-w-5 tw--translate-y-1/2 tw-text-white tw-transition",
            icon === undefined && "tw-rotate-45",
            iconClassName
          )}
        />
      )}
    </BaseCollapsible.Trigger>
  );
}

export function CollapsibleContent({ children ,className}: CollapsibleContentProps) {
  return (
    <BaseCollapsible.Content className={twMerge("collapsible-content",className)}>
      {children}
    </BaseCollapsible.Content>
  );
}
