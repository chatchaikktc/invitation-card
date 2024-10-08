import { ReactComponent as FacebookIcon } from "@/assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "@/assets/icons/instagram.svg";
import { ReactComponent as LineIcon } from "@/assets/icons/line.svg";
import { ReactComponent as TwitterIcon } from "@/assets/icons/twitter.svg";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import Link from "@/components/ui/Link";
import { useTranslation } from "react-i18next";

export default function SocialSection() {
  const { t, i18n } = useTranslation();

  const currentDate = new Date();
  const currentYear =
    i18n.language === "th"
      ? currentDate.getFullYear() + 543
      : currentDate.getFullYear();

  return (
    <section className="tw-flex tw-flex-col-reverse tw-items-center tw-justify-between tw-gap-y-8 tw-py-[22px] lg:tw-flex-row lg:tw-gap-y-0 lg:tw-border-t lg:tw-border-[#E4E6E8]">
      <div className="tw-text-primary-gray lg:tw-text-lg lg:tw-text-black">
        &copy; {currentYear} {t("footer.Copyright")}
      </div>
      <div className="tw-flex tw-items-center">
        <div className="tw-flex tw-gap-5 tw-pr-5 lg:tw-border-r lg:tw-border-light-gray">
          <Link href="https://www.facebook.com/ktcrealprivilege">
            <FacebookIcon className="tw-h-6 tw-w-6" />
          </Link>
          <Link href="https://twitter.com/ktcprivilege">
            <TwitterIcon className="tw-h-6 tw-w-6" />
          </Link>
          <Link href="https://www.instagram.com/ktccard">
            <InstagramIcon className="tw-h-6 tw-w-6" />
          </Link>
          <Link href="https://line.me/R/ti/p/@ktc_card">
            <LineIcon className="tw-h-6 tw-w-6" />
          </Link>
        </div>
        <LanguageSwitcher className="tw-ml-5 tw-hidden tw-h-7 tw-w-7 tw-text-sm lg:tw-flex" />
      </div>
    </section>
  );
}
