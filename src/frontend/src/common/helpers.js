import { DOUGH_TYPES, SAUCE_TYPES, INGREDIENT_TYPES } from "@/common/constants";
import sizeTypes from "@/common/enums/sizeTypes";

export const normalizeDough = (dough) => {
  return {
    ...dough,
    type: DOUGH_TYPES.find(({ dough_id }) => dough.id === dough_id)?.value,
  };
};

export const normalizeSauce = (sauce) => {
  return {
    ...sauce,
    type: SAUCE_TYPES.find(({ sauce_id }) => sauce.id === sauce_id)?.value,
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
    type: INGREDIENT_TYPES.find(({ ingredient_id }) => ingredient.id === ingredient_id)
      ?.value,
  };
};
