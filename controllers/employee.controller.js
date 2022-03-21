// utilities
const AppError = require("../utils/appError");
const APIfeatures = require("../utils/apifeatures");
const catchAsync = require("../utils/catchAsync");
const mongoose = require("mongoose");
//? models
const Employee = require("./../models/employee.model");
const Qualification = require("./../models/qualification.model");
const QualificationList = require("./../models/qualificationList.model");

exports.createNewEmployeeRecord = catchAsync(async (req, res, next) => {
  console.log("reqest  body", req.body);
  let entry_by = "Bishal Singh";
  let entry_date = new Date();

  const { qualifications, gender, employeeName, salary, Dob } = req.body;
  let qualificationsList = Object.keys(qualifications);
  let qualificationMarks = Object.values(qualifications);

  const employee = await Employee.create({
    Emp_name: employeeName,
    Gender: gender,
    Dob,
    entry_by,
    salary,
    entry_date,
  });

  if (!employee) {
    return next(new AppError("something went wrong", 500));
  }
  const { _id } = employee;

  //todo   creating  the qualification list from emp id

  const qualificationsPromiseList = qualificationsList.map(
    async (qualification, qIndex) => {
      return await QualificationList.create({ qName: qualification });
    }
  );
  let qualificationArray = await Promise.all(qualificationsPromiseList);

  let qualificationListIds = qualificationArray.map(
    (qualfication, qualificationIndex) => qualfication._id
  );

  //    create qualifications
  let EmpQualificationPromise = qualificationListIds.map(
    async (qualificationListId, idIndex) => {
      return await Qualification.create({
        Employee_id: _id,
        Qid: qualificationListId,
        marks: qualificationMarks[idIndex],
      });
    }
  );
  const EmpQualificationArray = await Promise.all(EmpQualificationPromise);

  res.status(200).json({ message: "successfully created" });
});



// fetch employee details
exports.fetchEmployeeRecords = catchAsync(async (req, res, next) => {
  //  find all the record of the employees from employees table and virtual populate the employees table

  const employeeDetails = await Employee.find({})
    .populate("qualifications")
    .lean();

  if (!employeeDetails) {
    return next(new AppError("user not found", 404));
  }
  console.log(employeeDetails);
  res.status(200).json({ status: "successful", data: employeeDetails });
});
