import { takeLatest, call, put, all, take } from "redux-saga/effects";
import axios from "axios";
import productActionTypes from "./product.types";
import {
  fetchProductSummarySuccess,
  fetchProductSummaryFailure,
  createProductSuccess,
  createProductFailure,
  getCategoryVendorSuccess,
  getCategoryVendorFailure,
  getProductListSuccess,
  getProductListFailure,
  updateProductInfoSuccess,
  updateProductFailure,
  getProductByIdSuccess,
  getProductByIdFailure,
  createVariantSuccess,
  createVariantFailure,
  fetchVariantByUpnSuccess,
  fetchVariantByUpnFailure,
  fetchVariantBySkuSuccess,
  fetchVariantBySkuFailure,
  updateVariantSuccess,
  updateVariantFailure,
  createDescriptionSuccess,
  createDescriptionFailure,
  fetchDescriptionSuccess,
  fetchDescriptionFailure,
  updateDescriptionSuccess,
  updateDescriptionFailure,
  getSearchListSuccess,
  getSearchListFailure,
  getCategoryListSuccess,
  getCatgoryListFailure,
  getSubCategoryListSuccess,
  getSubCategoryListFailure,
  getUserProductListSuccess,
  getUserProductListFailure,
  getFeaturedProductListSuccess,
  getFeaturedProductListFailure,
  searchProductSuccess,
  searchProductFailure,
  getProductListByIdSuccess,
  getProductListByIdFailure,
  searchRecommendationSuccess,
  searchRecommendationFailure,
} from "./product.actions";

//? product summary saga

import FormData from "form-data";
let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};
let axiosConfigMultiPart = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
};

//update variant saga
export function* updateVariantStartSaga({ payload }) {
  try {
    const { updateVariantDetails, key, value } = payload;
    const formData = new FormData();

    formData.append("vendor", updateVariantDetails.vendor);
    formData.append("qtyType", updateVariantDetails.qtyType);
    formData.append("variantName", updateVariantDetails.variantName);
    formData.append("discount", updateVariantDetails.discount);
    formData.append("selfStock", updateVariantDetails.selfStock);
    formData.append("productBarCode", payload.productBarCode);
    formData.append("vegan", payload.vegan);
    formData.append("variantPhoto", updateVariantDetails.variantPhoto);
    formData.append("variant", JSON.stringify(updateVariantDetails.variant));
    formData.append("variantPhoto", updateVariantDetails.variantPhoto);
    formData.append("variantPrice", updateVariantDetails.price);
    formData.append("variantStock", updateVariantDetails.variantStock);

    console.log(formData, payload, "this is vendor payload");

    const { data } = yield axios.patch(
      `/api/v1/products/variant/${key}/${value}`, //todo write this api endpoint in backend
      {
        ...updateVariantDetails,
      },

      axiosConfig
    );
    yield put(updateVariantSuccess());
  } catch (error) {
    yield put(updateVariantFailure(error));
  }
}
export function* updateVariantSaga() {
  yield takeLatest(
    productActionTypes.UPDATE_VARIANT_START,
    updateVariantStartSaga
  );
}

