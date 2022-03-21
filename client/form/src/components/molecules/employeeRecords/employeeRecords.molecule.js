import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { BasicTable } from "./../table/table.molecule";
// libarary fxns
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// custom fxns

import { selectEmployee } from "../../../redux/employee/employee.selector";

const EmployeeRecords = ({ employeeState: { empId, employeeRecords } }) => {
  const EmployeeRecord =
    employeeRecords[
      employeeRecords.findIndex((record) => record._id === empId)
    ];

  const employeeQualifications = {};

  const getEmployeeQualifications = () => {
    EmployeeRecord.qualifications.reduce((acc, employee) => {
      acc[employee.qualifications.Qid.qName] = employee.qualifications.marks;
      return acc;
    }, employeeQualifications);
  };

  const tableHeaders = ["id", "Qualificatiton", "marks"];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="normal"
            required
            fullWidth
            value={EmployeeRecord.Emp_name}
            id="EmployeeName"
            type="date"
            name="employeeDob"
            autoComplete={new Date()}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="normal"
            required
            fullWidth
            value={EmployeeRecord.Dob}
            id="EmployeeDob"
            type="date"
            name="employeeDob"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            margin="normal"
            size="normal"
            required
            fullWidth
            value={EmployeeRecord.salary}
            id="salary"
            type="salary"
            label="salary"
            name="salary"
            autoFocus
          />
        </Grid>

        <Typography color="textSecondary" gutterBottom>
          {EmployeeRecord.Gender}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <BasicTable
          tableHeaders={tableHeaders}
          tableData={getEmployeeQualifications()}
        />
      </Grid>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  employeeState: selectEmployee,
});

export const EmployeeSummary = connect(mapStateToProps)(EmployeeRecords);
