import React from 'react';
import { View, StyleSheet } from 'react-native';

import Settings from '../Settings/Settings'

const SettingsScreen = () => (
  <View style={styles.container}>
    <Settings/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40
  }
});

export default SettingsScreen;