import vendorActionTypes from "./vendor.types";
import { mutateVBHPUtil, mutateVBHPProductListUtil } from "./vendor.utils";
const initialState = {
  //? vendor summary inital state
  // fetching  vendor summary in admim home
  vendorSummaryFetching: false,
  vendorSummaryData: null,
  vendorSummaryFetchingError: undefined,

  // fetching vendor list
  // fetchingVendorList,vendorList,fetchVendorListError
  fetchingVendorList: false,
  vendorList: null,
  fetchVendorListError: undefined,

  //specific vendor list
  // fetchingVendorArray,vendorArray,vendorArrayError
  fetchingVendorArray: false,
  vendorArray: null,
  vendorArrayError: undefined,
  // vendor create status
  //creatingVendor,vendorcreated,createVendorError
  creatingVendor: false,
  vendorcreated: false,
  createVendorError: undefined,

  // vendor select option
  // selectedVendorCategory: null,

  // vendor by key value search
  // vendorQueryFetching,vendorQueryResults,vendorQueryError
  vendorQueryFetching: false,
  vendorQueryResults: null,
  vendorQueryError: undefined,

  // fetch vendor details by id
  //vendorDetailsFetching,vendorDetails,vendorDetailsError
  vendorDetailsFetching: false,
  vendorDetails: null,
  vendorDetailsError: undefined,

  // update vendor
  //updateVendorDetailsStart,updatedDetails,vendorUpdateError
  vendorUpdating: false,
  updatedDetails: null,
  vendorUpdateError: undefined,

  // vendor sub category list
  // fetchVendorSubCategoryList,vendorSubCategoryList,vendorSubCategoryListError
  fetchVendorSubCategoryList: false,
  vendorSubCategoryList: null,
  vendorSubCategoryListError: undefined,

  // GET VENDOR BILLS BY DBOY ID
  // fetchingVendorBills,vendorBills,fetchVendorBillsError
  fetchingVendorBills: false,
  vendorBills: null,
  fetchVendorBillsError: undefined,
  // comparison replica object of for vendor product hashmap
  VBHP: {},

  // vendor product billing
  // billingVendorProduct,
  billingVendorProduct: false,
  BilledVendorProduct: false,
  vendorProductBillingError: undefined,

  // get vendor list by id array
  // fetchingVendorListById,vendorArray,vendorListByIdError
  fetchingVendorListById: false,
  vendorArrayAdmin: null,
  vendorListByIdError: undefined,
};
//? vendor Reducer

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch vendor summary
    case vendorActionTypes.FETCH_VENDOR_SUMMARY_START:
      return {
        ...state,
        vendorSummaryFetching: true,
        vendorSummaryData: null,
        vendorSummaryFetchingError: undefined,
      };
    case vendorActionTypes.FETCH_VENDOR_SUMMARY_SUCCESS:
      return {
        ...state,
        vendorSummaryFetching: false,
        vendorSummaryData: action.payload,

        vendorSummaryFetchingError: undefined,
      };

    case vendorActionTypes.FETCH_VENDOR_SUMMARY_FAILURE:
      return {
        ...state,
        vendorActionFetching: false,
        vendorSummaryFetchingError: null,
        vendorSummaryData: action.payload,
      };

    //  fetch specific vendor list

    // !fetching order dispatchers

    case vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_START:
      return {
        ...state,
        fetchingVendorArray: true,
        vendorArray: null,
        vendorArrayError: undefined,
      };

    case vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_SUCCESS:
      return {
        ...state,
        fetchingVendorArray: false,
        vendorArray: action.payload,
        vendorArrayError: undefined,
      };

    case vendorActionTypes.FETCH_VENDOR_FROM_ARRAY_FAILURE:
      return {
        ...state,
        fetchingVendorArray: false,
        vendorArray: null,
        vendorArrayError: action.payload,
      };

    // create a new vendor
    case vendorActionTypes.CREATE_VENDOR_START:
      return {
        ...state,
        creatingVendor: true,
        vendorcreated: false,
        createVendorError: undefined,
      };
    case vendorActionTypes.CREATE_VENDOR_SUCCESS:
      return {
        ...state,
        creatingVendor: false,
        vendorcreated: true,
        createVendorError: undefined,
      };
    case vendorActionTypes.CREATE_VENDOR_FAILURE:
      return {
        ...state,
        creatingVendor: false,
        vendorcreated: false,
        createVendorError: action.payload,
      };
    // case vendorActionTypes.STORE_VENDOR_SELECT_OPTION:
    //   return {
    //     ...state,
    //     selectedVendorCategory: action.payload,
    //   };

    case vendorActionTypes.GET_VENDOR_LIST_USER:
    case vendorActionTypes.GET_VENDOR_BY_KEY_START:
      return {
        ...state,
        vendorQueryFetching: true,
        vendorQueryResults: null,
        vendorQueryError: undefined,
      };

    case vendorActionTypes.GET_VENDOR_BY_KEY_SUCCESS:
      return {
        ...state,
        vendorQueryFetching: false,
        vendorQueryResults: action.payload,
        vendorQueryError: undefined,
      };

    case vendorActionTypes.GET_VENDOR_BY_KEY_FAILURE:
      return {
        ...state,
        vendorQueryFetching: false,
        vendorQueryResults: null,
        vendorQueryError: action.payload,
      };

    case vendorActionTypes.GET_VENDOR_BY_ID_START:
      return {
        ...state,
        vendorDetailsFetching: true,
        vendorDetails: null,
        vendorDetailsError: undefined,
      };

    case vendorActionTypes.GET_VENDOR_BY_ID_SUCCESS:
      return {
        ...state,
        vendorDetailsFetching: false,
        vendorDetails: action.payload,
        vendorDetailsError: undefined,
      };
    case vendorActionTypes.GET_VENDOR_BY_ID_FAILURE:
      return {
        ...state,
        vendorDetailsFetching: false,
        vendorDetails: null,
        vendorDetailsError: action.payload,
      };
    case vendorActionTypes.UPDATE_VENDOR_START:
      return {
        ...state,
        vendorUpdating: true,
        updatedDetails: null,
        vendorUpdateError: undefined,
      };

    case vendorActionTypes.UPDATE_VENDOR_SUCCESS:
      return {
        ...state,
        vendorUpdating: false,
        updatedDetails: action.payload,
        vendorUpdateError: undefined,
      };

    case vendorActionTypes.UPDATE_VENDOR_FAILURE:
      return {
        ...state,
        vendorUpdating: false,
        updatedDetails: null,
        vendorUpdateError: action.paylaod,
      };
    case vendorActionTypes.GET_VENDOR_SUBCATEGORIES_START:
      return {
        ...state,
        fetchVendorSubCategoryList: true,
        vendorSubCategoryList: null,
        vendorSubCategoryListError: undefined,
      };

    case vendorActionTypes.GET_VENDOR_SUBCATEGORIES_SUCCESS:
      return {
        ...state,
        fetchVendorSubCategoryList: false,
        vendorSubCategoryList: action.payload,
        vendorSubCategoryListError: undefined,
      };

    case vendorActionTypes.GET_VENDOR_SUBCATEGORIES_FAILURE:
      return {
        ...state,
        fetchVendorSubCategoryList: false,
        vendorSubCategoryList: null,
        vendorSubCategoryListError: action.payload,
      };

    // fetch vendor list
    case vendorActionTypes.FETCH_VENDOR_LIST_START:
      return {
        ...state,
        fetchingVendorList: true,
        vendorList: null,
        fetchVendorListError: undefined,
      };
    case vendorActionTypes.FETCH_VENDOR_LIST_SUCCESS:
      return {
        ...state,
        fetchingVendorList: false,
        vendorList: action.payload,
        fetchVendorListError: undefined,
      };
    case vendorActionTypes.FETCH_VENDOR_LIST_FAILURE:
      return {
        ...state,
        fetchingVendorList: false,
        vendorList: null,
        fetchVendorListError: action.paylaod,
      };

    // mutatue and populate VBHP
    case vendorActionTypes.POPULATE_VBHP:
      return {
        ...state,
        VBHP: { ...action.payload },
      };

    case vendorActionTypes.MUTATE_VBHP:
      return {
        ...state,
        VBHP: mutateVBHPUtil(
          state.VBHP,
          action.payload.operation,
          action.payload.VID,
          action.payload.VPH
        ),
      };

    // mutate VBHP product list
    case vendorActionTypes.MUTATE_VBHP_PRODUCTLIST:
      return {
        ...state,
        VBHP: mutateVBHPProductListUtil(
          state.VBHP,
          action.payload.operation,
          action.payload.VID,
          action.payload.VPH,
          action.payload.product
        ),
      };

    case vendorActionTypes.VENDOR_PRODUCT_BILLING_START:
      return {
        ...state,
        billingVendorProduct: true,
        BilledVendorProduct: false,
        vendorProductBillingError: undefined,
      };

    case vendorActionTypes.VENDOR_PRODUCT_BILLING_SUCCESS:
      return {
        ...state,
        billingVendorProduct: false,
        BilledVendorProduct: true,
        vendorProductBillingError: undefined,
      };

    case vendorActionTypes.VENDOR_PRODUCT_BILLING_FAILURE:
      return {
        ...state,
        billingVendorProduct: false,
        BilledVendorProduct: false,
        vendorProductBillingError: action.paylaod,
      };

    // get vendor bills by dboy id
    case vendorActionTypes.GET_VENDOR_BILLS_START:
      return {
        ...state,
        fetchingVendorBills: true,
        vendorBills: null,
        fetchVendorBillsError: undefined,
      };

    case vendorActionTypes.GET_VENDOR_BILLS_SUCCESS:
      return {
        ...state,
        fetchingVendorBills: false,
        vendorBills: action.payload,
        fetchVendorBillsError: undefined,
      };
    case vendorActionTypes.GET_VENDOR_BILLS_FAILURE:
      return {
        ...state,
        fetchingVendorBills: false,
        vendorBills: null,
        fetchVendorBillsError: action.payload,
      };

    // FETCH VENDOR LIST BY ID ARRAY
    case vendorActionTypes.GET_VENDORS_BY_ID_START:
      return {
        ...state,
        fetchingVendorListById: true,
        vendorArrayAdmin: null,
        vendorListByIdError: undefined,
      };

    case vendorActionTypes.GET_VENDORS_BY_ID_SUCCESS:
      return {
        ...state,
        fetchingVendorListById: false,
        vendorArrayAdmin: action.payload,
        vendorListByIdError: undefined,
      };

    case vendorActionTypes.GET_VENDORS_BY_ID_FAILURE:
      return {
        ...state,
        fetchingVendorListById: false,
        vendorArrayAdmin: null,
        vendorListByIdError: action.payload,
      };
    case vendorActionTypes.CLEANUP_CREATE_VENDOR:
      return {
        ...state,
        creatingVendor: false,
        vendorcreated: false,
        createVendorError: undefined,
      };
    case vendorActionTypes.CLEAN_VENDOR_STATE:
      return initialState;
    case vendorActionTypes.CLEANUP_VENDOR_LIST:
      return {
        ...state,
        fetchingVendorList: false,
        vendorList: null,
        fetchVendorListError: undefined,
      };
    default:
      return state;
  }
};

export default vendorReducer;
