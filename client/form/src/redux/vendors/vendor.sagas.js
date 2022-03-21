import { takeLatest, call, put, all } from "redux-saga/effects";
import axios from "axios";
import FormData from "form-data";
import vendorActionTypes from "./vendor.types";
import {
  fetchVendorSummarySuccess,
  fetchVendorSummaryFailure,
  createVendorSuccess,
  createVendorFailure,
  getVendorByKeySuccess,
  getVendorByKeyFailure,
  getVendorByIdSuccess,
  getVendorByIdFailure,
  updateVendorDetailsSuccess,
  updateVendorDetailsFailure,
  getVendorSubCategoriesSuccess,
  getVendorSubCategoriesFailure,
  fetchVendorListSuccess,
  fetchVendorListFailure,
  fetchVendorFromArraySuccess,
  fetchVendorFromArrayFailure,
  vendorProductBillingSuccess,
  vendorProductBillingFailure,
  getVendorBillsSuccess,
  getVendorBillsFailure,
  getVendorsByIdFailure,
  getVendorsByIdSuccess,
} from "./vendor.actions";

//? vendor summary saga
// constants

let axiosConfigMultiPart = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
};
let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

// vendor update sagas

export function* vendorUpdateStartSaga({ payload }) {
  try {
    const formData = new FormData();
    console.log(payload);
    const { key, value } = payload;
    formData.append("uvn", payload.vendorUpdateDetails.uvn);
    formData.append("name", payload.vendorUpdateDetails.name);
    formData.append(
      "category",
      JSON.stringify(payload.vendorUpdateDetails.category)
    );
    // formData.append("category", payload.vendorUpdateDetails.category);
    formData.append("closeTime", payload.vendorUpdateDetails.closeTime);
    formData.append("com", payload.vendorUpdateDetails.com);
    formData.append(
      "location",
      JSON.stringify(payload.vendorUpdateDetails.location)
    );
    formData.append("open", payload.vendorUpdateDetails.open);
    formData.append("openTime", payload.vendorUpdateDetails.openTime);
    formData.append("propName", payload.vendorUpdateDetails.propName);
    formData.append(
      "vendorPhoneNumber",
      payload.vendorUpdateDetails.vendorPhoneNumber
    );
    formData.append("subCategory", payload.vendorUpdateDetails.subCategory);
    formData.append("vendorPhoto", payload.vendorUpdateDetails.vendorPhoto);
    // File.prototype.isPrototypeOf(file)

    console.log(formData, "this is vendor payload");
    const { data } = yield axios.patch(
      ` /api/v1/vendor/VendorUniqueKey/${key}/${value}`, //todo write this api endpoint in backend
      formData,
      axiosConfigMultiPart
    );
    yield put(updateVendorDetailsSuccess(data.data));
  } catch (error) {
    yield put(updateVendorDetailsFailure(error));
  }
}

export function* vendorUpdateSaga() {
  yield takeLatest(
    vendorActionTypes.UPDATE_VENDOR_START,
    vendorUpdateStartSaga
  );
}

//vendor read sagas