// update product saga
export function* updateProductStartSaga({ payload }) {
  try {
    // key: "_id"
    // updateProductDetails:
    // addOnDispatchObj: []
    // brand: "pawan"
    // brandSlug: "albaik"
    // category: "restaurant"
    // categorySlug: "restaurant"
    // id: "612d16203eb5064bb02fec5c"
    // location: {type: "Point", coordinates: Array(2), address: "bhairahawa", description: "good will"}
    // metaData: [{…}]
    // name: "momos"
    // nameSlug: "momo"
    // onpromo: false
    // productPhoto: []
    // subCategory: "fast food restaurant"
    // subCategorySlug: "fast-food-restaurant"
    // tags: ["momo"]
    // thirdCategory: "veg restaurant"
    // unit: "undefined"
    // variant: [{…}]
    // vendor: "610108ada2d5ad45c835e89c"
    // __v: 0
    // _id: "612d16203eb5064bb02fec5c"
    // [[Prototype]]: Object
    // value: "612d16203eb5064bb02fec5c"
    console.log(payload);
    const formData = new FormData();

    formData.append("vendor", payload.updateProductDetails.vendor);
    formData.append("brand", payload.updateProductDetails.brand);
    formData.append("category", payload.updateProductDetails.category);
    formData.append("name", payload.updateProductDetails.name);
    formData.append("onpromo", payload.updateProductDetails.onpromo);
    formData.append("recommendations", JSON.stringify(payload.recommendations));

    for (let i = 0; i < payload.updateProductDetails.productPhoto.length; i++) {
      formData.append(
        `productPhoto`,
        payload.updateProductDetails.productPhoto[i]
      );
    }
    formData.append("productPhoto", payload.updateProductDetails.productPhoto);
    formData.append(
      "subCategory",
      JSON.stringify(payload.updateProductDetails.subCategory)
    );
    // thirdCategory
    formData.append(
      "thirdCategory",
      JSON.stringify(payload.updateProductDetails.thirdCategory)
    );

    formData.append("tags", payload.updateProductDetails.tags.join(" "));
    console.log(formData, payload, "this is vendor payload");
    const { data } = yield axios.patch(
      ` /api/v1/products/${payload.key}/${payload.value}`, //todo write this api endpoint in backend
      formData,
      axiosConfigMultiPart
    );
    console.log(data);
    yield put(updateProductInfoSuccess(data.data));
    //todo call the dispatch actions
  } catch (error) {
    yield put(updateProductFailure(error));
  }
}

export function* updateProductSaga() {
  yield takeLatest(
    productActionTypes.UPDATE_PRODUCT_START,
    updateProductStartSaga
  );
}

//update description saga
export function* updateDescriptionStartSaga({ payload }) {
  try {
    const { key, value, descriptionData } = payload;
    console.log(key, value, payload, "key and value");
    yield axios.patch(
      ` /api/v1/products/metaData/${key}/${value}`, //todo write this api endpoint in backend
      descriptionData,
      axiosConfig
    );
    yield put(updateDescriptionSuccess());
  } catch (error) {
    yield put(updateDescriptionFailure(error));
  }
}

export function* updateDescriptionSaga() {
  yield takeLatest(
    productActionTypes.UPDATE_DESCRIPTION_START,
    updateDescriptionStartSaga
  );
}

//create description saga

export function* createDescriptionStartSaga({ payload }) {
  try {
    yield axios.post(
      ` /api/v1/products/metaData`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );

    yield put(createDescriptionSuccess());
  } catch (error) {
    yield put(createDescriptionFailure(error));
  }
}

export function* createDescriptionSaga() {
  yield takeLatest(
    productActionTypes.CREATE_DESCRIPTION_START,
    createDescriptionStartSaga
  );
}

//create variant saga

export function* createVariantsStartSaga({ payload }) {
  try {
    //     discount: "10"
    // price: "32"
    // qtyType: "kg"
    // selfStock: false
    // variant: {}
    // variantFieldName: "wt"
    // variantName: "1kg meat"
    // variantStock: "23"
    // vendor: "612b7a6a643bdd40f007578a"
    const formDataVariant = new FormData();
    // formDataVariant.append("variantPhoto", payload.variantPhoto[0]);
    // formDataVariant.append("variantPrice", payload.price);
    formDataVariant.append("variantPrice", payload.price);
    formDataVariant.append("variantPrice", payload.price);
    // formDataVariant.append("sku", payload.sku);
    // formDataVariant.append("upn", payload.upn);
    // formDataVariant.append("uvn", payload.uvn);
    formDataVariant.append("variantPhoto", payload.variantPhoto);
    formDataVariant.append("variantStock", payload.variantStock);

    formDataVariant.append("variant", JSON.stringify(payload.variant));

    console.log("this is the variant payload", payload);
    const { data } = yield axios.post(
      ` /api/v1/products/variant`, //todo write this api endpoint in backend
      { ...payload, variantPrice: payload.price },
      axiosConfig
    );
    console.log("formData variant", formDataVariant);
    // createVariantSuccess,createVariantFailure
    // createVariantSuccess,createVariantFailure
    yield put(createVariantSuccess());
  } catch (error) {
    yield put(createVariantFailure(error));
  }
}

export function* createVariantSaga() {
  yield takeLatest(
    productActionTypes.CREATE_VARIANTS_START,
    createVariantsStartSaga
  );
}

