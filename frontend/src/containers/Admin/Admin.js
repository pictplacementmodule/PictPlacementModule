import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "../Login/Login";
import CollectionsBookmark from "@material-ui/icons/CollectionsBookmark";
import ProtectedRoute from "../../components/ProtectedRoute";
import AddVisited from "../Company/Profile/Profile";
import Dashboard from "../../components/Dashboard/Dashboard";
import Profile from "../Student/Profile/Profile";
import EditCompany from "./Company/EditCom";
import Receipt from "@material-ui/icons/Receipt";
import BranchReport from "./BranchReport";
import AllCompanies from "./Company/AllCompanies";
import companyDetails from "./Company/CompanyDetails";
import CompanyDetails from "./Company/CompanyDetails";
import Home from "@material-ui/icons/Home";
import Add from "@material-ui/icons/AddCircle";
import AddUserIcon from "@material-ui/icons/AddBox";
import EditIcon from "@material-ui/icons/Edit";
import StudentIcon from "@material-ui/icons/ChildCare";
import CountReport from "./CountReport";
import SkillsReport from "./SkillsReport";
import StudentReport from "./StudentReport";
import AddUser from "./AddUser";
import PendingRequests from "./pendingRequest";
import Place from "@material-ui/icons/Place";
import PlaceStudents from "./PlaceStudents";
import AddCompany from "./Company/AddCompany";

class Admin extends Component {
   drawerList = {
      Home: ["", <Home />, 'See companies visiting within specific period'],
      "Add company": ["add-company", <Add />, 'Add a new Company from here'],
      // 'Add Student': ['student-profile', <StudentIcon />],
      "Add User": ["add-user", <AddUserIcon />, 'Create system user (generic)'],
      "Edit company": ["edit-company", <EditIcon />, 'Edit details of a specific company'],
      "Student List": ["branch-report", <Receipt />, 'Get branchwise details of students'],
      "Placement Report": ["placement-report", <Receipt />, 'number of placed students (company wise)'],
      "Eligibility Report": ["skills-report", <Receipt />, 'company wise report of placed student'],
      "Pending Request": ["pending-request", <Receipt />, 'Students placed by companies. Waiting for confirmation']
   };

   render() {
      return (
         <div>
            <Route
               exact
               path="/admin/company-details/:id"
               component={CompanyDetails}
            />
            <Route exact path="/admin/skill-report/:id" component={StudentReport} />
            {/* <Route path="/admin/dashboard" component={Dashboard2} /> */}
            <ProtectedRoute
               path="/admin/dashboard"
               component={() => (
                  <Dashboard drawerList={this.drawerList}>
                     <Route
                        exact
                        path="/admin/dashboard/add-company"
                        component={AddCompany}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/add-user"
                        component={AddUser}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/student-profile"
                        component={Profile}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/edit-company"
                        component={EditCompany}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/branch-report"
                        component={BranchReport}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/placement-report"
                        component={CountReport}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/skills-report"
                        component={SkillsReport}
                     />
                     <Route
                        exact
                        path="/admin/dashboard/pending-request"
                        component={PendingRequests}
                     />
                     <Route exact path="/admin/dashboard/" component={AllCompanies} />
                     <Route
                        exact
                        path="/admin/dashboard/place-students"
                        component={PlaceStudents}
                     />
                  </Dashboard>
               )}
            />
         </div>
      );
   }
}

export default Admin;
