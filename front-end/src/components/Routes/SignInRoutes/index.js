import React from 'react';
import { Route } from 'react-router-dom';

import SignInLayout from '../../../layouts/SignInLayout'

const LoginRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} render={matchProps => (
        <SignInLayout>
          <Component {...matchProps} />
        </SignInLayout>
      )} />
    )
  };
  
  export default LoginRoute;  