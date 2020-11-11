import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation';
import {Provider} from 'react-redux';
import Store from './store/configureStore';

const App = () => {
  return (
    <Provider store={Store}>
      <StatusBar backgroundColor="#52B788" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
