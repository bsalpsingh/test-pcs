import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";
import FormData from "form-data";
import cartActionTypes from "./cart.types";
import {
  getUserCartStart,
  getUserCartSuccess,
  getUserCartFailure,
  dispatchCartItemSuccess,
  dispatchCartItemFailure,
} from "./cart.actions";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

//!POST SECTION

export function* dispatchCartItemStartSaga({ payload }) {
  try {
    const { variantId, productId, operation } = payload;
    alert("dispatching");
    console.log("called dispatch saga", variantId, productId);
    const { data } = yield axios.patch(
      `/api/v1/cart/mutateCart?operation=${operation}`, //todo write this api endpoint in backend
      { variantId, productId },
      axiosConfig
    );

    yield put(dispatchCartItemSuccess());
    yield put(getUserCartStart());
  } catch (error) {
    yield put(dispatchCartItemFailure(error));
  }
}
export function* dispatchCartItemSaga() {
  yield takeEvery(
    cartActionTypes.DISPATCH_CART_ITEM_START,
    dispatchCartItemStartSaga
  );
}

// ! GET SECTION
export function* getUserCartStartSaga() {
  try {
    const { data } = yield axios.get(
      `/api/v1/cart/getUserCartData`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(getUserCartSuccess(data.data));
  } catch (error) {
    yield put(getUserCartFailure(error));
  }
}
export function* getUserCartSaga() {
  yield takeLatest(cartActionTypes.GET_USER_CART_START, getUserCartStartSaga);
}

export default function* CartSagas() {
  yield all([call(getUserCartSaga), call(dispatchCartItemSaga)]);
}
