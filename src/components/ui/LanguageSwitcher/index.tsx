import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twMerge } from "@/lib/twMerge";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  return (
    <div
      className={twMerge(
        "tw-flex tw-h-[34px] tw-w-[34px] tw-items-center tw-justify-center tw-rounded tw-border tw-border-light-gray tw-text-light-gray",
        className
      )}
    >
      {i18n.language === "en" ? (
        <Link to={import.meta.env.VITE_BASE_ROUTE} reloadDocument>
          TH
        </Link>
      ) : (
        <Link to={`/en${import.meta.env.VITE_BASE_ROUTE}`} reloadDocument>
          EN
        </Link>
      )}
    </div>
  );
}
