import React, { Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from './loading';
import Welcome from './welcome';
import Landing from './landing';


const Stack = createStackNavigator();

export default function MyStack() {
    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
    return (
      <Stack.Navigator
        initialRouteName="loading"
        headerMode="none"
        screenOptions={{
            gestureEnabled: true,
            cardStyle: { backgroundColor: 'transparent' },
        }}
        cardStyle ={{
            backgroundColor:"transparent"
        }}
      >
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{
            title: "loading",
            gestureDirection:"horizontal",
            transitionSpec: {
                open: config,
                close: config,
            }
          }
        }
        />
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            title: 'welcome',
            gestureDirection:"horizontal",
          }}
        />
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{
            title: 'landing',
            gestureDirection:"horizontal",
            cardStyleInterpolator:()=>({
                cardStyle:{backgroundColor:"white"}
            })
          }}
        />
      </Stack.Navigator>
    );
}