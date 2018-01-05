import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Timer from '../Timer/Timer'
import TimerButton from '../TimerButton/TimerButton'

class TomatoroScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Timer/>
        <TimerButton />
        <View style={styles.buttons}>
          <Button 
            title="Skip to Stretching" 
            onPress={()=>
              this.props.dispatch(NavigationActions.navigate({ routeName: 'SelectExercise'}))}/>
          <Button 
            title="Settings"
            onPress={() =>
              this.props.dispatch(NavigationActions.navigate({ routeName: 'Settings' }))}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {

  }
});

export default connect()(TomatoroScreen);