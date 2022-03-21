// import { retry } from "@redux-saga/core/effects";
import productActionTypes from "./product.types";

//? defining the reducer inital state

const initalState = {
  //   vendorSummaryFetching: false,
  //   vedorSummaryData: null,
  //   vendorError: false,

  // creatingProduct,productCreated,createProductError
  creatingProduct: false,
  productCreated: false,
  createProductError: undefined,

  //? product summary
  //
  productSummaryFetching: false,
  productSummaryData: null,
  productSummaryFetchingError: undefined,

  // create product states

  // get category vendor aggregate for product select component
  // fetchingCategoryVendorAggregate,categoryVendorAggregate,fetchAggregateError
  fetchingCategoryVendorAggregate: false,
  categoryVendorAggregate: null,
  fetchAggregateError: undefined,

  //get product by id
  //fetchingProductDetails,productDetails,fetchingProductDetailsError
  fetchingProductDetails: false,
  productDetails: null,
  fetchingProductDetailsError: undefined,

  // get product List by key value
  // fetchingProductList,productList,fetchingProductListError

  fetchingProductList: false,
  productList: null,
  fetchingProductListError: undefined,

  //updating products
  //updatingProduct,updatedProduct,productUpdateError
  updatingProduct: false,
  updatedProduct: null,
  productUpdateError: undefined,

  // creating variants
  // creatingVariant,variantCreated,createVariantError
  creatingVariant: false,
  variantCreated: false,
  createVariantError: undefined,

  // fetch variants by upn
  // fetchingVariants,variantList,fetchVariantError
  fetchingVariants: false,
  variantList: null,
  fetchVariantsError: undefined,

  // fetch variants by sku
  // fetchingVariant,variantData,fetchingVariantError
  fetchingVariant: false,
  variantData: null,
  fetchingVariantError: undefined,

  // update variant
  // updatingVariant,variantUpdated,variantUpdateError
  updatingVariant: false,
  variantUpdated: false,
  variantUpdateError: undefined,

  // create product description
  // creatingDescription,createdDescription,descriptionCreateError
  creatingDescription: false,
  createdDescription: false,
  descriptionCreateError: undefined,

  // fetch description
  // fetchingDescription,descriptionData,descriptionError
  fetchingDescription: false,
  descriptionData: null,
  descriptionError: undefined,

  // update description
  // updatingDescription,descriptionUpdated,descriptionUpdateError
  updatingDescription: false,
  descriptionUpdated: false,
  descriptionUpdateError: undefined,

  // category list from the index
  // fetchingCategoryList,categoryList,catgoryListError
  fetchingCategoryList: false,
  categoryList: null,
  catgoryListError: undefined,

  // subCategeory info
  // fetchingSubCategory,subCategoryList,subCategoryError
  fetchingSubCategory: false,
  subCategoryList: null,
  subCategoryError: undefined,

  // user product list
  // fetchingUserProductList,userProductList,userProductListError
  fetchingUserProductList: false,
  userProductList: null,
  userProductListError: undefined,
  // search recommendations
  // fetchingRecommendationSearchList,recommendationSearchList,recommendationSearchListError
  fetchingRecommendationSearchList: false,
  recommendationSearchList: null,
  recommendationSearchListError: undefined,

  // get recommendations (products by id array)
  // isRecommendationsFetching,recommendations,fetchRecommendationsError
  isRecommendationsFetching: false,
  recommendations: null,
  fetchRecommendationsError: undefined,

  // search term for products
  // searchTerm
  searchTerm: null,

  // search radius for geospatial queries for search(users)
  searchRadius: 10,
};

