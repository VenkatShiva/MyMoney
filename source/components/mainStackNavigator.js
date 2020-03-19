import React, { Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from './loading';
import Authentication from './authetication';
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
          cardStyle: { backgroundColor: 'white' },
        }}
        // cardStyle ={{
        //     backgroundColor:"transparent"
        // }}
      >
        <Stack.Screen
          name="loading"
          component={Loading}
          options={{
            title: "loading",
            // transitionSpec: {
            //     open: config,
            //     close: config,
            // }
          }
        }
        />
        <Stack.Screen
          name="authentication"
          component={Authentication}
          options={{
            title: 'authentication',
          //   transitionSpec: {
          //     open: config,
          //     close: config,
          // }
          }}
        />
        <Stack.Screen
          name="landing"
          component={Landing}
          options={{
            title: 'landing',
            // cardStyleInterpolator:()=>({
            //     cardStyle:{backgroundColor:"white"}
            // })
          }}
        />
      </Stack.Navigator>
    );
}