//create product saga
export function* createProductStartSaga({ payload }) {
  try {
    console.log("running", payload);
    const formData = new FormData();
    //     basePrice: "600"
    // brand: "albaik"
    // category: "restaurant"
    // discount: "10"
    // name: "boneless strips"
    // onpromo: "ture"
    // productPhoto: File {name: "7839CCE9-5A9F-4774-9FB7-6AF2BABA2609.jpg", lastModified: 1525533471280, lastModifiedDate: Sat May 05 2018 21:02:51 GMT+0545 (Nepal Time), webkitRelativePath: "", size: 109119, …}
    // subCategory: "chicken"
    // unit: "pieces"
    // upn: "100000"
    // uvn: "1"
    // formData.append("basePrice", payload.basePrice);
    formData.append("brand", payload.brand);
    formData.append("category", payload.category);
    formData.append("name", payload.name);
    formData.append("onpromo", payload.onpromo);

    formData.append(
      "descriptionState",
      JSON.stringify(payload.descriptionState)
    );
    // descriptionState
    // recommendations
    formData.append("recommendations", JSON.stringify(payload.recommendations));
    formData.append("variantArray", JSON.stringify(payload.variantArray));
    formData.append("thirdCategory", JSON.stringify(payload.thirdCategory));
    // formData.append("formDataLength", payload.productPhoto.length);
    formData.append("subCategory", JSON.stringify(payload.subCategory));
    formData.append("vendor", payload.vendor);
    // formData.append("productBarCode", payload.productBarCode);

    formData.append("tags", payload.tags.join(" "));
    for (let i = 0; i < payload.productPhoto.length; i++) {
      formData.append(`productPhoto`, payload.productPhoto[i]);
    }

    // vendor
    // formData.append("tags", JSON.stringify(payload.tags));

    for (const [key, value] of formData) {
      console.log(key, value, "key value");
    }
    console.log(JSON.stringify(formData), "this is vendor payload");
    //todo take the dispatched action and make api call to create the product

    const { data } = yield axios.post(
      `/api/v1/products/createNewProduct`, //todo write this api endpoint in backend
      formData,
      axiosConfigMultiPart
    );
    // const { data } = yield axios.post(
    //   `/api/v1/products/`,
    //   formData,

    //   axiosConfigMultiPart
    // );
    yield put(createProductSuccess(data.data));
  } catch (error) {
    yield put(createProductFailure(error));
  }
}

export function* createProductSaga() {
  yield takeLatest(
    productActionTypes.CREATE_PRODUCT_START,
    createProductStartSaga
  );
}

// get product by id saga
export function* getProductByIdStartSaga({ payload }) {
  try {
    console.log("this is payload to get products  by id", payload);
    const { data } = yield axios.get(
      `/api/v1/products/${payload.key}/${payload.value}`, //todo write this api endpoint in backend

      axiosConfigMultiPart
    );
    console.log("product by id details", data);
    yield put(getProductByIdSuccess(data.data));
  } catch (error) {
    yield put(getProductByIdFailure(error));
  }
}

export function* getProductByIdSaga() {
  yield takeLatest(
    productActionTypes.GET_PRODUCT_BY_ID_START,
    getProductByIdStartSaga
  );
}

//get prouduct list by key value saga
export function* getProductListStart({ payload }) {
  try {
    console.log("payload...", payload);
    const { searchKey, value, searchKey2, uvn } = payload;
    const { data } = yield axios.get(
      `/api/v1/products/getProductList/${searchKey}/${value}/${searchKey2}/${uvn}`, //todo write this api endpoint in backend

      axiosConfig
    );
    console.log("data", data);
    yield put(getProductListSuccess(data.data));
  } catch (error) {
    yield put(getProductListFailure(error));
  }
}

export function* getProductListSaga() {
  yield takeLatest(
    productActionTypes.GET_PRODUCT_LIST_START,
    getProductListStart
  );
}

//fetch product category && vendor aggregate

export function* fetchAggregateSaga({ payload }) {
  try {
    const { data } = yield axios.get(
      `/api/v1/products/categoryVendorAggregate`, //todo write this api endpoint in backend

      axiosConfig
    );
    // getCategoryVendorSuccess,getCategoryVendorFailure
    yield put(getCategoryVendorSuccess(data.data));
  } catch (error) {
    yield put(getCategoryVendorFailure(error));
  }
}