export function* getVendorByIdStartSaga({ payload }) {
  try {
    let axiosConfig = {
      headers: {},
      withCredentials: true,
    };
    const { data } = yield axios.get(
      ` /api/v1/vendor/VendorUniqueKey/${payload.key}/${payload.value}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(getVendorByIdSuccess(data.data));
  } catch (error) {
    yield put(getVendorByIdFailure(error));
  }
}

export function* vendorByIdSaga() {
  yield takeLatest(
    vendorActionTypes.GET_VENDOR_BY_ID_START,
    getVendorByIdStartSaga
  );
}

export function* getVendorByAreaOfOperationStartSaga({ payload }) {
  try {
    const { searchKey, value } = payload;
    const { data } = yield axios.get(
      ` /api/v1/vendor/getVendorByAreaOfOperation/${searchKey}/${value}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(getVendorByKeySuccess(data.data));
  } catch (error) {
    yield put(getVendorByKeyFailure(error));
  }
}

export function* getVendorByAreaOfOperationSaga() {
  yield takeLatest(
    vendorActionTypes.GET_VENDOR_BY_KEY_START, //! wrong actiontype
    getVendorByAreaOfOperationStartSaga
  );
}
// vendor summary saga
export function* fetchVendorSumamryStartSaga({ payload }) {
  try {
    const { data } = yield axios.get(
      ` api/v1/vendor/getVendorSummary/${payload}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(fetchVendorSummarySuccess(data.data));
  } catch (error) {
    yield put(fetchVendorSummaryFailure(error));
  }
}
export function* fetchVendorSummarySaga() {
  yield takeLatest(
    vendorActionTypes.FETCH_VENDOR_SUMMARY_START,
    fetchVendorSumamryStartSaga
  );
}

// vendor create saga

export function* createVendorStart({ payload }) {
  try {
    const formData = new FormData();
    formData.append("uvn", payload.uvn);
    formData.append("name", payload.name);
    formData.append("category", JSON.stringify(payload.category));
    formData.append("propName", payload.propName);
    formData.append("vendorPhoneNumber", payload.vendorPhoneNumber);
    formData.append("closeTime", payload.closeTime);
    formData.append("com", payload.com);
    formData.append("location", JSON.stringify(payload.location));
    formData.append("open", payload.open);
    formData.append("subCategory", JSON.stringify(payload.subCategory));
    formData.append("openTime", payload.openTime);
    formData.append("vendorPhoto", payload.vendorPhoto);

    // File.prototype.isPrototypeOf(file)

    console.log(payload, "this is vendor payload");
    const { data } = yield axios.post(
      ` api/v1/vendor`, //todo write this api endpoint in backend
      formData,
      axiosConfigMultiPart
    );
    yield put(createVendorSuccess());
    console.log(data);
  } catch (error) {
    yield put(createVendorFailure());
  }
}

export function* createVendorSaga() {
  yield takeLatest(vendorActionTypes.CREATE_VENDOR_START, createVendorStart);
}

// get vendor sub Category list
export function* getVendorSubCategoryListStart({ payload }) {
  try {
    const { categoryName, key, value } = payload;
    const queryparams = key && value ? `key=${key}&value=${value}` : null;
    // let queryString =
    //       role === undefined || role !== "admin"
    //         ? `page=${page}&loc=${lng},${lat}&radius=10&role=user`
    //         : `page=${page}`;
    const { data } = yield axios.get(
      ` /api/v1/vendor/getVendorSubCategoryList/vendorCategory/${categoryName}?${queryparams}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(getVendorSubCategoriesSuccess(data.data));
  } catch (error) {
    yield put(getVendorSubCategoriesFailure(error));
  }
}
export function* getVendorSubCategoryList() {
  yield takeLatest(
    vendorActionTypes.GET_VENDOR_SUBCATEGORIES_START,
    getVendorSubCategoryListStart
  );
}

// get vendor list user end
export function* getVendorListUserStart({ payload }) {
  try {
    const { searchKey, value, categoryName } = payload;

    let queryString =
      !!value === true ? `?searchKey=${searchKey}&value=${value}` : `?${null}`;
    const { data } = yield axios.get(
      ` /api/v1/vendor/getVendorList/category/${categoryName}${queryString}
      `, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(getVendorByKeySuccess(data.data));
  } catch (error) {
    yield put(getVendorByKeyFailure(error));
  }
}
export function* getVendorListUserEnd() {
  yield takeLatest(
    vendorActionTypes.GET_VENDOR_LIST_USER,
    getVendorListUserStart
  );
}

// fetch vendor list
export function* fetchVendorList({ payload }) {
  try {
    const { data } = yield axios.get(
      ` /api/v1/vendor/fetchVendorList?vendorCategory=${payload.vendorCategory}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(fetchVendorListSuccess(data.data));
  } catch (error) {
    yield put(fetchVendorListFailure(error));
  }
}

export function* fetchVendorListSaga() {
  yield takeLatest(vendorActionTypes.FETCH_VENDOR_LIST_START, fetchVendorList);
}

// fetch specific vendor array
export function* fetchVendorArray({ payload }) {
  try {
    const vendorList = payload;
    console.log("vendorList...........", vendorList);
    const { data } = yield axios.get(
      ` /api/v1/vendor/fetchOrderDispatchers?vendorList=${payload}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(fetchVendorFromArraySuccess(data.data));
    // fetchVendorFromArrayFailure,
  } catch (error) {
    yield put(fetchVendorFromArrayFailure(error));
  }
}

export function* fetchVendorArrayStart() {
  yield takeLatest(
    vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_START,
    fetchVendorArray
  );
}

// fetch vendor bills by dboy id

export function* fetchVendorBills({ payload }) {
  try {
    const { dateRange1, dateRange2, dBoyId, vendorId } = payload;
    const { data } = yield axios.get(
      `/api/v1/vendor/fetchVendorBills?dateRange1=${dateRange1}&dateRange2=${dateRange2}&${
        dBoyId !== undefined ? `dBoyId=${dBoyId}` : null
      }&${vendorId !== undefined ? `vendorId=${vendorId}` : null}`,
      // &${slot !== undefined ? `slot=${slot}` : null}
      axiosConfig
    );

    yield put(getVendorBillsSuccess(data.data));
    // getVendorBillsSuccess,getVendorBillsFailure
  } catch (error) {
    yield put(getVendorBillsFailure(error));
  }
}

export function* fetchVendorBillsStart() {
  yield takeLatest(vendorActionTypes.GET_VENDOR_BILLS_START, fetchVendorBills);
}
// vendor product billing
export function* vendorProductBilling({ payload }) {
  try {
    const { data } = yield axios.patch(
      `/api/v1/vendor/billVendorProducts`,
      { ...payload },
      // &${slot !== undefined ? `slot=${slot}` : null}
      axiosConfig
    );
    // const { data } = yield axios.patch(
    //   ` /api/v1/vendor/billVendorProducts`, //todo write this api endpoint in backend
    //   { ...payload },
    //   axiosConfig
    // );
    yield put(vendorProductBillingSuccess());
  } catch (error) {
    yield put(vendorProductBillingFailure(error));
  }
}
export function* vendorProductBillingSaga() {
  yield takeLatest(
    vendorActionTypes.VENDOR_PRODUCT_BILLING_START,
    vendorProductBilling
  );
}
// fetch vendors by id list
export function* getVendorsByIdArray({ payload }) {
  try {
    // todo write backend api for this action
    console.log("calling api");
    const { data } = yield axios.post(
      ` /api/v1/vendor/getVendorsByIdArray`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );

    //
    yield put(getVendorsByIdSuccess(data.data));
  } catch (error) {
    yield put(getVendorsByIdFailure(error));
  }
}
export function* fetchVendorsByIdSaga() {
  yield takeLatest(
    vendorActionTypes.GET_VENDORS_BY_ID_START,
    getVendorsByIdArray
  );
}

export default function* VendorSagas() {
  yield all([
    call(fetchVendorSummarySaga),
    // call(fetchVendorsByIdSaga),
    call(createVendorSaga),
    call(getVendorByAreaOfOperationSaga),
    call(vendorByIdSaga),
    call(vendorUpdateSaga),
    call(getVendorSubCategoryList),
    call(getVendorListUserEnd),
    call(fetchVendorListSaga),
    call(fetchVendorArrayStart),
    call(vendorProductBillingSaga),
    call(fetchVendorBillsStart),
    call(fetchVendorsByIdSaga),
  ]);
}
