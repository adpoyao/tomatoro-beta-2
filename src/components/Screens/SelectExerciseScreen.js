import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import stretch1 from '../../assets/stretch1.jpg'
import stretch2 from '../../assets/stretch2.jpg'
import stretch3 from '../../assets/stretch3.jpg'
import stretch4 from '../../assets/stretch4.jpg'

import ExerciseSelection from '../ExerciseSelection/ExerciseSelection'


const SelectExerciseScreen = (props) => {
  let assetsArray = [stretch1, stretch2, stretch3, stretch4]
  let exerciseList = props.exerciseList.map((item, index) => {
    return(
      <View key={index}>
        <ExerciseSelection
          exercise={item.exercise}
          avatar={assetsArray[index]}
          description={item.description}
          queue={item.queue[props.level]}
          />
        <Text></Text>
      </View>
    )
  })
  return (
    <ScrollView>
      <View style={styles.container}>
        {exerciseList}
        <Button 
          title="Skip Break"
          onPress={() =>
            props.navigation.dispatch(NavigationActions.back())}
          />
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
  exerciseList: state.stretches.exerciseList,
  level: state.settings.level
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 50
  }
})

export default connect(mapStateToProps)(SelectExerciseScreen);
