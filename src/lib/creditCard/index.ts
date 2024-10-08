import { CreditCard, CreditCardCategory } from "@/data/type";
import Fuse from "fuse.js";
import intersection from "lodash.intersection";

interface CreditCardFilters {
  categoryFilters: CreditCardCategory[];
  salaryFilters: (number | string)[];
  cardBrandFilters: string[];
  openForRegisterFilter: boolean | null;
  searchKeyword: string;
}

const FUSE_OPTIONS = {
  threshold: 0.3,
  ignoreLocation: true,
  keys: [
    { name: "title.en", weight: 3 },
    { name: "title.th", weight: 3 },
    "benefits.en",
    "benefits.th",
    "cartImageAlt",
  ],
};

export const filterCreditCard = (
  creditCards: CreditCard[],
  {
    categoryFilters,
    salaryFilters,
    cardBrandFilters,
    openForRegisterFilter,
    searchKeyword,
  }: CreditCardFilters
) => {
  let filteredCards = creditCards;

  if (categoryFilters.length > 0) {
    filteredCards = filterCardByCategories(filteredCards, categoryFilters);
  }

  if (salaryFilters.length > 0) {
    filteredCards = filterCardBySalary(filteredCards, salaryFilters);
  }

  if (cardBrandFilters.length > 0) {
    filteredCards = filterCardByBrand(filteredCards, cardBrandFilters);
  }

  if (openForRegisterFilter !== null) {
    filteredCards = filterCardByOpenForRegister(
      filteredCards,
      openForRegisterFilter
    );
  }

  if (searchKeyword.length > 0) {
    filteredCards = searchCardByKeyword(filteredCards, searchKeyword);
  }

  return filteredCards;
};

export const sortCreditCard = (creditCards: CreditCard[], sortBy: string) => {
  if (sortBy === "minimumSalary") {
    return creditCards.sort((card1, card2) => {
      const minimumSalary1 =
        typeof card1.minimumSalary === "number" ? card1.minimumSalary : -1;
      const minimumSalary2 =
        typeof card2.minimumSalary === "number" ? card2.minimumSalary : -1;

      if (minimumSalary1 < minimumSalary2) {
        return -1;
      }

      if (minimumSalary1 > minimumSalary2) {
        return 1;
      }

      return 0;
    });
  }

  return creditCards;
};

const filterCardByCategories = (
  cards: CreditCard[],
  categoryFilters: CreditCardCategory[]
): CreditCard[] => {
  return cards.filter(
    ({ categories: cardCategories }) =>
      intersection(cardCategories, categoryFilters).length > 0
  );
};

const filterCardBySalary = (
  cards: CreditCard[],
  salaryFilters: (number | string)[]
) => {
  return cards.filter(({ minimumSalary }) => {
    const cardMinimumSalary =
      typeof minimumSalary === "string"
        ? minimumSalary.toLowerCase()
        : minimumSalary;

    return salaryFilters.includes(cardMinimumSalary);
  });
};

const filterCardByBrand = (cards: CreditCard[], cardBrandFilters: string[]) => {
  return cards.filter(({ cardBrand }) =>
    cardBrandFilters.includes(cardBrand.toLowerCase())
  );
};

const filterCardByOpenForRegister = (
  cards: CreditCard[],
  openForRegister: boolean
) => {
  return cards.filter(
    ({ openForRegister: cardOpenForRegister }) =>
      cardOpenForRegister === openForRegister
  );
};

const searchCardByKeyword = (cards: CreditCard[], keyword: string) => {
  const fuse = new Fuse(cards, FUSE_OPTIONS);

  return fuse.search(keyword).map(({ item }) => item);
};
