import React, { useEffect } from "react";

// custom components
// RadioButtonsGroup

import { CenteredTabs } from "./../../molecules/tabs/tabs.molecule";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { EntryForm } from "./../../molecules/entryForm/entryForm.molecule";
import { EmployeeList } from "./../../molecules/employeeList/employeeList.molecule";
import { EmployeeSummary } from "./../../molecules/employeeRecords/employeeRecords.molecule";
// custom fxns
import { fetchEmployeeRecordsStart } from "../../../redux/employee/employee.actions";
import { selectEmployee } from "./../../../redux/employee/employee.selector";
// libarary fxns
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// styles
import { useStyles } from "./card.styles";
import { useState } from "react";
const CardComp = ({
  EmployeeState: { isFetchingRecords, employeeRecords, fetchError },
  dispatch,
}) => {
  const classes = useStyles();
  const tableHeaders = ["S.N", "EMP name"];
  //  states
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // handlers

  useEffect(() => {
    // fetch employee Records
    dispatch(fetchEmployeeRecordsStart());
  }, [dispatch]);
  console.log(activeTab, "now active tab");
  return (
    <Card className={classes.root} raised={true}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Employee QualificationList
            </Typography>
            <Grid container spacing={0}>
              <Grid item md={12}>
                {isFetchingRecords ? (
                  <div>Loading</div>
                ) : !!fetchError ? (
                  <div>Error</div>
                ) : employeeRecords ? (
                  <EmployeeList
                    tableHeaders={tableHeaders}
                    tableData={employeeRecords}
                  />
                ) : null}
                {/* employee list */}
                {/* <EmployeeList  /> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={6}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Employee Input form
            </Typography>
            <Grid container spacing={0}>
              <Grid item md={12}>
                <CenteredTabs activateTab={activateTab} />
              </Grid>
              <EntryForm />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  EmployeeState: selectEmployee,
});
export const SimpleCard = connect(mapStateToProps)(CardComp);
