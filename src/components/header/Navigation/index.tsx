import {
  NavigationItem,
  NavigationItemMenu,
} from "@/components/header/NavigationItem";
import Link from "@/components/ui/Link";
import { useTranslation } from "react-i18next";
import {
  creditCardMenuItems,
  customerServiceMenuItems,
  merchantMenuItems,
  personalLoanMenuItems,
} from "../data/menuItems";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <ul className="tw-flex tw-h-full tw-justify-around tw-text-white">
      <NavigationItemMenu
        title={t("navigation.Credit Card.title")}
        menuItems={creditCardMenuItems(t)}
        active
      />
      <NavigationItemMenu
        title={t("navigation.Personal Loan.title")}
        menuItems={personalLoanMenuItems(t)}
      />
      <NavigationItem>
        <Link href="/promotion">{t("navigation.Promotions.title")}</Link>
      </NavigationItem>
      <NavigationItemMenu
        title={t("navigation.Merchant.title")}
        menuItems={merchantMenuItems(t)}
      />
      <NavigationItem>
        <Link href="/ktcworld">{t("navigation.KTC World.title")}</Link>
      </NavigationItem>
      <NavigationItem>
        <Link href="https://ushop.ktc.co.th/">
          {t("navigation.KTC U SHOP.title")}
        </Link>
      </NavigationItem>
      <NavigationItemMenu
        title={t("navigation.Customer Service.title")}
        menuItems={customerServiceMenuItems(t)}
      />
    </ul>
  );
}