export function* fetchingCategoryVendorAggregateSaga() {
  yield takeLatest(
    productActionTypes.GET_CATEGORY_VENDOR_START,
    fetchAggregateSaga
  );
}

//fetch product summary saga

export function* fetchProductSumamryStartSaga({ payload }) {
  try {
    const { data } = yield axios.get(
      `/api/v1/products/getproductSummary/${payload}`, //todo write this api endpoint in backend

      axiosConfig
    );
    console.log(data.data);
    yield put(fetchProductSummarySuccess(data.data));
  } catch (error) {
    yield put(fetchProductSummaryFailure(error));
  }
}
export function* fetchProductSummarySaga() {
  yield takeLatest(
    productActionTypes.FETCH_PRODUCTS_SUMMARY_START,
    fetchProductSumamryStartSaga
  );
}

// fetching variant by upn
export function* fetchVariantStartSaga({ payload }) {
  try {
    const { key, value } = payload;
    const { data } = yield axios.get(
      `/api/v1/products/variant/${key}/${value}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(fetchVariantByUpnSuccess(data.data));
  } catch (error) {
    yield put(fetchVariantByUpnFailure(error));
  }
}

export function* fetchVariantByUpn() {
  yield takeLatest(
    productActionTypes.FETCH_VARIANTS_BY_UPN_START,
    fetchVariantStartSaga
  );
}

//fetch variant by sku
export function* fetchVariantBySkuStart({ payload }) {
  try {
    const { key, value } = payload;
    const { data } = yield axios.get(
      `/api/v1/products/variant/${key}/${value}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(fetchVariantBySkuSuccess(data.data));
  } catch (error) {
    yield put(fetchVariantBySkuFailure(error));
  }
}
export function* fetchVariantBySkuSaga() {
  yield takeLatest(
    productActionTypes.FETCH_VARIANT_BY_SKU_START,
    fetchVariantBySkuStart
  );
}

// fetch description saga
export function* fetchDescriptionStartSaga({ payload }) {
  try {
    const { key, value } = payload;
    const { data } = yield axios.get(
      `/api/v1/products/metaData/${key}/${value}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(fetchDescriptionSuccess(data.data));
  } catch (error) {
    yield put(fetchDescriptionFailure(error));
  }
}

export function* fetchDescriptionSaga() {
  yield takeLatest(
    productActionTypes.FETCH_DESCRIPTION_START,
    fetchDescriptionStartSaga
  );
}

export function* getSearchListStartSaga({ payload }) {
  try {
    const { key, value, lng, lat, role, page } = payload;
    console.log("permission", role, payload);
    let queryString =
      role === undefined || role !== "admin"
        ? `page=${page}&loc=${lng},${lat}&radius=10&role=user`
        : `page=${page}`;

    const { data } = yield axios.get(
      `/api/v1/products/searchProducts/${
        role === "admin" ? "admin/" : "user/"
      }${key}/${value}?${queryString}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(getSearchListSuccess(data.data));
  } catch (error) {
    yield put(getSearchListFailure(error));
  }
}

// fetch product searchlist admin panel
export function* getSearchListSaga() {
  yield takeLatest(
    productActionTypes.GET_SEARCH_LIST_START,
    getSearchListStartSaga
  );
}

// fetch category list from index
export function* getCategoryListStart() {
  try {
    const { data } = yield axios.get(
      `/api/v1/products/getCatgoryList`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(getCategoryListSuccess(data.data));
  } catch (error) {
    yield put(getCatgoryListFailure(error));
  }
}
export function* getCategoryListSaga() {
  yield takeLatest(
    productActionTypes.GET_CATEGORY_LIST_START,
    getCategoryListStart
  );
}
// fetching sub category
export function* getSubCategoryStart({ payload }) {
  try {
    const { categoryName, uvn, vendorName } = payload;
    let queryString =
      !!uvn && !!vendorName
        ? `&uvn=${uvn}&vendorName=${vendorName}`
        : `&categoryName=${categoryName}`;

    const { data } = yield axios.get(
      `/api/v1/products/getProductSubCatgoryList/category/${payload.categoryName}?${queryString}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(getSubCategoryListSuccess(data.data));
  } catch (error) {
    yield put(getSubCategoryListFailure(error));
  }
}

export function* getSubCategoryList() {
  yield takeLatest(
    productActionTypes.GET_SUBCATEGORY_START,
    getSubCategoryStart
  );
}

// fetch prouductList for user Screen
export function* getUserProductListStart({ payload }) {
  try {
    const {
      loc: { latitude, longitude },
      subCategory,
      categoryName,
      uvn,
      page,
    } = payload;
    // latitude: 27.7032, longitude: 83.4474}

    const param = `${latitude},${longitude},10`;
    let queryString = !!subCategory
      ? `&subCategory=${subCategory}&categoryName=${categoryName}`
      : `&categoryName=${categoryName}`;
    let vendor = !!uvn ? `&_id=${uvn}` : ``;
    // http://localhost:3000/category/grocery/subCategory/biscuits-&-categories
    const { data } = yield axios.get(
      `/api/v1/products/getUserProductList/subCategory/${param}?page=${page}${queryString}${vendor}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield put(getUserProductListSuccess(data.data));
  } catch (error) {
    yield put(getUserProductListFailure(error));
  }
}
export function* getUserProductListSaga() {
  yield takeLatest(
    productActionTypes.GET_USER_PRODUCT_LIST_START,
    getUserProductListStart
  );
}

// get featured product list
export function* getFeaturedProductListStartSaga({ payload }) {
  try {
    const {
      loc: { latitude, longitude },
      featured,
      page,
    } = payload;
    const param = `${latitude},${longitude},10`;
    // let queryString = !!subCategory
    //   ? `&subCategory=${subCategory}&categoryName=${categoryName}`
    //   : `&categoryName=${categoryName}`;
    // let vendor = !!uvn ? `&uvn=${uvn}` : ``;
    // http://localhost:3000/category/grocery/subCategory/biscuits-&-categories
    const { data } = yield axios.get(
      `/api/v1/products/getUserProductList/featured/${param}?featured=${featured}&page=${page}`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(getFeaturedProductListSuccess(data.data));
  } catch (error) {
    yield put(getFeaturedProductListFailure(error));
  }
}
export function* getFeaturedProductListSaga() {
  yield takeLatest(
    productActionTypes.GET_FEATURED_PRODUCT_LIST_START,
    getFeaturedProductListStartSaga
  );
}

// get productlist by ids

export function* getProductListById({ payload }) {
  try {
    const { data } = yield axios.get(
      `/api/v1/products/getProductListByIds?id=${payload}`, //todo write this api endpoint in backend

      axiosConfig
    );
    //   searchRecommendationSuccess,
    // searchRecommendationFailure,
    yield put(getProductListByIdSuccess(data.data));
  } catch (error) {
    put(searchRecommendationFailure(error));
  }
}
export function* getProductListByIdSaga() {
  yield takeLatest(
    productActionTypes.GET_PRODUCT_LIST_BY_ID_START,
    getProductListById
  );
}

// SEARCH PRODUCT
export function* searchProductStart({ payload, searchRecommendations }) {
  try {
    console.log(payload, "search product payload");
    //  searchProductSuccess,
    // searchProductFailure,
    const { data } = yield axios.get(
      `/api/v1/products/getUserProductList/SearchList?value=${payload}`, //todo write this api endpoint in backend

      axiosConfig
    );

    yield !!searchRecommendations
      ? put(searchRecommendationSuccess(data.data))
      : put(searchProductSuccess(data.data));
  } catch (error) {
    yield !!searchRecommendations
      ? put(getProductListByIdFailure(error))
      : put(searchProductFailure(error));
  }
}

export function* searchProductSaga() {
  yield takeLatest(productActionTypes.SEARCH_PRODUCT_START, searchProductStart);
}
export default function* ProductSagas() {
  yield all([
    call(fetchProductSummarySaga),
    call(createProductSaga),
    call(fetchingCategoryVendorAggregateSaga),
    call(getProductListSaga),
    call(getProductByIdSaga),
    call(updateProductSaga),
    call(createVariantSaga),
    call(fetchVariantByUpn),
    call(fetchVariantBySkuSaga),
    call(updateVariantSaga),
    call(createDescriptionSaga),
    call(fetchDescriptionSaga),
    call(updateDescriptionSaga),
    call(getSearchListSaga),
    call(getCategoryListSaga),
    call(getSubCategoryList),
    call(getUserProductListSaga),
    call(getFeaturedProductListSaga),
    call(searchProductSaga),
    call(getProductListByIdSaga),
  ]);
}
