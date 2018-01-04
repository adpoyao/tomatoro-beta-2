import React from 'react';
import { View } from 'react-native';

import SettingsNavigator from '../Settings/Settings'

const SettingsScreen = () => (
  <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
    <SettingsNavigator/>
  </View>
);

export default SettingsScreen;