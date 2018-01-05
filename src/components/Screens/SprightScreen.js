import React from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

import BreakTimer from '../BreakTimer/BreakTimer';

const SprightsScreen = (props) => (
  <View style={styles.container}>
    <BreakTimer />
    <View style={styles.divider}></View>
    <ScrollView style={styles.scrollView}>
      <Text style={styles.classTitle}>{props.selectedClass}</Text>
      <Text style={styles.instructions}>{props.queue}</Text>
      <Button 
        title="Completed"
        style={styles.button}
        onPress={() => {
          props.navigation.dispatch(NavigationActions.back());
          props.navigation.dispatch(NavigationActions.back())}
        }
      />
    </ScrollView>
  </View>
);

const mapStateToProps = state => ({
  selectedClass: state.stretches.selectedClass.exercise,
  queue: state.stretches.selectedClass.queue
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start',
    marginTop: 30
  },
  divider:{
    height: 3,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  scrollView: {
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15
  },
  classTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15
  },
  instructions: {
    marginBottom: 15
  }
});


export default connect(mapStateToProps)(SprightsScreen);