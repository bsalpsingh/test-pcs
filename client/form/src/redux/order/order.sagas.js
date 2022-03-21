import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";
import FormData from "form-data";
import orderActionTypes from "./order.types";
import {
  // dispatchOrderItemSuccess,
  // dispatchOrderItemFailure,
  // getUserOrderSuccess,
  // getUserOrderFailure,
  // getOrderByIdSuccess,
  // getOrderByIdFailure,
  getAdminOrdersSuccess,
  getAdminOrdersFailure,
  updateOrderStatusSuccess,
  updateOrderStatusFailure,
  getDeliveryBoyListSuccess,
  getDeliveryBoyListFailure,
  dispatchOrderItemSuccess,
  dispatchOrderItemFailure,
  searchOrderSuccess,
  searchOrderFailure,
} from "./order.actions";
import { cleanUpOfflineCart } from "./../cart/cart.actions";
let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

// ? admin section

// seach orders

export function* searchOrderStart({ payload }) {
  try {
    const { data } = yield axios.get(
      `/api/v1/order/searchOrders?searchString=${payload}`,

      // &${slot !== undefined ? `slot=${slot}` : null}
      axiosConfig
    );

    yield put(searchOrderSuccess(data.data));
  } catch (error) {
    yield put(searchOrderFailure(error));
  }
}

export function* searchOrderSaga() {
  yield takeLatest(orderActionTypes.SEARCH_ORDER_START, searchOrderStart);
}

export function* fetchOrderListStart({ payload }) {
  try {
    const { restaurantOrder, slot, orderStatus, dateRange1, dateRange2 } =
      payload;
    console.log("orderStatus......", orderStatus);
    const { data } = yield axios.get(
      `/api/v1/order/admin/fetchOrderList?restaurantOrder=${
        restaurantOrder !== undefined ? restaurantOrder : undefined
      }&${slot !== undefined ? `slot=${slot}` : null}&${
        orderStatus !== undefined ? `orderStatus=${orderStatus}` : null
      }&dateRange1=${dateRange1}&dateRange2=${dateRange2}`,
      // &${slot !== undefined ? `slot=${slot}` : null}
      axiosConfig
    );
    yield put(getAdminOrdersSuccess(data.data));
  } catch (error) {
    yield put(getAdminOrdersFailure(error));
  }
}

export function* fetchOrderListSaga() {
  yield takeLatest(
    orderActionTypes.GET_ADMIN_ORDERS_START,
    fetchOrderListStart
  );
}

// update order status by id

export function* updateOrderStatus({ payload }) {
  try {
    const { _id, status } = payload;
    delete payload._id;

    const { data } = yield axios.patch(
      `/api/v1/order/admin/updateOrderById?_id=${_id}`,
      { ...payload },
      // &${slot !== undefined ? `slot=${slot}` : null}
      axiosConfig
    );
    yield put(updateOrderStatusSuccess());
  } catch (error) {
    yield put(updateOrderStatusFailure(error));
  }
}
export function* updateOrderStatusByIdSaga() {
  yield takeLatest(
    orderActionTypes.UPDATE_ORDER_STATUS_START,
    updateOrderStatus
  );
}

//!POST SECTION
// export function* dispatchOrderItemsStartSaga({ payload }) {
//   try {
//     alert("running dispatch saga");
//     const { data } = yield axios.post(
//       `/api/v1/order/createOrder`, //todo write this api endpoint in backend
//       { ...payload },
//       axiosConfig
//     );
//     //dispatchOrderItemSuccess,dispatchOrderItemFailure
//     yield put(dispatchOrderItemSuccess());
//     // yield put(cleanUpOfflineCart());
//   } catch (error) {
//     yield put(dispatchOrderItemFailure(error));
//   }
// }

// export function* dispatchOrderItemsSaga() {
//   yield takeLatest(
//     orderActionTypes.DISPATCH_ORDER_ITEM_START,
//     dispatchOrderItemsStartSaga
//   );
// }

// //! GET SECTION
// export function* getUserOrderStartSaga() {
//   try {
//     const { data } = yield axios.get(
//       `/api/v1/order/getUserOrderList`, //todo write this api endpoint in backend

//       axiosConfig
//     );
//     yield put(getUserOrderSuccess(data.data));
//   } catch (error) {
//     yield put(getUserOrderFailure(error));
//   }
// }
// export function* getUserOrderSaga() {
//   yield takeLatest(
//     orderActionTypes.GET_USER_ORDER_START,
//     getUserOrderStartSaga
//   );
// }

// // get order by id
// export function* getOrderByIdStartSaga({ payload }) {
//   try {
//     const { orderId } = payload;
//     // console.log(payload, orderId, "get order details");
//     const { data } = yield axios.get(
//       `/api/v1/order/getUserOrderById/${orderId}`, //todo write this api endpoint in backend

//       axiosConfig
//     );
//     yield put(getOrderByIdSuccess(data.data));
//   } catch (error) {
//     yield put(getOrderByIdFailure(error));
//   }
// }

// export function* getOrderByIdSaga() {
//   yield takeLatest(
//     orderActionTypes.GET_ORDER_BY_ID_START,
//     getOrderByIdStartSaga
//   );
// }
// ! dboy list

export function* fetchDboyList() {
  try {
    const { data } = yield axios.get(
      `/api/v1/user/deliveryBoy`,

      axiosConfig
    );

    yield put(getDeliveryBoyListSuccess(data.data));
  } catch (error) {
    yield put(getDeliveryBoyListFailure(error));
  }
}
export function* fetchDboyListSaga() {
  yield takeLatest(orderActionTypes.FETCH_DBOY_LIST_START, fetchDboyList);
}

export function* dispatchOrderItemsStartSaga({ payload }) {
  try {
    const { data } = yield axios.post(
      `/api/v1/order/createOrder`, //todo write this api endpoint in backend
      { ...payload },
      axiosConfig
    );
    //dispatchOrderItemSuccess,dispatchOrderItemFailure
    yield put(dispatchOrderItemSuccess());
    // yield put(cleanUpOfflineCart());
  } catch (error) {
    yield put(dispatchOrderItemFailure(error));
  }
}

export function* dispatchOrderItemsSaga() {
  yield takeLatest(
    orderActionTypes.DISPATCH_ORDER_ITEM_START,
    dispatchOrderItemsStartSaga
  );
}

export default function* OrderSagas() {
  yield all([
    call(dispatchOrderItemsSaga),
    // call(getUserOrderSaga),
    // call(getOrderByIdSaga),
    call(fetchOrderListSaga),
    call(updateOrderStatusByIdSaga),
    call(fetchDboyListSaga),
    call(searchOrderSaga),
  ]);
}



