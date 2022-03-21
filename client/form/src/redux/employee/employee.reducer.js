import employeeActionTypes from "./employee.types";
const initalState = {
  // employee register
  // isRegistering,isRegistered,registerError
  isRegistering: false,
  isRegistered: false,
  registerError: undefined,

  // employee records
  //   isFetchingRecords,employeeRecords,fetchError
  isFetchingRecords: false,
  employeeRecords: null,
  fetchError: undefined,
  //

  empId: null,
};

const employeeReducer = (state = initalState, action) => {
  switch (action.type) {
    case employeeActionTypes.REGISTER_EMPLOYEE_START:
      return {
        ...state,
        isRegistering: true,
        isRegistered: false,
        registerError: undefined,
      };

    case employeeActionTypes.REGISTER_EMPLOYEE_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
        registerError: undefined,
      };

    case employeeActionTypes.REGISTER_EMPLOYEE_FAILURE:
      return {
        ...state,
        isRegistering: false,
        isRegistered: false,
        registerError: action.payload,
      };

    case employeeActionTypes.CLEANUP_REISTER_INFO:
      return {
        ...state,
        isRegistering: false,
        isRegistered: false,
        registerError: undefined,
      };

    case employeeActionTypes.FETCH_EMPLOYEE_RECORDS_START:
      return {
        ...state,
        isFetchingRecords: true,
        employeeRecords: null,
        fetchError: undefined,
      };
    case employeeActionTypes.FETCH_EMPLOYEE_RECORDS_SUCCESS:
      return {
        ...state,
        isFetchingRecords: false,
        employeeRecords: action.payload,
        fetchError: undefined,
      };
    case employeeActionTypes.FETCH_EMPLOYEE_RECORDS_FAILURE:
      return {
        ...state,
        isFetchingRecords: false,
        employeeRecords: null,
        fetchError: action.payload,
      };

    case employeeActionTypes.SET_EMP_ID:
      return {
        ...state,
        empId: action.payload,
      };
    default:
      return state;
  }
};
export default employeeReducer;
