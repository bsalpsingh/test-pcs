import productActionTypes from "./product.types";

export const fetchProductSummaryStart = (Area) => ({
  type: productActionTypes.FETCH_PRODUCTS_SUMMARY_START,
  payload: Area,
});
export const fetchProductSummarySuccess = (ProductSummaryData) => ({
  type: productActionTypes.FETCH_PRODUCTS_SUMMARY_SUCCESS,
  payload: ProductSummaryData,
});
export const fetchProductSummaryFailure = (error) => ({
  type: productActionTypes.FETCH_PRODUCTS_SUMMARY_FAILURE,
  payload: error,
});

//create products
// createProductStart,createProductSuccess,createProductFailure
export const createProductStart = (productDetails) => ({
  type: productActionTypes.CREATE_PRODUCT_START,
  payload: productDetails,
});

export const createProductSuccess = () => ({
  type: productActionTypes.CREATE_PRODUCT_SUCCESS,
});

export const createProductFailure = (error) => ({
  type: productActionTypes.CREATE_PRODUCT_FAILURE,
  payload: error,
});

// get category and uvn(vendor) reference for select operation on product management
//getCategoryVendorStart,getCategoryVendorSuccess,getCategoryVendorFailure
export const getCategoryVendorStart = () => ({
  type: productActionTypes.GET_CATEGORY_VENDOR_START,
});

export const getCategoryVendorSuccess = (categoryVendorAggregate) => ({
  type: productActionTypes.GET_CATEGORY_VENDOR_SUCCESS,
  payload: categoryVendorAggregate,
});

export const getCategoryVendorFailure = (error) => ({
  type: productActionTypes.GET_CATEGORY_VENDOR_FAILURE,
  payload: error,
});

// get product info by id
//getProductByIdStart,getProductByIdSuccess,getProductByIdFailure
export const getProductByIdStart = (productSearchDetails) => ({
  type: productActionTypes.GET_PRODUCT_BY_ID_START,
  payload: productSearchDetails,
});

export const getProductByIdSuccess = (productDetails) => ({
  type: productActionTypes.GET_PRODUCT_BY_ID_SUCCESS,
  payload: productDetails,
});

export const getProductByIdFailure = (error) => ({
  type: productActionTypes.GET_PRODUCT_BY_ID_FAILURE,
  payload: error,
});

// get product list by key value
// getProductListStart,getProductListSuccess,getProductListFailure
export const getProductListStart = (productSearchInfo) => ({
  type: productActionTypes.GET_PRODUCT_LIST_START,
  payload: productSearchInfo,
});

export const getProductListSuccess = (productList) => ({
  type: productActionTypes.GET_PRODUCT_LIST_SUCCESS,
  payload: productList,
});
export const getProductListFailure = (error) => ({
  type: productActionTypes.GET_PRODUCT_LIST_FAILURE,
  payload: error,
});

//get productlist by id
// getProductListByIdStart,getProductListByIdSuccess,getProductListByIdFailure
export const getProductListByIdStart = (productIdList) => ({
  type: productActionTypes.GET_PRODUCT_LIST_BY_ID_START,
  payload: productIdList,
});

export const getProductListByIdSuccess = (productList) => ({
  type: productActionTypes.GET_PRODUCT_LIST_BY_ID_SUCCESS,
  payload: productList,
});
export const getProductListByIdFailure = (error) => ({
  type: productActionTypes.GET_PRODUCT_LIST_BY_ID_FAILURE,
  payload: error,
});

//update product info
//updateProductInfoStart,updateProductInfoSuccess,updateProductFailure
export const updateProductInfoStart = (updateDetails) => ({
  type: productActionTypes.UPDATE_PRODUCT_START,
  payload: updateDetails,
});

export const updateProductInfoSuccess = (updatedProduct) => ({
  type: productActionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: updatedProduct,
});

export const updateProductFailure = (error) => ({
  type: productActionTypes.UPDATE_PRODUCT_FAILURE,
  payload: error,
});

// create variants actions
// createVariantsStart,createVariantSuccess,createVariantFailure
export const createVariantsStart = (variantDetails) => ({
  type: productActionTypes.CREATE_VARIANTS_START,
  payload: variantDetails,
});

export const createVariantSuccess = () => ({
  type: productActionTypes.CREATE_VARIANTS_SUCCESS,
});

export const createVariantFailure = (error) => ({
  type: productActionTypes.CREATE_VARIANTS_FAILURE,
  payload: error,
});