//? creating the reducer
const productReducer = (state = initalState, action) => {
  switch (action.type) {
    case productActionTypes.FETCH_PRODUCTS_SUMMARY_START:
      return {
        ...state,
        productSummaryFetching: true,
        productSummaryData: null,
        productSummaryFetchingError: undefined,
      };

    case productActionTypes.FETCH_PRODUCTS_SUMMARY_SUCCESS:
      return {
        ...state,
        productSummaryFetching: false,
        productSummaryData: action.payload,
        productSummaryFetchingError: undefined,
      };

    case productActionTypes.FETCH_PRODUCTS_SUMMARY_FAILURE:
      return {
        ...state,
        productSummaryFetching: false,
        productSummaryData: null,
        productSummaryFetchingError: action.payload,
      };

    // creating products
    case productActionTypes.CREATE_PRODUCT_START:
      return {
        ...state,
        creatingProduct: true,
        productCreated: false,
        createProductError: undefined,
      };
    case productActionTypes.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        creatingProduct: false,
        productCreated: true,
        createProductError: undefined,
      };
    case productActionTypes.CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        creatingProduct: false,
        productCreated: false,
        createProductError: action.payload,
      };
    case productActionTypes.GET_CATEGORY_VENDOR_START:
      return {
        ...state,
        fetchingCategoryVendorAggregate: true,
        categoryVendorAggregate: null,
        fetchAggregateError: undefined,
      };
    case productActionTypes.GET_CATEGORY_VENDOR_SUCCESS:
      return {
        ...state,
        fetchingCategoryVendorAggregate: false,
        categoryVendorAggregate: action.payload,
        fetchAggregateError: undefined,
      };

    case productActionTypes.GET_CATEGORY_VENDOR_FAILURE:
      return {
        ...state,
        fetchingCategoryVendorAggregate: false,
        categoryVendorAggregate: null,
        fetchAggregateError: action.payload,
      };

    case productActionTypes.GET_PRODUCT_BY_ID_START:
      return {
        ...state,
        fetchingProductDetails: true,
        productDetails: null,
        fetchingProductDetailsError: undefined,
      };
    case productActionTypes.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        fetchingProductDetails: false,
        productDetails: action.payload,
        fetchingProductDetailsError: undefined,
      };
    case productActionTypes.GET_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        fetchingProductDetails: false,
        productDetails: undefined,
        fetchingProductDetailsError: action.payload,
      };
    case productActionTypes.GET_SEARCH_LIST_START:
    case productActionTypes.GET_PRODUCT_LIST_START:
      return {
        ...state,
        fetchingProductList: true,
        productList: null,
        fetchingProductListError: undefined,
      };
    case productActionTypes.GET_SEARCH_LIST_SUCCESS:
    case productActionTypes.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        fetchingProductList: false,
        productList: action.payload,
        fetchingProductListError: undefined,
      };
    case productActionTypes.GET_SEARCH_LIST_FAILURE:
    case productActionTypes.GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        fetchingProductList: false,
        productList: null,
        fetchingProductListError: action.payload,
      };

    case productActionTypes.CLEAR_SEARCH_LIST:
      return {
        ...state,
        fetchingProductList: false,
        productList: null,
        fetchingProductListError: undefined,
      };
    case productActionTypes.UPDATE_PRODUCT_START:
      return {
        ...state,
        updatingProduct: true,
        updatedProduct: null,
        productUpdateError: undefined,
      };
    case productActionTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        updatingProduct: false,
        updatedProduct: action.payload,
        productUpdateError: undefined,
      };
    case productActionTypes.UPDATE_PRODUCT_FAILURE:
      return {
        ...state,
        updatingProduct: false,
        updatedProduct: null,
        productUpdateError: action.payload,
      };

    // creating variants
    case productActionTypes.CREATE_VARIANTS_START:
      return {
        ...state,
        creatingVariant: true,
        variantCreated: false,
        createVariantError: undefined,
      };
    case productActionTypes.CREATE_VARIANTS_SUCCESS:
      return {
        ...state,
        creatingVariant: false,
        variantCreated: true,
        createVariantError: undefined,
      };
    case productActionTypes.CREATE_VARIANTS_FAILURE:
      return {
        ...state,
        creatingVariant: false,
        variantCreated: false,
        createVariantError: action.payload,
      };

    case productActionTypes.FETCH_VARIANTS_BY_UPN_START:
      return {
        ...state,
        fetchingVariants: true,
        variantList: null,
        fetchVariantError: undefined,
      };

    case productActionTypes.FETCH_VARIANTS_BY_UPN_SUCCESS:
      return {
        ...state,
        fetchingVariants: false,
        variantList: action.payload,
        fetchVariantError: undefined,
      };
    case productActionTypes.FETCH_VARIANTS_BY_UPN_FAILURE:
      return {
        ...state,
        fetchingVariants: false,
        variantList: null,
        fetchVariantError: action.payload,
      };
    case productActionTypes.FETCH_VARIANT_BY_SKU_START:
      return {
        ...state,
        fetchingVariant: true,
        variantData: null,
        fetchingVariantError: undefined,
      };
    case productActionTypes.FETCH_VARIANT_BY_SKU_SUCCESS:
      return {
        ...state,
        fetchingVariant: false,
        variantData: action.payload,
        fetchingVariantError: undefined,
      };

    case productActionTypes.FETCH_VARIANT_BY_SKU_FAILURE:
      return {
        ...state,
        fetchingVariant: false,
        variantData: null,
        fetchingVariantError: action.payload,
      };
    case productActionTypes.UPDATE_VARIANT_START:
      return {
        ...state,
        updatingVariant: true,
        variantUpdated: false,
        variantUpdateError: undefined,
      };
    case productActionTypes.UPDATE_VARIANT_SUCCESS:
      return {
        ...state,
        updatingVariant: false,
        variantUpdated: true,
        variantUpdateError: undefined,
      };
    case productActionTypes.UPDATE_VARIANT_FAILURE:
      return {
        ...state,
        updatingVariant: false,
        variantUpdated: false,
        variantUpdateError: action.payload,
      };

    // create description

    case productActionTypes.CREATE_DESCRIPTION_START:
      return {
        ...state,
        creatingDescription: true,
        createdDescription: false,
        descriptionCreateError: undefined,
      };
    case productActionTypes.CREATE_DESCRIPTION_SUCCESS:
      return {
        ...state,
        creatingDescription: false,
        createdDescription: true,
        descriptionCreateError: undefined,
      };
    case productActionTypes.CREATE_DESCRIPTION_FAILURE:
      return {
        ...state,
        creatingDescription: false,
        createdDescription: false,
        descriptionCreateError: action.payload,
      };

    case productActionTypes.FETCH_DESCRIPTION_START:
      return {
        ...state,
        fetchingDescription: true,
        descriptionData: null,
        descriptionError: undefined,
      };
    case productActionTypes.FETCH_DESCRIPTION_SUCCESS:
      return {
        ...state,
        fetchingDescription: false,
        descriptionData: action.payload,
        descriptionError: undefined,
      };
    case productActionTypes.FETCH_DESCRIPTION_FAILURE:
      return {
        ...state,
        fetchingDescription: false,
        descriptionData: null,
        descriptionError: action.payload,
      };
    case productActionTypes.UPDATE_DESCRIPTION_START:
      return {
        ...state,
        updatingDescription: true,
        descriptionUpdated: false,
        descriptionUpdateError: undefined,
      };

    case productActionTypes.UPDATE_DESCRIPTION_SUCCESS:
      return {
        ...state,
        updatingDescription: false,
        descriptionUpdated: true,
        descriptionUpdateError: undefined,
      };
    case productActionTypes.UPDATE_DESCRIPTION_FAILURE:
      return {
        ...state,
        updatingDescription: false,
        descriptionUpdated: false,
        descriptionUpdateError: action.payload,
      };

    case productActionTypes.GET_CATEGORY_LIST_START:
      return {
        ...state,
        fetchingCategoryList: true,
        categoryList: null,
        catgoryListError: undefined,
      };

    case productActionTypes.GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        fetchingCategoryList: false,
        categoryList: action.payload,
        catgoryListError: undefined,
      };

    case productActionTypes.GET_CATEGORY_LIST_FAILURE:
      return {
        ...state,
        fetchingCategoryList: false,
        categoryList: null,
        catgoryListError: action.paylaod,
      };

    // loading sub category list
    case productActionTypes.GET_SUBCATEGORY_START:
      return {
        ...state,
        fetchingSubCategory: true,
        subCategoryList: null,
        subCategoryError: undefined,
      };
    case productActionTypes.GET_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        fetchingSubCategory: false,
        subCategoryList: action.payload,
        subCategoryError: undefined,
      };
    case productActionTypes.GET_SUBCATEGORY_FAILURE:
      return {
        ...state,
        fetchingSubCategory: false,
        subCategoryList: null,
        subCategoryError: action.payload,
      };

    // user product list
    case productActionTypes.SEARCH_PRODUCT_START:
    case productActionTypes.GET_USER_PRODUCT_LIST_START:
      // case productActionTypes.GET_FEATURED_PRODUCT_LIST_START:
      return {
        ...state,
        fetchingUserProductList: true,
        // userProductList: null,
        // userProductListError: undefined,
      };
    case productActionTypes.GET_USER_PRODUCT_LIST_SUCCESS:
    case productActionTypes.SEARCH_PRODUCT_SUCCESS:
      // case productActionTypes.GET_FEATURED_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        fetchingUserProductList: false,
        userProductList: action.payload,
        userProductListError: undefined,
      };

    case productActionTypes.GET_USER_PRODUCT_LIST_FAILURE:
    case productActionTypes.SEARCH_PRODUCT_FAILURE:
      // case productActionTypes.GET_FEATURED_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        fetchingUserProductList: false,
        userProductList: null,
        userProductListError: action.payload,
      };

    case productActionTypes.GET_PRODUCT_LIST_BY_ID_START:
      return {
        ...state,
        isRecommendationsFetching: true,
        recommendations: null,
        fetchRecommendationsError: undefined,
      };

    case productActionTypes.GET_PRODUCT_LIST_BY_ID_SUCCESS:
      return {
        ...state,
        isRecommendationsFetching: false,
        recommendations: action.payload,
        fetchRecommendationsError: undefined,
      };
    case productActionTypes.GET_PRODUCT_LIST_BY_ID_FAILURE:
      return {
        ...state,
        isRecommendationsFetching: false,
        recommendations: null,
        fetchRecommendationsError: action.payload,
      };
    case productActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case productActionTypes.SEARCH_RECOMMENDATION_SUCCESS:
      return {
        ...state,

        // search recommendations
        fetchingRecommendationSearchList: false,
        recommendationSearchList: action.payload,
        recommendationSearchListError: undefined,
      };
    case productActionTypes.SEARCH_RECOMMENDATION_FAILURE:
      return {
        ...state,

        // search recommendations
        fetchingRecommendationSearchList: false,
        recommendationSearchList: null,
        recommendationSearchListError: undefined,
      };
    case productActionTypes.SET_SEARCH_RADIUS:
      return {
        ...state,
        searchRadius: action.payload,
      };

    // cleanupUserProduct

    case productActionTypes.CLEANUP_USER_PRODUCTS:
      return {
        ...state,
        fetchingUserProductList: false,
        userProductList: action.payload,
        userProductListError: null,
      };
    case productActionTypes.CLEANUP_SUBCATEGORY:
      return {
        ...state,
        fetchingSubCategory: false,
        subCategoryList: null,
        subCategoryError: undefined,
      };

    case productActionTypes.CLEANUP_SEARCH_LIST:
      return {
        ...state,
        fetchingProductList: false,
        productList: null,
        fetchingProductListError: undefined,
      };
    case productActionTypes.CLEANUP_PRODUCT_UPDATE:
      return {
        ...state,
        updatingProduct: false,
        updatedProduct: null,
        productUpdateError: undefined,
      };

    case productActionTypes.CLEANUP_CREATED_DESC:
      return {
        ...state,
        creatingDescription: false,
        createdDescription: false,
        descriptionCreateError: undefined,
      };
    case productActionTypes.CLEANUP_UPDATED_DESC:
      return {
        ...state,
        updatingDescription: false,
        descriptionUpdated: false,
        descriptionUpdateError: undefined,
      };
    case productActionTypes.CLEANUP_CREATED_PRODUCT:
      return {
        ...state,
        creatingProduct: false,
        productCreated: false,
        createProductError: undefined,
      };
    case productActionTypes.CLEANUP_VARIANT_CREATE:
      return {
        ...state,
        creatingVariant: false,
        variantCreated: false,
        createVariantError: undefined,
      };
    case productActionTypes.CLEANUP_VARIANT_UPDATE:
      return {
        ...state,
        updatingVariant: false,
        variantUpdated: false,
        variantUpdateError: undefined,
      };

    case productActionTypes.CLEANUP_RECOMMENDATIONS:
      return {
        ...state,
        isRecommendationsFetching: false,
        recommendations: null,
        fetchRecommendationsError: undefined,
      };
    case productActionTypes.PRODUCT_STATE_CLEANUP:
      return initalState;
    default:
      return state;
  }
};
export default productReducer;
