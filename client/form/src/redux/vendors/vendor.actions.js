import vendorActionTypes from "./vendor.types";

// fetch vendor summary
// fetchVendorSummaryStart,fetchVendorSummarySuccess,fetchVendorSummaryFailure
export const fetchVendorSummaryStart = (Area) => ({
  type: vendorActionTypes.FETCH_VENDOR_SUMMARY_START,
  payload: Area,
});
export const fetchVendorSummarySuccess = (vendorSummaryData) => ({
  type: vendorActionTypes.FETCH_VENDOR_SUMMARY_SUCCESS,
  payload: vendorSummaryData,
});
export const fetchVendorSummaryFailure = (error) => ({
  type: vendorActionTypes.FETCH_VENDOR_SUMMARY_SUCCESS,
  payload: error,
});

// FETCH VENDOR LIST
// fetchVendorListStart,fetchVendorListSuccess,fetchVendorListFailure
export const fetchVendorListStart = (vendorDetails) => ({
  type: vendorActionTypes.FETCH_VENDOR_LIST_START,
  payload: vendorDetails,
});

export const fetchVendorListSuccess = (vendorList) => ({
  type: vendorActionTypes.FETCH_VENDOR_LIST_SUCCESS,
  payload: vendorList,
});
export const fetchVendorListFailure = (error) => ({
  type: vendorActionTypes.FETCH_VENDOR_LIST_SUCCESS,
  payload: error,
});

// FETCH VENDOR FROM ARRAY START
// fetchVendorFromArrayStart,fetchVendorFromArraySuccess,fetchVendorFromArrayFailure

/// fetching orddr dispatchers
export const fetchVendorFromArrayStart = (vendorArray) => ({
  type: vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_START,
  payload: vendorArray,
});

export const fetchVendorFromArraySuccess = (vendorList) => ({
  type: vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_SUCCESS,
  payload: vendorList,
});
export const fetchVendorFromArrayFailure = (error) => ({
  type: vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_FAILURE,
  payload: error,
});
// create vendor summary
// createVendorStart,createVendorSuccess,createVendorFailure
export const createVendorStart = (vendorDetails) => ({
  type: vendorActionTypes.CREATE_VENDOR_START,
  payload: vendorDetails,
});

export const createVendorSuccess = () => ({
  type: vendorActionTypes.CREATE_VENDOR_SUCCESS,
});

export const createVendorFailure = (error) => ({
  type: vendorActionTypes.CREATE_VENDOR_FAILURE,
  payload: error,
});

// // vendor category select and api call actions
// export const storeVendorSelectOption = (vendorCategory) => ({
//   type: vendorActionTypes.STORE_VENDOR_SELECT_OPTION,
//   payload: vendorCategory,
// });

export const getVendorByKeyStart = (vendorQueryDetails) => ({
  type: vendorActionTypes.GET_VENDOR_BY_KEY_START,
  payload: vendorQueryDetails,
});

export const getVendorByKeySuccess = (vendorQueryResults) => ({
  type: vendorActionTypes.GET_VENDOR_BY_KEY_SUCCESS,
  payload: vendorQueryResults,
});

export const getVendorByKeyFailure = (vendorQueryError) => ({
  type: vendorActionTypes.GET_VENDOR_BY_KEY_FAILURE,
  payload: vendorQueryError,
});

// GET singh VENDOR BY ID
// getVendorByIdStart,getVendorByIdSuccess,getVendorByIdFailure
export const getVendorByIdStart = (vendorIdDetails) => ({
  type: vendorActionTypes.GET_VENDOR_BY_ID_START,
  payload: vendorIdDetails,
});

export const getVendorByIdSuccess = (vendorDetails) => ({
  type: vendorActionTypes.GET_VENDOR_BY_ID_SUCCESS,
  payload: vendorDetails,
});

export const getVendorByIdFailure = (error) => ({
  type: vendorActionTypes.GET_VENDOR_BY_ID_FAILURE,
  payload: error,
});

// update vendor details
//updateVendorDetailsStart,updateVendorDetailsSuccess,updateVendorDetailsFailure
export const updateVendorDetailStart = (vendorDetails) => ({
  type: vendorActionTypes.UPDATE_VENDOR_START,
  payload: vendorDetails,
});

export const updateVendorDetailsSuccess = (updatedVendorDetails) => ({
  type: vendorActionTypes.UPDATE_VENDOR_SUCCESS,
  payload: updatedVendorDetails,
});

