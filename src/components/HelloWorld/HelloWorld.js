import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';

import { sayHello } from './src/actions'

export class HelloWorld extends Component {
  render(){
    return(
      <View>
        <Text>{this.props.display}</Text>
        <Button title='Click' onPress={this.props.handlePress}
        // onPress={this.dispatch.sayHello}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  display: state.stretches.display
}

export default connect(mapStateToProps)(HelloWorld);