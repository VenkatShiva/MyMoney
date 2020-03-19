import React, {Component} from 'react';
import styles from '../styles/styles';
import { createStackNavigator } from '@react-navigation/stack';
// import Welcome from './welcome';
// import Landing from './signUp';
// import Landing from './signIn';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Authentication extends Component {
  render() {
    return (
      <View >
          <Text style={styles.text}>Welcome</Text>
      </View>
    );
  }
}