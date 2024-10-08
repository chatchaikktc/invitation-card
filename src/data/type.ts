export type CreditCardCategory =
  | "corporate"
  | "cobrand"
  | "travel"
  | "gas-auto"
  | "hospital"
  | "cash-back"
  | "generic";

export type DevicePayType =
  | "Google Pay"
  | "Fitbit Pay"
  | "Garmin Pay"
  | "Swatch Pay";

export interface CreditCard {
  cardImage: string;
  cartImageAlt?: string;
  title: { en: string; th: string };
  minimumSalary: number | "Invitation" | "corporation" | "closed";
  cardBrand: "Visa" | "Master" | "JCB" | "UPI";
  benefits: { en: string[]; th: string[] };
  categories: CreditCardCategory[];
  points: number;
  annualFee: { en: string; th: string };
  maximumLimit: { en: string; th: string };
  income: {
    en: string[];
    th: string[];
  };
  qualifications: {
    en: string[];
    th: string[];
  };
  insuranceCoverage: {
    en: string[];
    th: string[];
  };
  devicePay: DevicePayType[];
  openForRegister: boolean;
  link: { en: string; th: string };
}

export interface ApplicationDetail {
  primaryCard: {
    qualifications: (string | string[])[];
    documents: (string | string[])[];
    foreignerDocuments: (string | string[])[];
  };
  supplementaryCard: {
    qualifications: (string | string[])[];
    documents: (string | string[])[];
    foreignerDocuments: (string | string[])[];
  };
}

export interface FAQItem {
  sid : number;
  question: string;
  answer: string[];
}

export interface ArticleItem {
  title: string;
  link: string;
  coverImageUrl: string;
  description : string;
}
