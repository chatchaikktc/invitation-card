import Collapsible, {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import Link from "@/components/ui/Link";
import { useTranslation } from "react-i18next";
import {
  FooterItem,
  aboutKTCItems,
  customerServiceItems,
  investorRelationItems,
  sustainabilityDevelopmentItems,
} from "../data/footerItems";

interface CollapsibleItemProps {
  title: string;
  titleLink: string;
  items: FooterItem[];
}

export default function FooterCollapsibleList() {
  const { t } = useTranslation();

  return (
    <div className="tw-mb-5 md:tw-hidden">
      <CollapsibleItem
        title={t("footer.About KTC.title")}
        titleLink="/about"
        items={aboutKTCItems(t)}
      />
      <CollapsibleItem
        title={t("footer.Customer Services.title")}
        titleLink="/support"
        items={customerServiceItems(t)}
      />
      <CollapsibleItem
        title={t("footer.Sustainability Development.title")}
        titleLink="/sustainability-development"
        items={sustainabilityDevelopmentItems(t)}
      />
      <CollapsibleItem
        title={t("footer.Investor Relations.title")}
        titleLink="/investor-relations"
        items={investorRelationItems(t)}
      />
    </div>
  );
}

function CollapsibleItem({ title, titleLink, items }: CollapsibleItemProps) {
  return (
    <Collapsible className="tw-border-b-[0.5px] tw-border-light-gray">
      <CollapsibleTrigger iconClassName="tw-text-black">
        <Link
          href={titleLink}
          className="tw-my-3 tw-inline-block tw-text-lg tw-font-bold"
        >
          {title}
        </Link>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="tw-mb-2">
          {items.map(({ link, label }, index) => (
            <li key={index} className="tw-ml-7 tw-mt-2 tw-text-sm">
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}
