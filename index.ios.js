import React, { Component } from 'react';
var Main = require('./app/components/Main');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';


//add styles
var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#111111'
  },
});
export default class reactNativeNotes extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute = {{
          title: 'Sample Notetaker',
          component: Main
        }}/>
    );
  }
}

AppRegistry.registerComponent('reactNativeNotes', () => reactNativeNotes);