export const updateVendorDetailsFailure = (updateError) => ({
  type: vendorActionTypes.UPDATE_VENDOR_FAILURE,
  payload: updateError,
});

// get vendor sub categories
// getVendorSubCategoriesStart,getVendorSubCategoriesSuccess,getVendorSubCategoriesFailure
export const getVendorSubCategoriesStart = (vendorSubCategory) => ({
  type: vendorActionTypes.GET_VENDOR_SUBCATEGORIES_START,
  payload: vendorSubCategory,
});
export const getVendorSubCategoriesSuccess = (vendorSubCategoryList) => ({
  type: vendorActionTypes.GET_VENDOR_SUBCATEGORIES_SUCCESS,
  payload: vendorSubCategoryList,
});
export const getVendorSubCategoriesFailure = (vendorSubCategoryListError) => ({
  type: vendorActionTypes.GET_VENDOR_SUBCATEGORIES_FAILURE,
  payload: vendorSubCategoryListError,
});

// get vendor list user end

export const getVendorListUserEnd = (vendorInfo) => ({
  type: vendorActionTypes.GET_VENDOR_LIST_USER,
  payload: vendorInfo,
});

// populate VBHP
//populateVBHP & mutate VBHP
export const populateVBHP = (VBHP) => ({
  type: vendorActionTypes.POPULATE_VBHP,
  payload: {},
});
// mutateVBHP
export const mutateVBHP = (mutationProps) => ({
  type: vendorActionTypes.MUTATE_VBHP,
  payload: mutationProps,
});

// MUTATE VBHP PRODUCT LSIT
export const mutateVBHPProductList = (productMutationProps) => ({
  type: vendorActionTypes.MUTATE_VBHP_PRODUCTLIST,
  payload: productMutationProps,
});

// VENDOR PRODUCT BILLING
// vendorProductBillingStart,vendorProductBillingSuccess,vendorProductBillingFailure
export const vendorProductBillingStart = (vendorProdObj) => ({
  type: vendorActionTypes.VENDOR_PRODUCT_BILLING_START,
  payload: vendorProdObj,
});
export const vendorProductBillingSuccess = () => ({
  type: vendorActionTypes.VENDOR_PRODUCT_BILLING_SUCCESS,
});

export const vendorProductBillingFailure = (error) => ({
  type: vendorActionTypes.VENDOR_PRODUCT_BILLING_FAILURE,
  payload: error,
});

// GET VENDOR BILLS BY DBOY ID
//getVendorBillsStart,getVendorBillsSuccess,getVendorBillsFailure
export const getVendorBillsStart = (vendorBillingDetails) => ({
  type: vendorActionTypes.GET_VENDOR_BILLS_START,
  payload: vendorBillingDetails,
});

export const getVendorBillsSuccess = (vendorBills) => ({
  type: vendorActionTypes.GET_VENDOR_BILLS_SUCCESS,
  payload: vendorBills,
});

export const getVendorBillsFailure = (error) => ({
  type: vendorActionTypes.GET_VENDOR_BILLS_FAILURE,
  payload: error,
});

export const getVendorsByIdStart = (idArray) => ({
  type: vendorActionTypes.GET_VENDORS_BY_ID_START,
  payload: idArray,
});

export const getVendorsByIdSuccess = (vendorsList) => ({
  type: vendorActionTypes.GET_VENDORS_BY_ID_SUCCESS,
  payload: vendorsList,
});
export const getVendorsByIdFailure = (error) => ({
  type: vendorActionTypes.GET_VENDORS_BY_ID_FAILURE,
  payload: error,
});

// cleanup fxns

export const cleanUpcreateVendor = () => ({
  type: vendorActionTypes.CLEANUP_CREATE_VENDOR,
});

export const cleanVendorState = () => ({
  type: vendorActionTypes.CLEAN_VENDOR_STATE,
});



export const cleaUpvendorList=()=>({
  type:vendorActionTypes.CLEANUP_VENDOR_LIST
})
export const cleanupVendorsById = () => ({
  type: vendorActionTypes.CLEANUP_VENDOR_BY_ID,
});

// todo cleanup vendor billings

// todo cleanup vendor bills
export const cleanUpVendorBills = () => ({
  type: vendorActionTypes.CLEANUP_VENDOR_BILLS,
});
