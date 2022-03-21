import { retry } from "@redux-saga/core/effects";
import orderActionTypes from "./order.types";

const initialState = {
  // admin orders
  // fetchingAdminOrders,adminOrderList,adminOrderListFailure
  fetchingAdminOrders: false,
  adminOrderList: null,
  adminOrderListFailure: undefined,

  // update order Status
  // updatingOrderStatus,orderUpdatedStatus,updateOrderStatusError
  updatingOrderStatus: false,
  orderUpdatedStatus: false,
  updateOrderStatusError: undefined,

  //delivery boy list
  // fetchingDboyList,dBoyList,dBoyListError
  fetchingDboyList: false,
  dBoyList: null,
  dBoyListError: undefined,

  // created order status

  dispatchingOrderItem: false,
  dispatchOrderItemStatus: false,
  dispatchOrderItemError: undefined,

  slotArray: [
    "11:00:00-12:00:00",
    "12:00:00-13:00:00",
    "13:00:00-14:00:00",
    "14:00:00-15:00:00",
    "15:00:00-16:00:00",
    "17:00:00-18:00:00",
    "18:00:00-19:00:00",
    "19:00:00-20:00:00",
    "20:00:00-21:00:00",
  ],
};
// /admin/fetchOrderList
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // case orderActionTypes.GET_USER_ORDER_START:
    //   return {
    //     ...state,
    //     fetchingOrderData: true,
    //     orderData: null,
    //     orderDataFailure: undefined,
    //   };

    // case orderActionTypes.GET_USER_ORDER_SUCCESS:
    //   return {
    //     ...state,
    //     fetchingOrderData: false,
    //     orderData: action.payload,
    //     orderDataFailure: undefined,
    //   };

    // case orderActionTypes.GET_USER_ORDER_FAILURE:
    //   return {
    //     ...state,
    //     fetchingOrderData: false,
    //     orderData: null,
    //     orderDataFailure: action.payload,
    //   };

    // // update order status by id
    case orderActionTypes.UPDATE_ORDER_STATUS_START:
      return {
        ...state,
        updatingOrderStatus: true,
        orderUpdatedStatus: false,
        updateOrderStatusError: undefined,
      };

    case orderActionTypes.UPDATE_ORDER_STATUS_SUCCESS:
      return {
        ...state,
        updatingOrderStatus: false,
        orderUpdatedStatus: true,
        updateOrderStatusError: undefined,
      };

    case orderActionTypes.UPDATE_ORDER_STATUS_FAILURE:
      return {
        ...state,
        updatingOrderStatus: false,
        orderUpdatedStatus: false,
        updateOrderStatusError: action.payload,
      };

    // dispatch order
    case orderActionTypes.DISPATCH_ORDER_ITEM_START:
      return {
        ...state,
        dispatchingOrderItem: true,
        dispatchOrderItemStatus: false,
        dispatchOrderItemError: undefined,
      };
    case orderActionTypes.DISPATCH_ORDER_ITEM_SUCCESS:
      return {
        ...state,
        dispatchingOrderItem: false,
        dispatchOrderItemStatus: true,
        dispatchOrderItemError: undefined,
      };

    case orderActionTypes.DISPATCH_ORDER_ITEM_FAILURE:
      return {
        ...state,
        dispatchingOrderItem: false,
        dispatchOrderItemStatus: false,
        dispatchOrderItemError: action.payload,
      };

    // case orderActionTypes.GET_ORDER_BY_ID_START:
    //   return {
    //     ...state,
    //     fetchingOrderById: true,
    //     orderByIdData: null,
    //     orderByIDError: undefined,
    //   };

    // case orderActionTypes.GET_ORDER_BY_ID_SUCCESS:
    //   return {
    //     ...state,
    //     fetchingOrderById: false,
    //     orderByIdData: action.payload,
    //     orderByIDError: undefined,
    //   };

    // case orderActionTypes.GET_ORDER_BY_ID_FAILURE:
    //   return {
    //     ...state,
    //     fetchingOrderById: false,
    //     orderByIdData: null,
    //     orderByIDError: action.payload,
    //   };

    case orderActionTypes.SEARCH_ORDER_START:
    case orderActionTypes.GET_ADMIN_ORDERS_START:
      return {
        ...state,
        fetchingAdminOrders: true,
        adminOrderList: null,
        adminOrderListFailure: undefined,
      };
    case orderActionTypes.SEARCH_ORDER_SUCCESS:
    case orderActionTypes.GET_ADMIN_ORDERS_SUCCESS:
      return {
        ...state,
        fetchingAdminOrders: false,
        adminOrderList: action.payload,
        adminOrderListFailure: undefined,
      };

    case orderActionTypes.SEARCH_ORDER_FAILURE:
    case orderActionTypes.GET_ADMIN_ORDERS_FAILURE:
      return {
        ...state,
        fetchingAdminOrders: false,
        adminOrderList: null,
        adminOrderListFailure: action.payload,
      };

    case orderActionTypes.FETCH_DBOY_LIST_START:
      return {
        ...state,
        fetchingDboyList: true,
        dBoyList: null,
        dBoyListError: undefined,
      };
    case orderActionTypes.FETCH_DBOY_LIST_SUCCESS:
      return {
        ...state,
        fetchingDboyList: false,
        dBoyList: action.payload,
        dBoyListError: undefined,
      };

    case orderActionTypes.FETCH_DBOY_LIST_FAILURE:
      return {
        ...state,
        fetchingDboyList: false,
        dBoyList: null,
        dBoyListError: action.payload,
      };

    case orderActionTypes.CLEANUP_DBOY_LIST:
      return {
        ...state,
        fetchingDboyList: false,
        dBoyList: null,
        dBoyListError: undefined,
      };
    case orderActionTypes.CLEANUP_CREATED_ORDER:
      return {
        ...state,
        dispatchingOrderItem: false,
        dispatchOrderItemStatus: false,
        dispatchOrderItemError: undefined,
      };
    case orderActionTypes.CLEANUP_ADMIN_ORDERLIST:
      return {
        ...state,
        fetchingAdminOrders: false,
        adminOrderList: null,
        adminOrderListFailure: undefined,
      };

    case orderActionTypes.CLEANUP_ORDER_STATUS:
      return {
        ...state,
        updatingOrderStatus: false,
        orderUpdatedStatus: false,
        updateOrderStatusError: undefined,
      };
    default:
      return state;
  }
};

export default orderReducer;
