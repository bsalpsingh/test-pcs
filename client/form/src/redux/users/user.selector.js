import { createSelector } from "reselect";
// create an input selector to retrieve the user state
export const selectUser = (state) => state.user;
export const selectUserData = createSelector(
  [selectUser],
  (user) => user.userData
);
// 