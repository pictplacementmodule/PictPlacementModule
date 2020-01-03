
import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Login from "../Login/Login";
import ProtectedRoute from "../../components/ProtectedRoute";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "./Profile/Profile";
import Eligible_Students from "./Eligible/EligiblePage";
import Job_Details from "./Profile/JobDetails";
import Filter from './Filter'
import FilterListIcon from '@material-ui/icons/FilterList';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Short_Listed from './Eligible/EligiblePage';
import Pending_Selected from './Eligible/PendingSelected';
import Placed from './Eligible/Placed';

class Company extends Component {
  // drawerList = {
  //   Profile: ["profile", <DashboardIcon />],
  //   Eligible_Students: ["eligible_student", <DashboardIcon />],
  //   Job_Details: ["job_details", <DashboardIcon />],
  //   Short_Listed: ["short_listed", <DashboardIcon />],
  //   Placed: ["placed", <DashboardIcon />]
  // };

  // render() {
  //   return (
  //     <div>
  //       <ProtectedRoute
  //         path="/company/dashboard"
  //         component={() => (
  //           <Dashboard drawerList={this.drawerList}>
  //             <Route
  //               exact
  //               path="/company/dashboard/profile"
  //               component={Profile}
  //             />
  //             <Route
  //               exact
  //               path="/company/dashboard/eligible_student"
  //               component={Eligible_Students}
  //             />
  //             <Route
  //               exact
  //               path="/company/dashboard/job_details"
  //               component={Job_Details}
  //             />
  //           </Dashboard>
  //         )}
  //       />
  //     </div>
  //   );
  // }
  drawerList = {
    'Profile': ['profile', <DashboardIcon />],
    'Filter': ['eligible_students2', <FilterListIcon />],
    'JobDetails': ['job_details', <DoneOutlineIcon />],
    'Short_Listed': ["short_listed", <DashboardIcon />],
    'Pending_Selected': ["pending_selected", <DashboardIcon />],
    'Placed': ["placed", <DashboardIcon />]

  }

  render() {
    return (
      <div>
        <ProtectedRoute path="/company/dashboard" component={() =>
          <Dashboard drawerList={this.drawerList}>
            <Route exact path="/company/dashboard/profile" component={Profile} />
            <Route exact path="/company/dashboard/eligible_students2" component={Filter} />
            <Route
              exact
              path="/company/dashboard/job_details"
              component={Job_Details}
            />
            <Route exact path="/company/dashboard/short_listed" component={Short_Listed} />
            <Route exact path="/company/dashboard/pending_selected" component={Pending_Selected} />
            <Route exact path="/company/dashboard/placed" component={Placed} />
          </Dashboard>
        } />
      </div>
    );
  }

}

export default withRouter(Company);
