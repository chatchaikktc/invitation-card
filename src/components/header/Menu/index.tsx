import { ReactComponent as BusinessIcon } from "@/assets/icons/business-store.svg";
import { ReactComponent as CreditCardIcon } from "@/assets/icons/credit-card.svg";
import { ReactComponent as CrossIcon } from "@/assets/icons/cross.svg";
import { ReactComponent as CustomerServiceIcon } from "@/assets/icons/customer-service.svg";
import { ReactComponent as GlobeIcon } from "@/assets/icons/globe.svg";
import KTCIcon from "@/assets/icons/ktc.svg";
import { ReactComponent as MenuIcon } from "@/assets/icons/menu.svg";
import { ReactComponent as PersonalLoanIcon } from "@/assets/icons/personal-loans.svg";
import { ReactComponent as PrivilageIcon } from "@/assets/icons/privilege.svg";
import { ReactComponent as ShoppingOnlineIcon } from "@/assets/icons/shopping-online.svg";
import { ReactComponent as TravelServiceIcon } from "@/assets/icons/travel-service.svg";
//import { SECTION_NAME as APPLY_FORM_SECTION_NAME } from "@/components/applyFormSection/ApplyFormSection";
import { CollapsibleMenuItem, MenuItem } from "@/components/header/MenuItem";
import Image from "@/components/ui/Image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import * as Dialog from "@radix-ui/react-dialog";
import { useTranslation } from "react-i18next"; 
import {
  creditCardMenuItems,
  customerServiceMenuItems,
  merchantMenuItems,
  personalLoanMenuItems,
} from "../data/menuItems";

export default function Menu() {
  const { t } = useTranslation();

  
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <MenuIcon className="tw-h-10 tw-w-10" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.DialogContent className="tw-fixed tw-left-0 tw-top-0 tw-z-40 tw-flex tw-h-screen tw-w-screen tw-animate-fadeIn tw-flex-col tw-bg-black tw-px-7 tw-pt-16 tw-text-white tw-animate-fill-backwards data-[state=closed]:tw-animate-fadeOut">
          <Dialog.Close className="tw-absolute tw-right-5 tw-top-4 tw-text-[40px]">
            <CrossIcon className="tw-h-[46px] tw-w-[46px] tw-text-white" />
          </Dialog.Close>
          <div className="tw-mb-2 tw-flex-1 tw-overflow-y-auto tw-overflow-x-hidden">
            <a href="/">
              <Image
                src={KTCIcon}
                className="tw-absolute tw-left-5 tw-top-0 tw-h-16 tw-w-auto"
              />
            </a>
            <ul>
              <CollapsibleMenuItem
                Icon={CreditCardIcon}
                title={t("navigation.Credit Card.title")}
                menuItems={creditCardMenuItems(t)}
              />
              <CollapsibleMenuItem
                Icon={PersonalLoanIcon}
                title={t("navigation.Personal Loan.title")}
                menuItems={personalLoanMenuItems(t)}
              />
              <MenuItem
                Icon={PrivilageIcon}
                title={t("navigation.Promotions.title")}
                link="/promotion"
              />
              <CollapsibleMenuItem
                Icon={BusinessIcon}
                title={t("navigation.Merchant.title")}
                menuItems={merchantMenuItems(t)}
              />
              <MenuItem
                Icon={TravelServiceIcon}
                title={t("navigation.KTC World.title")}
                link="/ktcworld"
              />
              <MenuItem
                Icon={ShoppingOnlineIcon}
                title={t("navigation.KTC U SHOP.title")}
                link="https://ushop.ktc.co.th/"
              />
              <CollapsibleMenuItem
                Icon={CustomerServiceIcon}
                title={t("navigation.Customer Service.title")}
                menuItems={customerServiceMenuItems(t)}
              />
            </ul>
          </div>
          <div className="tw-pb-4">
            <div className="tw-mb-8 tw-flex tw-justify-between tw-border-t tw-border-separator-gray tw-pt-4">
              <GlobeIcon className="tw-h-10 tw-w-10" />
              <LanguageSwitcher />
            </div>
          </div>
        </Dialog.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
