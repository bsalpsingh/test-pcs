import categoryActionTypes from "./category.types";

const initialState = {
  // create category
  // creatingCategory,categoryCreated,createCategoryError
  creatingCategory: false,
  categoryCreated: false,
  createCategoryError: undefined,

  // create sub category
  //creatingSubCategory,subCategoryCreated,createSubCategoryError
  creatingSubCategory: false,
  subCategoryCreated: false,
  createSubCategoryError: undefined,

  // create third category
  // creatingThirdCategory,categoryThirdCreated,createThirdCategoryError
  creatingThirdCategory: false,
  categoryThirdCreated: false,
  createThirdCategoryError: undefined,

  // fetch category list
  // fetchingCategoryList,categoryList,fetchCategoryListError
  fetchingCategoryList: false,
  categoryList: null,
  fetchCategoryListError: undefined,

  // fetch third category list
  // fetchingThirdCategoryList,thirdcategoryList,fetchThirdCategoryListError
  fetchingThirdCategoryList: false,
  thirdcategoryList: null,
  fetchThirdCategoryListError: undefined,

  // fetch sub category list
  // fetchingSubCategoryList,subCategoryList,fetchSubCategoryListError
  fetchingSubCategoryList: false,
  subCategoryList: null,
  fetchSubCategoryListError: undefined,

  // update a particular category
  // updatingCategory,updatedCategory,updateCategoryError
  updatingCategory: false,
  updatedCategory: false,
  updateCategoryError: undefined,

  // update a particular sub category
  // updatingSubCategory,subCategoryUpdateStatus,updateSubCategoryError
  updatingSubCategory: false,
  subCategoryUpdateStatus: false,
  updateSubCategoryError: undefined,

  // update a particular third category
  // updatingThirdCategory,updatedThirdCategory,updateThirdCategoryError
  updatingThirdCategory: false,
  updatedThirdCategory: false,
  updateThirdCategoryError: undefined,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    // creatingSubCategory: false,
    // subCategoryCreated: false,
    // createSubCategoryError: undefined,
    case categoryActionTypes.CREATE_CATEGORY_START:
      return {
        ...state,
        creatingCategory: true,
        categoryCreated: false,
        createCategoryError: undefined,
      };
    case categoryActionTypes.CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        creatingCategory: false,
        categoryCreated: true,
        createCategoryError: undefined,
      };

    case categoryActionTypes.CREATE_CATEGORY_FAILURE:
      return {
        ...state,
        creatingCategory: false,
        categoryCreated: false,
        createCategoryError: action.payload,
      };
    // create sub category

    case categoryActionTypes.CREATE_SUB_CATEGORY_START:
      return {
        ...state,
        creatingSubCategory: true,
        subCategoryCreated: false,
        createSubCategoryError: undefined,
      };

    case categoryActionTypes.CREATE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        creatingSubCategory: false,
        subCategoryCreated: true,
        createSubCategoryError: undefined,
      };
    case categoryActionTypes.CREATE_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        creatingSubCategory: false,
        subCategoryCreated: false,
        createSubCategoryError: action.payload,
      };

    case categoryActionTypes.CREATE_THIRD_CATEGORY_START:
      return {
        ...state,
        creatingThirdCategory: true,
        categoryThirdCreated: false,
        createThirdCategoryError: undefined,
      };
    case categoryActionTypes.CREATE_THIRD_CATEGORY_SUCCESS:
      return {
        ...state,
        creatingThirdCategory: false,
        categoryThirdCreated: true,
        createThirdCategoryError: undefined,
      };
    case categoryActionTypes.CREATE_THIRD_CATEGORY_FAILURE:
      return {
        ...state,
        creatingThirdCategory: true,
        categoryThirdCreated: false,
        createThirdCategoryError: action.payload,
      };
    // fetch category list
    case categoryActionTypes.FETCH_CATEGORY_LIST_START:
      return {
        ...state,
        fetchingCategoryList: true,
        categoryList: null,
        fetchCategoryListError: undefined,
      };
    case categoryActionTypes.FETCH_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        fetchingCategoryList: false,
        categoryList: action.payload,
        fetchCategoryListError: undefined,
      };
    case categoryActionTypes.FETCH_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        fetchingCategoryList: false,
        categoryList: null,
        fetchCategoryListError: action.payload,
      };

    // fetching sub category list
    case categoryActionTypes.FETCH_SUB_CATEGORY_LIST_START:
      return {
        ...state,

        fetchingSubCategoryList: true,
        subCategoryList: null,
        fetchSubCategoryListError: undefined,
      };

    case categoryActionTypes.FETCH_SUB_CATEGORY_LIST_SUCCESS:
      return {
        ...state,

        fetchingSubCategoryList: false,
        subCategoryList: action.payload,
        fetchSubCategoryListError: undefined,
      };

    case categoryActionTypes.FETCH_SUB_CATEGORY_LIST_FAILURE:
      return {
        ...state,

        fetchingSubCategoryList: true,
        subCategoryList: null,
        fetchSubCategoryListError: action.payload,
      };

    // fetch  third category list
    case categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_START:
      return {
        ...state,
        fetchingThirdCategoryList: true,
        thirdcategoryList: null,
        fetchThirdCategoryListError: undefined,
      };
    case categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        fetchingThirdCategoryList: true,
        thirdcategoryList: action.payload,
        fetchThirdCategoryListError: undefined,
      };
    case categoryActionTypes.FETCH_THIRD_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        fetchingThirdCategoryList: true,
        thirdcategoryList: action.payload,
        fetchThirdCategoryListError: action.payload,
      };

    // updating a particular category
    case categoryActionTypes.UPDATE_CATEGORY_START:
      return {
        ...state,
        updatingCategory: true,
        updatedCategory: false,
        updateCategoryError: undefined,
      };

    case categoryActionTypes.UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        updatingCategory: false,
        updatedCategory: true,
        updateCategoryError: undefined,
      };
    case categoryActionTypes.UPDATE_CATEGORY_FAILURE:
      return {
        ...state,
        updatingCategory: false,
        updatedCategory: false,
        updateCategoryError: action.payload,
      };

    // updating a particular subcategory
    case categoryActionTypes.UPDATE_SUB_CATEGORY_START:
      return {
        ...state,
        updatingSubCategory: true,
        subCategoryUpdateStatus: false,
        updateSubCategoryError: undefined,
      };

    case categoryActionTypes.UPDATE_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        updatingSubCategory: false,
        subCategoryUpdateStatus: true,
        updateSubCategoryError: undefined,
      };

    case categoryActionTypes.UPDATE_SUB_CATEGORY_FAILURE:
      return {
        ...state,
        updatingSubCategory: false,
        subCategoryUpdateStatus: false,
        updateSubCategoryError: action.payload,
      };

    case categoryActionTypes.UPDATE_THIRD_CATEGORY_START:
      return {
        ...state,
        updatingThirdCategory: true,
        updatedThirdCategory: false,
        updateThirdCategoryError: undefined,
      };

    case categoryActionTypes.UPDATE_THIRD_CATEGORY_SUCCESS:
      return {
        ...state,
        updatingThirdCategory: false,
        updatedThirdCategory: true,
        updateThirdCategoryError: undefined,
      };
    case categoryActionTypes.UPDATE_THIRD_CATEGORY_FAILURE:
      return {
        ...state,
        updatingThirdCategory: false,
        updatedThirdCategory: false,
        updateThirdCategoryError: action.payload,
      };
    // cleanups

    case categoryActionTypes.CLEAN_UP_CREATED_CATEGORY:
      return {
        ...state,
        creatingCategory: false,
        categoryCreated: false,
        createCategoryError: undefined,
      };
    case categoryActionTypes.CLEAN_UP_CREATED_SUB_CATEGORY:
      return {
        ...state,
        creatingSubCategory: false,
        subCategoryCreated: false,
        createSubCategoryError: undefined,
      };
    case categoryActionTypes.CLEAN_UP_UPDATED_CATEGORY:
      return {
        ...state,
        updatingCategory: false,
        updatedCategory: false,
        updateCategoryError: undefined,
      };
    case categoryActionTypes.CLEAN_UP_SUB_CATEGORY_LIST:
      return {
        ...state,

        fetchingSubCategoryList: false,
        subCategoryList: null,
        fetchSubCategoryListError: undefined,
      };
    case categoryActionTypes.CLEAN_UP_SUB_CATEGORY_UPDATE:
      return {
        ...state,

        updatingSubCategory: false,
        subCategoryUpdateStatus: false,
        updateSubCategoryError: undefined,
      };

    case categoryActionTypes.CLEAN_UP_CREATE_THIRD_CATEGORY:
      return {
        ...state,

        creatingThirdCategory: false,
        categoryThirdCreated: false,
        createThirdCategoryError: undefined,
      };

    case categoryActionTypes.CLEAN_UP_FETCH_THIRD_CATEGORY:
      return {
        ...state,

        fetchingThirdCategoryList: false,
        thirdcategoryList: null,
        fetchThirdCategoryListError: undefined,
      };

    case categoryActionTypes.CLEAN_UP_UPDATE_THIRD_CATEGORY:
      return {
        ...state,

        updatingThirdCategory: false,
        updatedThirdCategory: false,
        updateThirdCategoryError: undefined,
      };
    default:
      return state;
  }
};

export default categoryReducer;
