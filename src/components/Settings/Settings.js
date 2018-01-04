import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { StackNavigator } from 'react-navigation';
import { Slider } from 'react-native-elements';
import { selectLevel, setPTime, setSTime, loadPTime, loadSTime } from '../../actions'

class SettingsScreen extends Component {
  handleLevelSlide = (value) => {
    this.props.dispatch(selectLevel(value));
  }

  handlePTimeSlide = (value) => {
    this.props.dispatch(setPTime(value));
  }

  handleSTimeSlide = (value) => {
    this.props.dispatch(setSTime(value));
  }

  handleCompletePTime = (value) => {
    this.props.dispatch(loadPTime(value));
  }

  handleCompleteSTime = (value) => {
    this.props.dispatch(loadSTime(value));
  }

  render(){

    let pTime = this.props.pomodoroTime / 60000;
    let sTime = this.props.stretchTime / 60000;
    
    return(
      <View style={styles.container}>
        <Text>Pick your level</Text>
        <Text>{this.props.level}</Text>
        <View style={styles.slider}>
          <Slider
            style={styles.slider}
            value={this.props.level}
            minimumValue={1}
            maximumValue={3}
            step= {1}
            onValueChange={(value) => this.handleLevelSlide(value)} 
            />
          {/* <Text>Level: {this.props.level}</Text> */}
        </View>

        <Text>Set Pomodoro Time</Text>
        <Text>{pTime}:00</Text>
        <View style={styles.slider}>
          <Slider
            style={styles.slider}
            value={this.props.pomodoroTime}
            minimumValue={1500000}
            maximumValue={3600000}
            step= {60000}
            onValueChange={(value) => this.handlePTimeSlide(value)}
            onSlidingComplete={(value)=>this.handleCompletePTime(value)} 
            />
          {/* <Text>Level: {this.props.level}</Text> */}
        </View>
        <Text>Set Stretch Time</Text>
        <Text>{sTime}:00</Text>
        <View style={styles.slider}>
          <Slider
            style={styles.slider}
            value={this.props.stretchTime}
            minimumValue={300000}
            maximumValue={900000}
            step= {60000}
            onValueChange={(value) => this.handleSTimeSlide(value)} 
            onSlidingComplete={(value)=>this.handleCompleteSTime(value)} 
            />
          {/* <Text>Level: {this.props.level}</Text> */}
        </View>
      </View>
    )
  }
}


const SettingsNavigator = StackNavigator ({
  Setting: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: "Settings"
    }
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'flex-start'
  },
  slider: {
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 200
  }
});

const mapStateToProps = state => ({
  level: state.settings.level,
  pomodoroTime: state.settings.pomodoroTime,
  stretchTime: state.settings.stretchTime
})

export default connect(mapStateToProps)(SettingsScreen);