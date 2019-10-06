import React,{ Component } from 'react';
import './App.css';
import Role from './Role'
import { Switch, Route } from 'react-router-dom'
import Student from './containers/Student/Student'
import Admin from './containers/Admin/Admin'
import Company from './containers/Company/Company'

class App extends Component {

  render(){
    //localStorage.removeItem("token");
    return(
      <Switch>
        <Route exact path="/" component={Role} />
        <Route path="/student" component={Student} />
        <Route path="/company" component={Company} />
        <Route path="/admin" component={Admin} />
      </Switch>
    );
  }
}

export default App;
