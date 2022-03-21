import React, { useState } from "react";

// custom components
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { RadioButtonsGroup } from "./../radio/radioGroup.molecule";
import { SelectValues } from "./../../atoms/simpleSelect/simpleSelect.component";
import { BasicTable } from "./../table/table.molecule";
import { SnackBar } from "./../../atoms/snackbar/snackbar.component";
// libarary fxns
import { connect } from "react-redux";
import { selectEmployee } from "./../../../redux/employee/employee.selector";
import { createStructuredSelector } from "reselect";

// custom fxns
import {
  registerEmployeeStart,
  fetchEmployeeRecordsStart,
  cleanupRegisterInfo,
} from "../../../redux/employee/employee.actions";
export const EmployeeForm = ({
  dispatch,
  employeeState: { isRegistering, isRegistered, registerError },
}) => {
  const [employeeDetails, setEmployeeDetails] = useState({
    gender: "Male",
    Dob: new Date(),
  });
  const [qualifications, setQualifications] = useState({});
  const [qualificationTitle, setQualificationTitle] = useState("SLC");
  const [qualificationValue, setQualificationValue] = useState(null);

  const optionsList = ["Male", "Female", "Third gender"];
  const optionValues = ["SLC", "Intermediate", "BE", "ME", "PHD"];

  const tableHeaders = ["id", "Qualificatiton", "marks"];
  //handlers
  const handleInput = (e) => {
    e.preventDefault();

    setEmployeeDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const setGender = (gender) => {
    setEmployeeDetails((state) => ({
      ...state,
      gender: gender,
    }));
  };

  const handleSubmit = (e) => {
    // send entry data to server
    e.preventDefault();
    const payload = { ...employeeDetails, qualifications };
    setEmployeeDetails((state) => ({
      gender: "Male",
      Dob: new Date(),
    }));

    dispatch(registerEmployeeStart(payload));
  };

  const handleTitle = (title) => {
    setQualificationTitle(title);
  };

  const handleValue = (e) => {
    setQualificationValue(e.target.value);
  };

  const handleQualification = () => {
    setQualifications((state) => ({
      ...state,
      [qualificationTitle]: qualificationValue,
    }));

    setQualificationValue(null);
  };

  const handleRegister = () => {
    setEmployeeDetails((state) => {
      return {
        gender: "Male",
        Dob: new Date(),
      };
    });

    setQualificationValue(null);
    //   cleanup register info
    dispatch(cleanupRegisterInfo());
    //   fetch employee records
    dispatch(fetchEmployeeRecordsStart());
  };

  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              variant="outlined"
              margin="normal"
              size="normal"
              onChange={handleInput}
              required
              fullWidth
              id="EmployeeName"
              type="text"
              label="Name"
              name="employeeName"
              autoComplete="Bishal"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <RadioButtonsGroup optionsList={optionsList} callBack={setGender} />
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <TextField
              variant="outlined"
              margin="normal"
              size="normal"
              onChange={handleInput}
              required
              fullWidth
              id="EmployeeName"
              type="date"
              name="Dob"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              variant="outlined"
              margin="normal"
              size="normal"
              onChange={handleInput}
              required
              fullWidth
              id="salary"
              type="salary"
              label="salary"
              name="salary"
              autoFocus
            />
          </Grid>

          {/* RadioButtonsGroup */}
        </Grid>

        <Typography color="textSecondary" variant="h5" gutterBottom>
          Employee Qualification
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <SelectValues optionValues={optionValues} callBack={handleTitle} />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <TextField
              variant="outlined"
              margin="normal"
              size="normal"
              onChange={handleValue}
              fullWidth
              id="marks"
              type="Number"
              label="marks"
              name="marks"
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Button
              style={{ height: 40, transform: "translateY(20px)" }}
              variant="contained"
              color="primary"
              disabled={!qualificationValue}
              onClick={handleQualification}
            >
              Add
            </Button>
          </Grid>
          {/* BasicTable */}
          <Grid item xs={12} sm={12} md={12}>
            <BasicTable
              tableHeaders={tableHeaders}
              tableData={qualifications}
            />
          </Grid>

          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
      <SnackBar
        openState={isRegistered}
        onClose={handleRegister}
        message={"Registered user successfully"}
        severity="success"
      />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  employeeState: selectEmployee,
});
export const EntryForm = connect(mapStateToProps)(EmployeeForm);