//fetch variants by upn
// fetchVariantByUpnStart,fetchVariantByUpnSuccess,fetchVariantByUpnFailure
export const fetchVariantByUpnStart = (variantDetails) => ({
  type: productActionTypes.FETCH_VARIANTS_BY_UPN_START,
  payload: variantDetails,
});

export const fetchVariantByUpnSuccess = (variantList) => ({
  type: productActionTypes.FETCH_VARIANTS_BY_UPN_SUCCESS,
  payload: variantList,
});

export const fetchVariantByUpnFailure = (error) => ({
  type: productActionTypes.FETCH_VARIANTS_BY_UPN_FAILURE,
  payload: error,
});

// get variant by sku
// fetchVariantBySkuStart,fetchVariantBySkuSuccess,fetchVariantBySkuFailure
export const fetchVariantBySkuStart = (variantDetail) => ({
  type: productActionTypes.FETCH_VARIANT_BY_SKU_START,
  payload: variantDetail,
});

export const fetchVariantBySkuSuccess = (variantData) => ({
  type: productActionTypes.FETCH_VARIANT_BY_SKU_SUCCESS,
  payload: variantData,
});

export const fetchVariantBySkuFailure = (error) => ({
  type: productActionTypes.FETCH_VARIANT_BY_SKU_FAILURE,
  payload: error,
});

// update variant by sku
// updateVariantStart,updateVariantSuccess,updateVariantFailure
export const updateVariantStart = (variantDetails) => ({
  type: productActionTypes.UPDATE_VARIANT_START,
  payload: variantDetails,
});

export const updateVariantSuccess = () => ({
  type: productActionTypes.UPDATE_VARIANT_SUCCESS,
});

export const updateVariantFailure = (error) => ({
  type: productActionTypes.UPDATE_VARIANT_FAILURE,
  payload: error,
});

// create product description
// createDescriptionStart,createDescriptionSuccess,createDescriptionFailure
export const createDescriptionStart = (descriptionObj) => ({
  type: productActionTypes.CREATE_DESCRIPTION_START,
  payload: descriptionObj,
});

export const createDescriptionSuccess = () => ({
  type: productActionTypes.CREATE_DESCRIPTION_SUCCESS,
});

export const createDescriptionFailure = (error) => ({
  type: productActionTypes.CREATE_DESCRIPTION_FAILURE,
  payload: error,
});

// fetch description
// fetchDescriptionStart,fetchDescriptionSuccess,fetchDescriptionFailure
export const fetchDescriptionStart = (descriptionIdentifier) => ({
  type: productActionTypes.FETCH_DESCRIPTION_START,
  payload: descriptionIdentifier,
});

export const fetchDescriptionSuccess = (descriptionData) => ({
  type: productActionTypes.FETCH_DESCRIPTION_SUCCESS,
  payload: descriptionData,
});

export const fetchDescriptionFailure = (error) => ({
  type: productActionTypes.FETCH_DESCRIPTION_FAILURE,
  payload: error,
});

// update description
// updateDescriptionStart,updateDescriptionSuccess,updateDescriptionFailure
export const updateDescriptionStart = (descriptionDetails) => ({
  type: productActionTypes.UPDATE_DESCRIPTION_START,
  payload: descriptionDetails,
});

export const updateDescriptionSuccess = () => ({
  type: productActionTypes.UPDATE_DESCRIPTION_SUCCESS,
});

export const updateDescriptionFailure = (error) => ({
  type: productActionTypes.UPDATE_DESCRIPTION_FAILURE,
  payload: error,
});
// set search Term
export const setSearchTerm = (searchTerm) => ({
  type: productActionTypes.SET_SEARCH_TERM,
  payload: searchTerm,
});

//  get product search list from admin panel
// getSearchListStart,getSearchListSuccess,getSearchListFailure
export const getSearchListStart = (searchInfo) => ({
  type: productActionTypes.GET_SEARCH_LIST_START,
  payload: searchInfo,
});

export const getSearchListSuccess = (searchList) => ({
  type: productActionTypes.GET_SEARCH_LIST_SUCCESS,
  payload: searchList,
});

export const getCatgoryListFailure = (error) => ({
  type: productActionTypes.GET_CATEGORY_LIST_FAILURE,
  payload: error,
});
// get category list from the index
// getCategoryListStart,getCategoryListSuccess,getCatgoryListFailure
export const getCategoryListStart = () => ({
  type: productActionTypes.GET_CATEGORY_LIST_START,
});

export const getCategoryListSuccess = (categoryList) => ({
  type: productActionTypes.GET_CATEGORY_LIST_SUCCESS,
  payload: categoryList,
});

export const getSearchListFailure = (error) => ({
  type: productActionTypes.GET_SEARCH_LIST_FAILURE,
  payload: error,
});

