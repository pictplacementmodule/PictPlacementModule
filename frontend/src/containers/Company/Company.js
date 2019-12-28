import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "../Login/Login";
import ProtectedRoute from "../../components/ProtectedRoute";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "./Profile/Profile";
import Eligible_Students from "./Eligible/EligiblePage";
import Job_Details from "./Profile/JobDetails";

class Company extends Component {
  drawerList = {
    Profile: ["profile", <DashboardIcon />],
    Eligible_Students: ["eligible_student", <DashboardIcon />],
    Job_Details: ["job_details", <DashboardIcon />]
  };

  render() {
    return (
      <div>
        <ProtectedRoute
          path="/company/dashboard"
          component={() => (
            <Dashboard drawerList={this.drawerList}>
              <Route
                exact
                path="/company/dashboard/profile"
                component={Profile}
              />
              <Route
                exact
                path="/company/dashboard/eligible_student"
                component={Eligible_Students}
              />
              <Route
                exact
                path="/company/dashboard/job_details"
                component={Job_Details}
              />
            </Dashboard>
          )}
        />
      </div>
    );
  }
}

export default withRouter(Company);
