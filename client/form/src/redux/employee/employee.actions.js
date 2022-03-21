import employeeActionTypes from "./employee.types";
// registerEmployeeStart,registerEmployeeSuccess,registerEmployeeFailure
export const registerEmployeeStart = (employeDetails) => ({
  type: employeeActionTypes.REGISTER_EMPLOYEE_START,
  payload: employeDetails,
});
export const registerEmployeeSuccess = () => ({
  type: employeeActionTypes.REGISTER_EMPLOYEE_SUCCESS,
});
export const registerEmployeeFailure = (error) => ({
  type: employeeActionTypes.REGISTER_EMPLOYEE_FAILURE,
  payload: error,
});

//  FETCH EMPLOYEE RECORDS
// fetchEmployeeRecordsStart,fetchEmployeeRecordsSuccess,fetchEmployeeRecordsFailure
export const fetchEmployeeRecordsStart = () => ({
  type: employeeActionTypes.FETCH_EMPLOYEE_RECORDS_START,
});
export const fetchEmployeeRecordsSuccess = (employeeRecords) => ({
  type: employeeActionTypes.FETCH_EMPLOYEE_RECORDS_SUCCESS,
  payload: employeeRecords,
});
export const fetchEmployeeRecordsFailure = (error) => ({
  type: employeeActionTypes.FETCH_EMPLOYEE_RECORDS_FAILURE,
  payload: error,
});

export const setEmpId = (Id) => ({
  type: employeeActionTypes.SET_EMP_ID,
  payload: Id,
});
// CLEAN UP
export const cleanupRegisterInfo = () => ({
  type: employeeActionTypes.CLEANUP_REISTER_INFO,
});
export const cleanupEmployeeRecords = () => ({
  type: employeeActionTypes.CLAENUP_EMPLOYEE_RECORDS,
});
