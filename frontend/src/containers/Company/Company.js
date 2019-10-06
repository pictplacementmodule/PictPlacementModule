import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login/Login'
import ProtectedRoute from '../../components/ProtectedRoute'
import Dashboard from '../../components/Dashboard/Dashboard'
import DashboardIcon from '@material-ui/icons/Dashboard'
import Profile from './Profile/Profile'

class Company extends Component {

    drawerList = {
        'Profile':['profile', <DashboardIcon />],
    }

    render() {
        return (
            <div>
                <Route exact path="/company" component={Login} />
                <ProtectedRoute path="/company/dashboard" component={() =>
                    <Dashboard drawerList={this.drawerList}>
                        <Route exact path="/company/dashboard/profile" component={Profile} />
                    </Dashboard>
                } />
            </div>
        );
    }

}

export default Company;