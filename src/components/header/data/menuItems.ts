import { TFunction } from "i18next";

export type MenuItem = { label: string; link: string };

export const creditCardMenuItems = (t: TFunction): MenuItem[] => [
  {
    label: t("navigation.Credit Card.Credit Card"),
    link: "/credit-card",
  },
  {
    label: t("navigation.Credit Card.Rewards Program"),
    link: "/rewards",
  },
  {
    label: t("navigation.Credit Card.Installment Payment"),
    link: "/installment",
  },
  {
    label: t("navigation.Credit Card.Donation"),
    link: "/rewards#section-flexi-donate",
  },
  {
    label: t("navigation.Credit Card.Auto Payment"),
    link: "/support/autopayment",
  },
  {
    label: t("navigation.Credit Card.Rates and Fees"),
    link: "/support/rate",
  },
  {
    label: t("navigation.Credit Card.KTC Device Pay"),
    link: "/devicepay",
  },
];

export const personalLoanMenuItems = (t: TFunction): MenuItem[] => [
  {
    label: t("navigation.Personal Loan.Loan Product"),
    link: "/loan",
  },
  {
    label: t("navigation.Personal Loan.Installment Payment"),
    link: "/installment",
  },
  {
    label: t("navigation.Personal Loan.Interest / Fee Calculator"),
    link: "/support/calculator/ktc-proud",
  },
  {
    label: t("navigation.Personal Loan.Rates and Fees"),
    link: "/support/rate",
  },
];

export const merchantMenuItems = (t: TFunction): MenuItem[] => [
  {
    label: t("navigation.Merchant.Merchant Service"),
    link: "/merchant",
  },
  {
    label: t("navigation.Merchant.EDC Service"),
    link: "/merchant/edc",
  },
  {
    label: t("navigation.Merchant.QR Code Payment"),
    link: "/merchant/qrpay",
  },
  {
    label: t("navigation.Merchant.Online Payment Gateway"),
    link: "/merchant/payment-gateway",
  },
  {
    label: t("navigation.Merchant.Auto Payment Service"),
    link: "/merchant/recurring",
  },
  {
    label: t("navigation.Merchant.Link Payment"),
    link: "/merchant/linkpay",
  },
  {
    label: t("navigation.Merchant.ALIPAY"),
    link: "/merchant/alipay",
  },
];

export const customerServiceMenuItems = (t: TFunction): MenuItem[] => [
  {
    label: t("navigation.Customer Service.Contact KTC"),
    link: "/contact",
  },
  {
    label: t("navigation.Customer Service.KTC MOBILE APPLICATION"),
    link: "/ktcmobile",
  },
  {
    label: t("navigation.Customer Service.Payment Channel"),
    link: "/support",
  },
  {
    label: t("navigation.Customer Service.KTC E-Book"),
    link: "/e-book",
  },
  {
    label: t("navigation.Customer Service.Download Manual / Form"),
    link: "/support/download",
  },
  {
    label: t("navigation.Customer Service.FAQ"),
    link: "/support/faq",
  },
];
