import React, { Component } from 'react';

import Provider from 'react-redux/es/components/Provider';
import store from './store';

import AppRoutes from './components/Routes/AppRoutes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;  