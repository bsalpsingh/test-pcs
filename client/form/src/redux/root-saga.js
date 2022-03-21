import { all, call } from "redux-saga/effects";
import EmployeeSagas from "./employee/employee.sagas";

export default function* rootSaga() {
  yield all([call(EmployeeSagas)]);
}
