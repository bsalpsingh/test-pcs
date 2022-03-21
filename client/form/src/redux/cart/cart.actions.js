import cartActionTypes from "./cart.types";
// GET CART
// getUserCartStart,getUserCartSuccess,getUserCartFailure
export const getUserCartStart = () => ({
  type: cartActionTypes.GET_USER_CART_START,
});

export const getUserCartSuccess = (cartObj) => ({
  type: cartActionTypes.GET_USER_CART_SUCCESS,
  payload: cartObj,
});

export const getUserCartFailure = (error) => ({
  type: cartActionTypes.GET_USER_CART_FAILURE,
  payload: error,
});

// dispatch
export const dispatchOfflineCart = (cartDetails) => ({
  type: cartActionTypes.DISPATCH_OFFLINE_CART,
  payload: cartDetails,
});

// dispatch cart item
// dispatchCartItemStart,dispatchCartItemSuccess,dispatchCartItemFailure
export const dispatchCartItemStart = (cartItem) => ({
  type: cartActionTypes.DISPATCH_CART_ITEM_START,
  payload: cartItem,
});
export const dispatchCartItemSuccess = () => ({
  type: cartActionTypes.DISPATCH_CART_ITEM_SUCCESS,
});

export const dispatchCartItemFailure = (error) => ({
  type: cartActionTypes.DISPATCH_CART_ITEM_FAILURE,
  payload: error,
});

// DISPATCH BUY NOW ITEM
export const dispatchBuyNowItem = (buyNowItem) => ({
  type: cartActionTypes.DISPATCH_BUY_NOW_ITEM,
  payload: buyNowItem,
});


// update user order 
// copyOrderProducts,copyOrderObj
export const copyOrderProducts=(productArray)=>({
  type: cartActionTypes.COPY_ORDER_PRODUCTS,
  payload: productArray,
})
export const copyOrderObj=(orderObj)=>({
  type: cartActionTypes.COPY_ORDER_OBJ,
  payload: orderObj,
})
// cleanup buy now cart
export const cleanUpBuyNowCart = () => ({
  type: cartActionTypes.CLEANUP_BUY_NOW_ITEM,
});
// CLEANUP DISPATCH STATUS
export const cleanUpDispatchStatus = () => ({
  type: cartActionTypes.CLEANUP_DISPATCH_STATUS,
});

// CLEANUP OFFLINE CART
export const cleanUpOfflineCart = () => ({
  type: cartActionTypes.CLEANUP_OFFLINE_CART,
});
// // clear cart after the order is placed
// export const clearCartStart = () => ({
//   type: cartActionTypes.CLEAR_CART_START,
// });

// export const clearCartSuccess = () => ({
//   type: cartActionTypes.CLEAR_CART_SUCCESS,
// });

// export const clearCartFailure=
