import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';

import store from './src/store'
import { sayHello } from './src/actions'
import { HelloWorld } from './src/components/HelloWorld/HelloWorld'

export default class App extends React.Component {

  handlePress = () => {
    alert('Hello World');
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <HelloWorld handlePress={this.handlePress}/>
        </View>
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
