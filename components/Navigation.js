import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeScreen from './ChallengeScreen';
import HomeScreen from './HomeScreen';
import ConfigChallengeScreen from './ConfigChallengeScreen';
import MyChallengeScreen from './MyChallengeScreen';

const Navigation = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#52B788',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Challenge"
        component={ChallengeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#52B788',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="ConfigChallengeScreen"
        component={ConfigChallengeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#52B788',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="MyChallengeScreen"
        component={MyChallengeScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#52B788',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