// GET SUBCATEGORY LIST
// getSubCategoryListStart,getSubCategoryListSuccess,getSubCategoryListFailure
export const getSubCategoryListStart = (categoryName) => ({
  type: productActionTypes.GET_SUBCATEGORY_START,
  payload: categoryName,
});

export const getSubCategoryListSuccess = (subCategoryList) => ({
  type: productActionTypes.GET_SUBCATEGORY_SUCCESS,
  payload: subCategoryList,
});

export const getSubCategoryListFailure = (subCategoryError) => ({
  type: productActionTypes.GET_SUBCATEGORY_FAILURE,
  payload: subCategoryError,
});

// get product list (user screen)
// getUserProductListStart,getUserProductListSuccess,getUserProductListFailure
export const getUserProductListStart = (subCategory) => ({
  type: productActionTypes.GET_USER_PRODUCT_LIST_START,
  payload: subCategory,
});

export const getUserProductListSuccess = (productList) => ({
  type: productActionTypes.GET_USER_PRODUCT_LIST_SUCCESS,
  payload: productList,
});

export const getUserProductListFailure = (productListError) => ({
  type: productActionTypes.GET_USER_PRODUCT_LIST_FAILURE,
  payload: productListError,
});

// GET FEATURED PRODUCTS (deals)
// getFeaturedProductListStart,getFeaturedProductListSuccess,getFeaturedProductListFailure
export const getFeaturedProductListStart = (subCategory) => ({
  type: productActionTypes.GET_FEATURED_PRODUCT_LIST_START,
  payload: subCategory,
});

export const getFeaturedProductListSuccess = (productList) => ({
  type: productActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS,
  payload: productList,
});

export const getFeaturedProductListFailure = (productListError) => ({
  type: productActionTypes.GET_FEATURED_PRODUCT_LIST_FAILURE,
  payload: productListError,
});

//
export const setSearchRadius = (radius) => ({
  type: productActionTypes.SET_SEARCH_RADIUS,
  payload: radius,
});

// SEARCH PROUCTS (MANUAL ORDER)
// searchProductStart,searchProductSuccess,searchProductFailure
export const searchProductStart = (productName, searchRecommendations) => ({
  type: productActionTypes.SEARCH_PRODUCT_START,
  payload: productName,
  searchRecommendations: searchRecommendations,
});

export const searchProductSuccess = (productList) => ({
  type: productActionTypes.SEARCH_PRODUCT_SUCCESS,
  payload: productList,
});

export const searchProductFailure = (error) => ({
  type: productActionTypes.SEARCH_PRODUCT_FAILURE,
  payload: error,
});

// SEARCH RECOMMENDATIONS
// searchRecommendationSuccess,searchRecommendationFailure
export const searchRecommendationSuccess = (productList) => ({
  type: productActionTypes.SEARCH_RECOMMENDATION_SUCCESS,
  payload: productList,
});

export const searchRecommendationFailure = (error) => ({
  type: productActionTypes.SEARCH_RECOMMENDATION_FAILURE,
  payload: error,
});
// clear search list
export const clearSearchList = () => ({
  type: productActionTypes.CLEAR_SEARCH_LIST,
});

// product state cleanup
export const cleanUpSearchList = () => ({
  type: productActionTypes.CLEANUP_SEARCH_LIST,
});
export const cleanupUserProduct = () => ({
  type: productActionTypes.CLEANUP_USER_PRODUCTS,
});
export const cleanupSubCategory = () => ({
  type: productActionTypes.CLEANUP_SUBCATEGORY,
});
export const productStateCleanUp = () => ({
  type: productActionTypes.PRODUCT_STATE_CLEANUP,
});
export const cleanUpProductState = () => ({
  type: productActionTypes.CLEANUP_PRODUCT_UPDATE,
});

export const cleanUpCreatedProduct = () => ({
  type: productActionTypes.CLEANUP_CREATED_PRODUCT,
});
export const cleanUpCreatedDesc = () => ({
  type: productActionTypes.CLEANUP_CREATED_DESC,
});

export const cleanUpUpdatedDesc = () => ({
  type: productActionTypes.CLEANUP_UPDATED_DESC,
});

export const cleanUpCreateVariant = () => ({
  type: productActionTypes.CLEANUP_VARIANT_CREATE,
});

export const cleanUpVariantUpdate = () => ({
  type: productActionTypes.CLEANUP_VARIANT_UPDATE,
});

export const cleanupRecommendations = () => ({
  type: productActionTypes.CLEANUP_RECOMMENDATIONS,
});
