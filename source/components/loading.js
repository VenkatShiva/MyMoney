import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.comp}>
          <Text style={styles.text}>Loading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color: "black",
    fontSize: 30,
  }
});
