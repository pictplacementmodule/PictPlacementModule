import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login/Login'
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark'
import ProtectedRoute from '../../components/ProtectedRoute'
import AddVisited from '../Company/Profile/Profile'
import Dashboard from '../../components/Dashboard/Dashboard'
import Profile from '../Student/Profile/Profile'
import EditCompany from './Company/EditCom'
import Receipt from '@material-ui/icons/Receipt'
import BranchReport from './BranchReport'
import AllCompanies from './Company/AllCompanies'
import companyDetails from './Company/CompanyDetails'
import CompanyDetails from './Company/CompanyDetails'
import Home from '@material-ui/icons/Home'
import Add from '@material-ui/icons/AddCircle'
import EditIcon from '@material-ui/icons/Edit'
import StudentIcon from '@material-ui/icons/ChildCare'
import CountReport from './CountReport'
import SkillsReport from './SkillsReport'
import StudentReport from './StudentReport'

class Admin extends Component {

    drawerList = {
        'Home': ['', <Home />],
        'Add company': ['add-company', <Add />],
        'Add Student': ['student-profile', <StudentIcon />],
        'Edit company': ['edit-company', <EditIcon />],
        'Branch Report': ['branch-report', <Receipt />],
        'Placement Report': ['placement-report', <Receipt />],
        'Skills Report': ['skills-report', <Receipt />],
    }

    render() {
        return (
            <div>
            <Route exact path="/admin/company-details/:id" component={CompanyDetails} />
                <Route exact path="/admin/skill-report/:id" component={StudentReport} />
                <Route exact path="/admin" component={Login} />
                <ProtectedRoute path="/admin/dashboard" component={() =>
                    <Dashboard drawerList={this.drawerList}>
                        <Route exact path="/admin/dashboard/add-company" component={AddVisited} />
                        <Route exact path="/admin/dashboard/student-profile" component={Profile} />
                        <Route exact path="/admin/dashboard/edit-company" component={EditCompany} />
                        <Route exact path="/admin/dashboard/branch-report" component={BranchReport} />
                        <Route exact path="/admin/dashboard/placement-report" component={CountReport} />
                        <Route exact path="/admin/dashboard/skills-report" component={SkillsReport} />
                        <Route exact path="/admin/dashboard/" component={AllCompanies} />
                    </Dashboard>
                }
                />
            </div>
        );
    }
}

export default Admin;