import React from 'react';
import { View } from 'react-native';

import Timer from '../Timer/Timer'
import TimerButton from '../TimerButton/TimerButton'

const TomatoroScreen = () => (
  <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
    <Timer/>
    <TimerButton/>
  </View>
);

export default TomatoroScreen;