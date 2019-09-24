import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

/** Routes **/
import SignInRoutes from '../SignInRoutes';
import DefaultRoutes from '../DefaultRoutes';

/** screens **/
import SignIn from '../../../screens/SignIn';
import Dashboard from '../../../screens/Dashboard';
import Profile from '../../../screens/Accounts/Profile';

const AppRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <SignInRoutes path='/signin' component={SignIn} />
        <DefaultRoutes path='/dashboard' component={Dashboard} isAuthenticated={props.isAuthenticated} />
        <DefaultRoutes path='/profile' component={Profile} isAuthenticated={props.isAuthenticated} />
      </Switch>
    </Router>
  );
};

function mapStateToProps({ account }) {
  return {
    isAuthenticated: account.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(AppRoutes);