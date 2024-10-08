import KTCIcon from "@/assets/icons/ktc.svg";
import { ReactComponent as LockIcon } from "@/assets/icons/lock.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";
//import { SECTION_NAME as APPLY_FORM_SECTION_NAME } from "@/components/applyFormSection/ApplyFormSection";
import Menu from "@/components/header/Menu";
import Navigation from "@/components/header/Navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Image from "@/components/ui/Image";
import Link from "@/components/ui/Link";
//import useSection from "@/hooks/useSection";
import { useTranslation } from "react-i18next";

const LOGIN_URL = "https://www.ktc.co.th/portal/index?account/login&lang=";

export default function Header() {
  return (
    <header className="tw-h-header tw-sticky tw-top-0 tw-z-[30] tw-flex tw-items-center tw-justify-center tw-bg-black">
      <Container className="tw-flex tw-justify-between">
        <a href="/">
          <Image src={KTCIcon} className="tw-h-full tw-w-auto" />
        </a>
        <div className="tw-h-header tw-hidden tw-flex-1 lg:tw-block">
          <Navigation />
        </div>
        <div className="tw-flex tw-py-3">
          <Link href="/search">
            <SearchIcon className="tw-h-10 tw-w-10 tw-text-white tw-transition hover:tw-text-primary-red lg:tw-mr-3" />
          </Link>
          <MobileAction />
          <DesktopAction />
        </div>
      </Container>
    </header>
  );
}

function MobileAction() {
  const { i18n } = useTranslation();
  return (
    <div className="tw-flex lg:tw-hidden">
      <Link href={`${LOGIN_URL}${i18n.language}`}>
        <LockIcon className="tw-h-10 tw-w-10" />
      </Link>
      <Menu />
    </div>
  );
}

function DesktopAction() {
  const { t, i18n } = useTranslation();
  //const { scrollToSection } = useSection();

  return (
    <div className="lg:tw-tw-inline-flex tw-hidden tw-items-center">
      <Button
        className="tw-mr-3"
        
      >
        {t("header.Apply Card")}
      </Button>
      <Link href={`${LOGIN_URL}${i18n.language}`}>
        <Button variant="outline" outlineColor="white">
          {t("header.Login")}
        </Button>
      </Link>
    </div>
  );
}
