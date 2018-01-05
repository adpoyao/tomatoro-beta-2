import React from 'react';
import { Provider } from 'react-redux';
import AppWithNavigationState from './App';
import store from './src/store';

class Root extends React.Component {
  render() {
    return (
      <AppWithNavigationState />
    );
  }
}

export default Root;
