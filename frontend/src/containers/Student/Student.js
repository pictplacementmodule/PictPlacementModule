import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../../components/Dashboard/Dashboard'
import ProtectedRoute from '../../components/ProtectedRoute'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Notifications from '@material-ui/icons/Notifications'
import DoneAll from '@material-ui/icons/DoneAll'
import News from '../../components/News'
import Profile from './Profile/Profile'
import Visited from './Company/Visited'
import Current from './Company/CurrentCompanies'

class Student extends Component {

    drawerList = {
        'My Profile':['profile', <DashboardIcon />],
        'Companies Visiting':['current-companies', <Notifications />],
        'Companies Visited':['companies-visited',<DoneAll />]    
    }

    render() {
        return (
            <div>
                <Route exact path="/student" component={Login} />
                <ProtectedRoute path="/student/dashboard" component={() =>
                    <Dashboard drawerList={this.drawerList}>
                        <Route exact path='/student/dashboard/profile' component={Profile} />
                        <Route exact path='/student/dashboard/current-companies' component={Current} />
                        <Route exact path='/student/dashboard/companies-visited' component={Visited} />
                    </Dashboard>
                } />
            </div>
        );
    }
}

export default withRouter(Student);