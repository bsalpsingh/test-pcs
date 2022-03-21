import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectCategory = (state) => state.category;
export const selectCreateCategoryStatus = createSelector(
  [selectCategory],
  (category) => category.categoryCreated
);
