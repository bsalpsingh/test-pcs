import cartActionTypes from "./cart.types";
import { mutateCart } from "./cart.utils";
const initialState = {
  // get cart data
  // fetchingCartData,cartData,cartDataFailure
  fetchingCartData: false,
  cartData: null,
  cartDataFailure: undefined,

  // dispatch cart data
  // dispatchingCartItem,dispatchItemStatus,dispatchItemError
  dispatchingCartItem: false,
  dispatchItemStatus: false,
  dispatchItemError: undefined,

  //dispatch offline cart

  offlineCart: {
    regular: [],
    food: [],
  },

  editableOrderObj: null,
  // buy now array

  buyNowItem: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.GET_USER_CART_START:
      return {
        ...state,
        fetchingCartData: true,
        cartData: null,
        cartDataFailure: undefined,
      };

    case cartActionTypes.GET_USER_CART_SUCCESS:
      return {
        ...state,
        fetchingCartData: false,
        cartData: action.payload,
        cartDataFailure: undefined,
      };

    case cartActionTypes.GET_USER_CART_FAILURE:
      return {
        ...state,
        fetchingCartData: false,
        cartData: null,
        cartDataFailure: action.payload,
      };

    case cartActionTypes.DISPATCH_CART_ITEM_START:
      return {
        ...state,
        dispatchingCartItem: true,
        dispatchItemStatus: false,
        dispatchItemError: undefined,
      };
    case cartActionTypes.DISPATCH_CART_ITEM_SUCCESS:
      return {
        ...state,
        dispatchingCartItem: false,
        dispatchItemStatus: true,
        dispatchItemError: undefined,
      };

    case cartActionTypes.DISPATCH_CART_ITEM_FAILURE:
      return {
        ...state,
        dispatchingCartItem: false,
        dispatchItemStatus: false,
        dispatchItemError: action.payload,
      };

    case cartActionTypes.DISPATCH_BUY_NOW_ITEM:
      return {
        ...state,
        buyNowItem: action.payload,
      };

    case cartActionTypes.CLEANUP_BUY_NOW_ITEM:
      return {
        ...state,
        buyNowItem: null,
      };
    case cartActionTypes.CLEANUP_DISPATCH_STATUS:
      return {
        ...state,
        dispatchingCartItem: false,
        dispatchItemStatus: false,
        dispatchItemError: undefined,
      };

    case cartActionTypes.DISPATCH_OFFLINE_CART:
      return {
        ...state,
        offlineCart: mutateCart(
          state.offlineCart,
          action.payload.productDetails,
          action.payload.operation
        ),
      };

    case cartActionTypes.COPY_ORDER_PRODUCTS:
      return {
        ...state,
        offlineCart: {
          regular: [...action.payload],
          food: [],
        },
      };
    case cartActionTypes.COPY_ORDER_OBJ:
      return {
        ...state,
        editableOrderObj: action.payload,
      };
    case cartActionTypes.CLEANUP_OFFLINE_CART:
      return {
        ...state,
        offlineCart: {
          regular: [],
          food: [],
        },
        editableOrderObj: null,
      };
    default:
      return state;
  }
};

export default cartReducer;
