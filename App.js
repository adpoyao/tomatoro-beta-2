import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import RootTabs from './src/Navigators/RootTabs'
// import RootNavigator from './src/Navigators/StackNavigator'
import AppWithNavigationState from './src/Navigators'
import store from './src/store';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
