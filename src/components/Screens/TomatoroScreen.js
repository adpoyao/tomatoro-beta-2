import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

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
            icon={{name: 'accessibility'}}
            backgroundColor="#ffbf47"
            title="Skip to Stretching" 
            onPress={()=>
              this.props.dispatch(NavigationActions.navigate({ routeName: 'SelectExercise'}))}/>
          <Button 
            icon={{name: 'settings'}}
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
    width: '100%',
    marginTop: 50,
  }
});

export default connect()(TomatoroScreen);