import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChallengeScreen from './ChallengeScreen';
import HomeScreen from './HomeScreen';

const Navigation = (props) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Healthy Fitness Challenge',
          headerStyle: {
            backgroundColor: '#52B788',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Challenge" component={ChallengeScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
