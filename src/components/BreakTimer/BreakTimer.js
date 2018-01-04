import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default BreakTimer = props => {
  
    // this.refs.circularProgress.performLinearAnimation(100, 8000);

    return(
    // https://github.com/bgryszko/react-native-circular-progress
    <AnimatedCircularProgress
      size={100}
      width={5}
      fill={100}
      tintColor="#FF6347"
      onAnimationComplete={() => console.log('onAnimationComplete')}
      backgroundColor="#3d5875">
      {
        (fill) => (
        <Text style={styles.timer}>5:00</Text>
        // <Text style={styles.points}>
        // { this.state.fill }
        // </Text>
        )
      }
        
      </AnimatedCircularProgress>
  )
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 30,
  },
});