import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

import { selectExercise } from '../../actions'

class ExerciseSelection extends Component {
  handlePress = (selection) => {
    this.props.dispatch(selectExercise(selection));
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Sprights' }))}

  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity onPress={()=>this.handlePress(this.props)}>
        <Avatar
          large
          rounded
          source={this.props.avatar}
          activeOpacity={0.7}
        />
      </TouchableOpacity>
      <Text style={styles.header}>{this.props.exercise}</Text>
      <Text>{this.props.description}</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },
  header: {
    marginTop: 10,
    fontWeight: 'bold'
  }
});

export default connect()(ExerciseSelection);