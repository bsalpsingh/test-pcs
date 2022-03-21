import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "../../organisms/card/card.styles";

// libarary fxns
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//custom fxns
import { setEmpId } from "./../../../redux/employee/employee.actions";
import { selectEmployee } from "../../../redux/employee/employee.selector";
const EmployeeTable = ({
  tableHeaders,
  tableData,
  dispatch,
  employeeState: { empId },
}) => {
  const classes = useStyles();

  // handlers
  const setEmployeeId = (employeeId) => (e) => {
    dispatch(setEmpId(employeeId));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((employee, employeeIndex) => (
            <TableRow onClick={setEmployeeId(employee._id)} key={employeeIndex}>
              <TableCell align="left">{employeeIndex + 1}</TableCell>
              <TableCell align="left">{employee.Emp_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  employeeState: selectEmployee,
});
export const EmployeeList = connect(mapStateToProps)(EmployeeTable);
