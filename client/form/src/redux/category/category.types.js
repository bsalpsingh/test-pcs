const categoryActionTypes = {
  // create category
  CREATE_CATEGORY_START: "CREATE_CATEGORY_START",
  CREATE_CATEGORY_SUCCESS: "CREATE_CATEGORY_SUCCESS",
  CREATE_CATEGORY_FAILURE: "CREATE_CATEGORY_FAILURE",

  // create sub category
  CREATE_SUB_CATEGORY_START: "CREATE_SUB_CATEGORY_START",
  CREATE_SUB_CATEGORY_SUCCESS: "CREATE_SUB_CATEGORY_SUCCESS",
  CREATE_SUB_CATEGORY_FAILURE: "CREATE_SUB_CATEGORY_FAILURE",

  // create third category
  CREATE_THIRD_CATEGORY_START: "CREATE_THIRD_CATEGORY_START",
  CREATE_THIRD_CATEGORY_SUCCESS: "CREATE_THIRD_CATEGORY_SUCCESS",
  CREATE_THIRD_CATEGORY_FAILURE: "CREATE_THIRD_CATEGORY_FAILURE",

  // fetch categories

  FETCH_CATEGORY_LIST_START: "FETCH_CATEGORY_LIST_START",
  FETCH_CATEGORY_LIST_SUCCESS: "FETCH_CATEGORY_LIST_SUCCESS",
  FETCH_CATEGORY_LIST_FAILURE: "FETCH_CATEGORY_LIST_FAILURE",

  // fetch sub categories

  FETCH_SUB_CATEGORY_LIST_START: "FETCH_SUB_CATEGORY_LIST_START",
  FETCH_SUB_CATEGORY_LIST_SUCCESS: "FETCH_SUB_CATEGORY_LIST_SUCCESS",
  FETCH_SUB_CATEGORY_LIST_FAILURE: "FETCH_SUB_CATEGORY_LIST_FAILURE",
  // fetch third category list

  FETCH_THIRD_CATEGORY_LIST_START: "FETCH_THIRD_CATEGORY_LIST_START",
  FETCH_THIRD_CATEGORY_LIST_SUCCESS: "FETCH_THIRD_CATEGORY_LIST_SUCCESS",
  FETCH_THIRD_CATEGORY_LIST_FAILURE: "FETCH_THIRD_CATEGORY_LIST_FAILURE",
  // update a particular category
  UPDATE_CATEGORY_START: "UPDATE_CATEGORY_START",
  UPDATE_CATEGORY_SUCCESS: "UPDATE_CATEGORY_SUCCESS",
  UPDATE_CATEGORY_FAILURE: "UPDATE_CATEGORY_FAILURE",

  // update sub category

  // update a particular category
  UPDATE_SUB_CATEGORY_START: "UPDATE_SUB_CATEGORY_START",
  UPDATE_SUB_CATEGORY_SUCCESS: "UPDATE_SUB_CATEGORY_SUCCESS",
  UPDATE_SUB_CATEGORY_FAILURE: "UPDATE_SUB_CATEGORY_FAILURE",

  // update a particular third category
  UPDATE_THIRD_CATEGORY_START: "UPDATE_THIRD_CATEGORY_START",
  UPDATE_THIRD_CATEGORY_SUCCESS: "UPDATE_THIRD_CATEGORY_SUCCESS",
  UPDATE_THIRD_CATEGORY_FAILURE: "UPDATE_THIRD_CATEGORY_FAILURE",

  // cleanup create  SUB category state
  CLEAN_UP_CREATED_CATEGORY: "CLEAN_UP_CREATED_CATEGORY",
  CLEAN_UP_UPDATED_CATEGORY: "CLEAN_UP_UPDATED_CATEGORY",
  CLEAN_UP_CREATED_SUB_CATEGORY: "CLEAN_UP_CREATED_SUB_CATEGORY",
  CLEAN_UP_SUB_CATEGORY_LIST: "CLEAN_UP_SUB_CATEGORY_LIST",
  CLEAN_UP_SUB_CATEGORY_UPDATE: "CLEAN_UP_SUB_CATEGORY_UPDATE",
  CLEAN_UP_CREATE_THIRD_CATEGORY: "CLEAN_UP_CREATE_THIRD_CATEGORY",
  CLEAN_UP_FETCH_THIRD_CATEGORY: "CLEAN_UP_FETCH_THIRD_CATEGORY",
  CLEAN_UP_UPDATE_THIRD_CATEGORY: "CLEAN_UP_UPDATE_THIRD_CATEGORY",
};
export default categoryActionTypes;
