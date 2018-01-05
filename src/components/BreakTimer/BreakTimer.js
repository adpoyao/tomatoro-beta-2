import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loadSTime, toggleSTimer } from '../../actions'
import { NavigationActions } from 'react-navigation';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Avatar, Icon } from 'react-native-elements';

class BreakTimer extends Component {
  constructor(props){
    super(props);
    let timer;
  }

  componentDidMount(){
    this.props.dispatch(loadSTime(this.props.configuredSTime));
  }

  handleOnPressStart = () => {
    if(!this.props.toggleSTimer){
      this.props.dispatch(toggleSTimer(true));
      this.timer = setInterval(
        function(){this.subtractTime()}, 1000);
          subtractTime = () => {
            if(this.props.sTimeLeft === 0){
              clearInterval(this.timer);
              this.props.navigation.dispatch(NavigationActions.back());
              this.props.navigation.dispatch(NavigationActions.back())
              this.props.dispatch(toggleSTimer(false));
              this.props.dispatch(loadSTime(this.props.configuredSTime))
            }
            else {
              this.props.dispatch(loadSTime(this.props.sTimeLeft - 1000)) //default: 1000, development: 60000
            }
          }
    } 
    else if(this.props.toggleSTimer) {
      this.props.dispatch(toggleSTimer(false));
      return clearInterval(this.timer)
    } 
  }

  handleOnPressReset = () => {
    this.props.dispatch(loadSTime(this.props.configuredSTime))
  }

  millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  findPercentage(millis, setTime) {
    let percentage = (Math.abs((millis/setTime)-1)*100);
    return percentage;
  }
  
  render(){  

    let controlButton;
    if(!this.props.toggleSTimer){
      controlButton=
      <Avatar
        small
        rounded
        icon={{name: 'play-arrow'}}
        onPress={this.handleOnPressStart}
        activeOpacity={0.7}
      />
    } else {
      controlButton=
      <Avatar
        small
        rounded
        icon={{name: 'pause'}}
        onPress={this.handleOnPressStart}
        activeOpacity={0.7}
      />
    }

    console.log('!!!this.props.STimeLeft', this.props.sTimeLeft)

    return(
      <View>
        <AnimatedCircularProgress
        size={100}
        width={5}
        fill={this.findPercentage(this.props.sTimeLeft, this.props.configuredSTime)}
        tintColor="#FF6347"
        rotation={360}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875">
        {
          (fill) => (
          <Text style={styles.timer}>{this.millisToMinutesAndSeconds(this.props.sTimeLeft)}</Text>
          // <Text style={styles.points}>
          // { this.state.fill }
          // </Text>
          )
        }
        </AnimatedCircularProgress>
        <View style={styles.button}>
          <Avatar
            small
            rounded
            icon={{name: 'replay'}}
            onPress={this.handleOnPressReset}
            activeOpacity={0.7}
          />
          {controlButton}
        </View>
      </View>
      
    )
  }

}  

const styles = StyleSheet.create({
  timer: {
    fontSize: 30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const mapStateToProps = state => ({
  configuredSTime: state.settings.stretchTime,
  sTimeLeft: state.timer.sTimer,
  toggleSTimer: state.timer.sTimerStart
})

export default connect(mapStateToProps)(BreakTimer)