//import KTCGrayIcon from "@/assets/icons/ktc-gray.svg";import { SECTION_NAME as HERO_SECTION_NAME } from "@/components/heroSection/HeroSection";
import { SECTION_NAME as KEYVISUAL_SECTION_NAME } from "@/components/keyVisualSection/KeyVisusalSection";
import { SECTION_NAME as LIFESTYLE_SECTION_NAME } from "@/components/lifeStyleSection/LifeStyleSection";
import { SECTION_NAME as VIDEO_HOWTO_SECTION_NAME } from "@/components/videoSection/VideoSection";
import { SECTION_NAME as APPLY_FORM_SECTION_NAME } from "@/components/applyOnlineSection/ApplyOnlineSection";
//import Image from "@/components/ui/Image";
import useSection from "@/hooks/useSection";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import { twMerge } from "@/lib/twMerge";

interface NavigationItemProps {
  sectionName: string;
  label: string;
}

export default function Navigation() {
  const { t } = useTranslation();
  const { scrollToSection } = useSection();

  const handleScrollToApplyForm = () => {
    setTimeout(() => scrollToSection(APPLY_FORM_SECTION_NAME), 200);
  };

  return (
    <section className="tw-flex tw-justify-between tw-items-center">
      <div>
        <ul className="tw-flex tw-flex-row tw-gap-x-6">
          <NavigationItem
            label={t("header.overview")}
            sectionName={KEYVISUAL_SECTION_NAME}
          />
          <NavigationItem
            label={t("header.what is")}
            sectionName={LIFESTYLE_SECTION_NAME}
          />
          <NavigationItem
            label={t("header.hot to")}
            sectionName={VIDEO_HOWTO_SECTION_NAME}
          />

        </ul>
      </div>
      <div className="tw-h-full">

        <Button size="lg" fluid onClick={handleScrollToApplyForm}>
          {t("header.Apply Card")}
        </Button>

      </div>
    </section>
  );
}

function NavigationItem({ label, sectionName }: NavigationItemProps) {
  const { activeSection, scrollToSection } = useSection();

  return (
    <li
      onClick={() => scrollToSection(sectionName)}
      className={twMerge(
        "tw-inline-flex tw-h-[66px] tw-cursor-pointer tw-items-center tw-border-b-4 tw-border-transparent tw-text-primary-gray tw-transition tw-duration-300",
        sectionName === activeSection && "tw-font-bold"
      )}
    >
      {label}
    </li>
  );
}
