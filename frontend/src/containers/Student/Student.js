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
        'My Profile':['profile', <DashboardIcon />,'See and edit my profile'],
        'Companies Visiting':['current-companies', <Notifications />,'See upcoming companies'],
        'Companies Visited':['companies-visited',<DoneAll />,'see companies already visited']    
    }

    render() {
        return (
            <div>
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