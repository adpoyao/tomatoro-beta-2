import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { loadPTime, loadSTime } from '../../actions'

import { AnimatedCircularProgress } from 'react-native-circular-progress';

class Timer extends Component {
  componentDidMount(){
    this.props.dispatch(loadPTime(this.props.configuredPTime));
  }

  render(){

    let pTime = this.props.currentPTimer / 60000;
    
    function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function findPercentage(millis, setTime) {
      let percentage = (Math.abs((millis/setTime)-1)*100);
      return percentage;
    }
  
    return(
      // https://github.com/bgryszko/react-native-circular-progress
      // this.refs.circularProgress.performLinearAnimation(100, 8000); // Will fill the progress bar linearly in 8 seconds
      <AnimatedCircularProgress
        // ref='circularProgress'
        size={300}
        width={5}
        fill={findPercentage(this.props.currentPTimer, this.props.configuredPTime)}
        tintColor="#FF6347"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875">
        {
          (fill) => (
          <Text style={styles.timer}>{millisToMinutesAndSeconds(this.props.currentPTimer)}</Text>
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