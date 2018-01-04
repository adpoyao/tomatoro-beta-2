import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { selectExercise } from '../../actions'

class ExerciseSelection extends Component {
  handlePress = (selection) => {
    this.props.dispatch(selectExercise(selection));
  }

  render(){
    return(
      <View>
      <TouchableOpacity onPress={()=>this.handlePress(this.props)}>
         <Text>Picture Goes Here</Text>
      </TouchableOpacity>
      <Text>{this.props.exercise}</Text>
      <Text>{this.props.description}</Text>
    </View>
    )
  }
}

// const styles = StyleSheet.create({
// });

export default connect()(ExerciseSelection);