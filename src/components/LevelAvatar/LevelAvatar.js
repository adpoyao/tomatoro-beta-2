import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const LevelAvatar = (props) => {
  return(
    <View style={styles.container}>
      <Avatar
        xlarge
        rounded
        source={props.avatar}
        activeOpacity={0.7}
      />
      <Text style={styles.textMargin}>Level {props.level}</Text>
      <Text>{props.caption}</Text>
      <Text style={styles.descriptionMargin}>{props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textMargin: {
    marginTop: 15
  },
  descriptionMargin: {
    marginTop: 15,
    height: 40
  }
});

export default LevelAvatar;