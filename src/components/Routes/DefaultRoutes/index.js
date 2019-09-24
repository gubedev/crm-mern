import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import DefaultLayout from '../../../layouts/DefaultLayout'

const DefaultRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      isAuthenticated ?
        <DefaultLayout>
          <Component {...matchProps} />
        </DefaultLayout> : <Redirect to={{ pathname: '/signin' }} />
    )} />
  )
};

export default DefaultRoute;