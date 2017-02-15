/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  NativeModules,
  View
} from 'react-native';
// var {NativeModules}=require('react-native');
var rnToastAndroid = NativeModules.RNToastAndroid;

export default class app extends Component {

    constructor(props){  
    super(props);  


  }  

        _newNativeActivity(){
      rnToastAndroid.show("我的万能JS",  function (args) {
            alert(args)
        });
      }  




  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._newNativeActivity}>  
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </TouchableOpacity>  
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app', () => app);
