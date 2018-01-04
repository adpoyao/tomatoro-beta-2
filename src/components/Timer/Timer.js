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

    return(
      // https://github.com/bgryszko/react-native-circular-progress
      // this.refs.circularProgress.performLinearAnimation(100, 8000); // Will fill the progress bar linearly in 8 seconds
      <AnimatedCircularProgress
        // ref='circularProgress'
        size={300}
        width={5}
        fill={100}
        tintColor="#FF6347"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875">
        {
          (fill) => (
          <Text style={styles.timer}>{pTime}</Text>
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
  },
});

const mapStateToProps = state => ({
  configuredPTime: state.settings.pomodoroTime,
  currentPTimer: state.timer.pTimer
})

export default connect(mapStateToProps)(Timer)