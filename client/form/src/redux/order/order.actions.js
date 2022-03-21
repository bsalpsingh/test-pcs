import orderActionTypes from "./order.types";

// get admin orders
// getAdminOrdersStart,getAdminOrdersSuccess,getAdminOrdersFailure
export const getAdminOrdersStart = (orderCriteria) => ({
  type: orderActionTypes.GET_ADMIN_ORDERS_START,
  payload: orderCriteria,
});

export const getAdminOrdersSuccess = (orderList) => ({
  type: orderActionTypes.GET_ADMIN_ORDERS_SUCCESS,
  payload: orderList,
});
export const getAdminOrdersFailure = (error) => ({
  type: orderActionTypes.GET_ADMIN_ORDERS_FAILURE,
  payload: error,
});

// update order status by id

//updateOrderStatusStart,updateOrderStatusSuccess,updateOrderStatusFailure
export const updateOrderStatusStart = (orderDetails) => ({
  type: orderActionTypes.UPDATE_ORDER_STATUS_START,
  payload: orderDetails,
});

export const updateOrderStatusSuccess = () => ({
  type: orderActionTypes.UPDATE_ORDER_STATUS_SUCCESS,
});

export const updateOrderStatusFailure = (error) => ({
  type: orderActionTypes.UPDATE_ORDER_STATUS_FAILURE,
  payload: error,
});

// get delivery boy list
// getDeliveryBoyListStart,getDeliveryBoyListSuccess,getDeliveryBoyListFailure
export const getDeliveryBoyListStart = () => ({
  type: orderActionTypes.FETCH_DBOY_LIST_START,
});

export const getDeliveryBoyListSuccess = (deliveryBoyList) => ({
  type: orderActionTypes.FETCH_DBOY_LIST_SUCCESS,
  payload: deliveryBoyList,
});
export const getDeliveryBoyListFailure = (error) => ({
  type: orderActionTypes.FETCH_DBOY_LIST_FAILURE,
  payload: error,
});

// todo remove below fxns that are related to users
// GET USER ORDERS
export const getUserOrderStart = () => ({
  type: orderActionTypes.GET_USER_ORDER_START,
});

export const getUserOrderSuccess = (orderObj) => ({
  type: orderActionTypes.GET_USER_ORDER_SUCCESS,
  payload: orderObj,
});

export const getUserOrderFailure = (error) => ({
  type: orderActionTypes.GET_USER_ORDER_FAILURE,
  payload: error,
});

//get order by id
// getOrderByIdStart,getOrderByIdSuccess,getOrderByIdFailure
export const getOrderByIdStart = (orderInfo) => ({
  type: orderActionTypes.GET_ORDER_BY_ID_START,
  payload: orderInfo,
});
export const getOrderByIdSuccess = (orderDetails) => ({
  type: orderActionTypes.GET_ORDER_BY_ID_SUCCESS,
  payload: orderDetails,
});

export const getOrderByIdFailure = (error) => ({
  type: orderActionTypes.GET_ORDER_BY_ID_FAILURE,
  payload: error,
});

// dispatch cart item
// dispatchOrderItemStart,dispatchOrderItemSuccess,dispatchOrderItemFailure
export const dispatchOrderItemStart = (orderItem) => ({
  type: orderActionTypes.DISPATCH_ORDER_ITEM_START,
  payload: orderItem,
});
export const dispatchOrderItemSuccess = () => ({
  type: orderActionTypes.DISPATCH_ORDER_ITEM_SUCCESS,
});

export const dispatchOrderItemFailure = (error) => ({
  type: orderActionTypes.DISPATCH_ORDER_ITEM_FAILURE,
  payload: error,
});

// search Order
// searchOrderStart,searchOrderSuccess,searchOrderFailure
export const searchOrderStart = (searchString) => ({
  type: orderActionTypes.SEARCH_ORDER_START,
  payload: searchString,
});

export const searchOrderSuccess = (orderList) => ({
  type: orderActionTypes.SEARCH_ORDER_SUCCESS,
  payload: orderList,
});
export const searchOrderFailure = (error) => ({
  type: orderActionTypes.SEARCH_ORDER_SUCCESS,
  payload: error,
});
// mutate slot timings

export const mutateSlotTimings = (slotObj) => ({
  type: orderActionTypes.MUTATE_SLOT_TIMINGS,
  payload: slotObj,
});

// get user order list

// CLEANUP ORDER
export const cleanUpCreatedOrder = () => ({
  type: orderActionTypes.CLEANUP_CREATED_ORDER,
});

export const cleanUpOrderUpdateStatus = () => ({
  type: orderActionTypes.CLEANUP_ORDER_STATUS,
});
