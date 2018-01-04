import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

import ExerciseSelection from '../ExerciseSelection/ExerciseSelection'

const SelectExerciseScreen = (props) => {
  let exerciseList = props.exerciseList.map((item, index) => {
    return(
      <View key={index}>
        <ExerciseSelection
          exercise={item.exercise}
          description={item.description}
          queue={item.queue[props.level]}
          />
        <Text></Text>
      </View>
    )
  })
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      {exerciseList}
      <Button title="Skip Break"/>
    </View>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
  exerciseList: state.stretches.exerciseList,
  level: state.settings.level
}}

export default connect(mapStateToProps)(SelectExerciseScreen);
