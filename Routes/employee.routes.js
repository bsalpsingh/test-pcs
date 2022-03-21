const express = require("express");
const {
  createEmployeeRecord,
  fetchEmployeeRecords,
  createNewEmployeeRecord,
} = require("./../controllers/employee.controller");
// const { protect, restrictTo } = require("./../controllers/auth.controller");
// // const { restrictTo } = require("../controllers/auth.controller");
const EmployeeRouter = express.Router();

EmployeeRouter.route("/createRecord").post(createNewEmployeeRecord);

EmployeeRouter.route("/fetchRecord").get(fetchEmployeeRecords);

module.exports = EmployeeRouter;
