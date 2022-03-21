import categoryActionTypes from "./category.types";

// CREATE CATEGORY
// createCategoryStart,createCategorySuccess,createCategoryFailure
export const createCategoryStart = (categoryDetails) => ({
  type: categoryActionTypes.CREATE_CATEGORY_START,
  payload: categoryDetails,
});
export const createCategorySuccess = () => ({
  type: categoryActionTypes.CREATE_CATEGORY_SUCCESS,
});
export const createCategoryFailure = (error) => ({
  type: categoryActionTypes.CREATE_CATEGORY_FAILURE,
  payload: error,
});

// CREATE SUB CATEGORY
// createSubCategoryStart,createSubCategorySuccess,createSubCategoryFailure
export const createSubCategoryStart = (subCategoryDetails) => ({
  type: categoryActionTypes.CREATE_SUB_CATEGORY_START,
  payload: subCategoryDetails,
});
export const createSubCategorySuccess = () => ({
  type: categoryActionTypes.CREATE_SUB_CATEGORY_SUCCESS,
});
export const createSubCategoryFailure = (error) => ({
  type: categoryActionTypes.CREATE_SUB_CATEGORY_FAILURE,
  payload: error,
});

// CREATE THIRD CATEGORY
// createThirdCategoryStart,createThirdCategorySuccess,createThirdCategoryFailure
export const createThirdCategoryStart = (thirdCategoryDetails) => ({
  type: categoryActionTypes.CREATE_THIRD_CATEGORY_START,
  payload: thirdCategoryDetails,
});
export const createThirdCategorySuccess = () => ({
  type: categoryActionTypes.CREATE_THIRD_CATEGORY_SUCCESS,
});
export const createThirdCategoryFailure = (error) => ({
  type: categoryActionTypes.CREATE_THIRD_CATEGORY_FAILURE,
  payload: error,
});

// FETCH categories
// fetchCategoriesStart,fetchCategoriesSuccess,fetchCategoriesFailure
export const fetchCategoriesStart = () => ({
  type: categoryActionTypes.FETCH_CATEGORY_LIST_START,
});
export const fetchCategoriesSuccess = (categoryList) => ({
  type: categoryActionTypes.FETCH_CATEGORY_LIST_SUCCESS,
  payload: categoryList,
});
export const fetchCategoriesFailure = (error) => ({
  type: categoryActionTypes.FETCH_CATEGORY_LIST_FAILURE,
  payload: error,
});
// FETCH sub category list
//fetchSubCategoriesStart,fetchSubCategoriesSuccess,fetchSubCategoriesFailure
export const fetchSubCategoriesStart = (queryObj) => ({
  type: categoryActionTypes.FETCH_SUB_CATEGORY_LIST_START,
  payload: queryObj,
});
export const fetchSubCategoriesSuccess = (subCategoryList) => ({
  type: categoryActionTypes.FETCH_SUB_CATEGORY_LIST_SUCCESS,
  payload: subCategoryList,
});
export const fetchSubCategoriesFailure = (error) => ({
  type: categoryActionTypes.FETCH_SUB_CATEGORY_LIST_FAILURE,
  payload: error,
});

// FETCH  third categories
// fetchThirdCategoriesStart,fetchThirdCategoriesSuccess,fetchThirdCategoriesFailure
export const fetchThirdCategoriesStart = (thirdCategoryDetails) => ({
  type: categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_START,
  payload: thirdCategoryDetails,
});
export const fetchThirdCategoriesSuccess = (thirdCategoryList) => ({
  type: categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_SUCCESS,
  payload: thirdCategoryList,
});
export const fetchThirdCategoriesFailure = (error) => ({
  type: categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_FAILURE,
  payload: error,
});
// UPDATE a particular category
// updateCategoryStart,updateCategorySuccess,updateCategoryFailure
export const updateCategoryStart = (categoryUpdateObj) => ({
  type: categoryActionTypes.UPDATE_CATEGORY_START,
  payload: categoryUpdateObj,
});

export const updateCategorySuccess = () => ({
  type: categoryActionTypes.UPDATE_CATEGORY_SUCCESS,
});

export const updateCategoryFailure = (error) => ({
  type: categoryActionTypes.UPDATE_CATEGORY_FAILURE,
  payload: error,
});

// UPDATE a particular sub category
// updateSubCategoryStart,updateSubCategorySuccess,updateSubCategoryFailure
export const updateSubCategoryStart = (subCategoryUpdateObj) => ({
  type: categoryActionTypes.UPDATE_SUB_CATEGORY_START,
  payload: subCategoryUpdateObj,
});

export const updateSubCategorySuccess = () => ({
  type: categoryActionTypes.UPDATE_SUB_CATEGORY_SUCCESS,
});

export const updateSubCategoryFailure = (error) => ({
  type: categoryActionTypes.UPDATE_SUB_CATEGORY_FAILURE,
  payload: error,
});

// UPDATE a particular third category
// updateThirdCategoryStart,updateThirdCategorySuccess,updateThirdCategoryFailure
export const updateThirdCategoryStart = (thirdCategoryUpdateObj) => ({
  type: categoryActionTypes.UPDATE_THIRD_CATEGORY_START,
  payload: thirdCategoryUpdateObj,
});

export const updateThirdCategorySuccess = () => ({
  type: categoryActionTypes.UPDATE_THIRD_CATEGORY_SUCCESS,
});

export const updateThirdCategoryFailure = (error) => ({
  type: categoryActionTypes.UPDATE_THIRD_CATEGORY_FAILURE,
  payload: error,
});
// CLEANUPS
// cleanUpCreatedCategory
export const cleanUpCreatedCategory = () => ({
  type: categoryActionTypes.CLEAN_UP_CREATED_CATEGORY,
});
// cleanUpCreatedSubCategory
export const cleanUpCreatedSubCategory = () => ({
  type: categoryActionTypes.CLEAN_UP_CREATED_SUB_CATEGORY,
});

// cleanup updated category state

export const cleanUpUpdateCategory = () => ({
  type: categoryActionTypes.CLEAN_UP_UPDATED_CATEGORY,
});

// clanup subcategory list
// cleanUpSubCategoryList
export const cleanUpSubCategoryList = () => ({
  type: categoryActionTypes.CLEAN_UP_SUB_CATEGORY_LIST,
});
//clean up sub category update state
// cleanUpSubCategoryUpdate
export const cleanUpSubCategoryUpdate = () => ({
  type: categoryActionTypes.CLEAN_UP_SUB_CATEGORY_UPDATE,
});

// CLEANUP THIRD CATEGORY STATES
// cleanUpThirdCreateCategory
export const cleanUpCreateThirdCategory = () => ({
  type: categoryActionTypes.CLEAN_UP_CREATE_THIRD_CATEGORY,
});
// cleanUpThirdfetchCategory
export const cleanUpFetchThirdCategory = () => ({
  type: categoryActionTypes.CLEAN_UP_FETCH_THIRD_CATEGORY,
});
// cleanUpUpdateThirdCategory,
export const cleanUpUpdateThirdCategory = () => ({
  type: categoryActionTypes.CLEAN_UP_UPDATE_THIRD_CATEGORY,
});
