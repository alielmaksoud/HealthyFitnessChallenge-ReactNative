import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';

const Navigation = (props) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="stackNavigator" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default Navigation;
