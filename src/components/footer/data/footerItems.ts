import { TFunction } from "i18next";

export type FooterItem = { label: string; link: string };

export const aboutKTCItems = (t: TFunction): FooterItem[] => [
  {
    link: "/credit-card",
    label: t("footer.About KTC.Vision / Mission"),
  },
  {
    link: "/about/overview",
    label: t("footer.About KTC.General Information"),
  },
  {
    link: "/about/company-shareholding-structure",
    label: t("footer.About KTC.Group's Shareholding"),
  },
  {
    link: "/about/organization-chart-structure",
    label: t("footer.About KTC.Organization Structure"),
  },
  {
    link: "/about/board-of-director",
    label: t("footer.About KTC.Board of Directors"),
  },
  {
    link: "/about/executives",
    label: t("footer.About KTC.Executives"),
  },
  {
    link: "/about/company-secretary",
    label: t("footer.About KTC.Company Secretary"),
  },
  {
    link: "/about/compliance-internal-audit",
    label: t("footer.About KTC.Compliance and Internal Audit"),
  },
  {
    link: "/about/financial-controller",
    label: t("footer.About KTC.Financial Controller"),
  },
  {
    link: "/about/data-protection-notice",
    label: t("footer.About KTC.Data Protection Notice"),
  },
  {
    link: "/cookie-notice",
    label: t("footer.About KTC.Cookies Notice"),
  },
  {
    link: "/about/news",
    label: t("footer.About KTC.PR News"),
  },
  {
    link: "/article",
    label: t("footer.About KTC.Article"),
  },
  {
    link: "https://www.ktc.co.th/careers/",
    label: t("footer.About KTC.Career / Internship"),
  },
];

export const customerServiceItems = (t: TFunction): FooterItem[] => [
  {
    link: "/onlineservice/ktconline",
    label: t("footer.Customer Services.Online Services"),
  },
  {
    link: "/support/rate",
    label: t("footer.Customer Services.Rates and Fees"),
  },
  {
    link: "/support/calculator/ktc-proud",
    label: t("footer.Customer Services.Interest / Fee Calculator"),
  },
  {
    link: "/support",
    label: t("footer.Customer Services.Payment Channels"),
  },
  {
    link: "/support/autopayment",
    label: t("footer.Customer Services.KTC Auto Payment"),
  },
  {
    link: "/support/download",
    label: t("footer.Customer Services.Download"),
  },
  {
    link: "/support/announcement",
    label: t("footer.Customer Services.Announcement"),
  },
  {
    link: "/support/faq",
    label: t("footer.Customer Services.FAQ"),
  },
  {
    link: "/support/sitemap",
    label: t("footer.Customer Services.Site Map"),
  },
];

export const sustainabilityDevelopmentItems = (t: TFunction): FooterItem[] => [
  {
    link: "/sustainability-development",
    label: t("footer.Sustainability Development.Economic Dimension"),
  },
  {
    link: "/sustainability-development",
    label: t("footer.Sustainability Development.Social Dimension"),
  },
  {
    link: "/sustainability-development",
    label: t("footer.Sustainability Development.Environmental Dimension"),
  },
  {
    link: "/sustainability-development/supervision",
    label: t(
      "footer.Sustainability Development.Internal Control and Risk Management"
    ),
  },
  {
    link: "/sustainability-development/isoiec-27001-information-security",
    label: t(
      "footer.Sustainability Development.Information Security Management System Certification"
    ),
  },
];

export const investorRelationItems = (t: TFunction): FooterItem[] => [
  {
    link: "/investor-relations/financialinformation/financial-data",
    label: t("footer.Investor Relations.Financial Information"),
  },
  {
    link: "/investor-relations/privacy-policy",
    label: t("footer.Investor Relations.Information Disclosure Policy"),
  },
  {
    link: "/investor-relations/publications-webcast/investorkits",
    label: t("footer.Investor Relations.Publications and Webcast"),
  },
  {
    link: "/investor-relations/shareholders-information/top-10-shareholders",
    label: t("footer.Investor Relations.Shareholders Information"),
  },
  {
    link: "/investor-relations/shareholders-meetings",
    label: t("footer.Investor Relations.Shareholders Meeting"),
  },
  {
    link: "/investor-relations/bond-profile",
    label: t("footer.Investor Relations.Debentures Information and Activities"),
  },
  {
    link: "/investor-relations/contact",
    label: t("footer.Investor Relations.Contact IR"),
  },
];
