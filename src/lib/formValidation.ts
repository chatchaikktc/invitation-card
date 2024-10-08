import i18n from "i18next";

export const isTrue = (data: boolean) => {
  return !!data || i18n.t("applyForm.formError.requiredField");
};

export const isEmail = (data: string) => {
  const emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailFormat.test(data) || i18n.t("applyForm.formError.invalidEmail");
};
