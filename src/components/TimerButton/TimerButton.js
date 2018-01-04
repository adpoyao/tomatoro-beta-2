import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default TimerButton = (props) => {
  // Toggle between Start & Pause

  return(
    <View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reset}>
          <Text>Start</Text>
        </TouchableOpacity>
      </View>
      <Button title="Skip to Stretching" onPress={()=>console.log('Pressed')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
  },
  start: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#d6d7da',
    justifyContent: "flex-end"
  },
  reset: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: '#d6d7da',
    justifyContent: "flex-start"
  },
});