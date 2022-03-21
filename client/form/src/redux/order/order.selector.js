import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectOrder = (state) => state.order;
export const selectOrderSummaryData = createSelector(
  [selectOrder],
  (order) => order.orderData
);
