import { ReactComponent as ChevronDownIcon } from "@/assets/icons/chevron-down.svg";
import Link from "@/components/ui/Link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { twMerge } from "@/lib/twMerge";
import { MenuItem } from "../data/menuItems";

interface NavigationItemProps {
  children: React.ReactNode;
  className?: string;
}

interface NavigationItemMenuProps {
  title: string;
  active?: boolean;
  menuItems: MenuItem[];
}

export function NavigationItem({ children, className }: NavigationItemProps) {
  return (
    <li
      className={twMerge(
        "tw-flex tw-h-full tw-cursor-pointer tw-items-center tw-border-b-[3px] tw-border-primary-red tw-border-opacity-0 tw-text-xs tw-transition tw-duration-300 hover:tw-border-opacity-100 xl:tw-text-sm",
        className
      )}
    >
      {children}
    </li>
  );
}

export function NavigationItemMenu({
  title,
  active,
  menuItems,
}: NavigationItemMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root modal={false} onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger>
        <NavigationItem
          className={twMerge((active || open) && "tw-border-opacity-100")}
        >
          {title}{" "}
          <ChevronDownIcon
            className={twMerge(
              "tw-ml-2 tw-inline-block tw-h-4 tw-w-4 tw-transition",
              open && "tw-rotate-180"
            )}
          />
        </NavigationItem>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="tw-z-40 tw-animate-fadeIn tw-bg-black tw-px-5 tw-py-2.5 tw-text-white tw-animate-fill-backwards data-[state=closed]:tw-animate-fadeOut"
          align="start"
        >
          {menuItems.map(({ label, link }, index) => (
            <DropdownMenu.Item
              key={index}
              className="tw-flex tw-h-9 tw-items-center tw-border-b tw-border-b-separator-gray tw-text-sm tw-text-white tw-text-opacity-70 tw-outline-none last:tw-border-none hover:tw-text-opacity-100"
            >
              <Link href={link} className="tw-w-full">
                {label}
              </Link>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
