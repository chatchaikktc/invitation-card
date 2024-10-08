import Link from "@/components/ui/Link";
import { FunctionComponent, SVGProps } from "react";
import { twMerge } from "@/lib/twMerge";
import { MenuItem as MenuItemType } from "../data/menuItems";
import Collapsible, {
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/Collapsible";

interface MenuItemProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  link?: string;
  border?: boolean;
}

interface CollapsibleMenuItemProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  menuItems: MenuItemType[];
}

export function MenuItem({ Icon, title, link, border }: MenuItemProps) {
  return (
    <li
      className={twMerge(
        "tw-w-full tw-pb-3",
        border !== false && "tw-border-b tw-border-separator-gray tw-text-lg"
      )}
    >
      <Link href={link || "#"} className="tw-inline-block tw-w-full">
        <Icon className="tw-mr-6 tw-inline tw-h-10 tw-w-10" />
        <span className="tw-relative tw-top-1.5 tw-font-semibold">{title}</span>
      </Link>
    </li>
  );
}

export function CollapsibleMenuItem({
  Icon,
  title,
  menuItems,
}: CollapsibleMenuItemProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <MenuItem Icon={Icon} title={title} border={false} />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul>
          {menuItems.map(({ label, link }, index) => (
            <li key={index} className="tw-ml-16 tw-py-1.5 tw-text-lg">
              <Link href={link} className="tw-inline-block tw-w-full">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
