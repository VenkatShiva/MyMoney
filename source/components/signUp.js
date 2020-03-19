import React, {Component} from 'react';
import styles from '../styles/styles';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

export default class Authentication extends Component {
  render() {
    return (
      <ScrollView style={[{padding:15}]} contentContainerStyle={styles.centerAlign}>
          <Text style={styles.welcomeheading}>SignUp</Text>
          <View style={{alignSelf:"flex-start",padding:10}}>
            <Text style={[styles.welcomeheading,styles.newFontSize,{ textAlign:"left"}]}>Your name</Text>
            <TextInput
              placeholder = 'name'
              placeholderTextColor = "#3a3a3a"
              keyboardType = "default"
              style={styles.inputFeild}
              // value={}
              // onChangeText={}
              // secureTextEntry={}
              blurOnSubmit = {true}
              // editable = {}
              maxLength={30}
              selectionColor = "#aac3e3"
              textContentType="username"
              onFocus = {()=>{
                  
              }}
              onBlur={()=>{}}
            ></TextInput>
          </View>
      </ScrollView>
    );
  }
}