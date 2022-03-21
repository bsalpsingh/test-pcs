import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectProduct = (state) => state.product;
export const selectProuductSummaryData = createSelector(
  [selectProduct],
  (product) => product.productSummaryData
);
