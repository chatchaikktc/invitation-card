import en from "@/data/translations/en";
import th from "@/data/translations/th";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ...en,
  ...th,
};

const DEFAULT_LANGUAGE = "th";

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,
});

export const translateContent = <T>(object: { [key: string]: T }): T => {
  if (object[i18n.language] === undefined) {
    return object[DEFAULT_LANGUAGE];
  }

  return object[i18n.language];
};

export default i18n;
