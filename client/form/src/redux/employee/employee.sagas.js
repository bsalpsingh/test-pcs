import { takeLatest, call, put, all, take } from "redux-saga/effects";
import axios from "axios";
import employeeActionTypes from "./employee.types";

import {
  registerEmployeeSuccess,
  registerEmployeeFailure,
  fetchEmployeeRecordsSuccess,
  fetchEmployeeRecordsFailure,
} from "./employee.actions";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export function* employeeRegisterStart({ payload }) {
  try {
    console.log("running");
    const { data } = yield axios.post(
      `/api/v1/employee/createRecord`, //todo write this api endpoint in backend
      payload,
      axiosConfig
    );

    yield put(registerEmployeeSuccess(data));
  } catch (error) {
    yield put(registerEmployeeFailure(error));
  }
}

export function* EmployeeRegisterSaga() {
  yield takeLatest(
    employeeActionTypes.REGISTER_EMPLOYEE_START,
    employeeRegisterStart
  );
}

export function* fetchRecordsStart() {
  try {
    const { data } = yield axios.get(
      `/api/v1/employee/fetchRecord`, //todo write this api endpoint in backend

      axiosConfig
    );
    yield put(fetchEmployeeRecordsSuccess(data.data));
  } catch (error) {
    yield put(fetchEmployeeRecordsFailure(error));
  }
}

export function* employeeRecordsSaga() {
  yield takeLatest(
    employeeActionTypes.FETCH_EMPLOYEE_RECORDS_START,
    fetchRecordsStart
  );
}
export default function* EmployeeSagas() {
  yield all([call(EmployeeRegisterSaga), call(employeeRecordsSaga)]);
}
