import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';

import { sayHello } from '../../actions'

export class HelloWorld extends Component {
  handlePress = () => {
    alert('Hello World');
    console.log(this.props.display)
  }
  
  render(){
    return(
      <View>
        <Text>{this.props.display}</Text>
        <Button title='Click' 
        onPress={
          this.handlePress
        }
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  display: state.stretches.display
}

export default connect(mapStateToProps)(HelloWorld);