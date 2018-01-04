import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppNavigator } from './src/reducers/navigators'
import { addNavigationHelpers } from "react-navigation";

import store from './src/store';
import { Provider } from 'react-redux';

import RootTabs from './src/Navigators/RootTabs'
import RootNavigator from './src/Navigators/StackNavigator'

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>     
        <RootTabs/>
        {/* <RootNavigator/> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
