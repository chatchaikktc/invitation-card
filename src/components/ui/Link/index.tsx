import { useTranslation } from "react-i18next";
import { twMerge } from "@/lib/twMerge";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export default function Link({ href, children, className, target }: LinkProps) {
  const { i18n } = useTranslation();

  const buildLocaleLink = (link: string) => {
    if (i18n.language === "th") {
      return link;
    }

    return `/${i18n.language}${link}`;
  };

  const isRelativeURL = href.startsWith("/");
  const redirectLink = isRelativeURL ? buildLocaleLink(href) : href;

  return (
    <a href={redirectLink} className={twMerge(className)} target={target}>
      {children}
    </a>
  );
}
