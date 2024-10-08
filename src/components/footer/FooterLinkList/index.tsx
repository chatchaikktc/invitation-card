import Link from "@/components/ui/Link";
import { useTranslation } from "react-i18next";
import {
  FooterItem,
  aboutKTCItems,
  customerServiceItems,
  investorRelationItems,
  sustainabilityDevelopmentItems,
} from "../data/footerItems";

interface ListItemProps {
  title: string;
  titleLink: string;
  items: FooterItem[];
}

export default function FooterLinkList() {
  const { t } = useTranslation();

  return (
    <div className="tw-hidden tw-flex-1 tw-grid-cols-2 tw-gap-y-10 md:tw-grid lg:tw-grid-cols-4">
      <ListItem
        title={t("footer.About KTC.title")}
        titleLink="/about"
        items={aboutKTCItems(t)}
      />
      <ListItem
        title={t("footer.Customer Services.title")}
        titleLink="/support"
        items={customerServiceItems(t)}
      />
      <ListItem
        title={t("footer.Sustainability Development.title")}
        titleLink="/sustainability-development"
        items={sustainabilityDevelopmentItems(t)}
      />
      <ListItem
        title={t("footer.Investor Relations.title")}
        titleLink="/investor-relations"
        items={investorRelationItems(t)}
      />
    </div>
  );
}

function ListItem({ title, titleLink, items }: ListItemProps) {
  return (
    <ul className="tw-max-w-[214px]">
      <li className="tw-mb-2.5">
        <Link
          href={titleLink}
          className="tw-font-semibold tw-transition hover:tw-text-primary-red"
        >
          {title}
        </Link>
      </li>
      {items.map(({ link, label }, index) => (
        <li key={index} className="tw-mb-1">
          <Link
            href={link}
            className="tw-text-lg tw-transition hover:tw-text-primary-red"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
