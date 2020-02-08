import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <View >
            <Text style={styles.text}>Landing</Text>
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
