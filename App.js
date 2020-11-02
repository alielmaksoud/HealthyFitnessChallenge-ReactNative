import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#52B788" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
};

export default App;
