import { DOUGH_TYPES, SAUCE_TYPES, INGREDIENT_TYPES } from "@/common/constants";
import sizeTypes from "@/common/enums/sizeTypes";

export const normalizeDough = (douch) => {
  return {
    ...douch,
    type: DOUGH_TYPES.find(({ label }) => douch.name === label)?.value,
  };
};

export const normalizeSauce = (sauce) => {
  return {
    ...sauce,
    type: SAUCE_TYPES.find(({ label }) => sauce.name === label)?.value,
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
    type: INGREDIENT_TYPES.find(({ label }) => ingredient.name === label)
      ?.value,
  };
};
