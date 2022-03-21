import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectVendor = (state) => state.vendor;
export const selectVendorSummaryData = createSelector(
  [selectVendor],
  (vendor) => vendor.vendorSummaryData
);
