
import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import ProtectedRoute from "../../components/ProtectedRoute";
import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "./Profile/Profile";
import Job_Details from "./Profile/JobDetails";
import Filter from './Filter'
import FilterListIcon from '@material-ui/icons/FilterList';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ShortListed from './Eligible/ShortListed';
import Pending_Selected from './Eligible/PendingSelected';
import Placed from './Eligible/Placed';
import ReactTooltip from "react-tooltip"
class Company extends Component {
  drawerList = {
    'Profile': ['profile', <DashboardIcon />, 'See and edit Profile'],
    'Filter': ['eligible-students2', <FilterListIcon />, 'Sort students by applying filters'],
    'JobDetails': ['job-details', <DoneOutlineIcon />, 'Add job Description'],
    'Short Listed': ["short-listed", <DashboardIcon />, 'Shortlist from all eligible students'],
    'Pending Selected': ["pending-selected", <DashboardIcon />, 'Selected students - Pending confirmation from PICT'],
    'Placed': ["placed", <DashboardIcon />, 'See students you have placed']
  }

  render() {
    return (
      <div>
        <ProtectedRoute path="/company/dashboard" component={() =>
          <Dashboard drawerList={this.drawerList}>
            <Route exact path="/company/dashboard" component={Profile} />
            <Route exact path="/company/dashboard/profile" component={Profile} />
            <Route exact path="/company/dashboard/eligible-students2" component={Filter} />
            <Route exact path="/company/dashboard/job-details" component={Job_Details} />
            <Route exact path="/company/dashboard/short-listed" component={ShortListed} />
            <Route exact path="/company/dashboard/pending-selected" component={Pending_Selected} />
            <Route exact path="/company/dashboard/placed" component={Placed} />
          </Dashboard>
        } />
      </div>
    );
  }

}

export default withRouter(Company);
