import useSection from "@/hooks/useSection";
import { SECTION_NAME as APPLY_FORM_SECTION_NAME } from "@/components/applyOnlineSection/ApplyOnlineSection"

import { useTranslation } from "react-i18next";


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

interface NavigationItemProps {
  sectionName: string;
}


export default function Menu() {
  const { t } = useTranslation();


  return (
    <div className="tw-flex tw-justify-between tw-items-center">
      <Breadcrumbs aria-label="breadcrumb" >
        <Link underline="hover" color="inherit" href={t("header.link")}>
          {t("header.home")}
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          KTC DIGITAL CARD
        </Link>
      </Breadcrumbs>
      <ButtomToSection sectionName={APPLY_FORM_SECTION_NAME} />
    </div>
  );
}


function ButtomToSection({ sectionName }: NavigationItemProps) {
  const { scrollToSection } = useSection();
  const { t } = useTranslation();
  return (

    <>
      <button className="tw-py-[6px] tw-bg-[#E43D31] tw-px-[14px] tw-text-[16px] tw-text-white tw-font-bold tw-rounded-[8px]" onClick={() => scrollToSection(sectionName)}>{t("header.Apply Card")}</button>
    </>

  );
}

{/* <li
      onClick={() => scrollToSection(sectionName)}
      className={twMerge(
        "tw-inline-flex tw-h-[66px] tw-cursor-pointer tw-items-center tw-border-b-4 tw-border-transparent tw-text-primary-gray tw-transition tw-duration-300",
        sectionName === activeSection && "tw-font-bold"
      )}
    >
      {label}
      </li>*/}