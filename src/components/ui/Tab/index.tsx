import * as BaseTabs from "@radix-ui/react-tabs";
import { twMerge } from "@/lib/twMerge";

export default function Tab(props: BaseTabs.TabsProps) {
  return <BaseTabs.Root {...props}>{props.children}</BaseTabs.Root>;
}

export function TabList({ className, ...props }: BaseTabs.TabsListProps) {
  return (
    <BaseTabs.List
      className={twMerge(
        "tw-mb-10 tw-flex tw-max-w-full tw-gap-x-2 tw-overflow-x-auto tw-scrollbar-hide",
        className
      )}
      {...props}
    >
      {props.children}
    </BaseTabs.List>
  );
}

export function TabTrigger({ className, ...props }: BaseTabs.TabsTriggerProps) {
  return (
    <BaseTabs.Trigger
      className={twMerge(
        "tw-shrink-0 ",
        className
      )}
      {...props}
    > 
      {props.children}
    </BaseTabs.Trigger>
  );
}

export function TabContent({ className, ...props }: BaseTabs.TabsContentProps) {
  return (
    <BaseTabs.Content
      className={twMerge(
        "tw-animate-[slideIn_800ms] tw-will-change-transform tw-w-full ",
        className
      )}
      {...props}
    >
      {props.children}
    </BaseTabs.Content>
  );
}
