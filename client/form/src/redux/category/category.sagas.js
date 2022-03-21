import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import axios from "axios";
import FormData from "form-data";
import categoryActionTypes from "./category.types";
import {
  createCategorySuccess,
  createCategoryFailure,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  updateCategorySuccess,
  updateCategoryFailure,
  createSubCategorySuccess,
  createSubCategoryFailure,
  fetchSubCategoriesSuccess,
  fetchSubCategoriesFailure,
  updateSubCategorySuccess,
  updateSubCategoryFailure,
  createThirdCategorySuccess,
  createThirdCategoryFailure,
  fetchThirdCategoriesSuccess,
  fetchThirdCategoriesFailure,
  updateThirdCategorySuccess,
  updateThirdCategoryFailure,
} from "./category.actions";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

//!POST SECTION

export function* createCategory({ payload }) {
  try {
    const { data } = yield axios.post(
      `/api/v1/categories/createCategory`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );

    yield put(createCategorySuccess());
  } catch (error) {
    yield put(createCategoryFailure(error));
  }
}

// create category
export function* createCategorySaga() {
  yield takeLatest(categoryActionTypes.CREATE_CATEGORY_START, createCategory);
}

// create sub category

export function* createSubCategory({ payload }) {
  try {
    const { data } = yield axios.post(
      `/api/v1/categories/createSubCategory`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );
    yield put(createSubCategorySuccess());
  } catch (error) {
    yield put(createSubCategoryFailure(error));
  }
}
export function* createSubCategorySaga() {
  yield takeLatest(
    categoryActionTypes.CREATE_SUB_CATEGORY_START,
    createSubCategory
  );
}

// CREATE third category
export function* createThirdCategory({ payload }) {
  try {
    const { data } = yield axios.post(
      `/api/v1/categories/createThirdCategory`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );
    // createThirdCategorySuccess,createThirdCategoryFailure
    yield put(createThirdCategorySuccess());
  } catch (error) {
    yield put(createThirdCategoryFailure(error));
  }
}
export function* createThirdCategorySaga() {
  yield takeLatest(
    categoryActionTypes.CREATE_THIRD_CATEGORY_START,
    createThirdCategory
  );
}
//!   PATCH SECTION

export function* updateCategory({ payload }) {
  try {
    const { data } = yield axios.patch(
      `/api/v1/categories/updateCategory`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );
    yield put(updateCategorySuccess());
  } catch (error) {
    yield put(updateCategoryFailure(error));
  }
}

export function* updateCategorySaga() {
  yield takeLatest(categoryActionTypes.UPDATE_CATEGORY_START, updateCategory);
}

// update a particular subCategory

export function* updateSubCategory({ payload }) {
  try {
    const { data } = yield axios.patch(
      `/api/v1/categories/updateSubCategory`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );

    yield put(updateSubCategorySuccess());
  } catch (error) {
    yield put(updateSubCategoryFailure(error));
  }
}

export function* updateSubCategorySaga() {
  yield takeLatest(
    categoryActionTypes.UPDATE_SUB_CATEGORY_START,
    updateSubCategory
  );
}

// update third category
export function* updateThirdCategory({ payload }) {
  try {
    alert("running");
    const { data } = yield axios.patch(
      `/api/v1/categories/updateThirdCategory`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );
    // updateThirdCategorySuccess,updateThirdCategoryFailure
    yield put(updateThirdCategorySuccess());
  } catch (error) {
    yield put(updateSubCategoryFailure(error));
  }
}

export function* updateThirdCategorySaga() {
  yield takeLatest(
    categoryActionTypes.UPDATE_THIRD_CATEGORY_START,
    updateThirdCategory
  );
}
//! GET SECTION
export function* fetchCategoryList() {
  try {
    const { data } = yield axios.get(
      `/api/v1/categories/fetchCategories`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(fetchCategoriesSuccess(data.data));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}
export function* fetchCategoryListSaga() {
  yield takeLatest(
    categoryActionTypes.FETCH_CATEGORY_LIST_START,
    fetchCategoryList
  );
}

// fetch third category list
// fetch sub category list
export function* fetchThirdCategoryList({ payload }) {
  try {
    const { data } = yield axios.get(
      `/api/v1/categories/fetchThirdCategoryList?categoryId=${payload.categoryId}&subCategoryId=${payload.subCategoryId}`, //todo write this api endpoint in backend

      axiosConfig
    );
    // fetchThirdCategoriesSuccess,fetchThirdCategoriesFailure
    yield put(fetchThirdCategoriesSuccess(data.data));
  } catch (error) {
    yield put(fetchThirdCategoriesFailure(error));
  }
}

export function* fetchThirdCategoryListSaga() {
  yield takeLatest(
    categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_START,
    fetchThirdCategoryList
  );
}

// fetch sub category list
export function* fetchSubCategoryList({ payload }) {
  try {
    const { data } = yield axios.get(
      `/api/v1/categories/fetchSubCategoryList?categoryId=${payload.categoryId}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(fetchSubCategoriesSuccess(data.data));
  } catch (error) {
    yield put(fetchSubCategoriesFailure(error));
  }
}

export function* fetchSubCategoryListSaga() {
  yield takeLatest(
    categoryActionTypes.FETCH_SUB_CATEGORY_LIST_START,
    fetchSubCategoryList
  );
}

export default function* CategorySagas() {
  yield all([
    call(createCategorySaga),
    call(fetchCategoryListSaga),
    call(updateCategorySaga),
    call(createSubCategorySaga),
    call(fetchSubCategoryListSaga),
    call(updateSubCategorySaga),
    call(createThirdCategorySaga),
    call(fetchThirdCategoryListSaga),
    call(updateThirdCategorySaga),
  ]);
}
