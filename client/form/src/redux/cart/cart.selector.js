import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectCart = (state) => state.cart;
export const selectProuductSummaryData = createSelector(
  [selectCart],
  (cart) => cart.cartData
);
