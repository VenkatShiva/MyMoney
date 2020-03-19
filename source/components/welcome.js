import React, {Component} from 'react';
import styles from '../styles/styles';
// import Welcome from './welcome';
// import Landing from './signUp';
// import Landing from './signIn';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from 'react-native';

export default class Authentication extends Component {
  render() {
    return (
      <View style={[styles.centerAlign,{justifyContent:"space-around",padding:15}]}>
          <View>
            <Text style={styles.welcomeheading}>Welcome to</Text>
            <Text style={[styles.welcomeheading, styles.specialFont ,{color:"green"}]}>My Money</Text>
            <Text style={[styles.welcomeheading, styles.newFontSize]}>&#8377; Track your money. Don't waste. &#8377;</Text>
          </View>
          <View style={styles.buttonContainer}>
                <View style={styles.signButton}>
                        <TouchableNativeFeedback
                            onPress={() => {
                                // this.props.navigator
                                this.props.navigation.navigate('signup');  
                            }}
                            background={TouchableNativeFeedback.Ripple( "white", false)}
                        >
                            <View>
                                <Text style={[styles.welcomeheading,styles.newFontSize,{padding: 8}]}>
                                    SignUp
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        
                    </View>
                    <View style={styles.signButton}>
                        <TouchableNativeFeedback
                            onPress={() => {
                              this.props.navigation.navigate('signin'); 
                            }}
                            background={TouchableNativeFeedback.Ripple( "white", false)}
                        >
                            <View>
                                <Text style={[styles.welcomeheading,styles.newFontSize,{padding: 8}]}>
                                    SignIn
                                </Text>
                            </View>
                        </TouchableNativeFeedback>
                        
                    </View>
          </View>
      </View>
    );
  }
}