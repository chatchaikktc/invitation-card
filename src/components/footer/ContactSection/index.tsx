import AppGalleryIcon from "@/assets/icons/app-gallery.svg";
import AppStoreIcon from "@/assets/icons/app-store.svg";
import CertifiedBadgeIcon from "@/assets/icons/certified-badge.svg";
import KTCMobileIcon from "@/assets/icons/ktc-mobile.svg";
import PlayStoreIcon from "@/assets/icons/play-store.svg";
import { ReactComponent as TelephoneIcon } from "@/assets/icons/tel.svg";
import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="tw-w-full md:tw-w-[unset]">
      <div className="tw-mb-5 tw-flex tw-justify-center md:tw-mb-0 md:tw-flex-col md:tw-items-start">
        <div className="tw-mr-4 tw-text-lg tw-font-bold md:tw-mb-2.5" lang="en">
          KTC PHONE
        </div>
        <div className="tw-flex tw-items-center md:tw-mb-5">
          <TelephoneIcon className="tw-mr-1 tw-h-5 tw-w-5" />
          <span className="tw-text-lg tw-font-bold" lang="en">
            02 123 5000
          </span>
        </div>
      </div>
      <Image
        src={CertifiedBadgeIcon}
        className="tw-mb-5 tw-hidden tw-h-[70px] tw-w-[70px] md:tw-block"
      />
      <div className="tw-mb-4 tw-flex tw-items-center tw-justify-center md:tw-mb-0 md:tw-flex-col md:tw-items-start">
        <div className="tw-mr-4 tw-font-bold md:tw-mb-2.5">
          {t("footer.Download App")}
        </div>
        <div className="tw-flex tw-items-center md:tw-mb-2.5">
          <Image src={KTCMobileIcon} className="tw-mr-2 tw-h-9 tw-w-9" />
          <span className="tw-text-lg tw-font-bold" lang="en">
            KTC Mobile
          </span>
        </div>
      </div>
      <div className="tw-mb-4 tw-flex tw-flex-wrap tw-justify-center tw-gap-2.5 tw-px-1 md:tw-mb-0 md:tw-flex-col md:tw-px-0">
        <Link href="https://apps.apple.com/th/app/ktc-mobile/id723657868">
          <Image
            src={AppStoreIcon}
            className="tw-h-[40px] tw-w-[120px] md:tw-h-[28px] md:tw-w-[86px]"
          />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.tapktc.app">
          <Image
            src={PlayStoreIcon}
            className="tw-h-[40px] tw-w-[120px] md:tw-h-[28px] md:tw-w-[86px]"
          />
        </Link>
        <Link href="https://appgallery.huawei.com/#/app/C101943585">
          <Image
            src={AppGalleryIcon}
            className="tw-h-[40px] tw-w-[120px] md:tw-h-[28px] md:tw-w-[86px]"
          />
        </Link>
      </div>
      <div className="tw-flex tw-justify-center md:tw-hidden">
        <Image
          src={CertifiedBadgeIcon}
          className="tw-mb-5 tw-h-[70px] tw-w-[70px]"
        />
      </div>
    </section>
  );
}
