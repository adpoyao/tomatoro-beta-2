import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loadPTime, loadSTime } from '../../actions'

import { AnimatedCircularProgress } from 'react-native-circular-progress';

class Timer extends Component {
  componentDidMount(){
    this.props.dispatch(loadPTime(this.props.configuredPTime));
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
    
    return(
      // https://github.com/bgryszko/react-native-circular-progress
      <AnimatedCircularProgress
        size={300}
        width={5}
        fill={this.findPercentage(this.props.currentPTimer, this.props.configuredPTime)}
        tintColor="#FF6347"
        rotation={360}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875">
        {
          (fill) => (
          <Text style={styles.timer}>{this.millisToMinutesAndSeconds(this.props.currentPTimer)}</Text>
          // <Text style={styles.points}>
          // { this.state.fill }
          // </Text>
          )
        }
        </AnimatedCircularProgress>
    )
  }
} 
  
const styles = StyleSheet.create({
  timer: {
    fontSize: 60,
    // color: '#FF6347'
  },
});

const mapStateToProps = state => ({
  configuredPTime: state.settings.pomodoroTime,
  currentPTimer: state.timer.pTimer
})

export default connect(mapStateToProps)(Timer)