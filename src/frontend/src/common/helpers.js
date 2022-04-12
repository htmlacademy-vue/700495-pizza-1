import { doughTypes, sauceTypes, ingredientTypes } from "@/common/constants";
import sizeTypes from "@/common/enums/sizeTypes";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    type: doughTypes[dough.id],
  };
};

export const normalizeSauce = (sauce) => {
  return {
    ...sauce,
    type: sauceTypes[sauce.id],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    type: sizeTypes[size.multiplier],
  };
};

export const normalizeIngredient = (ingredient) => {
  return {
    ...ingredient,
    type: ingredientTypes[ingredient.id],
  };
};
