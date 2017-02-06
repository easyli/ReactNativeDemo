
/**
 * Sample React Native App
 * https://github.com/easyli
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View
} from 'react-native';


const onPressMe = () =>{
   alert("this is ");
}

export default class AwesomeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={onPressMe}
          title="按钮"
          color="black"//文本的颜色(iOS)，或是按钮的背景色(Android)
          disabled//disable
        />
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
});

AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);
