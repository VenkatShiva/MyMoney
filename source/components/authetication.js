import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './welcome';
import signUp from './signUp';
import signIn from './signIn';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName="welcome"
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: 'white' },
        }}
      >
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{
            title: "welcome",
          }
        }
        />
        <Stack.Screen
          name="signUp"
          component={signUp}
          options={{
            title: 'signUp',
          }}
        />
        <Stack.Screen
          name="signIn"
          component={signIn}
          options={{
            title: 'signIn',
          }}
        />
      </Stack.Navigator>
    );
}
