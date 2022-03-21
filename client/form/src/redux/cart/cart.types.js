const cartActionTypes = {
  // fetch cart
  GET_USER_CART_START: "GET_USER_CART_START",
  GET_USER_CART_SUCCESS: "GET_USER_CART_SUCCESS",
  GET_USER_CART_FAILURE: "GET_USER_CART_FAILURE",

  // dispatch offline cart

  DISPATCH_OFFLINE_CART: "DISPATCH_OFFLINE_CART",

  // dispatch the cart items for CRUD operations
  DISPATCH_CART_ITEM_START: "DISPATCH_CART_ITEM_START",
  DISPATCH_CART_ITEM_SUCCESS: "DISPATCH_CART_ITEM_SUCCESS",
  DISPATCH_CART_ITEM_FAILURE: "DISPATCH_CART_ITEM_FAILURE",

  // buy now cart

  DISPATCH_BUY_NOW_ITEM: "DISPATCH_BUY_NOW_ITEM",
  CLEANUP_BUY_NOW_ITEM: "CLEANUP_BUY_NOW_ITEM",

  // user order update

  COPY_ORDER_PRODUCTS: "COPY_ORDER_PRODUCTS",
  COPY_ORDER_OBJ: "COPY_ORDER_OBJ",

  // clear cart after the order is placed
  CLEAR_CART_START: "CLEAR_CART_START",
  CLEANUP_OFFLINE_CART: "CLEANUP_OFFLINE_CART",
  CLEAR_CART_SUCCESS: "CLEAR_CART_SUCCESS",
  CLEAR_CART_FAILURE: "CLEAR_CART_FAILURE",
  CLEANUP_DISPATCH_STATUS: "CLEANUP_DISPATCH_STATUS",
};
export default cartActionTypes;
