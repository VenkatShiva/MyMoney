import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Welcome extends Component {
  render() {
    return (
      <View >
          <Text style={styles.text}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontFamily: "LobsterTwo-Bold",
    color: "black",
    fontSize: 30,
  }
});
