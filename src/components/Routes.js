import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateLoan from './Loans/CreateLoan.jsx';
import Signup from './Auth/Signup.jsx';
import Login from './Auth/Login.jsx';
import Home from './Home/Home.jsx';

const Routes = () => (
  <Router>
    <Switch>
      <Fragment>
        <Route exact path="/loan" component={CreateLoan} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Fragment>
    </Switch>
  </Router>
);


export default Routes;
