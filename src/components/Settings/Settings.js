import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LevelAvatar from '../LevelAvatar/LevelAvatar'

import tomato1 from '../../assets/tomato1.jpg'
import tomato2 from '../../assets/tomato2.jpg'
import tomato3 from '../../assets/tomato3.jpg'

import { Slider } from 'react-native-elements';
import { selectLevel, setPTime, setSTime, loadPTime, loadSTime } from '../../actions'

class Settings extends Component {
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
    let avatar;
    if(this.props.level === 1){
      avatar = 
        <LevelAvatar 
          avatar={tomato1} 
          level={this.props.level}
          caption='Cherry Tomato'
          description='You are just starting out, but your mind limber and body full of potentials!'
        />
    }
    else if(this.props.level === 2){
      avatar = 
      <LevelAvatar 
        avatar={tomato2} 
        level={this.props.level}
        caption='Juicy Tomato'
        description='You are riped just right, ready to stretch beyond the vines!'
      />
    }
    else if(this.props.level === 3){
      avatar = 
      <LevelAvatar 
        avatar={tomato3} 
        level={this.props.level}
        caption='Fighting Tomato'
        description='More flow, more flexibiliy and more strength in this level for our zesty fighting tomato.'
      />
    }

    return(
      <View style={styles.container}>
        <Text style={styles.headerMargin}>Pick your level</Text>
        {avatar}
        <View style={styles.slider}>
          <Slider
            style={styles.slider}
            value={this.props.level}
            minimumValue={1}
            maximumValue={3}
            step={1}
            onValueChange={(value) => this.handleLevelSlide(value)} 
            thumbTintColor="#FF6347"
            />
          {/* <Text>Level: {this.props.level}</Text> */}
        </View>

        <Text style={styles.itemMargin}>Set Pomodoro Time</Text>
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
            thumbTintColor="#FF6347" 
            />
          {/* <Text>Level: {this.props.level}</Text> */}
        </View>
        <Text style={styles.itemMargin}>Set Stretch Time</Text>
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
            thumbTintColor="#FF6347"
            />
          {/* <Text>Level: {this.props.level}</Text> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
  },
  slider: {
    alignItems: 'stretch',
    justifyContent: 'center',
    width: 200
  },
  headerMargin: {
    marginBottom: 20
  },
  itemMargin: {
    marginTop: 20
  }
});

const mapStateToProps = state => ({
  level: state.settings.level,
  pomodoroTime: state.settings.pomodoroTime,
  stretchTime: state.settings.stretchTime
})

export default connect(mapStateToProps)(Settings);