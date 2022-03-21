const vendorActionTypes = {
  // fetch vendor summary
  FETCH_VENDOR_SUMMARY_START: "FETCH_VENDOR_SUMMARY_START",
  FETCH_VENDOR_SUMMARY_SUCCESS: "FETCH_VENDOR_SUMMARY_SUCCESS",
  FETCH_VENDOR_SUMMARY_FAILURE: "FETCH_VENDOR_SUMMARY_FAILURE",
  // fetch vendor list
  FETCH_VENDOR_LIST_START: "FETCH_VENDOR_LIST_START",
  FETCH_VENDOR_LIST_SUCCESS: "FETCH_VENDOR_LIST_SUCCESS",
  FETCH_VENDOR_LIST_FAILURE: "FETCH_VENDOR_LIST_FAILURE",

  // FETCH VENDOR LIST FROM ARRAY
  // ? fetching order dispatchers

  FETCH_VENDOR_FROM_ARRAY_START: "FETCH_VENDOR_FROM_ARRAY_START",
  FETCH_VENDOR_FROM_ARRAY_SUCCESS: "FETCH_VENDOR_FROM_ARRAY_SUCCESS",
  FETCH_VENDOR_FROM_ARRAY_FAILURE: "FETCH_VENDOR_FROM_ARRAY_FAILURE",
  // create vendor
  CREATE_VENDOR_START: "CREATE_VENDOR_START",
  CREATE_VENDOR_SUCCESS: "CREATE_VENDOR_SUCCESS",
  CREATE_VENDOR_FAILURE: "CREATE_VENDOR_FAILURE",

  // store vendor select option
  // STORE_VENDOR_SELECT_OPTION: "STORE_VENDOR_SELECT_OPTION",

  // get by area actiontypes
  // vendor
  GET_VENDOR_BY_KEY_START: "GET_VENDOR_BY_KEY_START",

  GET_VENDOR_BY_KEY_SUCCESS: "GET_VENDOR_BY_KEY_SUCCESS",

  GET_VENDOR_BY_KEY_FAILURE: "GET_VENDOR_BY_KEY_FAILURE",

  // get vendor by id or upn

  GET_VENDOR_BY_ID_START: "GET_VENDOR_BY_ID_START",
  GET_VENDOR_BY_ID_SUCCESS: "GET_VENDOR_BY_ID_SUCCESS",
  GET_VENDOR_BY_ID_FAILURE: "GET_VENDOR_BY_ID_FAILURE",

  // update vendor details

  UPDATE_VENDOR_START: "UPDATE_VENDOR_START",
  UPDATE_VENDOR_SUCCESS: "UPDATE_VENDOR_SUCCESS",
  UPDATE_VENDOR_FAILURE: "UPDATE_VENDOR_FAILURE",

  // get vendor sub Categories

  GET_VENDOR_SUBCATEGORIES_START: "GET_VENDOR_SUBCATEGORIES_START",
  GET_VENDOR_SUBCATEGORIES_SUCCESS: "GET_VENDOR_SUBCATEGORIES_SUCCESS",
  GET_VENDOR_SUBCATEGORIES_FAILURE: "GET_VENDOR_SUBCATEGORIES_FAILURE",

  // get vendor list for user end ...success and failure used by admins state

  // populate VBHP
  POPULATE_VBHP: "POPULATE_VBHP",
  MUTATE_VBHP: "MUTATE_VBHP",
  MUTATE_VBHP_PRODUCTLIST: "MUTATE_VBHP_PRODUCTLIST",

  // vendor billing

  VENDOR_PRODUCT_BILLING_START: "VENDOR_PRODUCT_BILLING_START",
  VENDOR_PRODUCT_BILLING_SUCCESS: "VENDOR_PRODUCT_BILLING_SUCCESS",
  VENDOR_PRODUCT_BILLING_FAILURE: "VENDOR_PRODUCT_BILLING_FAILURE",

  // get vendor billing list by dboy id
  GET_VENDOR_BILLS_START: "GET_VENDOR_BILLS_START",
  GET_VENDOR_BILLS_SUCCESS: "GET_VENDOR_BILLS_SUCCESS",
  GET_VENDOR_BILLS_FAILURE: "GET_VENDOR_BILLS_FAILURE",

  GET_VENDORS_BY_ID_START: "GET_VENDORS_BY_ID_START",
  GET_VENDORS_BY_ID_SUCCESS: "GET_VENDORS_BY_ID_SUCCESS",
  GET_VENDORS_BY_ID_FAILURE: "GET_VENDORS_BY_ID_FAILURE",

  GET_VENDOR_LIST_USER: "GET_VENDOR_LIST_USER",
  // celanup vendor state
  CLEANUP_CREATE_VENDOR: "CLEANUP_CREATE_VENDOR",
  CLEAN_VENDOR_STATE: "CLEAN_VENDOR_STATE",

  // todo cleanup vendor billing state,

  // todo cleanup vendor bills
  CLEANUP_VENDOR_LIST:'CLEANUP_VENDOR_LIST',
  CLEANUP_VENDOR_BY_ID: "CLEANUP_VENDOR_BY_ID",
  CLEANUP_VENDOR_BILLS: "CLEANUP_VENDOR_BILLS",
};

export default vendorActionTypes;
