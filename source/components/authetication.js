import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './welcome';
import signUp from './signUp';
import signIn from './signIn';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName="signup"
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: '#F3F6FB' },
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
          name="signup"
          component={signUp}
          options={{
            title: 'signup',
          }}
        />
        <Stack.Screen
          name="signin"
          component={signIn}
          options={{
            title: 'signin',
          }}
        />
      </Stack.Navigator>
    );
}
