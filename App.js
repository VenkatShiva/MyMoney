/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './source/store/store';
import MainStackNAvigator from './source/components/mainStackNavigator';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';

const persistedStore = Store();
console.log("console-->",persistedStore);
class App extends Component {
  render (){
    return(<>
      <StatusBar barStyle="light-content" backgroundColor="#1EA531"/>
      {/* <LinearGradient colors={['#CEFBB2', '#3ec769']} style={styles.linearGradient}> */}
      {/* <ImageBackground source={require('./assets/images/bg.png')} style={{width: '100%', height: '100%'}}> */}
        <Provider store={persistedStore.store}>
        <PersistGate loading={null} persistor={persistedStore.persistor}>
          <NavigationContainer>
          <ImageBackground source={require('./assets/images/bg.png')} style={{width: '100%', height: '100%', flex:1}}>

            <MainStackNAvigator />
            {/* <SafeAreaView>
              <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <Text style={{fontFamily: "Alegreya-BoldItalic"}}>
                  MyMoney
                </Text>
              </ScrollView>
            </SafeAreaView> */}
          </ImageBackground>
          </NavigationContainer>
        </PersistGate>
        </Provider>
      {/* </ImageBackground> */}
      {/* </LinearGradient> */}
    </>)
  };
};

const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
  },
  scrollView: {
  },
});

export default App;
