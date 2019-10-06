import React from 'react'
import { Route } from 'react-router-dom'
import Invalid from '../components/Invalid'

const protectedRoute = ({component: Component, ...rest}) => {

    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token==null){
        loggedIn = false;
    }

    return (
        <Route {...rest} 
            render = {(props) => {
                if(loggedIn){
                    return <Component {...props} />;
                }
                else{
                    return <Invalid />;
                }
            }}
        />
    );
}

export default protectedRoute;