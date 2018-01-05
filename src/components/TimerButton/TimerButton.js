import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadPTime, togglePTimer } from '../../actions'
import { NavigationActions } from 'react-navigation';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import { Avatar, Icon } from 'react-native-elements';

class TimerButton extends Component {
  constructor(props){
    super(props);
    let timer; 
  }
  handleOnPressStart = () => {
    if(!this.props.togglePTimer){
      this.props.dispatch(togglePTimer(true));
      this.timer = setInterval(
        function(){this.subtractTime()}, 1000);
      subtractTime = () => {
        if(this.props.pTimeLeft === 0){
          clearInterval(this.timer)
          this.props.dispatch(NavigationActions.navigate({ routeName: 'SelectExercise'}))
          this.props.dispatch(loadPTime(this.props.configuredPTime))
        }
        else {
          this.props.dispatch(loadPTime(this.props.pTimeLeft - 60000)) //default: 1000, development: 60000
        }
      }
    } 
    else if(this.props.togglePTimer) {
      this.props.dispatch(togglePTimer(false));
      return clearInterval(this.timer)
    } 
  }

  handleOnPressReset = () => {
    this.props.dispatch(loadPTime(this.props.configuredPTime))
  }

  render(){

    let controlButton;
    if(!this.props.togglePTimer){
      controlButton=
      <Avatar
        large
        rounded
        icon={{name: 'play-arrow'}}
        onPress={this.handleOnPressStart}
        activeOpacity={0.7}
      />
    } else {
      controlButton=
      <Avatar
        large
        rounded
        icon={{name: 'pause'}}
        onPress={this.handleOnPressStart}
        activeOpacity={0.7}
      />
    }

    return(
      <View style={styles.container}>
        <Avatar
            large
            rounded
            icon={{name: 'replay'}}
            onPress={this.handleOnPressReset}
            activeOpacity={0.7}
          />
          {controlButton}
          
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});

const mapStateToProps = state => ({
  configuredPTime: state.settings.pomodoroTime,
  pTimeLeft: state.timer.pTimer,
  togglePTimer: state.timer.pTimerStart
})

export default connect(mapStateToProps)(TimerButton);